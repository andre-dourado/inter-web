import React from 'react';

import statement from '../../../../assets/statement.svg';
import noView from '../../../../assets/no-view.svg';
import graphicStatement from '../../../../assets/graphic-statement.svg';

import { Container } from './styles';

const Statement: React.FC = () => {
  return (
    <Container>
      <div className="header">
        <div>
          <img src={statement} alt="Extrato" />
          <span>Extrato</span>
        </div>
        <button type="button">
          <img src={noView} alt="Não visualizar" />
        </button>
      </div>

      <div className="main">
        <img src={graphicStatement} alt="Gráfico do Extrato" />
        <div>
          <div className="income">
            <p>Receita - Maio</p>
            <span>R$ 8.552,22</span>
          </div>
          <div className="outcome">
            <p>Despesas - Maio</p>
            <span>R$ 7.948,55</span>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Statement;
