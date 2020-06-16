import React from 'react';

import card from '../../../../assets/card.svg';
import noView from '../../../../assets/no-view.svg';
import mastercard from '../../../../assets/mastercard.png';

import { Container } from './styles';

const Mastercard: React.FC = () => {
  return (
    <Container>
      <div className="header">
        <div>
          <img src={card} alt="Cartão" />
          <span>Mastercard 8430</span>
        </div>
        <button type="button">
          <img src={noView} alt="Não visualizar" />
        </button>
      </div>

      <div className="main">
        <img src={mastercard} alt="Mastercard" />
        <span>Seu cartão é Mastercard e sem anuidade!</span>
      </div>
    </Container>
  );
};

export default Mastercard;
