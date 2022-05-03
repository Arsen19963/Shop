import React from "react";
import { connect } from "react-redux";
import "./careers.css";
import { InformationPanel } from "../../component/InformationPanel/InformationPanel";
import { InformationCard } from "../../component/InformationCard/InformationCard";
import { Header } from "../../default/Header/Header";
import { Footer } from "../../default/footer/Footer";

export const Careers = ({ careers }) => {
  return (
    <div>
      <div className="careersInformationPanel">
        <InformationPanel
          title={"Careers"}
          outline={false}
          image={false}
          mainText={false}
          mainTextInfo={
            "Another introtext here need to write about careers and" +
            " opportunities that can suggest Premier Foods and Beverages company"
          }
        />
      </div>
      <div className={"content"}>
        <div className={"careersList"}>
          {careers.map((item, index) => (
            <InformationCard item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default connect(
  (state) => ({
    careers: state.careers,
    lang: state.lang,
    languages: state.languages,
  }),
  (dispatch) => ({
    setLang: (data) => {
      dispatch({ type: "ADD_LANG", payload: data });
    },
  })
)(Careers);
