import React from 'react';

import noView from '../../../assets/no-view.svg';
import investiment from '../../../assets/investiment-white.svg';
import digitalAccount from '../../../assets/digital-account.svg';
import insurances from '../../../assets/insurances.svg';
import credit from '../../../assets/credit.svg';
import idvtm from '../../../assets/idvtm.svg';
import recharge from '../../../assets/recharge.svg';
import safety from '../../../assets/safety.svg';
import more from '../../../assets/more.svg';

import {
  Container,
  Content,
  Balance,
  Investment,
  List,
  Circle,
} from './styles';

interface Props {
  open?: boolean;
}

const Menu: React.FC<Props> = ({ open = true }) => {
  return (
    <Container open={open}>
      <Content>
        <Balance>
          <div>
            <span>Saldo em conta</span>
            <h4>
              <span>R$</span> 765,59
            </h4>
          </div>
          <button type="button">
            <img src={noView} alt="Não Visualizar" />
          </button>
        </Balance>

        <Investment>
          <span>Ver total investido</span>
          <img src={investiment} alt="Gráfico" />
        </Investment>

        <List>
          <li>
            <div>
              <div>
                <Circle className="circle">
                  <img src={digitalAccount} alt="Conta digital" />
                </Circle>
                <span>Conta digital</span>
              </div>
              <img src={more} alt="Mais" />
            </div>
          </li>

          <li>
            <div>
              <div>
                <Circle className="circle">
                  <img src={credit} alt="Crédito" />
                </Circle>
                <span>Crédito</span>
              </div>
              <img src={more} alt="Mais" />
            </div>
          </li>

          <li>
            <div>
              <div>
                <Circle className="circle">
                  <img src={investiment} alt="Investimentos" />
                </Circle>
                <span>Investimentos</span>
              </div>
              <img src={more} alt="Mais" />
            </div>
          </li>

          <li>
            <div>
              <div>
                <Circle className="circle">
                  <img src={idvtm} alt="IDTVM" />
                </Circle>
                <span>IDTVM</span>
              </div>
              <img src={more} alt="Mais" />
            </div>
          </li>

          <li>
            <div>
              <div>
                <Circle className="circle">
                  <img src={insurances} alt="Seguros" />
                </Circle>
                <span>Seguros</span>
              </div>
              <img src={more} alt="Mais" />
            </div>
          </li>

          <li>
            <div>
              <div>
                <Circle className="circle">
                  <img src={recharge} alt="Recarga de celular" />
                </Circle>
                <span>Recarga de celular</span>
              </div>
              <img src={more} alt="Mais" />
            </div>
          </li>

          <li>
            <div>
              <div>
                <Circle className="circle">
                  <img src={safety} alt="Segurança" />
                </Circle>
                <span>Sua segurança</span>
              </div>
              <img src={more} alt="Mais" />
            </div>
          </li>
        </List>
      </Content>
    </Container>
  );
};
export default Menu;
