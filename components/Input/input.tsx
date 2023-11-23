import { InputHTMLAttributes, forwardRef } from "react";

import './styles'


type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ placeholder='', type ='text', name = '', ...props}, ref) => {
    return (
      <>
        <div>
          <Input placeholder={placeholder} type={type} name={name} ref={ref} />
        </div>
      </>
    );
  }
);
