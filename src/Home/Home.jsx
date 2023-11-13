import React from 'react';
import Main from './Main/Main';
import Facilities from './Facilities/Facilities';
import Plan from './Plan/Plan';
import Benefits from './Benefits/Benefits';
import Head from '../Head';

const Home = () => {
  return (
    <>
      <Head title="Home" description="Página inicial do website StrongFit" />
      <Main />
      <Benefits />
      <Facilities />
      <Plan />
    </>
  );
};

export default Home;
