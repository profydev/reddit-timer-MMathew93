import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../images_and_logos/logo.svg';
import '../Styling/Header.css';

function Header() {
  return (
    <>
      <header>
        <Link to="/">
          <img className="Logo" src={Logo} alt="Reddit Timer Logo" />
        </Link>
        <nav>
          <Link className="NavLinks" to="/search/javascript">
            Search
          </Link>
          <Link className="NavLinks" to="/#how-it-works">
            How it works
          </Link>
          <Link className="NavLinks" to="/#about">
            About
          </Link>
        </nav>
      </header>
    </>
  );
}

export default Header;
