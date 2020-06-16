import React from 'react';

import nortonSeal from '../../../assets/norton-seal.png';

import { Container, ContactUs, Claims } from './styles';

const Footer: React.FC = () => {
  return (
    <Container>
      <ContactUs>
        <div className="content">
          <div>
            <h4>Fale Conosco</h4>
            <span>
              Ligue 3003 4070 (Regiões Metropolitanas) ou 0800 940 0007 (Demais
              Regiões) | Horário de Atendimento: 08:00h às 20:00h.
            </span>
          </div>
          <span>® Todos os direitos reservados</span>
        </div>
      </ContactUs>
      <Claims>
        <div className="content">
          <div>
            <h4>
              Para reclamações, sugestões ou cancelamento de produtos e
              serviços:
            </h4>
            <span>Central de Relacionamento: 3003 4070 / 0800 940 0007</span>
            <span>Deficiente de Fala e Audição: 0800 979 7099</span>
          </div>
          <div>
            <img src={nortonSeal} alt="Selo Norton" />
            <span>site seguro</span>
          </div>
        </div>
      </Claims>
    </Container>
  );
};

export default Footer;
