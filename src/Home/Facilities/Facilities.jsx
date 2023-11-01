import React from 'react';
import styles from './Facilities.module.scss';
import Pic1 from '../../assets/facilities-1.jpg';

const Facilities = () => {
  return (
    <section className={styles.facilitiesBg}>
      <div className={`container ${styles.facilitiesGrid}`}>
        <h1 className="title">Conheça nossas instalações</h1>
        <div className={styles.facilitiesInfo}>
          <div>
            <h2>Equipamentos de Última Geração</h2>
            <p>
              Contamos com uma vasta gama de equipamentos modernos e de alta
              qualidade, adequados para todos os níveis de condicionamento
              físico. Seja você um iniciante em busca de resultados iniciais ou
              um atleta experiente, temos tudo o que você precisa.
            </p>
          </div>
          <div>
            <h2>Espaço Amplo e Iluminado</h2>
            <p>
              Nossas instalações oferecem uma atmosfera convidativa e
              energizante. Com amplos espaços inundados de luz natural, você se
              sentirá revigorado enquanto se exercita.
            </p>
          </div>
        </div>
        <div className={styles.facilitiesCarousel}>
          <img src={Pic1} alt="Foto das instalações da academia" />
        </div>
      </div>
    </section>
  );
};

export default Facilities;
