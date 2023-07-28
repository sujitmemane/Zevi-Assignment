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
interface selectedFiltersInterface {
  [key: string]: boolean;
}

const ProductCollection = () => {
  const [productCollection, setProductCollection] = useState<Product[]>();
  const [selectedFilters, setSelectedFilters] =
    useState<selectedFiltersInterface>({});

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
        brand: i % 2 === 0 ? "Mango" : "HM",
      };
      products.push(product);
    }

    return products;
  };

  const getFilterHandler = (value: selectedFiltersInterface) => {
    setSelectedFilters(value);
  };

  useEffect(() => {
    const generatedProduct = generateProduct(numberOfProduct);
    setProductCollection(generatedProduct);
  }, []);

  console.log(productCollection);

  const applyFilters = (
    products: Product[],
    filters: selectedFiltersInterface
  ): Product[] => {
    if (Object.keys(filters).length === 0) {
      return products;
    }

    return products.filter((product) => {
      if (+product.price <= 500 === filters.und500) {
        return true;
      }
      if (+product.price > 500 === filters.abv500und3000) {
        return true;
      }
      if ((product.brand === "Mango") === filters.mango) {
        return true;
      }
      if ((product.brand === "HM") === filters.hm) {
        return true;
      }
      if ((product.rating === 1) === filters.onestar) {
        return true;
      }
      if ((product.rating === 2) === filters.twostar) {
        return true;
      }
      if ((product.rating === 3) === filters.threestar) {
        return true;
      }
      if ((product.rating === 4) === filters.fourstar) {
        return true;
      }
      if ((product.rating === 5) === filters.star) {
        return true;
      }

      return false;
    });
  };

  const filteredProducts = applyFilters(productCollection, selectedFilters);

  return (
    <div className="flex flex-row ">
      <div className="md:w-[20%]">
        <Filters getFilters={getFilterHandler} />
      </div>

      <div className="grid grid-cols-4 md:w-[80%]">
        {filteredProducts?.map((product) => (
          <ProductElement key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductCollection;
