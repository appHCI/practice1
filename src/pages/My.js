import "../css/My.css";
import { ReactComponent as Back } from "../assets/back.svg";
import { ReactComponent as User } from "../assets/user.svg";
import { ReactComponent as Notice } from "../assets/notice.svg";
import { ReactComponent as NotiEllipse } from "../assets/notiEllipse.svg";
import { ReactComponent as NotiRect } from "../assets/notiRect.svg";
import { ReactComponent as Font } from "../assets/font.svg";
import { ReactComponent as Setting } from "../assets/setting.svg";
import { ReactComponent as Lock } from "../assets/lock.svg";
import { ReactComponent as Lang } from "../assets/lang.svg";
import { ReactComponent as Rate } from "../assets/rate.svg";
import { useNavigate } from "react-router-dom";

function My() {
  const navigate = useNavigate();

  return (
    <div className="MyLayout">
      <div>
        <Back className="back" onClick={() => navigate(-1)} />
        <div>
          <User className="user" />
          <div
            style={{
              left: 59,
              top: 130,
              position: "absolute",
              fontSize: 16,
              fontFamily: "Edu Favorit Hangul",
              fontWeight: "400",
            }}
          >
            TEAM CATCHMOOD
          </div>
          <div
            className="Line8"
            style={{
              width: 326,
              height: 0,
              left: 25,
              top: 170,
              position: "absolute",
              border: "0.70px #757575 solid",
            }}
          />
        </div>
        <div>
          <Notice className="notice" />
          <div
            style={{
              left: 59,
              top: 200,
              position: "absolute",
              fontSize: 16,
              fontFamily: "Edu Favorit Hangul",
              fontWeight: "400",
            }}
          >
            Diary Reminders
          </div>
          <NotiEllipse className="notiEllipse" />
          <NotiRect className="notiRect" />
        </div>
        <div>
          <Setting className="setting" />
          <div
            style={{
              left: 59,
              top: 240,
              position: "absolute",
              fontSize: 16,
              fontFamily: "Edu Favorit Hangul",
              fontWeight: "400",
            }}
          >
            Theme Settings
          </div>
        </div>
        <div>
          <Font className="font" />
          <div
            style={{
              left: 59,
              top: 280,
              position: "absolute",
              fontSize: 16,
              fontFamily: "Edu Favorit Hangul",
              fontWeight: "400",
            }}
          >
            Font Style
          </div>
          <div
            className="Line8"
            style={{
              width: 326,
              height: 0,
              left: 25,
              top: 320,
              position: "absolute",
              border: "0.70px #757575 solid",
            }}
          />
        </div>
        <div>
          <Lock className="lock" />
          <div
            style={{
              left: 59,
              top: 352,
              position: "absolute",
              fontSize: 16,
              fontFamily: "Edu Favorit Hangul",
              fontWeight: "400",
            }}
          >
            Screen Lock
          </div>
          <NotiEllipse className="screenEllipse" />
          <NotiRect className="screenRect" />
        </div>
        <div>
          <Lang className="lang" />
          <div
            style={{
              left: 59,
              top: 387,
              position: "absolute",
              fontSize: 16,
              fontFamily: "Edu Favorit Hangul",
              fontWeight: "400",
            }}
          >
            Language
          </div>
          <div
            style={{
              left: 290,
              top: 390,
              position: "absolute",
              fontSize: 13,
              fontFamily: "Edu Favorit Hangul",
              fontWeight: "400",
            }}
          >
            Korean
          </div>
          <div
            className="Line8"
            style={{
              width: 326,
              height: 0,
              left: 25,
              top: 430,
              position: "absolute",
              border: "0.70px #757575 solid",
            }}
          />
        </div>
        <Rate className="rate" />
        <div
          style={{
            left: 59,
            top: 447,
            position: "absolute",
            fontSize: 16,
            fontFamily: "Edu Favorit Hangul",
            fontWeight: "400",
          }}
        >
          Rate on App
        </div>
      </div>
    </div>
  );
}

export default My;
