import React from "react";
import ProductCollection from "../components/productpage/ProductCollection";
import { Link } from "react-router-dom";

const ProductPage = () => {
  return (
    <div className="bg-white w-full h-full">
      <Link to="/">
        <h1 className="py-4 text-3xl absolute right-8">Zevi</h1>
      </Link>
      <ProductCollection />
    </div>
  );
};

export default ProductPage;
