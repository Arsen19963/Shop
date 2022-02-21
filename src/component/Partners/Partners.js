// import React, { useEffect, useState } from "react";
// import "./partners.css";
// import { ProductCard } from "../ProductCard/ProductCard";
// import Makfa from "../../../public/images/makfa.png";
// import Purina from "../../../public/images/purina.png";
// import Nestle from "../../../public/images/nestle.png";
// import Rawlife from "../../../public/images/rawlife.png";
// import Slider from "react-slick";

// export const Partners = ({ render, size, partners }) => {
//   const [sliderImage, setSliderImage] = useState([
//     { id: 0, img: Nestle, title: "Some product name" },
//     { id: 1, img: Makfa, title: "Some product name" },
//     { id: 2, img: Purina, title: "Some product name" },
//     { id: 3, img: Rawlife, title: "Some product name" },
//   ]);
//   useEffect(() => {
//     console.log("render slider");
//   }, [render]);

//   var settings = {
//     dots: false,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 4,
//     slidesToScroll: 4,
//     initialSlide: 0,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 3,
//           infinite: true,
//           dots: true,
//         },
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 2,
//           initialSlide: 2,
//         },
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         },
//       },
//     ],
//   };
//   return (
//     <div className="partnersPremierFoods content">
//       <div
//         className={
//           size
//             ? "partnersPremierFoodsTitle"
//             : "partnersPremierFoodsTitleABigOne"
//         }
//       >
//         Partners Premier Foods
//       </div>
//       <div className={"partnersPremierFoodsSlider"}>
//         <Slider {...settings}>
//           {sliderImage.map((item, index) => (
//             <div className={"sliderImageItems"}>
//               <ProductCard key={index} src={item.img} partners={partners}/>
//             </div>
//           ))}
//         </Slider>
//       </div>
//     </div>
//   );
// };

import React, { useEffect, useState } from "react";
import "./partners.css";
import { ProductCard } from "../ProductCard/ProductCard";
import Makfa from "../../../public/images/makfa.png";
import Purina from "../../../public/images/purina.png";
import Nestle from "../../../public/images/nestle.png";
import Rawlife from "../../../public/images/rawlife.png";
import Slider from "react-slick";

export const Partners = ({ render, size, partners }) => {
  const [sliderImage, setSliderImage] = useState([
    { id: 0, image: Nestle, name: "Some product name" },
    { id: 1, image: Makfa, name: "Some product name" },
    { id: 2, image: Purina, name: "Some product name" },
    { id: 3, image: Rawlife, name: "Some product name" },
  ]);
  useEffect(() => {
    console.log("render slider");
  }, [render]);

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
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
    <div className="partnersPremierFoods content">
      <div
        className={
          size
            ? "partnersPremierFoodsTitle"
            : "partnersPremierFoodsTitleABigOne"
        }
      >
        Partners Premier Foods
      </div>
      <div className={"partnersPremierFoodsSlider"}>
        <Slider {...settings}>
          {sliderImage.map((item, index) => (
              <ProductCard item={item} partners={true}/>
          ))}
        </Slider>
      </div>
    </div>
  );
};
