import React from 'react';
import styles from './FormError.module.scss';
import Close from '../assets/fechar.svg';
import ErrorImg from '../assets/error.svg';

const FormError = ({ error, setValue }) => {
  return (
    <section className={styles.containerBG}>
      <div>
        <img src={ErrorImg} alt="Error" />
        <button onClick={() => setValue(false)}>
          <img src={Close} alt="Botão pra fechar o modal" />
        </button>
        {error}
      </div>
    </section>
  );
};

export default FormError;
