import React from 'react';

import { Container, Content } from './styles';

import contactus from '../../../assets/contactus.svg';

const Footer: React.FC = () => {
  return (
    <Container>
      <Content>
        <div>
          <h4>Fale Conosco</h4>
          <span>
            Ligue 3003 4070 (Regiões Metropolitanas) ou 0800 940 0007 (Demais
            Regiões) | Horário de Atendimento: 08:00h às 20:00h.
          </span>
        </div>
        <img src={contactus} alt="Fale conosco" />
      </Content>
    </Container>
  );
};

export default Footer;
