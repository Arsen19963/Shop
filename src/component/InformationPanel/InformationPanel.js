import React from "react";
import "./informationPanel.css";
import Sukkary from "../../../public/images/sukkary.png";
import Sitting from "../../../public/images/peopleSitting.png";

export const InformationPanel = ({
  title,
  mainText,
  mainTextInfo,
  outline,
  image,
  imgStyle,
  container,
}) => {
  return (
    <div className={"historyAbout content"}>

      <div className={container ? "aboutContainer" : "careersContainer"}>

        <div className={outline ? "twoSec" : "twoSecSecond"}>
          <div className={"aboutTitle"}>
            <p>{title}</p>
          </div>
          <div className={mainText ? "textAbout" : "textCareers"}>
            <p>{mainTextInfo}</p>
          </div>
        </div>
        <div className={imgStyle ? "aboutImage" : "careersImage"}>
          <img src={image ? Sukkary : Sitting} />
        </div>
      </div>
   
    </div>
  );
};
