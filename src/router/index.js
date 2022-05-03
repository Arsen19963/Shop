import React from "react";
import { BrowserRouter } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import Routes from "./Routes";
import { Header } from "../default/Header/Header";
import { Footer } from "../default/footer/Footer";
import { connect } from "react-redux";
export const Main = ({ lang, setLang, languages }) => {
  return (
    <BrowserRouter>
      <div>
        <Header lang={lang} setLang={setLang} languages={languages[lang]} />
        {renderRoutes(Routes)}
        <Footer lang={lang} setLang={setLang} languages={languages[lang]} />
      </div>
    </BrowserRouter>
  );
};
export default connect(
  (state) => ({
    lang: state.lang,
    languages: state.languages,
  }),
  (dispatch) => ({
    setLang: (data) => {
      dispatch({ type: "ADD_LANG", payload: data });
    },
  })
)(Main);
