import React from "react";
import { connect } from "react-redux";
import "./ShowTeamMembers.css";

const ShowTeamMembers = ({ teamImage }) => {
  return (
    <div>
      {teamImage.map((item, index) => {
        <div className="ourTeamDiv" key={index}>
          <img src={item.img} />
          <p className={"ourTeamTitles"}>{item.title}</p>
          <p className="ourTeamPositions">{item.position} </p>
        </div>;
      })}
    </div>
  );
};
export default connect(
  (state) => ({
    teamImage: state.teamImage,
  }),
  null
)(ShowTeamMembers);
