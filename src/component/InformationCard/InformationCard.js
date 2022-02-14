import React from "react";
import "./informationCard.css";
import {Button} from "../Button/Button";
import {Link} from "react-router-dom";

export const InformationCard = ({ item }) => {
    return (
        <div key={item.id} className={'careersItem'}>
            <div className={"InformationCardMainTitle"}>
                <p> {item.title} </p>
            </div>
            <div className="deadline">
                Deadline: {item.date}
            </div>
            <div className={"InformationCardText"}>
                {item.text}
            </div>
            <Link to={`careers/${item.id}`} className={'linkOff'}>
                <Button title={'READ MORE'}/>
            </Link>
        </div>
    );
};

