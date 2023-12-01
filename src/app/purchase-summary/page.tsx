'use client'

import Image from 'next/image';
import './styles.css'
import PhotoProduct from '../../img/foto-do-servico.png'
import { RestOutlined } from '@ant-design/icons';
import Button from '../../../components/Button/button';

export default function Payment(){
  return(
    <main>
      <section className='summary-service'>
        <div className='summary-service-div1'>
          <Image className='image' src={PhotoProduct} alt=''></Image>
          <div>
            <h3>Limpeza de pele</h3>
            <p>Limpeza de Pele Avançada, usando técnicas especializadas para eliminar cravos e revitalizar sua pele.</p>
          </div>
        </div>

        <div className='date-time'>
          <h3>Confira data e horário</h3>
          <p><span>Data:</span>09/10/2023</p>
          <p><span>Horário:</span>15:00</p>
        </div>

        <div className='decision'>
          <RestOutlined style={{ fontSize: '20px', color: 'blcack' }}/>
          <span>R$ 00,00</span>
        </div>
      </section>

      <section className='subtotal-discount'>
        <div className='subtotal-price'>
          <span>Subtotal</span>
          <span>R$ 00,00</span>
        </div>

        <div className='aplication-discount'>
          <p>Possui cupom de desconto?</p>
          <div className='input-button'>
            <input type="text" />
            <Button type='submit' variant='small' label='Aplicar'></Button>
          </div>
        </div>

      </section>
    </main>
  )
}