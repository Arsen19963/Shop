import React from "react";
import "./button.css";
// import classNames from "classnames";
export const Button = ({title,outline}) => {
    return (
         <button className={!outline?"btnMore":"btnMoreOutline"}>
            <p className={!outline?"btnText":"btnTextOutline"}>{title}</p>
        </button>
    );
};

