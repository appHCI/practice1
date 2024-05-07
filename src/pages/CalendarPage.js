import React, { useState, useRef } from "react";
import "../css/Cal.css";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
// Link import가 주석 처리되어 있습니다. 필요 없는 경우 제거해도 됩니다.
// import { Link } from "react-router-dom";

const CONSTRAINTS = { video: true };

function CalendarPage() {
  const [value, onChange] = useState(new Date()); // 초기값은 현재 날짜
  const videoRef = useRef(null); // HTMLVideoElement 타입 주석 제거, React에서는 필요 없음

  const openCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia(CONSTRAINTS);
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    } catch (error) {
      console.error("카메라 접근 에러:", error);
    }
  };

  return (
    <div className="CalendarLayout">
      <header>Menus</header>
      <div className="CalendarBox">
        <Calendar onChange={onChange} value={value} />
      </div>
      <div className="CameraButton">
        <button className="camera" onClick={openCamera}>
          Camera
          {/* <Link to="/camera">camera</Link> */}
        </button>
      </div>
      <div className="CameraBox">
        {/* autoPlay 속성을 추가하여 카메라 접근이 허용되었을 때 바로 재생되도록 설정 */}
        <video ref={videoRef} autoPlay playsInline className="CameraView"></video>
      </div>
    </div>
  );
}

export default CalendarPage;
