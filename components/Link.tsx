import React from 'react';
import styled from 'styled-components';

interface MyLinkProps {
  link: string;
}

export function Link({ link = '' }: MyLinkProps) {
  return (
    <StyledLinkCustom.a href={link}>Meu Link</StyledLinkCustom.a>
  );
}

const StyledLinkCustom = styled.a`
  text-decoration: none; 
  font-size: 16px; 
  color: blue; 
  font-weight: bold; 
  margin: 10px 0;
`

export default Link;

