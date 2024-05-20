import {
  BrowserRouter,
  Route,
  Routes,
  useNavigate,
  useLocation,
} from "react-router-dom";
import { useEffect, useState } from "react";

import "../css/Diary.css";
import { ReactComponent as Back } from "../assets/back.svg";
import { ReactComponent as DCheck } from "../assets/dcheck.svg";

import { ReactComponent as Angry } from "../assets/angry.svg";
import { ReactComponent as Middle } from "../assets/middle.svg";
import { ReactComponent as Surprised } from "../assets/surprised.svg";
import { ReactComponent as Happy } from "../assets/happy.svg";
import { ReactComponent as Sad } from "../assets/sad.svg";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function Diary() {
  const navigate = useNavigate();
  const query = useQuery();
  const emotion = decodeURIComponent(query.get("emotion")); // URL에서 emotion 쿼리 파라미터 값을 가져옵니다.

  const navigateToCalendarPage = () => {
    navigate("/calendar");
  };

  return (
    <div className="diaryLayout">
      <div>
        <Back className="diaryBack" onClick={() => navigate(-1)} />
      </div>
      <div>
        {emotion === "neutral" ? <Middle className="diaryMood" /> : null}
        {emotion === "happy" ? <Happy className="diaryMood" /> : null}
        {emotion === "sad" ? <Sad className="diaryMood" /> : null}
        {emotion === "angry" ? <Angry className="diaryMood" /> : null}
        {/* 이거 감정뭘로할지 정해야함  */}
        {emotion === "surprised" ? <Surprised className="diaryMood" /> : null}
      </div>
      <div className="date">
        Thursday, May 23, 2024
        <br /> mood: {emotion}
      </div>
      <textarea className="diaryText" />
      <div>
        <DCheck className="diarySave" onClick={navigateToCalendarPage} />
      </div>
    </div>
  );
}

export default Diary;
