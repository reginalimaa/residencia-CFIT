'use client'

import React from 'react';
import * as S from './styles'
import Image from 'next/image'
import Button from '../Button/button';


export default function Card({ alt = '', src = '', title = '', subtitle = '', price = ''}) {
  return (
    
    <S.Div >
      <Image 
        src = {src}
        width={124}
        height={119}
        alt={alt}
      />
      <S.Description>
        <h3>{title}</h3>
        <p>{subtitle}</p>
      </S.Description>
      
      <S.P>{price}</S.P>

      <Button 
        variant="small" 
        type="submit"
        label='Agendar'
      >
        
      </Button>

    </S.Div>
  );
}