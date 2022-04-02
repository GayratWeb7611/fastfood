import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

import img1 from '../../assist/slider_imgs/Баннер Сайт_1.png'
import img2 from '../../assist/slider_imgs/Баннер Сайт_2.png'
import img3 from '../../assist/slider_imgs/Баннер Сайт_3.png'


export default function MySlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    cssEase: "linear"
  };
  return (
    <Slider {...settings} >
     <div>
        <Image src={img1} alt = {'img1'} />
     </div>
     <div>
        <Image src={img2} alt = {'img2'} />
     </div>
     <div>
        <Image src={img3} alt = {'img3'} />
     </div>
    </Slider>
  );
}