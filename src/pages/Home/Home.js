import React from "react";
import { connect } from "react-redux";
import { Footer } from "../../default/footer/Footer";
import { Header } from "../../default/Header/Header";
import { About } from "../../component/about/about";
import "./home.css";
import { HomePageSlider } from "../../component/HomePageSlider/HomePageSlider";
import JoinTheTeam from "../../component/JoinTheTeam/JoinTheTeam";
import { Partners } from "../../component/Partners/Partners";
import { TrailCatalog } from "../../component/TrailCatalog/TrailCatalog";

export const Home = ({ catalogue }) => {
  return (
    <div>
      <div className={"content homeContent"}>
        <HomePageSlider />
        <About />
      </div>
      <TrailCatalog products={catalogue.products} name={'Catalogue'} button={true}/>
      <JoinTheTeam />
      <Partners  render={true} size={true} />
    </div>
  );
};

export default connect(
  (state) => ({
    catalogue: state.catalogue,
  }),
  null
)(Home);
