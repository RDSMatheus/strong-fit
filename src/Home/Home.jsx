import React from 'react';
import Main from './Main/Main';
import Facilities from './Facilities/Facilities';
import Plan from './Plan/Plan';
import Benefits from './Benefits/Benefits';
import HashRouting from '../HashRouting/HashRouting';

const Home = () => {
  return (
    <>
      <HashRouting />
      <Main />
      <Benefits />
      <Facilities />
      <Plan />
    </>
  );
};

export default Home;
