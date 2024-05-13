import { Link } from "react-router-dom";
import React from "react";
import { useNavigate } from "react-router-dom";

import "./css/Menu.css";
import { ReactComponent as Star } from "./assets/star.svg";
import { ReactComponent as Ellipse } from "./assets/ellipse.svg";
import { ReactComponent as Polygon } from "./assets/polygon.svg";
import { ReactComponent as Union } from "./assets/union.svg";
import { ReactComponent as Vector } from "./assets/vector.svg";

function Menu() {
  const navigate = useNavigate();

  const navigateToCalenadar = () => {
    navigate("/calendar");
  };

  return (
    <div className="MenuLayout">
      <div className="logo">
        <Star className="iconmargin" width="40" height="40"></Star>
        <Ellipse className="iconmargin" width="40" height="40"></Ellipse>
        <Polygon className="iconmargin" width="40" height="40"></Polygon>
        <Union className="iconmargin" width="40" height="40"></Union>
        <Vector className="iconmargin" width="40" height="40"></Vector>
      </div>
      <div>
        <button className="start" onClick={navigateToCalenadar}>
          Start
        </button>
      </div>
    </div>
  );
}

export default Menu;
