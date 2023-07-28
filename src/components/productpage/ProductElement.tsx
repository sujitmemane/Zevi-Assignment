import React from "react";
import { AiFillStar } from "react-icons/ai";

interface Product {
  id: number;
  name: string;
  image: string;
  price: string;
  rating: number;
}

interface ProductElementProps {
  product: Product;
}

const ProductElement: React.FC<ProductElementProps> = ({ product }) => {
  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < product.rating; i++) {
      stars.push(<AiFillStar key={i} size={30} />);
    }
    return stars;
  };

  return (
    <div>
      <img src={product.image} alt={product.name} className="w-56 h-48" />

      <h1>{product.name}</h1>
      <h3>{product.price}</h3>
      <div className="flex space-x-2">{renderStars()}</div>
    </div>
  );
};

export default ProductElement;
