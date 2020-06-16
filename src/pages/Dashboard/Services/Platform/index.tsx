import React from 'react';

import pai from '../../../../assets/pai.png';
import noView from '../../../../assets/no-view.svg';
import graphicPai from '../../../../assets/graphic-pai.png';

import { Container } from './styles';

const Platform: React.FC = () => {
  return (
    <Container>
      <div className="header">
        <div>
          <img src={pai} alt="Extrato" />
          <span>Plataforma Aberta Inter</span>
        </div>
        <button type="button">
          <img src={noView} alt="Não visualizar" />
        </button>
      </div>

      <div className="main">
        <img src={graphicPai} alt="Gráfico da Plataforma Aberta Inter" />
        <div>
          <div className="income">
            <p>Total investido</p>
            <span>R$ 0,00</span>
          </div>
          <div className="outcome">
            <p>Evolução no mês</p>
            <span>R$ 0,00</span>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Platform;
