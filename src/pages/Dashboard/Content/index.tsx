import React from 'react';

import { Container, MainContent } from './styles';

import shopping from '../../../assets/shopping.svg';
import next from '../../../assets/next.svg';
import home from '../../../assets/home.svg';
import entertainment from '../../../assets/entertainment.svg';
import technology from '../../../assets/technology.svg';
import transport from '../../../assets/transport.svg';
import sport from '../../../assets/sport.svg';
import canihelpyouAvatar from '../../../assets/canihelpyou-avatar.png';

const Header: React.FC = () => {
  return (
    <Container>
      <MainContent>
        <div className="first">
          <div className="card">
            <img src={shopping} alt="Shopping Cart" />
            <div>
              <h3>Shopping</h3>
              <span>Aproveite os produtos com cashback!</span>
            </div>
            <img src={next} alt="Next" />
          </div>

          <ul>
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
          </ul>
        </div>

        <div className="divider" />

        <div className="second">
          <span>Central de ajuda</span>
          <div className="card">
            <div className="canihelpyou">
              <img
                className="circle"
                src={canihelpyouAvatar}
                alt="Shopping Cart"
              />
            </div>
            <span>Oi, André. Posso te ajudar?</span>
            <div className="circle next">
              <img src={next} alt="Next" />
            </div>
          </div>
        </div>
      </MainContent>
    </Container>
  );
};

export default Header;
