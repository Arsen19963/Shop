import React from "react";
import "./Categories.css";

export const Categories = ({ item }) => {
  return (
    <div className="Categories active">
      <div className="categoriesName">
        <p>{item.title}</p>
      </div>
    </div>
  );
};
