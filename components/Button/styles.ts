// ButtonStyles.ts
import styled, { css } from 'styled-components';

interface ButtonProps {
  variant?: 'default' | 'small' | 'average';
}

export const defaultStyles = css`
  width: 343px;
  height: 52px;
  font-size: 16px;
  color: white;
  font-weight: 700;
`;

export const smallStyles = css`
  width: 124px;
  height: 24px;
  font-size: 12px;
  color: black;
  font-weight: 600;
`;

export const averageStyles = css`
  width: 290px;
  height: 38px;
  /* Adicione outras propriedades específicas da variante 'average' aqui, se necessário */
`;

export const Button = styled.button<ButtonProps>`
  border: none;
  background-color: #88D498;

  ${({ variant }) => {
    switch (variant) {
      case 'small':
        return smallStyles;
      case 'average':
        return averageStyles;
      default:
        return defaultStyles;
    }
  }}
`;
