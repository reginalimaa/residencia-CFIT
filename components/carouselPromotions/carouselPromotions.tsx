'use client'

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import 'swiper/css/pagination';
import './styles.css'

import { Pagination } from 'swiper/modules';

export default function CarouselPromotions() {

  const data = [
    { id: '1', image: 'https://assets.folhavitoria.com.br/images/04b95e70-3b81-0138-b7d3-0a58a9feac2a--minified.jpg'},
    { id: '2', image: 'https://botoesthetic.com.br/wp-content/uploads/2021/04/20210422_095445-1536x864.jpg'},
    { id: '3', image: 'https://botoesthetic.com.br/wp-content/uploads/2021/04/20210422_095445-1536x864.jpg'},
  ]

  return (
    <div className="slides">
      <Swiper
        slidesPerView={2}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
      >
        <SwiperSlide>
          <div className="promo-style">
            <div className="title-promo">
              Especial dia das mulheres
            </div>
            <div className="off-promo">
              10% OFF
            </div>
            <div className="subtitle-promo">
              Em todo site!
            </div>
          </div>
        </SwiperSlide>

        {data.map( (item) => (
          <SwiperSlide key={item.id}>
            <img 
              src={item.image}
              alt="Foto do espaço"
              className='slide-item-promo'
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}