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

const products = [
  { id: 1, name: 'Product 1', price: '$20', image: image1 },
  { id: 2, name: 'Product 2', price: '$25', image: image2 },
  { id: 3, name: 'Product 3', price: '$30', image: image3 },
  { id: 4, name: 'Product 4', price: '$35', image: image4 },
];

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
        {products.map(product => (
          <div className="bestseller-item" key={product.id}>
            <img src={product.image} alt={product.name} />
            <div className="overlay">
              <h3>{product.name}</h3>
              <p>{product.price}</p>
              <button>Add to Cart</button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Bestseller;
