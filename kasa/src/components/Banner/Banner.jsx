import React from "react";
import CssBanner from "./Banner.module.css";
import { useLocation } from "react-router-dom";
import homeBannerImg from "../../assets/banhome.jpg";
import aboutBannerImg from "../../assets/banabout.jpg";

function Banner() {
  const path = useLocation().pathname; //Ce hook définit la banière appropriée selon la page où on se trouve
  const location = path.split("/")[1];

  return (
    //on utilise ternaire ici
    <div>
      {location === "about" ? ( //si l'on est sur page 'à propos' alors
        <section className={CssBanner.banner}>
          <div className={CssBanner.imgContainer}>
            <img
              src={aboutBannerImg}
              alt="chaine de montagnes enneigée"
              className={CssBanner.img}
            />
          </div>
        </section>
      ) : (
        <section className={CssBanner.banner}>
          <div className={CssBanner.imgContainerHome}>
            <img
              src={homeBannerImg}
              alt="cote rocheuse bord de mer"
              className={CssBanner.img}
            />
            <h1 className={CssBanner.title}>Chez vous, partout et ailleurs</h1>
          </div>
        </section>
      )}
    </div>
  );
}

export default Banner;
