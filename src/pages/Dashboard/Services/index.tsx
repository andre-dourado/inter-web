import React from 'react';

import useWindowDimensions from '../../../hooks/useWindowDimensions';

import { Container, Content } from './styles';

import Statement from './Statement';
import Mastercard from './Mastercard';
import Platform from './Platform';

const Services: React.FC = () => {
  const screenSize = useWindowDimensions();

  return (
    <Container dimensions={screenSize}>
      <Content>
        <Statement />
        <Mastercard />
        <Platform />
      </Content>
    </Container>
  );
};

export default Services;
