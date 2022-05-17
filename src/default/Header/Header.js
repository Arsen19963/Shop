import React, { useEffect, useState, useRef } from "react";
import "../../../public/style/style.css";
import "./header.css";
import PremFoodsLogo from "../PremFoodsLogo/PremFoodsLogo";
import List from "../../../public/images/List.png";
import Phone from "../../../public/icons/phone1.svg";
import Close from "../../../public/icons/close.png";
import { Link } from "react-router-dom";
import { DropDown2 } from "../../component/DropDown/DropDown2.js";
import { useOnClickOutside } from "../../component/useClickOutside/useClickOutside";
export const Header = ({ setLang, lang, languages }) => {
  // const handleClick = ()=>{

  // }
  // const ref = useRef();

  // useOnClickOutside(ref, setIsOpen(false));
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="header">
      <div className={"content headerFlexing"}>
        <div className="MainIcons" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <div className="CloseIcon">
              <img src={Close} />
            </div>
          ) : (
            <div className="ListIcon">
              <img src={List} />
            </div>
          )}
        </div>

        <div className="iconLogo">
          <PremFoodsLogo />
        </div>

        {/*{menui list}*/}
        <div className="menuList">
          <ul className={isOpen ? "mobileMenuListLies" : "menuListLies"}>
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
