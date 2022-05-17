import React from "react";
import "./CardContent.css";

export const CardContent = ({ products }) => {
  return (
    <div>
      {products &&
        products.map((item) => {
          return (
            <div className="CardContent" key={item.id}>
              <div className="imageContent">
                <img src={item.image} />
              </div>
              <div className="line" />
              <div className="CardContentText">{item.name}</div>
            </div>
          );
        })}
    </div>
  );
};
