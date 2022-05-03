import React, { useEffect, useState } from "react";
import "./TrailCatalog.css";
import { Button } from "../Button/Button";
import Slider from "react-slick";
import { ProductCard } from "../ProductCard/ProductCard";
import { Link } from "react-router-dom";

export const TrailCatalog = ({ products, name, buttonNone }) => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    const anything = [];
    products.forEach((item, index) => {
      if (index <= 5) {
        anything.push(item);
      }
    });
    setProduct(anything);
  }, [products]);
  var settings = {
    dots: false,
    infinite: product.length >= 5 ? true : false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className={"catalogue content"}>
      <div className="catalogueTitle">{name}</div>
      <div className={"miniCatalogueSlider"}>
        <Slider {...settings}>
          {product.map((item, index) => (
            <div className={"TrailCatalogSliderImageItems"}>
              <ProductCard item={item} />
            </div>
          ))}
        </Slider>
      </div>
      <div
        className="catalogueButton"
        style={{ display: buttonNone ? "none" : "flex" }}
      >
        <Link to={"/catalogue/"}>
          <Button title={"Show all products"} outline={false} />
        </Link>
      </div>
    </div>
  );
};
