import React from "react";
import HeroSlider from "../../Components/HeroSlider";

const Home = () => {
  return (
    <div className="text-center relative">
      <h1 className="heading absolute text-6xl font-bold font-serif top-14 left-64 text-white">“We’re the key <br /> to your new home.”</h1>
      <HeroSlider/>
      <p className="absolute text-sm font-normal font-serif bottom-24 text-white left-72 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Beatae aliquid deleniti, facilis, omnis quo ratione <br /> molestias eius fugit autem earum sed porro nisi hic <br /> est suscipit vero. Consequuntur, non iusto?</p>
    </div>
  );
};

export default Home;
