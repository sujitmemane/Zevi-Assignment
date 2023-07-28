import React, { useState, useEffect } from "react";
import { faker } from "@faker-js/faker";
import ProductElement from "./ProductElement";
import Filters from "./Filters";

interface Product {
  id: number;
  name: string;
  image: string;
  price: string;
  rating: number;
  brand: string;
}

const ProductCollection = () => {
  const [productCollection, setProductCollection] = useState<Product[]>();
  const numberOfProduct = 10;
  const generateProduct = (count: number): Product[] => {
    const products: Product[] = [];
    for (let i = 0; i < count; i++) {
      const product: Product = {
        id: i,
        name: faker.commerce.productName(),
        image: faker.image.urlLoremFlickr({
          category: "fashion",
          width: 640,
          height: 480,
        }),
        price: faker.commerce.price(),
        rating: Math.floor(Math.random() * 5) + 1,
        brand: i % 2 === 0 ? "Mango" : "H&M",
      };
      products.push(product);
    }

    return products;
  };

  const getFilterHandler = () => {};

  useEffect(() => {
    const generatedProduct = generateProduct(numberOfProduct);
    setProductCollection(generatedProduct);
  }, []);
  console.log("sam");
  console.log(productCollection);
  return (
    <div className="flex flex-row ">
      <div className="md:w-[20%]">
        <Filters getFilters={getFilterHandler} />
      </div>

      <div className="grid grid-cols-4 md:w-[80%]">
        {productCollection?.map((product) => (
          <ProductElement key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductCollection;
