import React from 'react';
import ErrorImg from '../assets/error404.png';
import { Link } from 'react-router-dom';
import styles from './Error404.module.scss';
import Head from '../Head';

const Error404 = () => {
  return (
    <div className={styles.error404}>
      <Head title="404" description="Página de erro 404 do website StrongFit" />
      <img src={ErrorImg} alt="Erro 404" />
      <Link to="/">Home</Link>
    </div>
  );
};

export default Error404;
