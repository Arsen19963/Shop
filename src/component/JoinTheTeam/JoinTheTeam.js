import React from "react";
import "./joinTheTeam.css";
import { Button } from "../Button/Button";

export default function JoinTheTeam() {
  return (
    <div className="joinTheTeam content">
      <div className={"joinTheTeamContent"}>
        <div className="mainTitle">
          <p>Want to join our team? </p>
        </div>
        <div className="textInfo">
          <p>
            The company was founded 2012 year. In the first half becoming a food
            producer Nestle Company: (brands: KitKat, Nesquik, Nuts, Good Mix,
            Nestle, Rossia,
          </p>
        </div>
        <div className="joinTheTeamButton">
          <Button title={"Submit for job"} outline={false} />
        </div>
      </div>
    </div>
  );
}
