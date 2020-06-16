import React from 'react';

import { Container, Circle } from './styles';

interface CardProps {
  icon: string;
  alt: string;
}

const Card: React.FC<CardProps> = ({ children, icon, alt }) => {
  return (
    <Container>
      <Circle>
        <img src={icon} alt={alt} />
      </Circle>
      <span>{children}</span>
    </Container>
  );
};

export default Card;
