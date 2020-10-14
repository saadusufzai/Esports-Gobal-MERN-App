import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './style.css'

import img1 from "../../images/poster1.jpg";
import img2 from "../../images/poster2.jpg";
import img4 from "../../images/poster4.jpg";
import img5 from "../../images/poster5.jpg";
import img6 from "../../images/poster6.jpg";
import img3 from "../../images/poster7.jpg";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    draggable: true,
    className:'slider'
  };
  return (
    <Slider {...settings}>
      <div>
        <img src={img1} alt="pubg-poster" />
      </div>
      <div>
        <img src={img2} alt="pubg-poster" />
      </div>
      <div>
        <img src={img3} alt="pubg-poster" />
      </div>
      <div>
        <img src={img4} alt="pubg-poster" />
      </div>
      <div>
        <img src={img5} alt="pubg-poster" />
      </div>
      <div>
        <img src={img6} alt="pubg-poster" />
      </div>
    </Slider>
  );
};

export default Carousel;
