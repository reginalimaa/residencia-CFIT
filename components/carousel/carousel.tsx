'use client'

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';

import { Parallax, Pagination, Navigation } from 'swiper/modules';

export default function Carousel() {

  const data = [
    { id: '1', image: 'https://botoesthetic.com.br/wp-content/uploads/2021/04/20210422_095445-1536x864.jpg'}    
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