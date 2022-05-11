import React, { useEffect } from "react";
import PremFoodsLogo from "../PremFoodsLogo/PremFoodsLogo";
import List from "../../../public/images/List.png";
import Phone from "../../../public/icons/phone1.svg";
import "./header.css";
import "../../../public/style/style.css";
import { Link } from "react-router-dom";
import { DropDown2 } from "../../component/DropDown/DropDown2.js";

export const Header = ({ setLang, lang, languages }) => {
  return (
    <div className="header">
      <div className={"content headerFlexing"}>
        
        <div className="iconLogo">
          <PremFoodsLogo />
        </div>
        <div class="ListIcon">
          <img src={List} />
        </div>

        {/*{menui list}*/}
        <div className="menuList">
          <ul className="menuListLies">
            <li>
              <Link to={"/about"}>{languages["about"]}</Link>
            </li>
            <li>
              <Link to={"/products"}>{languages["products"]}</Link>
            </li>
            <li>
              <Link to={"/careers"}>{languages["careers"]}</Link>
            </li>
            <li>
              <Link to={"/partners"}>{languages["partners"]}</Link>
            </li>
            <li>
              <Link to={"/team"}>{languages["team"]}</Link>
            </li>
          </ul>
        </div>
        {/*erkrord ikonkeq@*/}
        <div className="secondIcons">
          <div>
            <DropDown2 setLang={setLang} lang={lang} />
          </div>
          <div className={"vertic"} />
          <img src={Phone} alt="svgPhone" />
        </div>
      </div>
    </div>
  );
};
