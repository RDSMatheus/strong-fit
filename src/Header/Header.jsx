import React from 'react';
import Logo from '../assets/logo.svg';
import styles from './Header.module.scss';
import { NavLink, Route, Routes } from 'react-router-dom';
import MenuMobile from './MenuMobile/MenuMobile';
import { NavHashLink } from 'react-router-hash-link';
import Contact from '../Contact/Contact';

const Header = () => {
  <Routes>
    <Route path="contato" element={<Contact />} />
  </Routes>;

  return (
    <header>
      <div className="container">
        <NavHashLink smooth to="/#home">
          <img src={Logo} alt="Strong Fit logo" />
        </NavHashLink>

        <MenuMobile />
        <nav className={styles.menu}>
          <ul>
            <li>
              <NavHashLink smooth to="/#facilities">
                Nossas Instalações
              </NavHashLink>
            </li>
            <li>
              <NavLink to="contato">Contato</NavLink>
            </li>
            <li>
              <NavHashLink smooth to="/#benefits">
                Vantagens
              </NavHashLink>
            </li>
            <li>
              <NavHashLink smooth className={styles.btn} to="/#plan">
                Planos
              </NavHashLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
