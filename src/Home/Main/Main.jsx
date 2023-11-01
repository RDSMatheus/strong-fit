import React from 'react';
import styles from './Main.module.scss';

const Main = () => {
  return (
    <main>
      <div className="container">
        <h1>a academia que mais investe em equipamentos da região</h1>
        <button className={styles.btn}>conheça nossos planos</button>
      </div>
    </main>
  );
};

export default Main;
