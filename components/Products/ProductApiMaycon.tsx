'use client'

import Link from "next/link";
import './styles.css'
import Image from "next/image";
import Button from "../Button/button";

import img from '../../src/img/foto-do-servico.png'

interface ProductProps {
  id: number; // Alterando para corresponder ao campo 'id' da API
  image: string;
  nomeServico: string; // Renomeando para corresponder a 'nomeServico'
  preco: string; // Alterando para corresponder a 'preco'
  descricao: string; // Mantendo como 'descricao'
  duracao: 30; // Mantendo como 'duracao'
  etapasProcedimento: string;
  recomendations: string;
}

interface Props {
  products: ProductProps[];
}

const ProductsApiMaycon = ({products}: Props) => {
  
  return <div className="section-products-pagprin">
    {
      products.map((item) => (
        <Link className="link" href={'/sigleproduct'}>
          <div className="card">
            <div className="card-image" >
              <Image 
                src={img} 
                width={140} height={119} 
                alt="" 
              />
            </div>
            <div className="card-informations">
              <h3 className="card-title" >{item?.nomeServico}</h3>
              <p className="card-description" >{item?.descricao}</p>
              <p className="card-price">R${item?.preco}</p>
            </div>
            <Link className="link" href={'/agendamento'} ><Button label="Agendar" type="submit" variant="small" /></Link>
            
          </div>
        </Link>
      ))
    }
  </div>
}

export default ProductsApiMaycon;