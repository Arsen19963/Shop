import React from "react";
import "./premFoodsLogo.css";
import Logo from "../../../public/icons/logo.svg";
import {Link} from "react-router-dom";
export default function PremFoodsLogo() {
  return (
    <div className="premFood">
        <Link to={'/'}>
             <img src={Logo} alt="svgLogo" className="headIcon" />
        </Link>
    </div>
  );
}
