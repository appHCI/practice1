import { Link } from "react-router-dom";
import React from "react";
import "./css/Menu.css";
import { ReactComponent as Star } from "./assets/star.svg";
import { ReactComponent as Ellipse } from "./assets/ellipse.svg";
import { ReactComponent as Polygon } from "./assets/polygon.svg";
import { ReactComponent as Union } from "./assets/union.svg";
import { ReactComponent as Vector } from "./assets/vector.svg";

function Menu() {
  return (
    <div className="MenuLayout">
      <div className="logo">
        <Star className="iconmargin" width="40" height="40"></Star>
        <Ellipse className="iconmargin" width="40" height="40"></Ellipse>
        <Polygon className="iconmargin" width="40" height="40"></Polygon>
        <Union className="iconmargin" width="40" height="40"></Union>
        <Vector className="iconmargin" width="40" height="40"></Vector>
      </div>
      <div className="Menus">
        <Link to="/calendar">Calendar</Link>
        <br />
        <Link to="/my">My</Link>
        <br />
        <Link to="/stat">Stat</Link>
        <br />
        <Link to="/challenge">Challenge</Link>
      </div>
    </div>
  );
}

export default Menu;
