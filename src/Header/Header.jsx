import React from 'react';
import Logo from '../assets/logo.svg';
import styles from './Header.module.scss';
import { NavLink } from 'react-router-dom';
import MenuMobile from './MenuMobile/MenuMobile';

const Header = () => {
  return (
    <header>
      <div className="container">
        <img src={Logo} alt="Strong Fit logo" />
        <MenuMobile />
        <nav className={styles.menu}>
          <ul>
            <li>
              <NavLink>Nossas Instalações</NavLink>
            </li>
            <li>
              <NavLink>Contato</NavLink>
            </li>
            <li>
              <NavLink>Aplicativo do Aluno</NavLink>
            </li>
            <li>
              <NavLink className={styles.btn}>Planos</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
