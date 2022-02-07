import React,{useState} from "react";
import "./catalogue.css"
import {Button} from "../Button/Button";
import Slider from "react-slick";
import PremFoodsLogo from '../../default/PremFoodsLogo/PremFoodsLogo';
import Flour from "../../../public/images/flour.png"
import Pads from "../../../public/images/pads.png"
import Sukkary from "../../../public/images/sukkary.png"
import Beer from "../../../public/images/beer.png"
import Nan from "../../../public/images/nan.png"


export const Catalogue = () => {
    const [sliderImage, setSliderImage] = useState([
        {id: 0, img: Beer, title: 'Some product name'},
        {id: 1, img: Beer, title: 'Some product name'},
        {id: 2, img: Beer, title: 'Some product name'},
        {id: 3, img: Beer, title: 'Some product name'},
        {id: 4, img: Beer, title: 'Some product name'},
        {id: 5, img: Beer, title: 'Some product name'},
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
        <div className={'catalogue content'}>
            <div className="catalogueTitle">
                Catalogue
            </div>
            <div className="catalogueLogo">
            <PremFoodsLogo />

            </div>
                    <div className={'miniCatalogueSlider'}>
                        <Slider {...settings} >
                            {sliderImage.map((item, index) => (
                                    <div className={'sliderImageItems'}>
                                        <div>
                                        <img  key={index} src={item.img}/>
                                        </div>
                                    </div>
                            ))}
                        </Slider>
            </div>
            <Button title={'Show all products'} outline={false}/>
        </div>
    )

}
