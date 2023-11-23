import { lighten, modularScale } from 'polished'
import styled from 'styled-components';

export const Label = styled.label`
  color: black;
  font-size: 2rem;
  margin-botton: 0.8rem;
`

export const  Input = styled.input`
  border-radius: 5px;
  width: 326px;
  height: 36px;
  border: 0.5px solid;
  margin-top: 15px ;
  padding: 5px;

  }

  &:focus {
    border-color: green;
    outline: 4px solid ${lighten(8.2, 'green')};
  }

  &::placeholder {
    color: #888888;
  }
`