import React from "react";
import Carouselslider from "../Carousel/Carouselslider";
import Steps from "../Steps/Steps";
import About from "../About/About";
import Topproducts from "../Pages/Topproducts/Topproducts";
import Banner from "../Pages/Banner/Banner";
// import Topproducts from "../Pages/Topproducts/Topproducts";
import Navbar from './../Navbar/Navbar';

const Home = () => {
  return (
     <>
      <Navbar/>
      <Carouselslider />
      <Steps />
      <About />
      <Topproducts />
      <Banner />

      <div className="mt-60"></div>
    </>
  );
};

export default Home;
