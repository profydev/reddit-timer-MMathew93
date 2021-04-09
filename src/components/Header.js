import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../images_and_logos/logo.svg';
import styles from '../Styling/Header.module.css';

function Header() {
  return (
    <>
      <header className={styles.header}>
        <Link to="/">
          <img className={styles.Logo} src={Logo} alt="Reddit Timer Logo" />
        </Link>
        <nav>
          <Link className={styles.NavLinks} to="/search/javascript">
            Search
          </Link>
          <Link className={styles.NavLinks} to="/how-it-works">
            How it works
          </Link>
          <Link className={styles.NavLinks} to="/about">
            About
          </Link>
        </nav>
      </header>
    </>
  );
}

export default Header;
