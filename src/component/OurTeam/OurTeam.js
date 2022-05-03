import React from "react";
import "./ourTeam.css";
import { Link } from "react-router-dom";

export const OurTeam = ({ members }) => {
  return (
    <div className={"ourTeamWrapper content"}>
      {members.map((item, index) => (
        <Link to={`/team/${item.id}`} key={index}>
          <div className="ourTeamDiv">
            <img src={item.img} />
            <p className={"ourTeamTitles"}>{item.title}</p>
            <p className="ourTeamPositions">{item.position} </p>
          </div>
        </Link>
      ))}
    </div>
  );
};
