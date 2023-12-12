import React from "react";
import Header from "../components/Header";
import Text from "../components/Text";
import Cards from "../components/Cards";

const Home = () => {
  return (
    <section className="home" id="home">
      <Header />
      <Text />
      <div className="home-card-bg">
        <Cards />
      </div>
    </section>
  );
};

export default Home;
