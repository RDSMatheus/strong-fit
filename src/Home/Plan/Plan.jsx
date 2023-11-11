import React from 'react';
import styles from './Plan.module.scss';
import { Link } from 'react-router-dom';

const Plan = () => {
  return (
    <section className={styles.planBg} id="plan">
      <div className="container">
        <h1 className="title">Escolha seu Plano</h1>
        <div className={styles.planWrapper}>
          <div className={styles.planPremium}>
            <h2>plano premium</h2>
            <span>a partir de</span>
            <p>R$ 49,90</p>
            <ul>
              <li>Acesso à todas as áreas da academia.</li>
              <li>Primeira avaliação física gratuita.</li>
            </ul>
            <Link to="register/plano PREMIUM">inscreva-se</Link>
          </div>
          <div className={styles.planStrong}>
            <h2>plano strong</h2>
            <span>a partir de</span>
            <p>R$ 79,90</p>
            <ul>
              <li>Acesso à todas as áreas da academia.</li>
              <li>Escolha entre uma das modalidades de luta disponivel.</li>
              <li>Primeira avaliação física gratuita.</li>
            </ul>
            <button>inscreva-se</button>
          </div>
          <div className={styles.planFit}>
            <h2>plano fit</h2>
            <p>R$ 94,90</p>
            <ul>
              <li>Acesso apenas à musculacão.</li>
              <li>Primeira avaliação física gratuita.</li>
            </ul>
            <button>inscreva-se</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Plan;
