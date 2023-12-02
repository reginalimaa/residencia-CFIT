'use client'

import { useState } from 'react';
import './styles.css'
import Button from '../Button/button';
import Image from 'next/image';
import img from '../../src/img/foto-do-servico.png'

type PaymentOption = 'creditCard' | 'boleto' | 'pix';

const PaymentSelection = () => {
  const [expandedOption, setExpandedOption] = useState<PaymentOption | null>('creditCard');

  const handleOptionClick = (option: PaymentOption) => {
    setExpandedOption((prevOption) => (prevOption === option ? null : option));
  };

  return (
    <div>
      {/* Opção de cartão de crédito sempre expandida */}
      <div className='div-option-payment'>
        <input
          type="checkbox"
          id="creditCard"
          checked={expandedOption === 'creditCard'}
          onChange={() => handleOptionClick('creditCard')}
        />
        <label htmlFor="creditCard">Cartão de Crédito</label>

        {expandedOption === 'creditCard' && (
          <div >
  
            <form action="">
              
              <label className='input-estyle' htmlFor="">Número</label>
              <input  
                placeholder='' 
                type="text" 
                id="cardNumber" 
                name="cardNumber" 
              />

              <label htmlFor="">Nome do titular</label>
              <input  
                placeholder='' 
                type="text" 
                id="cardNumber" 
                name="cardNumber" 
              />

              <label htmlFor="">Data de validade</label>
              <input  
                placeholder='' 
                type="text" 
                id="cardNumber" 
                name="cardNumber" 
              />

              <label htmlFor="">CCV</label>
              <input  
                placeholder='' 
                type="text" 
                id="cardNumber" 
                name="cardNumber" 
              />

              <label htmlFor="">Parcelas</label>
              <select name="" id="">
                <option value="">Option 1</option>
                <option value="">Option 2</option>
                <option value="">Option 3</option>
              </select>
          
            </form>
          
          </div>
        )}
      </div>

      {/* Opção de boleto */}
      <div className='div-option-payment'>
        <input
          type="checkbox"
          id="boleto"
          checked={expandedOption === 'boleto'}
          onChange={() => handleOptionClick('boleto')}
        />
        <label htmlFor="boleto">Boleto</label>
      </div>

      {/* Opção de PIX */}
      <div className='div-option-payment'>
        <input
          type="checkbox"
          id="pix"
          checked={expandedOption === 'pix'}
          onChange={() => handleOptionClick('pix')}
        />
        <label htmlFor="pix">PIX</label>
      </div>

      <section className='resumo-compra'>
        
        <h3>Resumo da sua compra</h3>
        
        <div className='resumo-compra-itens'>
          <Image 
            src={img} 
            alt=''
            width={66}
            height={63}
          />
          <div className='resumo-compra-textos'>
            <span>Limpeza de pele</span>
            <p>Limpeza de Pele Avançada, usando técnicas especializadas para eliminar cravos e revitalizar sua pele. </p>
          </div>
          <p className='price'>R$ 00,00</p>
        </div>
      </section>

      <Button type='submit' label='Finalizar compra'> </Button>
    </div>

    
  );
};

export default PaymentSelection;
