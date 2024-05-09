import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import "../css/Diary.css";
import { ReactComponent as Back } from "../assets/back.svg";
import { ReactComponent as Middle } from "../assets/middle.svg";

function Diary() {
  const navigate = useNavigate();

  return (
    <div className="diaryLayout">
      <div>
        <Back className="diaryBack" onClick={() => navigate(-1)} />
      </div>
      <div>
        <Middle className="diaryMood" />
      </div>
      <div className="date">Sunday, April 7, 2024</div>
      <textarea className="diaryText" />
    </div>
  );
}

export default Diary;
