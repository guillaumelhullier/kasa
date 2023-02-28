import React from "react";
import Banner from "../../components/Banner/Banner";
import Cards from "../../components/Cards/Cards";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <div className="mainContainer">
      <div className="container">
        <Header />
        <Banner />
        <Cards />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
