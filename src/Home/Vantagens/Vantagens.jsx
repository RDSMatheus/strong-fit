import React from 'react';
import Supino from '../../assets/supino.svg';
import Gloves from '../../assets/gloves.svg';
import Bike from '../../assets/bike.svg';
import Time from '../../assets/time.svg';
import styles from './Vantagens.module.scss';

const Vantagens = () => {
  return (
    <section>
      <div className={styles.containerVantagens}>
        <h1 className="title">Vantagens </h1>
        <ul>
          <li>
            <img src={Supino} alt="Supino ícone" />
            <h3>mais de 100 equipamentos</h3>
            <p>
              Nada de filas na hora de realizar sua série,contamos com os
              melhores equipamentos como os da Lion Fitness.
            </p>
          </li>
          <li>
            <img src={Time} alt="Relógio ícone" />
            <h3>ótimos Horários</h3>
            <p>
              Funcionamos até 19 horas por dia, abrimos 7 dias na semana,
              inclusive em feriados.
            </p>
          </li>
          <li>
            <img src={Gloves} alt="Luvas ícone" />
            <h3>lutas</h3>
            <p>
              Oferecemos aulas de luta para aqueles que desejam explorar novas
              modalidades esportivas.
            </p>
          </li>
          <li>
            <img src={Bike} alt="Bicicleta ícone" />
            <h3>Equipamentos aérobicos</h3>
            <p>
              Possuímos uma grande variedade de equipamentos para o seu cardio,
              desde bicletas até escadas.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Vantagens;
