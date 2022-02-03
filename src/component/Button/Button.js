import React from "react";
import "./button.css";

export const Button = ({title,outline}) => {
    return (
        <button className={!outline?"btnMore":"btnMoreOutline"}>
            <p className={!outline?"btnText":"btnTextOutline"}>{title}</p>
        </button>
    );
};