import React, { useState } from "react";
import PremFoodsLogo from "../PremFoodsLogo/PremFoodsLogo";
import Global from "../../../public/icons/global1.svg";
import Phone from "../../../public/icons/phone1.svg";
import './header.css'
import "../../../public/style/style.css";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className="header">
      <div className={"content headerFlexing"}>
        <PremFoodsLogo />
        {/*{menui list}*/}

        <div className="menuList">
          <ul className="menuListLies">
            <li>
              <Link to={"/about"}>About</Link>
            </li>
            <li>
              <Link to={"/catalogue"}>catalogue</Link>
            </li>
            <li>
              <Link to={"/careers"}>careers</Link>
            </li>
            <li>
              <Link to={"/partners"}>partners</Link>
            </li>
            <li>
              <Link to={"/team"}>team</Link>
            </li>
          </ul>
        </div>

        {/*erkrord ikonkeq@*/}
        <div className="secondIcons">
          <img src={Global} alt="svgGlobal" />
          <div className={"vertic"} />
          <img src={Phone} alt="svgPhone" />
        </div>
      </div>
    </div>
  );
};
