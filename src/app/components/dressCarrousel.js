import React from 'react';
import Slider from 'react-slick';
import ProductCard from './cardCarrousel';
import './dress.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const DressCarrousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
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
    <div className='rounded mt-9' >
           
      <Slider {...settings}>
        
        <div className=''>
          
          <h3><ProductCard></ProductCard></h3>
        </div>
        <div>
        <h3><ProductCard></ProductCard></h3>
        </div>
        <div>
        <h3><ProductCard></ProductCard></h3>
        </div>
        <div>
        <h3><ProductCard></ProductCard></h3>
        </div>
        <div>
        <h3><ProductCard></ProductCard></h3>
        </div>
        <div>
        <h3><ProductCard></ProductCard></h3>
        </div>
        <div>
        <h3><ProductCard></ProductCard></h3>
        </div>
        <div>
        <h3><ProductCard></ProductCard></h3>
        </div>
      </Slider>
    </div>
  );
};

export default DressCarrousel;
