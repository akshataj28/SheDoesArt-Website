import React from 'react';
import Slider from 'react-slick';
import './Bestseller.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { NextArrow, PrevArrow } from './CustomArrows';  // Import custom arrow components

// Import images
import image1 from '../images/bracelet.jpeg';
import image2 from '../images/bracelet.jpeg';
import image3 from '../images/bracelet.jpeg';
import image4 from '../images/bracelet.jpeg';

const Bestseller = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,         // Enable autoplay
    autoplaySpeed: 2000,    // Set autoplay speed in milliseconds
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="bestseller-container" id="bestseller">
      <h2>OUR BESTSELLERS</h2>
      <Slider {...settings} className="bestseller-items">
        <div className="bestseller-item">
          <img src={image1} alt="Bestseller 1" />
        </div>
        <div className="bestseller-item">
          <img src={image2} alt="Bestseller 2" />
        </div>
        <div className="bestseller-item">
          <img src={image3} alt="Bestseller 3" />
        </div>
        <div className="bestseller-item">
          <img src={image4} alt="Bestseller 4" />
        </div>
      </Slider>
    </div>
  );
};

export default Bestseller;
