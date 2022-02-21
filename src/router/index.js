import React from "react";
import { BrowserRouter } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import Routes from "./Routes";
import { Header } from "../default/Header/Header";
import { Footer } from "../default/footer/Footer";

export default () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
         {renderRoutes(Routes)}
        <Footer />
      </div>
    </BrowserRouter>
  );
};
