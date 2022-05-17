import React from "react";
import AboutImage from "../../../public/images/shutterstock.jpg";
import "./about.css";
import { Button } from "../Button/Button";

export const About = () => {
  return (
    <div className={"about content"}>
      <div className={"imgContent"}>
        {/*rigth part*/}
        <img className={"sweets"} src={AboutImage} />
      </div>
      <div className={"aboutInfo"}>
        {/*left part*/}
        <div className={"title"}>
          <p>About</p>
          <p>Premier Foods</p>
        </div>
        <div className={"textContent"}>
          The company was founded 2012 year. In the first half becoming a food
          producer Nestle Company: (brands: KitKat, Nesquik, Nuts, Good Mix,
          Nestle, Rossia, Nescafe, BonPari, Bistroff, Torchin, Mivina, Maggi,
          Fitness, Nan, Nestogen, Gerber, Fellix, Frieskes, Darling, ProPlan)
          official Representative in Armenia.
        </div>
        <div className={"textContentButton"}>
          <Button title={"Know more"} outline={false} />
        </div>
      </div>
    </div>
  );
};
