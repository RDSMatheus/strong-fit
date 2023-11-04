import React from 'react';
import styles from './MenuMobile.module.scss';

const MenuMobile = () => {
  const [hamburguer, setHamburguer] = React.useState(false);
  return (
    <div>
      <button onClick={() => setHamburguer(!hamburguer)}>abrir</button>
      {hamburguer && (
        <nav className={styles.menuMobile}>
          <ul>
            <li>Nossas Instalações</li>
            <li>Nossas Instalações</li>
            <li>Nossas Instalações</li>
            <li>Nossas Instalações</li>
          </ul>
        </nav>
      )}
    </div>
  );
};

export default MenuMobile;
