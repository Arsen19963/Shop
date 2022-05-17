import React from "react";
import "./productCard.css";
import { Link } from "react-router-dom";

// import s from "./productCard2.module.css";
// import { useHistory } from "react-router-dom";

export const ProductCard = ({ item, catalogPage, partners, products, partnersInProductPage }) => {
  if (catalogPage) {
    return (
      <Link to={`/catalogue/${item.id}`} key={item.id}>
        <div className={s.catalogPageProduct}>
          <div className={"catalogPageProductImage"}>
            <img src={item.image} />
          </div>
          <p className="catalogPageProductTitle">{item.name}</p>
          <p className="catalogPageProductCharacter">{item.weight}</p>
        </div>
      </Link>
    );
  } else if (partners) {
    return (
      <div className={"sliderImageItems"}>
        <div className={"productCardPartners"}>
          <div className="productCardImagePartners">
            <img src={item.image} />
          </div>
        </div>
      </div>
    );
  } 
  else if (partnersInProductPage) {
    return (
        <div className={"partnersInProductPage"}>
          <div className="partnersInProductPageImage">
            <img src={item.image} />
          </div>
        </div>
    );
  }
  else if (products) {
    return (
      <div className="productCardImage">
        <img src={item.image} />
        <div className="blackLine" />
      </div>
    );
  }
  return (
    <Link to={`/catalogue/${item.id}`} key={item.id}>
      <div className={"productCardBig"}>
        <div className="productCardImageBig">
          <img src={item.image} />
        </div>
        <div className="catalogPageProductTitle">
          <p>{item.name}</p>
        </div>
      </div>
    </Link>
  );
};
