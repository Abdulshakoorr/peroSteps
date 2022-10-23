import React from "react";
import AboutComp1 from "../../Components/AboutComp1";
import HeroSlider from "../../Components/HeroSlider";
import ListedProperties from "../../Components/ListedProperties";

const Home = () => {
  return (
    <>
    <div className="text-center relative background">
      <HeroSlider/>
      <AboutComp1/>
      <ListedProperties/>
    </div>
    </>
  );
};

export default Home;
