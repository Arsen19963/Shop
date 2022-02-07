import React,{useState} from 'react';
import './partners.css';
import {ProductCard} from "../ProductCard/ProductCard";
import Flour from "../../../public/images/flour.png";
import Beer from "../../../public/images/beer.png";
import Pads from "../../../public/images/pads.png";
import Sukkary from "../../../public/images/sukkary.png";
import Nan from "../../../public/images/nan.png";
import Slider from "react-slick";

export const Partners = ({stylish}) => {
    const [sliderImage, setSliderImage] = useState([
        {id: 0, img: Flour, title: 'Some product name'},
        {id: 1, img: Beer, title: 'Some product name'},
        {id: 2, img: Pads, title: 'Some product name'},
        {id: 3, img: Sukkary, title: 'Some product name'},
        {id: 4, img: Nan, title: 'Some product name'},
    ]);

    var settings = {
        dots: false,
        infinite: true,
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
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className='partnersPremierFoods content'>
            <div className={'partnersPremierFoodsTitle'}>
                Partners Premier Foods
            </div>

            <div className={'partnersPremierFoodsSlider'}>
                <Slider {...settings} >
                    {sliderImage.map((item, index) => (
                        <div className={!stylish?'sliderImageItems':}>
                            <ProductCard key={index} src={item.img}/>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}