'use client'

import Link from "next/link";
import './styles.css'
import Image from "next/image";
import Button from "../Button/button";

interface ProductProps{
  _id: number;
  image: string;
  title: string;
  price: number;
  aboutProduct: string;
  etapasProcedimento: string;
  recomendations: string;
}

interface Props {
  products: ProductProps[];
}

const Products = ({products}: Props) => {
  
  return <div className="card-grid">
    {
      products.map((item) => (
        <Link className="link" href={{pathname: "/singleproduct", query: { _id: item?._id}}} key={item._id}>
          <div className="card">
            <div className="card-image" >
              <Image 
                src={item?.image} 
                width={140} height={119} 
                alt="" 
              />
            </div>
            <div className="card-informations">
              <h3 className="card-title" >{item?.title}</h3>
              <p className="card-description" >{item?.aboutProduct}</p>
              <p className="card-price">R${item?.price}</p>
            </div>
            <Button label="Agendar" type="submit" variant="small" />
          </div>
        </Link>
      ))
    }
  </div>
}

export default Products;