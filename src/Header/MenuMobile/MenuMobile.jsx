import React from 'react';
import styles from './MenuMobile.module.scss';

const MenuMobile = () => {
  const [hamburguer, setHamburguer] = React.useState(false);
  return (
    <>
      <button onClick={() => setHamburguer(!hamburguer)}>abrir</button>
      {hamburguer && (
        <nav>
          <ul>
            <li>Nossas Instalações</li>
            <li>Nossas Instalações</li>
            <li>Nossas Instalações</li>
            <li>Nossas Instalações</li>
          </ul>
        </nav>
      )}
    </>
  );
};

export default MenuMobile;
