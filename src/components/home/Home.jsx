import React from "react";
import Navbar from "../Navbar/Navbar";
import Carouselslider from "../Carousel/Carouselslider";
import Steps from "../Steps/Steps";
import About from "../About/About";

const Home = () => {
  return (
    <>
      <Navbar />

      <Carouselslider />
      <Steps />
      <About />

      <div className="mt-60"></div>
    </>
  );
};

export default Home;
