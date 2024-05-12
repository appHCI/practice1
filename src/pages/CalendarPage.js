import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as Challenge } from "../assets/chall.svg";
import { ReactComponent as Stat } from "../assets/stat.svg";
import { ReactComponent as User } from "../assets/user.svg";
import "../css/Cal.css";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const CONSTRAINTS = { video: true };

function CalendarPage() {
  const [value, onChange] = useState(new Date()); // 초기값은 현재 날짜
  const videoRef = useRef(null); // HTMLVideoElement 타입 주석 제거, React에서는 필요 없음
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

  const navigateToCameraPage = () => {
    navigate("/face");
  };

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

      <div className="CameraButton">
        <button className="camera" onClick={navigateToCameraPage}>
          camera
        </button>
      </div>
    </div>
  );
}

export default CalendarPage;
