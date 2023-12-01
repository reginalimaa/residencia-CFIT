'use client'

// PaymentSelection.js

import { useState } from 'react';

type PaymentOption = 'creditCard' | 'boleto' | 'pix';

const PaymentSelection = () => {
  const [expandedOption, setExpandedOption] = useState<PaymentOption | null>('creditCard');

  const handleOptionClick = (option: PaymentOption) => {
    setExpandedOption((prevOption) => (prevOption === option ? null : option));
  };

  return (
    <div>
      {/* Opção de cartão de crédito sempre expandida */}
      <div>
        <input
          type="checkbox"
          id="creditCard"
          checked={expandedOption === 'creditCard'}
          onChange={() => handleOptionClick('creditCard')}
        />
        <label htmlFor="creditCard">Cartão de Crédito</label>
      </div>

      {/* Opção de boleto */}
      <div>
        <input
          type="checkbox"
          id="boleto"
          checked={expandedOption === 'boleto'}
          onChange={() => handleOptionClick('boleto')}
        />
        <label htmlFor="boleto">Boleto</label>
      </div>

      {/* Opção de PIX */}
      <div>
        <input
          type="checkbox"
          id="pix"
          checked={expandedOption === 'pix'}
          onChange={() => handleOptionClick('pix')}
        />
        <label htmlFor="pix">PIX</label>
      </div>

      {/* Renderizar formulário de cartão de crédito se a opção estiver selecionada */}
      {expandedOption === 'creditCard' && (
        <div>
          {/* Seu formulário de cartão de crédito aqui */}
          <label htmlFor="cardNumber">Número do Cartão:</label>
          <input type="text" id="cardNumber" name="cardNumber" />
          {/* Outros campos do formulário de cartão de crédito */}
        </div>
      )}

      {/* Outros elementos adicionais para outras opções selecionadas */}
    </div>
  );
};

export default PaymentSelection;
