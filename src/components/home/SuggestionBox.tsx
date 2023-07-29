import { useState, useEffect } from "react";
import { faker } from "@faker-js/faker";
import { Link } from "react-router-dom";

interface Product {
  id: number;
  name: string;
  image: string;
}
interface ProductSuggestion {
  id: number;
  name: string;
}

const SuggestionBox = () => {
  const [products, setProducts] = useState<Product[]>();
  const [productSuggestions, setProductSuggestion] =
    useState<ProductSuggestion[]>();
  const numberOfProduct = 5;
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
      };
      products.push(product);
    }

    return products;
  };

  const generateProductSuggestions = (count: number): ProductSuggestion[] => {
    const productNameList: ProductSuggestion[] = [];
    for (let i = 0; i < count; i++) {
      const productName = {
        id: i,
        name: faker.commerce.productName(),
      };

      productNameList.push(productName);
    }

    return productNameList;
  };

  useEffect(() => {
    const generatedProduct = generateProduct(numberOfProduct);
    const generatedProductSuggestion =
      generateProductSuggestions(numberOfProduct);
    setProductSuggestion(generatedProductSuggestion);
    setProducts(generatedProduct);
  }, [numberOfProduct]);

  console.log("sujitmemane");
  console.log(products);
  console.log("sujitmemane");

  return (
    <div className="p-4 md:p-8 lg:p-12 xl:p-16 bg-white mt-4">
      <h1 className="text-2xl py-3 text-center">Latest Trend</h1>
      <div className="flex flex-col md:flex-row items-center md:items-start  md:space-x-4 lg:space-x-8 xl:space-x-12">
        {products?.map((product) => (
          <Link
            to="/products"
            key={product.id}
            className="flex flex-col items-start md:w-1/4 lg:w-1/5 xl:w-1/6"
          >
            <img
              src={product.image}
              className="w-full h-40 md:h-56 lg:h-70 xl:h-86 rounded"
              alt={product.name}
              loading="lazy"
            />
            <h1 className="text-xl">{product.name}</h1>
          </Link>
        ))}
      </div>
      <div className="my-4 flex flex-col justify-center">
        <h1 className="text-2xl ">Popular Suggestions</h1>
        {productSuggestions?.map((productName) => (
          <Link to="/products" key={productName.id} className="text-md block ">
            {productName.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SuggestionBox;
