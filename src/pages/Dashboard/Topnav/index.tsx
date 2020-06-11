import React from 'react';

import { Container, Content } from './styles';

import transferImg from '../../../assets/transfer.svg';
import paymentsImg from '../../../assets/payments.svg';
import investimentImg from '../../../assets/investiment.svg';
import moreImg from '../../../assets/more.svg';

const Header: React.FC = () => {
  return (
    <Container>
        <Content>
            <ul>
                <li className="card">
                    <div className="circle">
                        <img src={transferImg} alt="Transferência"/>
                    </div>
                    <span>Transferências</span>
                </li>
                <li className="card">
                    <div className="circle">
                        <img src={paymentsImg} alt="Pagamentos" />
                    </div>
                    <span>Pagamentos</span>
                </li>
                <li className="card">
                    <div className="circle">
                        <img src={investimentImg} alt="Investimentos" />
                    </div>
                    <span>Investimentos</span>
                </li>
            </ul>

            <button className="more">
                <img src={moreImg} alt="Mais" />
            </button>
        </Content>
        <div className="back"></div>
    </Container>
  );
}

export default Header;
