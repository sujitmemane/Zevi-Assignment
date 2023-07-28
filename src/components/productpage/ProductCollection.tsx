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
  const [productCollection, setProductCollection] = useState<Product[]>([]);
  const [selectedFilters, setSelectedFilters] =
    useState<selectedFiltersInterface>({});
  const [filteredCollection, setFilteredCollection] = useState<Product[]>([]);
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
      return (
        (+product.price <= 500 || !filters.und500) &&
        (+product.price > 500 || !filters.abv500und3000) &&
        (product.brand === "Mango" || !filters.mango) &&
        (product.brand === "HM" || !filters.hm) &&
        (product.rating === 1 || !filters.onestar) &&
        (product.rating === 2 || !filters.twostar) &&
        (product.rating === 3 || !filters.threestar) &&
        (product.rating === 4 || !filters.fourstar) &&
        (product.rating === 5 || !filters.fivestar)
      );
    });
  };
  useEffect(() => {
    const generatedProduct = generateProduct(numberOfProduct);
    setProductCollection(generatedProduct);
  }, []);

  useEffect(() => {
    const filteredProducts = applyFilters(productCollection, selectedFilters);
    setFilteredCollection(filteredProducts);
  }, [selectedFilters, productCollection]);

  return (
    <div className="flex flex-row ">
      <div className="md:w-[20%]">
        <Filters getFilters={getFilterHandler} />
      </div>

      {filteredCollection.length === 0 ? (
        <h1>No Result Found</h1>
      ) : (
        <div className="grid grid-cols-4 md:w-[80%]">
          {filteredCollection?.map((product) => (
            <ProductElement key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductCollection;
