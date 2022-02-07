import React from "react";
import "./premFoodsLogo.css";
import Logo from "../../../public/icons/logo.svg";
export default function PremFoodsLogo() {
  return (
    <div className="premFood">
      <img src={Logo} alt="svgLogo" className="headIcon" />
    </div>
  );
}
