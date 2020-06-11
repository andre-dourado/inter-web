import React from 'react';

import { Container, HeaderContent } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <HeaderContent>
        <div>
          <div className="balance">
            <strong>Saldo em conta</strong>
            <h1>
              <span>R$</span> 0,00
            </h1>
            <span>Atualizado neste momento</span>
            <div className="slide">
              <div />
              <div />
              <div />
            </div>
          </div>

          <button className="view" type="button">
            <div className="icon" />
          </button>
        </div>
        <button className="profile" type="button">
          AF
        </button>
      </HeaderContent>
    </Container>
  );
};

export default Header;
