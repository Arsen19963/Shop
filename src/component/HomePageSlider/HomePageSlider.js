import React, { useState } from "react";
import "./HomePageSlider.css";
import Slider from "react-slick";
import SlidImageOne from "../../../public/images/kitkat1.png";
import SlidImageTwo from "../../../public/images/kitkat2.png";
import SmallOne from "../../../public/images/smallOne1.png";
import SmallTwo from "../../../public/images/smallOne2.jpg";
import { Button } from "../Button/Button";
import { Link } from "react-router-dom";

export const HomePageSlider = () => {
  const [sliderImage, setSliderImage] = useState([
    {
      id: 0,
      img: SlidImageOne,
      imgSmall: SmallOne,
      title: "Some text here need to write",
      text: "Another introtext here need to write maybe 3 lines and its enough",
    },
    {
      id: 1,
      img: SlidImageTwo,
      imgSmall: SmallTwo,
      title: "Some text here need to write",
      text: "Another introtext here need to write maybe 3 lines and its enough",
    },
  ]);
  const [checkItem, setCheckItem] = useState(sliderImage[0]);
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
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
    <div className={"wrapSlider"}>

      <div className={"wrapSliderRight"}>
        <div className={"wrapSliderRightImageBlock"}>
          <img src={checkItem.imgSmall} />
        </div>
        <div className={"someText"}>{checkItem.title}</div>
        <div className={"someTitle"}>{checkItem.text}</div>
        <div className="HomePageSliderButton">
          <Link to={"/products"}>
            <Button title={"SEE ALL PRODUCTS"} outline={true} />
          </Link>
        </div>
      </div>
      <div className={"wrapSliderLeft"}>
        <Slider {...settings} afterChange={(e) => setCheckItem(sliderImage[e])}>
          {sliderImage.map((item, index) => (
            <div className={"sliderImageItem"}>
              <img className={"sliderImage"} key={index} src={item.img} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};


