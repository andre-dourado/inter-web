import React from 'react';

import { Container, MainContent } from './styles';

import Offers from './Offers';
import Shopping from './Shopping';
import Categories from './Categories';

const Header: React.FC = () => {
  return (
    <Container>
      <MainContent>
        <div className="first">
          <Shopping />
          <Categories />
        </div>

        <div className="divider" />
        <Offers />
      </MainContent>
    </Container>
  );
};

export default Header;
