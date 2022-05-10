import React from "react";
import "./BigCard.css";
import { Link } from "react-router-dom";

export const BigCard = ({ partners }) => {
  return (
    <div>
      {partners &&
        partners.map((item) => {
          return (
            <Link className="BigCard" key={item.id} to={item.path}>
              <img src={item.image} />
            </Link>
          );
        })}
    </div>
  );
};
