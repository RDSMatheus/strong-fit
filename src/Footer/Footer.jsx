import React from 'react';
import Logo from '../assets/logo.svg';
import WhatsApp from '../assets/wpp.svg';
import Instagram from '../assets/instagram.svg';
import Facebook from '../assets/facebook.svg';
import Email from '../assets/email.svg';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footerBg}>
      <div className={`container ${styles.footerWrapper}`}>
        <div className={styles.logo}>
          <img src={Logo} alt="Logo da StrongFit" />
        </div>
        <div>
          <h2>Endereço</h2>
          <ul>
            <li>Rua Logo Ali, n°999</li>
            <li>Bairro Bem Ali</li>
            <li>Cariacica - ES</li>
            <li>Próximo à Mercearia 2 irmãos</li>
          </ul>
        </div>
        <div>
          <h2>Contato</h2>
          <ul>
            <li>
              <a href="#">
                <img src={WhatsApp} alt="" />
                <span>27 99999-9999</span>
              </a>
            </li>
            <li>
              <a href="#">
                <img src={Instagram} alt="" />
                <span>@strongfit</span>
              </a>
            </li>
            <li>
              <a href="#">
                <img src={Facebook} alt="" />
                <span>@strongfit</span>
              </a>
            </li>
            <li>
              <a href="#">
                <img src={Email} alt="" />
                <span>contato@strongfit.com</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
