import React, { useEffect, useState, useRef } from "react";
import Global from "../../../public/icons/global1.svg";
import { useOnClickOutside } from "../../component/useClickOutside/useClickOutside";
import "./dropDown_2.css";
import Cookies from "universal-cookie";
const cookies = new Cookies();

export const DropDown2 = ({ setLang, lang }) => {
  const ref = useRef();
  const [open, setOpen] = useState(false);
  const setLangs = (lan) => {
    cookies.set("lang", lan, { path: "/" });
    setLang(lan);
  };
  useOnClickOutside(ref, () => setOpen(false));
  return (
    <div className={"languageFilter"} ref={ref}>
      <div className={"filterAndLanguage"} onClick={() => setOpen(true)}>
        <div className={"filterGlobal"}>
          <img
            src={Global}
            className={open ? "languageBlock" : Global}
            alt="svgPhone"
          />
        </div>
      </div>
      {open && (
        <ul className={"languages"}>
          <li key={1} onClick={() => setLangs("hy")}>
            Hayeren
          </li>
          <li key={2} onClick={() => setLangs("ru")}>
            ruseren
          </li>
          <li key={3} onClick={() => setLangs("en")}>
            angleren
          </li>
        </ul>
      )}
    </div>
  );
};
