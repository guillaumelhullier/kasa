/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { Link } from "react-router-dom";
import Css404 from "./Error404.module.css";

const NotFound = () => {
  return (
    <div className="mainContainer">
      <div className="container">
        {/*Envoi vers le composant Header */}
        <Header />
        <div className={Css404.error404}>
          <h1 className={Css404.h1404}>404</h1>
          <p className={Css404.p404}>
            Oups ! La page que vous me demandez n'existe pas.
          </p>
          <Link to="/" className={Css404.a404}>
            Retourner sur la page d'accueil
          </Link>
        </div>
      </div>
      {/*Envoi vers le composant Footer */}
      <Footer />
    </div>
  );
};

export default NotFound;
