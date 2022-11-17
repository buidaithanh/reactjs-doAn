import React from "react";
import { Link } from "react-router-dom";
import '../App.scss'
function MenuContainer({ link, icon, active }) {
  return (
    <li className={active}>
      <Link to={link} >
        <span className="icon">{icon}</span>
      </Link>
    </li>
  );
}

export default MenuContainer;
