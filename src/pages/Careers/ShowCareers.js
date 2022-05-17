import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import "./careers.css";
import "./showCareers.css";
import { Header } from "../../default/Header/Header";
import { Footer } from "../../default/footer/Footer";

export const ShowCareers = ({ match, careers }) => {
  const [data, setData] = useState(null);
  const { id } = match.params;
  useEffect(() => {
    let item = careers.find((x) => x.id.toString() === id.toString());
    setData(item);
  }, [id]);
  if (data) {
    return (
      <div className="showCareers content">
        <div>
          <div className="showCareersTitle ">
            <p>{data.title}</p>
          </div>

          <div className="showCareersEmploymentType">
            <span>Employment type: </span>
            <span className="secondTitle">{data.employment_type}</span>
          </div>

          <p>
            <span>City: </span>
            {data.city}
          </p>

          <p className="showCareersText">{data.text}</p>
          <p className="deadLineText">Deadline: {data.date}</p>

        </div>

        <div className="showCareersRight">
          <p className="showCareersRightTitle">
            More jobs at Premier Foods LLC
          </p>
          <ul>
            {careers.map(
              (item, index) =>
                item.id.toString() !== id.toString() && (
                  <li key={index}>
                    <a href={`/careers/${item.id}`} className={"showCareersA"}>
                      {item.title}
                    </a>
                  </li>
                )
            )}
          </ul>
        </div>
      </div>
    );
  } else {
    return null;
  }
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
)(ShowCareers);
