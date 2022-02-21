import React, {useEffect, useState} from "react";
import "./TrailCatalog.css";
import { Button } from "../Button/Button";
import Slider from "react-slick";
import { ProductCard } from "../ProductCard/ProductCard";

export const TrailCatalog = ({products}) => {
const [product, setProduct] = useState([])
  useEffect(()=>{
      const anyting = [];
      products.forEach((item,index) =>{
        if(index<=5){
          anyting.push(item)
        }
      })
    setProduct(anyting)
  },[products])
  var settings = {
    dots: false,
    infinite: product.length >= 5? true: false,
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
      <div className="catalogueTitle">Catalogue</div>
      <div className={"miniCatalogueSlider"}>
        <Slider {...settings}>
          {product.map((item, index) => (
            <div className={"sliderImageItems"}>
              <ProductCard key={index} src={item.image} title={'Some product name'}/>
            </div>
          ))}
        </Slider>
      </div>
      <div className="catalogueButton">
        <Button title={"Show all products"} outline={false} />
      </div>
    </div>
  );
};
