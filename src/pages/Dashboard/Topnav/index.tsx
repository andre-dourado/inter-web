import React, { useState } from 'react';

import { Container, Content, List, ButtonNext } from './styles';

import Card from './Card';
import ButtonMore from './ButtonMore';

import transferImg from '../../../assets/transfer.svg';
import paymentsImg from '../../../assets/payments.svg';
import investimentImg from '../../../assets/investiment.svg';
import card from '../../../assets/card.svg';
import giftCard from '../../../assets/gift-card.svg';
import insurances from '../../../assets/insurances.svg';
import next from '../../../assets/next.svg';

const Header: React.FC = () => {
  const [active, setActive] = useState(false);

  return (
    <Container>
      <Content active={active}>
        <List active={active}>
          <Card icon={transferImg} alt="Transferência">
            Transferências
          </Card>

          <Card icon={paymentsImg} alt="Pagamentos">
            Pagamentos
          </Card>

          <Card icon={investimentImg} alt="Investimentos">
            Investimentos
          </Card>

          <Card icon={card} alt="Cartões">
            Cartões
          </Card>

          <Card icon={giftCard} alt="Gift Card">
            Gift Card
          </Card>

          <Card icon={insurances} alt="Seguros">
            Seguros
          </Card>
        </List>

        <div className="buttonMore">
          <ButtonMore
            onClick={() => {
              setActive(!active);
            }}
          />
        </div>

        <ButtonNext>
          <img src={next} alt="Next" />
        </ButtonNext>
      </Content>
    </Container>
  );
};

export default Header;
