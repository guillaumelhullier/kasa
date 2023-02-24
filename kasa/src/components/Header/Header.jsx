import React from "react";
import CssHeader from "./Header.module.css";
import Logo from "../../assets/logoHeader.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className={CssHeader.header}>
      <img src={Logo} alt="Logo de Kasa" className={CssHeader.logoHeader} />
      <nav className={CssHeader.navHeader}>
        {/**Link renvoie vers pages accueil et à propos */}
        <Link to="/" className={CssHeader.navHome}>
          Accueil
        </Link>
        <Link to="/about" className={CssHeader.navAbout}>
          A propos
        </Link>
      </nav>
    </header>
  );
};

export default Header;
