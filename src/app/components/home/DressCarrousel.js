
// components/DressCarrousel.js
import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import ProductCard from './CardCarrousel';
import { getPrimaveraVeranoPrendas } from '@/app/services/prendas';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const DressCarrousel = () => {
  const [prendas, setPrendas] = useState([]);

  useEffect(() => {
    const fetchPrendas = async () => {
      try {
        const primaveraVeranoPrendas = await getPrimaveraVeranoPrendas();
        setPrendas(primaveraVeranoPrendas);
      } catch (error) {
        console.error('Error fetching Primavera-Verano prendas:', error);
      }
    };

    fetchPrendas();
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 700, // Ajusta la velocidad según tu preferencia
    slidesToShow: 3, // Muestra 3 elementos a la vez
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2, // Muestra 2 elementos a la vez en dispositivos más pequeños
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
    <div className='rounded mt-9'>
      <Slider {...settings}>
        {prendas.map((prenda) => (
          <div key={prenda._id}>
            <h3><ProductCard prenda={prenda} /></h3>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default DressCarrousel;

 