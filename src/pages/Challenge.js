import { ReactComponent as Back } from "../assets/back.svg";
import { ReactComponent as Angry } from "../assets/angry.svg";
import { ReactComponent as Middle } from "../assets/middle.svg";
import { ReactComponent as Surprised } from "../assets/surprised.svg";
import { ReactComponent as Happy } from "../assets/happy.svg";
import { ReactComponent as Sad } from "../assets/sad.svg";
import { useNavigate } from "react-router-dom";

import "../css/Challenge.css";

function Challenge() {
  const navigate = useNavigate();

  return (
    <div className="ChallLayout">
      <div>
        <div
          className="Rectangle5"
          style={{
            width: 327,
            height: 203,
            left: 24,
            top: 145,
            position: "absolute",
            background: "rgba(255, 255, 255, 0.40)",
            boxShadow: "0px 4px 7px 3px rgba(79, 61, 61, 0.10)",
            borderRadius: 20,
          }}
        />

        <div
          className="Rectangle15"
          style={{
            width: 327,
            height: 203,
            left: 24,
            top: 375,
            position: "absolute",
            background: "rgba(255, 255, 255, 0.40)",
            boxShadow: "0px 4px 7px 3px rgba(79, 61, 61, 0.10)",
            borderRadius: 20,
          }}
        >
          <div>
            <Middle className="chMiddle" />
            <Happy className="chHappy" />
          </div>
          <div>
            <Angry className="chAngry" />
          </div>
          <div>
            <Surprised className="chNormal" />
            <Sad className="chSad" />
          </div>
        </div>
        <div
          className="Rectangle16"
          style={{
            width: 327,
            height: 203,
            left: 24,
            top: 605,
            position: "absolute",
            background: "rgba(255, 255, 255, 0.40)",
            boxShadow: "0px 4px 7px 3px rgba(79, 61, 61, 0.10)",
            borderRadius: 20,
          }}
        />
        <div
          style={{
            width: 83,
            height: 91,
            left: 246,
            top: 257,
            position: "absolute",
          }}
        >
          <Happy className="happy" />
        </div>
      </div>

      <div
        style={{
          width: 85,
          height: 85,
          left: 244,
          top: 718,
          position: "absolute",
        }}
      >
        <Middle className="middle" />
      </div>
      <Back className="back" onClick={() => navigate(-1)} />
      <div
        className="Ongoing"
        style={{
          left: 24,
          top: 93,
          position: "absolute",
          color: "black",
          fontSize: 14,
          fontFamily: "Edu Favorit Hangul Lining",
          fontWeight: "400",
          wordWrap: "break-word",
        }}
      >
        Ongoing
      </div>
      <div
        className="Record3SmilesEveryDay"
        style={{
          left: 48,
          top: -50,
          position: "absolute",
          color: "black",
          fontSize: 20,
          fontFamily: "Edu Favorit Hangul",
          fontWeight: "400",
          lineHeight: 24,
          wordWrap: "break-word",
        }}
      >
        Record 3 smiles every day
      </div>
      <div
        className="TryDifferentFacialExpressions"
        style={{
          left: 48,
          top: 175,
          position: "absolute",
          color: "black",
          fontSize: 20,
          fontFamily: "Edu Favorit Hangul",
          fontWeight: "400",
          lineHeight: 24,
          wordWrap: "break-word",
        }}
      >
        Try different facial expressions
      </div>
      <div
        className="TryDifferentFacialExpressions"
        style={{
          left: 48,
          top: 410,
          position: "absolute",
          color: "black",
          fontSize: 20,
          fontFamily: "Edu Favorit Hangul",
          fontWeight: "400",
          lineHeight: 24,
          wordWrap: "break-word",
        }}
      >
        Try different facial expressions
      </div>
      <div
        className="4757"
        style={{
          left: 48,
          top: 209,
          position: "absolute",
          color: "rgba(79, 61, 61, 0.60)",
          fontSize: 12,
          fontFamily: "Edu Favorit Hangul",
          fontWeight: "400",
          wordWrap: "break-word",
        }}
      >
        2024.4.7 ~ 5.7
      </div>
      <div
        className="4757"
        style={{
          left: 48,
          top: 439,
          position: "absolute",
          color: "rgba(79, 61, 61, 0.60)",
          fontSize: 12,
          fontFamily: "Edu Favorit Hangul",
          fontWeight: "400",
          wordWrap: "break-word",
        }}
      >
        2024.4.7 ~ 5.7
      </div>
      <div
        className="4757"
        style={{
          left: 48,
          top: 680,
          position: "absolute",
          color: "rgba(79, 61, 61, 0.60)",
          fontSize: 12,
          fontFamily: "Edu Favorit Hangul",
          fontWeight: "400",
          wordWrap: "break-word",
        }}
      >
        2024.4.7 ~ 5.7
      </div>
      <div
        className="Frame2608145"
        style={{
          width: 40,
          height: 20,
          paddingLeft: 30,
          paddingRight: 30,
          paddingTop: 10,
          paddingBottom: 10,
          left: 48,
          top: 290,
          position: "absolute",
          background: "#EEEEEE",
          borderRadius: 50,
          justifyContent: "center",
          alignItems: "center",
          gap: 30,
          display: "inline-flex",
        }}
      >
        Done
      </div>
      <div
        className="Frame2608146"
        style={{
          width: 40,
          height: 20,
          paddingLeft: 30,
          paddingRight: 30,
          paddingTop: 10,
          paddingBottom: 10,
          left: 48,
          top: 520,
          position: "absolute",
          background: "#FFD539",
          borderRadius: 50,
          justifyContent: "center",
          alignItems: "center",
          gap: 30,
          display: "inline-flex",
        }}
      >
        Done
      </div>
      <div
        className="Frame2608147"
        style={{
          width: 40,
          height: 20,
          paddingLeft: 30,
          paddingRight: 30,
          paddingTop: 10,
          paddingBottom: 10,
          left: 48,
          top: 750,
          position: "absolute",
          background: "#EEEEEE",
          borderRadius: 50,
          justifyContent: "center",
          alignItems: "center",
          gap: 30,
          display: "inline-flex",
        }}
      >
        Done
      </div>
    </div>
  );
}

export default Challenge;
