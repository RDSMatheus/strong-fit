import React from 'react';
import styles from './MenuMobile.module.scss';
import MenuHamburguer from '../../assets/menu-hamburguer.svg';
import CloseMenu from '../../assets/fechar.svg';
import { NavLink } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';

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
              <li>
                <NavHashLink
                  smooth
                  to="/#facilities"
                  onClick={() => setHamburguer(!hamburguer)}
                >
                  Nossas Instalações
                </NavHashLink>
              </li>
              <li>
                <NavLink
                  to="contato"
                  onClick={() => setHamburguer(!hamburguer)}
                >
                  Contato
                </NavLink>
              </li>
              <li>
                <NavHashLink
                  smooth
                  to="/#benefits"
                  onClick={() => setHamburguer(!hamburguer)}
                >
                  Vantagens
                </NavHashLink>
              </li>
              <li>
                <NavHashLink
                  smooth
                  className={styles.btn}
                  to="/#plan"
                  onClick={() => setHamburguer(!hamburguer)}
                >
                  Planos
                </NavHashLink>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </>
  );
};

export default MenuMobile;
