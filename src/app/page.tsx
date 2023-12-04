import Card from "../../components/Products/card";
import Image from "next/image";
import Header from "../../components/Header/Header";
import CardApresentation from "../../components/CardApresentation/CardApresentation";
import Carousel from "../../components/carousel/carousel";
import CarouselPromotions from "../../components/carouselPromotions/carouselPromotions";

import img from  '../img/img.jpg'

const getData = async () => {
  const res = await fetch("http://localhost:3001/api/products");
  if(!res.ok){
    throw new Error("Failed to fetch data")
  }
  return res.json();
};

export default function Home() {
  return (
    <>
    
      
      <Header></Header>
      <CardApresentation></CardApresentation>
        <Card
          src={img}
          title="Limpeza de pele"
          subtitle="Limpeza de Pele Avançada, usando técnicas especializadas para eliminar cravos e revitalizar sua pele. "
          price="R$ 19,99"
        />
        
        <Carousel></Carousel>

        <CarouselPromotions></CarouselPromotions>
            
      
    </>
  )
}
