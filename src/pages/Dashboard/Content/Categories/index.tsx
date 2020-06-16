import React from 'react';

import { Container } from './styles';

import home from '../../../../assets/home.svg';
import entertainment from '../../../../assets/entertainment.svg';
import technology from '../../../../assets/technology.svg';
import transport from '../../../../assets/transport.svg';
import sport from '../../../../assets/sport.svg';

const Categories: React.FC = () => {
  return (
    <Container>
      <li>
        <div className="circle">
          <img src={home} alt="Casa" />
        </div>
        <span>Casa</span>
      </li>

      <li>
        <div className="circle">
          <img src={entertainment} alt="Entretenimento" />
        </div>
        <span>Entretenimento</span>
      </li>

      <li>
        <div className="circle">
          <img src={technology} alt="Tecnologia" />
        </div>
        <span>Tecnologia</span>
      </li>

      <li>
        <div className="circle">
          <img src={transport} alt="Transporte" />
        </div>
        <span>Transporte</span>
      </li>

      <li>
        <div className="circle">
          <img src={sport} alt="Esporte" />
        </div>
        <span>Esporte</span>
      </li>
    </Container>
  );
};

export default Categories;
