import React from "react";
import MyCard from "./MyCard";
import {
  products,
} from "../model/products";
export default function Products() {
  return (
    <div className="p-5 bg-dark text-center">
      <h1 className="text-white">All Products</h1>
      <p className="text-secondary">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, iusto.
      </p>
      <div className="container">
        <div className="row g-3">
          {products.map((product) => (
            <MyCard productInfo={product} key={product.id} />
          ))}
        </div>
      </div>
    </div>
  );
}
