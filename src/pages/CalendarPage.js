import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "../css/Cal.css";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { ReactComponent as Challenge } from "../assets/chall.svg";
import { ReactComponent as Stat } from "../assets/stat.svg";
import { ReactComponent as User } from "../assets/user.svg";

import * as faceLandmarksDetection from "@tensorflow-models/face-landmarks-detection";
import * as tf from "@tensorflow/tfjs";
import "@mediapipe/face_mesh";

const CONSTRAINTS = { video: true };
const emotions = ["화남", "혐오", "두려움", "행복", "중립", "슬픔", "놀람"];

function CalendarPage() {
  const [value, onChange] = useState(new Date());
  const [emotion, setEmotion] = useState("");
  const videoRef = useRef(null);
  const modelRef = useRef(null);
  const emotionModelRef = useRef(null);
  const navigate = useNavigate();

  const navigateToStatPage = () => {
    navigate("/stat");
  };

  const navigateToMyPage = () => {
    navigate("/my");
  };

  const navigateToChallengePage = () => {
    navigate("/challenge");
  };

  const navigateToDiaryPage = () => {
    navigate("/diary");
  };
  useEffect(() => {
    const loadModels = async () => {
      const modelConfig = {
        runtime: "mediapipe",
        solutionPath: "https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh",
      };
      modelRef.current = await faceLandmarksDetection.createDetector(
        faceLandmarksDetection.SupportedModels.MediaPipeFaceMesh,
        modelConfig
      );

      // 수정: 모델 경로를 올바르게 지정합니다.
      emotionModelRef.current = await tf.loadLayersModel(
        "web/model/facemo.json"
      );
    };

    loadModels();
  }, []);

  useEffect(() => {
    const openCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia(CONSTRAINTS);
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          detectEmotion(); //detectEmotion 시도
        }
      } catch (error) {
        console.error("카메라 접근 에러:", error);
      }
    };

    openCamera();
  }, []);

  const detectEmotion = async () => {
    if (videoRef.current && modelRef.current && emotionModelRef.current) {
      const predictions = await modelRef.current.estimateFaces({
        input: videoRef.current,
      });

      if (predictions.length > 0) {
        const face = predictions[0];
        const annotations = face.annotations;

        // 특정 얼굴 영역의 특징점 추출 및 정규화
        const features = [
          "noseTip",
          "leftCheek",
          "rightCheek",
          "leftEyeLower1",
          "leftEyeUpper1",
          "rightEyeLower1",
          "rightEyeUpper1",
          "leftEyebrowLower", //"leftEyebrowUpper",
          "rightEyebrowLower", //"rightEyebrowUpper",
          "lipsLowerInner", //"lipsLowerOuter",
          "lipsUpperInner", //"lipsUpperOuter",
        ];

        let points = [];
        features.forEach((feature) => {
          annotations[feature].forEach((point) => {
            points.push(point.x);
            points.push(point.y);
          });
        });

        // 정규화를 위한 바운딩 박스 계산
        const boundingBox = face.boundingBox;
        const x1 = boundingBox.topLeft[0].x;
        const y1 = boundingBox.topLeft[0].y;
        const bWidth = boundingBox.bottomRight[0].x - x1;
        const bHeight = boundingBox.bottomRight[0].y - y1;

        // 정규화
        points = points.map((val, index) => {
          return index % 2 === 0 ? (val - x1) / bWidth : (val - y1) / bHeight;
        });

        console.log("여긴 오니");
        let emotionDetected = await predictEmotion(points);
        setEmotion(emotionDetected);
      }
    }
  };

  async function predictEmotion(points) {
    let result = tf.tidy(() => {
      // 수정: 1차원 배열인 points를 4차원 텐서로 변환합니다.
      // 1 x 6 x 2 x 2의 형태로 변경합니다.
      const xs = tf.tensor4d(points, [1, 6, 2, 2]);
      return emotionModelRef.current.predict(xs);
    });
    let prediction = await result.data();
    result.dispose();
    let id = prediction.indexOf(Math.max(...prediction));
    return emotions[id];
  }

  return (
    <div className="CalendarLayout">
      <div>
        <Challenge className="check" onClick={navigateToChallengePage} />
        <Stat className="stat" onClick={navigateToStatPage} />
        <User className="calUser" onClick={navigateToMyPage} />
      </div>
      <div className="CalendarBox">
        <Calendar
          onChange={onChange}
          value={value}
          onClickDay={navigateToDiaryPage}
        />
      </div>
      <div className="CameraBox">
        <video
          ref={videoRef}
          autoPlay
          playsInline
          className="CameraView"
        ></video>
        {emotion && (
          <div className="EmotionResult">Detected Emotion: {emotion}</div>
        )}
      </div>
    </div>
  );
}

export default CalendarPage;
