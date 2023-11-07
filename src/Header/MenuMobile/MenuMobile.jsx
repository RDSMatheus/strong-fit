import React from 'react';
import styles from './MenuMobile.module.scss';
import MenuHamburguer from '../../assets/menu-hamburguer.svg';
import CloseMenu from '../../assets/fechar.svg';

const MenuMobile = () => {
  const [hamburguer, setHamburguer] = React.useState(false);
  return (
    <>
      <button
        className={styles.openMenuMobile}
        onClick={() => setHamburguer(!hamburguer)}
      >
        <img src={MenuHamburguer} alt="Icone do menu hamburguer" />
      </button>
      {hamburguer && (
        <div className={styles.menuMobileContainer}>
          <nav className={styles.menuMobile}>
            <button
              className={styles.closeMenuMobile}
              onClick={() => setHamburguer(!hamburguer)}
            >
              <img src={CloseMenu} alt="Icone fechar menu hamburguer" />
            </button>
            <ul>
              <li>Nossas Instalações</li>
              <li>Nossas Instalações</li>
              <li>Nossas Instalações</li>
              <li>Nossas Instalações</li>
            </ul>
          </nav>
        </div>
      )}
    </>
  );
};

export default MenuMobile;
