import { redirect } from "react-router-dom";
import { ReactComponent as Cal } from "../assets/cal.svg";
import { ReactComponent as User } from "../assets/user.svg";
import { ReactComponent as Angry } from "../assets/angry.svg";
import { ReactComponent as Middle } from "../assets/middle.svg";
import { ReactComponent as Surprised } from "../assets/surprised.svg";
import { ReactComponent as Happy } from "../assets/happy.svg";
import { ReactComponent as Sad } from "../assets/sad.svg";
import "../css/Stat.css";
import { useNavigate } from "react-router-dom";

function Stat() {
  const navigate = useNavigate();

  const navigateToCalenadar = () => {
    navigate("/calendar");
  };

  const navigateToMyPage = () => {
    navigate("/my");
  };

  return (
    <div className="StatLayout">
      <div
        className="Rectangle6"
        style={{
          width: 327,
          height: 213,
          left: 24,
          top: 403,
          position: "absolute",
          background: "rgba(255, 255, 255, 0.40)",
          boxShadow: "0px 4px 7px 3px rgba(79, 61, 61, 0.10)",
          borderRadius: 20,
        }}
      />
      <div
        className="Rectangle5"
        style={{
          width: 327,
          height: 203,
          left: 24,
          top: 175,
          position: "absolute",
          background: "rgba(255, 255, 255, 0.40)",
          boxShadow: "0px 4px 7px 3px rgba(79, 61, 61, 0.10)",
          borderRadius: 20,
        }}
      />
      <div
        className="Rectangle4"
        style={{
          width: 340,
          height: 40,
          left: 12,
          top: 117,
          position: "absolute",
          borderRadius: 90,
        }}
      ></div>
      <div
        className="MoodFlow"
        style={{
          left: 36,
          top: 197,
          position: "absolute",
          color: "black",
          fontSize: 14,
          fontFamily: "Edu Favorit Hangul",
          fontWeight: "400",
          wordWrap: "break-word",
        }}
      >
        Mood Flow
      </div>
      <div
        className="MoodBar"
        style={{
          left: 36,
          top: 421,
          position: "absolute",
          color: "black",
          fontSize: 14,
          fontFamily: "Edu Favorit Hangul",
          fontWeight: "400",
          wordWrap: "break-word",
        }}
      >
        Mood Bar
      </div>
      <div
        className="1"
        style={{
          width: 19,
          height: 18,
          left: 67,
          top: 341,
          position: "absolute",
          color: "black",
          fontSize: 12,
          fontFamily: "Edu Favorit Hangul",
          fontWeight: "400",
          wordWrap: "break-word",
        }}
      >
        5/1
      </div>
      <div
        className="6"
        style={{
          width: 25,
          height: 18,
          left: 107,
          top: 341,
          position: "absolute",
          color: "black",
          fontSize: 12,
          fontFamily: "Edu Favorit Hangul",
          fontWeight: "400",
          wordWrap: "break-word",
        }}
      >
        5/4
      </div>
      <div
        className="11"
        style={{
          width: 25,
          height: 18,
          left: 147,
          top: 341,
          position: "absolute",
          color: "black",
          fontSize: 12,
          fontFamily: "Edu Favorit Hangul",
          fontWeight: "400",
          wordWrap: "break-word",
        }}
      >
        5/9
      </div>
      <div
        className="16"
        style={{
          width: 29,
          height: 18,
          left: 188,
          top: 341,
          position: "absolute",
          color: "black",
          fontSize: 12,
          fontFamily: "Edu Favorit Hangul",
          fontWeight: "400",
          wordWrap: "break-word",
        }}
      >
        5/11
      </div>
      <div
        className="21"
        style={{
          width: 29,
          height: 18,
          left: 229,
          top: 341,
          position: "absolute",
          color: "black",
          fontSize: 12,
          fontFamily: "Edu Favorit Hangul",
          fontWeight: "400",
          wordWrap: "break-word",
        }}
      >
        5/16
      </div>
      <div
        className="26"
        style={{
          width: 29,
          height: 18,
          left: 270,
          top: 341,
          position: "absolute",
          color: "black",
          fontSize: 12,
          fontFamily: "Edu Favorit Hangul",
          fontWeight: "400",
          wordWrap: "break-word",
        }}
      >
        5/21
      </div>
      <div
        className="1"
        style={{
          width: 29,
          height: 18,
          left: 314,
          top: 341,
          position: "absolute",
          color: "black",
          fontSize: 12,
          fontFamily: "Edu Favorit Hangul",
          fontWeight: "400",
          wordWrap: "break-word",
        }}
      >
        5/23
      </div>
      <div
        className="Line1"
        style={{
          width: 95.01,
          height: 0,
          left: 77,
          top: 240,
          position: "absolute",
          transform: "rotate(90deg)",
          transformOrigin: "0 0",
          border: "1px #A8A8A8 solid",
        }}
      ></div>
      <div
        className="Line2"
        style={{
          width: 95.01,
          height: 0,
          left: 118,
          top: 240,
          position: "absolute",
          transform: "rotate(90deg)",
          transformOrigin: "0 0",
          border: "1px #A8A8A8 solid",
        }}
      ></div>
      <div
        className="Line3"
        style={{
          width: 95.01,
          height: 0,
          left: 159,
          top: 240,
          position: "absolute",
          transform: "rotate(90deg)",
          transformOrigin: "0 0",
          border: "1px #A8A8A8 solid",
        }}
      ></div>
      <div
        className="Line4"
        style={{
          width: 95.01,
          height: 0,
          left: 200,
          top: 240,
          position: "absolute",
          transform: "rotate(90deg)",
          transformOrigin: "0 0",
          border: "1px #A8A8A8 solid",
        }}
      ></div>
      <div
        className="Line5"
        style={{
          width: 95.01,
          height: 0,
          left: 241,
          top: 240,
          position: "absolute",
          transform: "rotate(90deg)",
          transformOrigin: "0 0",
          border: "1px #A8A8A8 solid",
        }}
      ></div>
      <div
        className="Line6"
        style={{
          width: 95.01,
          height: 0,
          left: 282,
          top: 240,
          position: "absolute",
          transform: "rotate(90deg)",
          transformOrigin: "0 0",
          border: "1px #A8A8A8 solid",
        }}
      ></div>
      <div
        className="Line7"
        style={{
          width: 95.01,
          height: 0,
          left: 323,
          top: 239,
          position: "absolute",
          transform: "rotate(90deg)",
          transformOrigin: "0 0",
          border: "1px #A8A8A8 solid",
        }}
      ></div>
      <div
        className="Ellipse1"
        style={{
          width: 13,
          height: 13,
          left: 39,
          top: 282,
          position: "absolute",
          background:
            "linear-gradient(0deg, #E8E5A2 0%, #E8E5A2 100%), linear-gradient(0deg, #E8E5A2 0%, #E8E5A2 100%), linear-gradient(0deg, #EF44A3 0%, #EF44A3 100%)",
          borderRadius: 9999,
        }}
      />
      <div
        className="Ellipse3"
        style={{
          width: 13,
          height: 13,
          left: 39,
          top: 302,
          position: "absolute",
          background:
            "linear-gradient(0deg, #E8E5A2 0%, #E8E5A2 100%), linear-gradient(0deg, #E8E5A2 0%, #E8E5A2 100%), linear-gradient(0deg, #FFD539 0%, #FFD539 100%)",
          borderRadius: 9999,
        }}
      />
      <div
        className="Ellipse4"
        style={{
          width: 13,
          height: 13,
          left: 39,
          top: 322,
          position: "absolute",
          background:
            "linear-gradient(0deg, #E8E5A2 0%, #E8E5A2 100%), linear-gradient(0deg, #E8E5A2 0%, #E8E5A2 100%), linear-gradient(0deg, #77BDFE 0%, #77BDFE 100%)",
          borderRadius: 9999,
        }}
      />
      <div
        className="Ellipse5"
        style={{
          width: 13,
          height: 13,
          left: 39,
          top: 262,
          position: "absolute",
          background:
            "linear-gradient(0deg, #E8E5A2 0%, #E8E5A2 100%), linear-gradient(0deg, #E8E5A2 0%, #E8E5A2 100%), linear-gradient(0deg, #4C9E5D 0%, #4C9E5D 100%)",
          borderRadius: 9999,
        }}
      />
      <div
        className="Ellipse2"
        style={{
          width: 13,
          height: 13,
          left: 39,
          top: 241,
          position: "absolute",
          background:
            "linear-gradient(0deg, #E8E5A2 0%, #E8E5A2 100%), linear-gradient(0deg, #E8E5A2 0%, #E8E5A2 100%), linear-gradient(0deg, #FD6F70 0%, #FD6F70 100%)",
          borderRadius: 9999,
        }}
      />
      <div
        className="Rectangle15"
        style={{
          width: 60,
          height: 31,
          left: 278,
          top: 558,
          position: "absolute",
          background: "#AED8FF",
        }}
      />
      <div
        className="Rectangle16"
        style={{
          width: 30,
          height: 31,
          left: 248,
          top: 558,
          position: "absolute",
          background: "#FFE688",
        }}
      />
      <div
        className="Rectangle17"
        style={{
          width: 120,
          height: 31,
          left: 128,
          top: 558,
          position: "absolute",
          background: "#FFC7E6",
        }}
      />
      <div
        className="Rectangle18"
        style={{
          width: 60,
          height: 31,
          left: 68,
          top: 558,
          position: "absolute",
          background: "#D5E4BE",
        }}
      />
      <div
        className="Rectangle19"
        style={{
          width: 30,
          height: 31,
          left: 38,
          top: 558,
          position: "absolute",
          background: "#FFB7B7",
        }}
      />
      <div
        className="Rectangle8"
        style={{
          width: 45,
          height: 18,
          left: 104,
          top: 523,
          position: "absolute",
          background: "#F0F0F0",
          borderRadius: 20,
        }}
      />
      <div
        style={{
          left: 117,
          top: 526,
          position: "absolute",
          color: "black",
          fontSize: 10,
          fontFamily: "Edu Favorit Hangul",
          fontWeight: "400",
          wordWrap: "break-word",
        }}
      >
        20%
      </div>
      <div
        className="Rectangle9"
        style={{
          width: 45,
          height: 18,
          left: 42,
          top: 523,
          position: "absolute",
          background: "#F0F0F0",
          borderRadius: 20,
        }}
      />
      <div
        style={{
          left: 55,
          top: 526,
          position: "absolute",
          color: "black",
          fontSize: 10,
          fontFamily: "Edu Favorit Hangul",
          fontWeight: "400",
          wordWrap: "break-word",
        }}
      >
        10%
      </div>
      <div
        className="Rectangle10"
        style={{
          width: 45,
          height: 18,
          left: 166,
          top: 523,
          position: "absolute",
          background: "#FFC7E6",
          borderRadius: 20,
        }}
      />
      <div
        style={{
          left: 178,
          top: 526,
          position: "absolute",
          color: "black",
          fontSize: 10,
          fontFamily: "Edu Favorit Hangul",
          fontWeight: "400",
          wordWrap: "break-word",
        }}
      >
        40%
      </div>
      <div
        className="Rectangle11"
        style={{
          width: 45,
          height: 18,
          left: 227,
          top: 523,
          position: "absolute",
          background: "#F0F0F0",
          borderRadius: 20,
        }}
      />
      <div
        style={{
          left: 240,
          top: 526,
          position: "absolute",
          color: "black",
          fontSize: 10,
          fontFamily: "Edu Favorit Hangul",
          fontWeight: "400",
          wordWrap: "break-word",
        }}
      >
        10%
      </div>
      <div
        className="Rectangle12"
        style={{
          width: 45,
          height: 18,
          left: 285,
          top: 523,
          position: "absolute",
          background: "#F0F0F0",
          borderRadius: 20,
        }}
      />
      <div
        style={{
          left: 297,
          top: 526,
          position: "absolute",
          color: "black",
          fontSize: 10,
          fontFamily: "Edu Favorit Hangul",
          fontWeight: "400",
          wordWrap: "break-word",
        }}
      >
        20%
      </div>
      <div
        style={{
          left: 29,
          top: 456,
          position: "absolute",
        }}
      >
        <Angry />
      </div>
      <div
        style={{
          left: 105,
          top: 471,
          position: "absolute",
        }}
      >
        <Middle />
      </div>
      <div
        style={{
          left: 166,
          top: 470,
          position: "absolute",
        }}
      >
        <Surprised />
      </div>
      <div
        style={{
          left: 229,
          top: 467,
          position: "absolute",
        }}
      >
        <Happy />
      </div>
      <div
        style={{
          left: 288,
          top: 469,
          position: "absolute",
        }}
      >
        <Sad />
      </div>
      <div
        className="April2024"
        style={{
          left: 152,
          top: 111,
          position: "absolute",
          color: "black",
          fontSize: 14,
          fontFamily: "Edu Favorit Hangul Lining",
          fontWeight: "400",
          wordWrap: "break-word",
        }}
      >
        May, 2024
      </div>

      <div
        className="Ellipse25"
        style={{
          width: 3,
          height: 3,
          left: 76,
          top: 253,
          position: "absolute",
          background: "#4F3D3D",
          borderRadius: 9999,
        }}
      />
      <div
        className="Ellipse26"
        style={{
          width: 3,
          height: 3,
          left: 97,
          top: 313,
          position: "absolute",
          background: "#4F3D3D",
          borderRadius: 9999,
        }}
      />
      <div
        className="Ellipse27"
        style={{
          width: 3,
          height: 3,
          left: 117,
          top: 253,
          position: "absolute",
          background: "#4F3D3D",
          borderRadius: 9999,
        }}
      />
      <div
        className="Ellipse28"
        style={{
          width: 3,
          height: 3,
          left: 129,
          top: 253,
          position: "absolute",
          background: "#4F3D3D",
          borderRadius: 9999,
        }}
      />
      <div
        className="Ellipse31"
        style={{
          width: 3,
          height: 3,
          left: 155,
          top: 253,
          position: "absolute",
          background: "#4F3D3D",
          borderRadius: 9999,
        }}
      />
      <div
        className="Ellipse32"
        style={{
          width: 3,
          height: 3,
          left: 155,
          top: 253,
          position: "absolute",
          background: "#4F3D3D",
          borderRadius: 9999,
        }}
      />
      <div
        className="Ellipse33"
        style={{
          width: 3,
          height: 3,
          left: 165,
          top: 253,
          position: "absolute",
          background: "#4F3D3D",
          borderRadius: 9999,
        }}
      />
      <div
        className="Ellipse34"
        style={{
          width: 3,
          height: 3,
          left: 206,
          top: 322,
          position: "absolute",
          background: "#4F3D3D",
          borderRadius: 9999,
        }}
      />
      <div
        className="Ellipse35"
        style={{
          width: 3,
          height: 3,
          left: 217,
          top: 303,
          position: "absolute",
          background: "#4F3D3D",
          borderRadius: 9999,
        }}
      />
      <div
        className="Ellipse36"
        style={{
          width: 3,
          height: 3,
          left: 226,
          top: 269,
          position: "absolute",
          background: "#4F3D3D",
          borderRadius: 9999,
        }}
      />
      <div
        className="Ellipse37"
        style={{
          width: 3,
          height: 3,
          left: 254,
          top: 326,
          position: "absolute",
          background: "#4F3D3D",
          borderRadius: 9999,
        }}
      />
      <div
        className="Ellipse38"
        style={{
          width: 3,
          height: 3,
          left: 265,
          top: 326,
          position: "absolute",
          background: "#4F3D3D",
          borderRadius: 9999,
        }}
      />
      <div
        className="Ellipse39"
        style={{
          width: 3,
          height: 3,
          left: 267,
          top: 313,
          position: "absolute",
          background: "#4F3D3D",
          borderRadius: 9999,
        }}
      />
      <div
        className="Ellipse40"
        style={{
          width: 3,
          height: 3,
          left: 290,
          top: 273,
          position: "absolute",
          background: "#4F3D3D",
          borderRadius: 9999,
        }}
      />
      <div
        className="Ellipse41"
        style={{
          width: 3,
          height: 3,
          left: 299,
          top: 306,
          position: "absolute",
          background: "#4F3D3D",
          borderRadius: 9999,
        }}
      />
      <div
        className="Ellipse42"
        style={{
          width: 3,
          height: 3,
          left: 310,
          top: 299,
          position: "absolute",
          background: "#4F3D3D",
          borderRadius: 9999,
        }}
      />
      <div
        className="Ellipse43"
        style={{
          width: 3,
          height: 3,
          left: 317,
          top: 246,
          position: "absolute",
          background: "#4F3D3D",
          borderRadius: 9999,
        }}
      />
      <div
        className="Ellipse29"
        style={{
          width: 3,
          height: 3,
          left: 137,
          top: 313,
          position: "absolute",
          background: "#4F3D3D",
          borderRadius: 9999,
        }}
      />
      <div
        className="Ellipse30"
        style={{
          width: 3,
          height: 3,
          left: 146,
          top: 293,
          position: "absolute",
          background: "#4F3D3D",
          borderRadius: 9999,
        }}
      />
      <Cal className="cal" onClick={navigateToCalenadar} />
      <User className="sUser" onClick={navigateToMyPage} />
    </div>
  );
}

export default Stat;
