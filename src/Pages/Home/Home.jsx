import React from "react";
import AboutComp1 from "../../Components/AboutComp1";
import Footer from "../../Components/Footer";
import HeroSlider from "../../Components/HeroSlider";
import ListedProperties from "../../Components/ListedProperties";

const Home = () => {
  return (
    <>
    <div className="text-center background mx-auto bg-white">
      <HeroSlider/>
      <AboutComp1/>
      <ListedProperties/>
      <Footer/>
    </div>
    </>
  );
};

export default Home;
