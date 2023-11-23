import styled, { css } from 'styled-components';

interface ButtonProps {
  variant?: 'default' | 'small';
}

const defaultStyles = css`
  width: 343px;
  height: 52px;
  margin-top: 60px;
  margin-bottom: 40px;
  font-size: 16px;
  color: white;
  font-weight: 700;
`;

const smallStyles = css`
  width: 124px;
  height: 24px;
  font-size: 12px;
  color: black;
  font-weight: 600;
  
`;

export const Button = styled.button<ButtonProps>`
  border: none;
  background-color: #88D498;

  
  

  ${({ variant }) => (variant === 'small' ? smallStyles : defaultStyles)}
`;