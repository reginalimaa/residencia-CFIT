import Header from "../../components/Header/Header";
import CardApresentation from "../../components/CardApresentation/CardApresentation";
import Carousel from "../../components/carousel/carousel";
import CarouselPromotions from "../../components/carouselPromotions/carouselPromotions";
import ProductsApiMaycon from "../../components/Products/ProductApiMaycon";

const getData = async () => {
  const res = await fetch("http://localhost:8080/servicos");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
};

export default async function Home() {
  const products = await getData();

  return (
    <>
      <Header></Header>
      <CardApresentation></CardApresentation>

      <h1 style={{ margin: '16px' }}>Mais procurados</h1>
      <section className="section-cards-pagprin">
        <ProductsApiMaycon products={products} />
      </section>

      <h1 style={{ margin: '16px' }}>Nosso espaço</h1>
      <Carousel></Carousel>

      <h1 style={{ margin: '16px' }}>Combos</h1>
      <section className="section-cards-pagprin">
        <ProductsApiMaycon products={products} />
      </section>

      <h1 style={{ margin: '16px' }} >Planos</h1>
      <section className="section-cards-pagprin">
        <ProductsApiMaycon products={products} />
      </section>

      <div className="title-promotionsforyou">
        <h1>PROMOÇÕES PARA VOCÊ</h1>
      </div>
      <CarouselPromotions></CarouselPromotions>
    </>
  );
}
