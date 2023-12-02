import React, { ReactNode } from 'react';

import './styles.css'

interface TitleProps {
  title?: string;
  children?: ReactNode;
}

const Title: React.FC<TitleProps> = ({ title, children }) => {
  const content = title || children || ''; // Use title if available, then fallback to children, and finally an empty string

  return (
    <div className='div-title'>
      <h1>{content}</h1>
    </div>
  );
};

export default Title;
