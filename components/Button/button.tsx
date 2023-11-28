// Button.tsx
import React from 'react';
import * as S from './styles';

interface MyButtonProps {
  label: string;
  type: "button" | "submit" | "reset";
  variant?: "default" | "small" | "average";
  children?: React.ReactNode;
}

function Button({ label, type, variant = "default" }: MyButtonProps) {
  return (
    <S.Button type={type} variant={variant}>
      {label}
    </S.Button>
  );
}

export default Button;
