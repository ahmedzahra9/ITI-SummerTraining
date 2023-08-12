import React from "react";
import { useParams } from "react-router-dom";
import { products } from "../model/products";
export default function ProductDetails() {
  let { id } = useParams();

  let product = products.find((product) => product.id === id);

  console.log(product);
  return product ? (
    <div className="bg-dark  text-white p-5 border-top">
      <div className="d-flex">
        <img
          className="d-block"
          style={{ height: "400px", width: "400px" }}
          src={product.imgSrc}
          alt=""
        />
        <div className="col-md-5 mx-5 my-1">
          <h1 className="m-2 p-3 border-bottom">Deatils of Product({id})</h1>
          <p className="text-white p-4 ">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore in
            libero illum nobis Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Vel, corporis incidunt! Iure nobis reprehenderit,
            doloremque amet ullam possimus! Minus sequi culpa quae quo hic et
            officia veritatis eligendi magnam dolores.
          </p>
          <button className="btn btn-warning btn-lg mx-4 my-4" type="submit">
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  ) : (
    <h1 className="mt-5 text-success ">Product Not Found</h1>
  );
}
