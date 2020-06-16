import React from 'react';

import shopping from '../../../../assets/shopping.svg';
import next from '../../../../assets/next.svg';

import { Container } from './styles';

const Shopping: React.FC = () => {
  return (
    <Container>
      <div>
        <img src={shopping} alt="Shopping Cart" />
        <div>
          <h4>Shopping</h4>
          <span>Aproveite os produtos com cashback!</span>
        </div>
      </div>
      <img src={next} alt="Next" />
    </Container>
  );
};

export default Shopping;
