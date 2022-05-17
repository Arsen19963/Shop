import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Header } from "../../default/Header/Header";
import { Footer } from "../../default/footer/Footer";
import "./About.css";
import { Partners } from "../../component/Partners/Partners";
// import Sukkary from "../../../public/images/sukkary.png";
import Star from "../../../public/images/star.png";
import { OurTeam } from "../../component/OurTeam/OurTeam";
import { Button } from "../../component/Button/Button";
import JoinTheTeam from "../../component/JoinTheTeam/JoinTheTeam";
import { InformationPanel } from "../../component/InformationPanel/InformationPanel";
import { Link } from "react-router-dom";

export const About = ({ members }) => {
  const [ourTeam, setOurTeam] = useState([]);
  // useEffect(()=>{
  //     console.log('languages',languages[lang]['about'])
  // },[lang])

  useEffect(() => {
    let x = [];
    members.forEach((item) => {
      if (item.team === 1) {
        x.push(item);
      }
    });
    setOurTeam(x);
  }, [members]);
  return (
    <div>
      <div className="aboutInformationPanel">
        <InformationPanel
          title={"History of Premier Foods"}
          mainText={true}
          outLine={true}
          image={true}
          imgStyle={true}
          container={true}
          mainTextInfo={
            "Another introtext here need to write maybe 3 lines and" +
            " its enough The company was founded 2012 year. In the first half " +
            "becoming a food producer Nestle Company: (brands: KitKat, Nesquik," +
            " Nuts, Good Mix, Nestle, Rossia, Nescafe, BonPari, Bistroff, Torchin" +
            ", Mivina, Maggi, Fitness, Nan, Nestogen, Gerber, Fellix, Frieskes," +
            " Darling, ProPlan) official Representative in Armenia. In 2016" +
            " joined our company world famous Makfa Company"
          }
        />
      </div>
      <div className={"weInIndustry"}>
        <div>
          <img src={Star} />
          <p className={"industryTitle"}>25years</p>
          <p className={"secondTitle"}>of active work</p>
        </div>
        <div>
          <img src={Star} />
          <p className={"industryTitle"}>Customer trust</p>
          <p className={"secondTitle"}>Customer trust</p>
        </div>
        <div>
          <img src={Star} />
          <p className={"industryTitle"}>Number #1</p>
          <p className={"secondTitle"}>In Armenian industry</p>
        </div>
      </div>
      <div className="ourTeamContainer content">
        <p className="ourTeamTitle">About our team</p>
        <OurTeam members={ourTeam} />
        <div className="ourTeamContainerButton">
          <Link to={"/team/"}>
            <Button title={"Know more ABOUT TEAM"} outline={false} />
          </Link>
        </div>
      </div>
      <JoinTheTeam />
      <Partners render={true} size={false} />
      <div className="aboutLastButton">
        <Link to={"/partners/"}>
          <Button title={"Read more about Partners"} outline={false} />
        </Link>
      </div>
    </div>
  );
};
export default connect(
  (state) => ({
    members: state.members,
    lang: state.lang,
    languages: state.languages,
  }),
  (dispatch) => ({
    setLang: (data) => {
      dispatch({ type: "ADD_LANG", payload: data });
    },
  })
)(About);
