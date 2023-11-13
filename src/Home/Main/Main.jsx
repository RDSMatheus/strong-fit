import React from 'react';
import styles from './Main.module.scss';
import { HashLink } from 'react-router-hash-link';

const Main = () => {
  return (
    <main id="home">
      <div className="container">
        <h1>a academia que mais investe em equipamentos da região</h1>
        <HashLink smooth to="/#plan" className={styles.btn}>
          conheça nossos planos
        </HashLink>
      </div>
    </main>
  );
};

export default Main;
