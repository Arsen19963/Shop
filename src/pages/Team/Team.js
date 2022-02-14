import React from "react";
import { OurTeam } from "../../component/OurTeam/OurTeam";
import { Footer } from "../../default/footer/Footer";
import { Header } from "../../default/Header/Header";
import { connect } from "react-redux";
import "./team.css";

export const Team = ({members}) => {
  return (
    <div>
      <div className="contentWrapper">
        <div className="content teamMain">
          <p className="teamMainTitle">Our Team</p>
          <p className="teamMainTitle_2">Premier Foods LLC | General Team </p>
          <OurTeam members={members} />
        </div>
      </div>
      <div className="content workTeam">
        <p className="workTeamTitle">Work Team </p>
        <OurTeam members={members} />
      </div>
    </div>
  );
};
export default connect(
  (state) => ({
    members: state.members,
  }),
  null
)(Team);
