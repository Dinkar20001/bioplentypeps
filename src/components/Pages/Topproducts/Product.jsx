import React from "react";
import { FaStar } from "react-icons/fa6";

export default function Product(props) {
  return (
    <div className="card p-3 text-center flex justify-center items-center flex-col border rounded-md me-5">
      <img
        className="product--image"
        width={175}
        height={175}
        src={props.url}
        alt="product image"
      />

      <h2 className="font-bold text-md">{props.name}</h2>
      <div className="flex justify-center items-center gap-1">
        <FaStar className="primary-text" /> <FaStar className="primary-text" />{" "}
        <FaStar className="primary-text" /> <FaStar className="primary-text" />
        <p className="text-center">{props.description}</p>
      </div>

      <div className="flex justify-center gap-1 items-center">
        <span className="text-sm -mb-2">
          <s>$ {props.overprice}</s>
        </span>
        <span>
          <p className="price mt-2">{props.price}</p>
        </span>
      </div>

      <p className="mt-4 bg-secondary-color hover:bg-orange-900 text-white w-full p-1 cursor-pointer rounded-md">
        <button>Add to Cart</button>
      </p>
    </div>
  );
}
