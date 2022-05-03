import React, { useEffect } from "react";
import { connect } from "react-redux";
import { About } from "../../component/about/about";
import "./home.css";
import { HomePageSlider } from "../../component/HomePageSlider/HomePageSlider";
import JoinTheTeam from "../../component/JoinTheTeam/JoinTheTeam";
import { Partners } from "../../component/Partners/Partners";
import { TrailCatalog } from "../../component/TrailCatalog/TrailCatalog";
import { Footer } from "../../default/footer/Footer";
export const Home = ({ catalogue }) => {
  return (
    <div>
      <div className={"content homeContent"}>
        <HomePageSlider />
        <About />
      </div>
      <TrailCatalog
        products={catalogue.products}
        name={"Catalogue"}
        button={true}
      />
      <JoinTheTeam />
      <Partners render={true} size={true} />
    </div>
  );
};
export default connect(
  (state) => ({
    catalogue: state.catalogue,
    lang: state.lang,
    languages: state.languages,
  }),
  (dispatch) => ({
    setLang: (data) => {
      dispatch({ type: "ADD_LANG", payload: data });
    },
  })
)(Home);
