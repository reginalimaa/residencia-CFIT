'use client'

import './styles.css'

import Image from 'next/image';import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
              <h2>Limpeza de pele</h2>
              <p>Limpeza de Pele Avançada, usando técnicas especializadas para eliminar cravos e revitalizar sua pele.</p>
              <p>R$ 00,00</p>
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
              <h4>Sobre o produto ou serviço</h4>
              <p>A Limpeza de Pele Profissional é um tratamento dermatológico meticuloso e eficaz, projetado para restaurar a saúde e a 
                vitalidade da pele. Este procedimento é realizado em várias etapas, visando a desobstrução dos poros, a remoção de impurezas 
                e a promoção da renovação celular. É altamente recomendado para todos os tipos de pele e pode abordar preocupações específicas, 
                como acne, cravos, manchas e textura irregular.
              </p>
              <p>Etapas do procedimento</p>
              <ul>
                <p>
                  <li></li>
                </p>
              </ul>
            </div>

            <div>
              <h4>É bom você saber</h4>
              <ul>
                <li><QqOutlined /><p>Indicado para peles oleosa.</p></li>
                <li><QqOutlined /><p>É recomendado uma avaliação </p></li>
                <li><QqOutlined /><p>Resultado em três dias</p></li>
                <li><QqOutlined /><p>Alguma outra coisa</p></li>
              </ul>
            </div>

          </div>

        </section>

      </main>
    </>
  )

}