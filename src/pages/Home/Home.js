import React from "react";
import { connect } from "react-redux";
import { Footer } from "../../default/footer/Footer";
import { Header } from "../../default/Header/Header";
import { About } from "../../component/about/about";
import "./home.css";
import { HomePageSlider } from "../../component/HomePageSlider/HomePageSlider";
import { Catalogue } from "../../component/Catalogue/Catalogue";
import JoinTheTeam from "../../component/JoinTheTeam/JoinTheTeam";
import { Partners } from "../../component/Partners/Partners";

export const Home = ({ test }) => {
  return (
    <div>
      <div className={"content homeContent"}>
        <HomePageSlider />
        <About />
      </div>
      <Catalogue />
      <JoinTheTeam />
      <Partners render={true} size={true} />
    </div>
  );
};

export default connect(
  (state) => ({
    test: state.test,
  }),
  null
)(Home);
