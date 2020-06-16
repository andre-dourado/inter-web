import React, { useState, useRef } from 'react';

import more from '../../../assets/more.svg';
import logo from '../../../assets/logo-banco-inter.png';

import { Container, Content, SubHeader, SimulatorButton } from './styles';
import { useOnClickOutside } from '../../../hooks/useOnClickOutside';

import MenuButton from './MenuButton';
import Sidenav from '../Sidenav';

const Header: React.FC = () => {
  const [open, setOpen] = useState(false);
  const divRef = useRef<HTMLDivElement>(null);

  useOnClickOutside(divRef, () => setOpen(false));

  return (
    <>
      <Container>
        <Content>
          <div className="menuButton" ref={divRef}>
            <MenuButton open={open} setOpen={setOpen} />
            <Sidenav open={open} />
          </div>

          <div className="logo">
            <img src={logo} alt="Logo" />
            <h4>Internet Banking</h4>
          </div>

          <div className="buttons">
            <SimulatorButton>Simulador renda fixa</SimulatorButton>
            <button className="profile" type="button">
              AF
            </button>
            <img className="more" src={more} alt="Mais" />
          </div>
        </Content>
      </Container>
      <SubHeader />
    </>
  );
};

export default Header;
