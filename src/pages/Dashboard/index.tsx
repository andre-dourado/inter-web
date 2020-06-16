import React from 'react';

import Header from './Header';
import Topnav from './Topnav';
import Sidenav from './Sidenav';
import Services from './Services';
import Content from './Content';
import CanIHelpYou from './CanIHelpYou';
import Footer from './Footer';

import { Container } from './styles';

const Dashboard: React.FC = () => {
  return (
    <Container>
      <Header />
      <div className="content">
        <div className="side">
          <Sidenav />
          <CanIHelpYou />
        </div>

        <div className="main">
          <Topnav />
          <Services />
          <Content />
          <div className="canIhelpYou">
            <CanIHelpYou />
          </div>
        </div>
      </div>

      <Footer />
    </Container>
  );
};

export default Dashboard;
