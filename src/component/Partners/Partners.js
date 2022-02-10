import React, {useEffect, useState} from 'react';
import './partners.css';
import {ProductCard} from "../ProductCard/ProductCard";
import Makfa from "../../../public/images/makfa.png";
import Purina from "../../../public/images/purina.png";
import Nestle from "../../../public/images/nestle.png";
import Rawlife from "../../../public/images/rawlife.png";

import Slider from "react-slick";
import {Button} from "../Button/Button";

export const Partners = ({render, size}) => {
    const [sliderImage, setSliderImage] = useState([
        {id: 0, img: Nestle, title: 'Some product name'},
        {id: 1, img: Makfa, title: 'Some product name'},
        {id: 2, img: Purina, title: 'Some product name'},
        {id: 3, img: Rawlife, title: 'Some product name'},
    ]);
    useEffect(()=>{
        console.log('render slider')
    },[render])

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
            <div className={size?'partnersPremierFoodsTitle':'partnersPremierFoodsTitleABigOne'}>
                Partners Premier Foods
            </div>
            <div className={'partnersPremierFoodsSlider'}>
                <Slider {...settings} >
                    {sliderImage.map((item, index) => (
                        <div className={'sliderImageItems'}>
                            <ProductCard key={index} src={item.img} classname={true} />
                        </div>
                    ))}
                </Slider>
            </div>
            <div className="content aboutLastButton">
                <Button title={'Read more about Partners'} outline={false}/>
            </div>
        </div>
    );
}
