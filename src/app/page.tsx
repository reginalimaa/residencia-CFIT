import Card from "../../components/CardProduct/card";
import Image from "next/image";
import Header from "../../components/Header/Header";
import CardApresentation from "../../components/CardApresentation/CardApresentation";
import Carousel from "../../components/carousel/carousel";
import CarouselPromotions from "../../components/carouselPromotions/carouselPromotions";

import img from  '../img/img.jpg'

export default function Home() {
  return (
    <>
    
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
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
            
      </main>
    </>
  )
}
