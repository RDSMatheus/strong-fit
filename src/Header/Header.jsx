import React from 'react';
import Logo from '../assets/logo.svg';
import styles from './Header.module.scss';
import { NavLink } from 'react-router-dom';
import MenuMobile from './MenuMobile/MenuMobile';

const Header = () => {
  return (
    <header>
      <div className="container">
        <NavLink to="/#home">
          <img src={Logo} alt="Strong Fit logo" />
        </NavLink>

        <MenuMobile />
        <nav className={styles.menu}>
          <ul>
            <li>
              <NavLink to="/#facilities">Nossas Instalações</NavLink>
            </li>
            <li>
              <NavLink to="contato">Contato</NavLink>
            </li>
            <li>
              <NavLink to="/#benefits">Vantagens</NavLink>
            </li>
            <li>
              <NavLink className={styles.btn} to="/#plan">
                Planos
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
