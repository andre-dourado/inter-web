import React from 'react';

import HomeEquity from './HomeEquity';
import Loan from './Loan';

import { Container } from './styles';

const Offers: React.FC = () => {
  return (
    <Container>
      <HomeEquity />

      <Loan />
    </Container>
  );
};

export default Offers;
