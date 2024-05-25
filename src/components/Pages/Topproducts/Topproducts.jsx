import React from "react";
import "./Topproducts.css";
import { GoArrowRight } from "react-icons/go";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Product from "./Product";
import { productData, responsive } from "./data";

const Topproducts = () => {
  const product = productData.map((item) => (
    <Product
      name={item.name}
      url={item.imageurl}
      price={item.price}
      overprice={item.overprice}
      description={item.description}
    />
  ));

  return (
    <>
      <section className="w-full">
        <div className="px-8 py-2 sm:px-16 sm:py-4 md:px-32 md:py-8 lg:px-72 lg:py-10 flex justify-between items-center">
          <div className="border-l-4 border-orange-400 rounded-t-sm rounded-b-sm pl-3">
            <h2 className="font-bold lg:text-3xl md:text-3xl sm:text-2xl text-2xl">
              Best Sellers
            </h2>
          </div>

        <div className="flex justify-center items-center gap-2 primary-text hover:text-orange-900">
            <a href="/">View All</a>
            <GoArrowRight />
          </div>
        </div>

        <div className="w-full flex justify-center items-center">
          <div className="w-4/6 md:5/6">
            <Carousel responsive={responsive}>
              {product}
            </Carousel>
          </div>
        </div>
      </section>
    </>
  );
};

export default Topproducts;
