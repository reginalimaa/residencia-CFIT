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
    { id: '1', image: 'https://img.freepik.com/fotos-gratis/atraente-alegre-mulher-com-orquidea-flor_23-2148105371.jpg?w=360&t=st=1701782871~exp=1701783471~hmac=3a61683903a627c5972f863789f8e81c66e4d1fa9e7212942795dd3e98862811'},
    
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