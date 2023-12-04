/*

'use client'

import './styles.css'

import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PhotoProduct from '../../img/foto-do-servico.png'

import { QqOutlined } from '@ant-design/icons';
import { HeartOutlined } from '@ant-design/icons';
import { Button } from '../../../components/Button/styles';
import Header from '../../../components/Header/Header';


export default function ProductId(){
  return(
    <>

    <main>
        <section>

          <Header></Header>
          
          <div className='service-apresentation'>
            <Image className='image-productid' src={PhotoProduct} alt="foto" />
            <div className="product-informations">
              <h1>Limpeza de pele</h1>
              <p>Limpeza de Pele Avançada, usando técnicas especializadas para eliminar cravos e revitalizar sua pele.</p>
              <p><b>R$ 00,00</b></p>
            </div>
          </div>
          
          <div className="product-buttons">
            <HeartOutlined 
              style={{ fontSize: '30px', 
                       width: '30px', 
                       height: '30px', 

                       padding: "6px"
                      }}
            />
            <Button
              type="button" 
              variant="average" 
            > AGENDAR HORÁRIO </Button>
          </div>
          
          <div className="about-products">

            <div className='description-products'>
              <h3>Sobre o produto ou serviço</h3>
              <p>A Limpeza de Pele Profissional é um tratamento dermatológico meticuloso e eficaz, projetado para restaurar a saúde e a 
                vitalidade da pele. Este procedimento é realizado em várias etapas, visando a desobstrução dos poros, a remoção de impurezas 
                e a promoção da renovação celular. É altamente recomendado para todos os tipos de pele e pode abordar preocupações específicas, 
                como acne, cravos, manchas e textura irregular.
              </p>
              <h4>Etapas do procedimento</h4>
              <ol>
                <p>
                  <li>Avaliação Inicial da Pele: O tratamento começa com uma avaliação cuidadosa da condição da pele, identificando áreas problemáticas e necessidades específicas.</li>
                  <li>Limpeza Profunda: Utilizando um limpador suave, a pele é minuciosamente limpa para remover maquiagem, poluentes e sebo acumulado.</li>
                  <li>Esfoliação Avançada: Uma esfoliação de qualidade é aplicada para remover células mortas da superfície da pele, revelando uma pele mais fresca e radiante.</li>
                  <li>Vaporização Controlada: O uso controlado de vapor abre os poros, facilitando a extração de cravos e comedões de forma higiênica e menos desconfortável.</li>
                  <li>Extração de Comedões: O profissional realiza a remoção cuidadosa de cravos e impurezas, utilizando ferramentas esterilizadas e técnicas seguras.</li>
                  <li>Máscara Personalizada: Uma máscara facial especialmente selecionada para o tipo de pele e preocupações é aplicada, proporcionando hidratação, nutrição ou tratamento específico.</li>
                  <li>Massagem Terapêutica: Uma massagem facial relaxante melhora a circulação sanguínea e ajuda a absorção dos produtos.</li>
                  <li>Tonificação e Hidratação: A aplicação de um tônico equilibra o pH da pele e fecha os poros, seguido por um hidratante adequado para manter a pele nutrida e protegida.</li>
                </p>
              </ol>
            </div>

            <div>
              <h4>É bom você saber</h4>
              <ul>
                <div className='teste' >
                  <li><QqOutlined /><p>Indicado para peles oleosa.</p></li>
                </div>
                
                <div className='teste' >
                  <li><QqOutlined /><p>É recomendado uma avaliação </p></li>
                </div>

                <div className='teste' >
                  <li><QqOutlined /><p>Resultado em três dias</p></li>
                </div>

                <div className='teste' >
                  <li><QqOutlined /><p>Alguma outra coisa</p></li>
                </div>    
              </ul>
            </div>

          </div>

        </section>

      </main>
    </>
  )

}
*/

import React from "react";

const SingleProduct = ({ searchParams }) => {
  console.log(searchParams._id)
  
  return <div>Sigle Product</div>
}

export default SingleProduct;