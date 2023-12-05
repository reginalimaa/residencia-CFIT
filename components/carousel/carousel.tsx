'use client'

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';

import spaceone from '../../src/img/image-carousel-1.jpg'
import spacetwo from '../../src/img/image-carousel-2.jpg'
import spacethree from '../../src/img/image-carousel-3.jpg'

import { Parallax, Pagination, Navigation } from 'swiper/modules';

export default function Carousel() {

  const data = [
    { id: '1', image: 'https://img.freepik.com/fotos-gratis/mulher-na-clinica-de-beleza-para-tratamento-facial_23-2148878935.jpg?w=826&t=st=1701781733~exp=1701782333~hmac=5ec6c3b80e222617ea0803edfb6cd4d55bfac71ededb9d4e9deeddca21eeadd9'},
    { id: '1', image: 'https://img.freepik.com/fotos-gratis/mulher-esteticista-na-clinica_23-2148878878.jpg?w=740&t=st=1701781788~exp=1701782388~hmac=1e74ca2b0919bc2829a447afe9c3bfa585cf380e65e5aff3e7c8dc5a66e00dd4'},
    { id: '1', image: 'https://img.freepik.com/fotos-gratis/tratamento-facial-rejuvenescedor_158595-4602.jpg?w=740&t=st=1701781841~exp=1701782441~hmac=f2898f2afc379ec5bda484f01063a2273d2dc08d87c98e64537724e0cfe0f750'}, 
  ]

  return (
    <div className="slides">
      <Swiper
        slidesPerView={1}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
      >
        {data.map( (item) => (
          <SwiperSlide key={item.id}>
            <img 
              src={item.image}
              alt="Foto do espaço"
              className='slide-item'
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}