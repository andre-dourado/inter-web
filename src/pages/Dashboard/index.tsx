import React from 'react';

import Header from './Header';
import Topnav from './Topnav';
import Services from './Services';
import Content from './Content';
import Footer from './Footer';

const Dashboard: React.FC = () => {
  return (
    <>
      <Header />
      <Topnav />
      <Services />
      <Content />
      <Footer />
    </>
  );
};

export default Dashboard;
