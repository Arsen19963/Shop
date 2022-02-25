import React, { useEffect, useState } from "react";
import { OurTeam } from "../../component/OurTeam/OurTeam";
import { connect } from "react-redux";
import "./team.css";
import {Header} from "../../default/Header/Header";
import {Footer} from "../../default/footer/Footer";

const sortByItemTypes = (members) => {
  const teams = [];
  const boards = [];
  const defaults = [];
  members.map((item) => {
    if (item.team === 1) {
      teams.push(item);
    }
    if (item.board === "main") {
      boards.push(item);
    } else {
      defaults.push(item);
    }
  });
  return { teams, boards, defaults };
};

export const Team = ({ members }) => {
  const [ourTeam, setOurTeam] = useState([]);
  const [workTeam, setWorkTeam] = useState([]);
  const [main, setMain] = useState([]);

  useEffect(() => {
    if (members) {
      const { teams, boards, defaults } = sortByItemTypes(members);
      setOurTeam(teams);
      setWorkTeam(defaults);
      setMain(boards);
    }
  }, [members]);
  return (
    <div>

      <div className="contentWrapper content">
        <div className="workTeamChef">
          <p className="workTeamTitle">Chief executive officer</p>
          <div className="ourTeamMembers">
            <OurTeam members={main} />
          </div>
        </div>
        <div className="teamMain">
          <p className="teamMainTitle">Our Team</p>
          <p className="teamMainTitle_2">Premier Foods LLC | General Team </p>
          <div className="ourTeamMembers">
            <OurTeam members={ourTeam} />
          </div>
        </div>
      </div>
      <div className="workTeam">
        <p className="workTeamTitle">Work Team </p>
        <div className="ourTeamMembers">
          <OurTeam members={workTeam} />
        </div>
      </div>
     d
    </div>
  );
};
export default connect(
  (state) => ({
    members: state.members,
    lang: state.lang,
    languages: state.languages
  }),
    dispatch => ({
      setLang: data => {
        dispatch({type:'ADD_LANG', payload:data})
      }
    })
)(Team);
