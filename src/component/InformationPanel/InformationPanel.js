import React from "react";
import "./informationPanel.css";
import Sukkary from "../../../public/images/sukkary.png";
import Sitting from "../../../public/images/peopleSitting.png";


export const InformationPanel = ({title, mainText, mainTextInfo, outline, image, imgStyle}) => {
    return (

        // <button className={!outline?"btnMore":"btnMoreOutline"}>
        //     <p className={!outline?"btnText":"btnTextOutline"}>{title}</p>
        // </button>
        <div className={"historyAbout content"}>
            <div className={outline ? 'twoSec' : 'twoSecSecond'}>
                <div className={'aboutTitle'}>
                    <p>{title}</p>
                </div>

                <div className={mainText ? 'textAbout' : 'textAboutSecond'}>
                    <p>
                        {mainTextInfo}
                    </p>
                </div>

            </div>

            <div className={imgStyle?'historyAboutImg':'historyAboutImgSecond'}>
                <img src={image ? Sukkary : Sitting}/>
            </div>
        </div>
    );
};