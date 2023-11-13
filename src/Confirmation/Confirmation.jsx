import React from 'react';
import styles from './Confirmation.module.scss';
import Confirm from '../assets/confirm.svg';

const Confirmation = ({ confirm, btnTxt, setValue }) => {
  return (
    <section className={styles.confirmContainer}>
      <div>
        <img src={Confirm} alt="Confirmação" />
        <button onClick={() => setValue(false)}>{btnTxt}</button>
        {confirm}
      </div>
    </section>
  );
};

export default Confirmation;
