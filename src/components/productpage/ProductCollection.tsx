import React, { useState, useEffect } from "react";
import { faker } from "@faker-js/faker";
import ProductElement from "./ProductElement";
import Filters from "./Filters";
import NoResult from "../../assets/nodata.avif";
import { FiSearch } from "react-icons/fi";

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
  const [searchQuery, setSearchQuery] = useState<string>("");
  const numberOfProduct = 12;
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
    filters: selectedFiltersInterface,
    searchQuery: string
  ): Product[] => {
    let filteredProducts = [...products];

    if (Object.keys(filters).length > 0) {
      filteredProducts = filteredProducts.filter((product) => {
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
    }

    if (searchQuery.trim() !== "") {
      filteredProducts = filteredProducts.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    return filteredProducts;
  };

  useEffect(() => {
    const generatedProduct = generateProduct(numberOfProduct);
    setProductCollection(generatedProduct);
  }, []);

  useEffect(() => {
    const filteredProducts = applyFilters(
      productCollection,
      selectedFilters,
      searchQuery
    );
    setFilteredCollection(filteredProducts);
  }, [selectedFilters, productCollection, searchQuery]);

  return (
    <div>
      <div className="mx-auto pt-4">
        <form className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-2">
          <input
            type="text"
            placeholder="Search"
            className="w-full sm:w-auto px-4 py-2 rounded outline-none border-black  text-lg"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />

          <button
            type="button"
            className="px-4 py-2 sm:py-2 bg-blue-500 rounded text-white hidden md:block"
          >
            <FiSearch size={20} />
          </button>
        </form>
      </div>

      <div className="flex flex-col md:flex-row p-4">
        <div className="md:w-1/6">
          <Filters getFilters={getFilterHandler} />
        </div>

        <div className="md:w-5/6">
          {filteredCollection.length === 0 ? (
            <img src={NoResult} alt="" className="w-full h-[100vh]" />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mx-auto max-w-7xl">
              {filteredCollection?.map((product) => (
                <ProductElement key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCollection;
