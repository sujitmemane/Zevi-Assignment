import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import HeartOff from "../../assets/love.png";
import HeartOn from "../../assets/wishlist.png";

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
  const [wishlist, setWishlist] = useState<boolean>(false);
  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < product.rating; i++) {
      stars.push(<AiFillStar key={i} size={30} />);
    }
    return stars;
  };

  return (
    <div className="p-4 bg-white ">
      <div className="relative">
        <img src={product.image} alt={product.name} className="w-56 h-48" />
        {wishlist ? (
          <img
            src={HeartOn}
            alt=""
            className="w-12 h-12 cursor-pointer"
            onClick={() => setWishlist(!wishlist)}
          />
        ) : (
          <img
            src={HeartOff}
            alt=""
            className="w-12 h-12 cursor-pointer"
            onClick={() => setWishlist(!wishlist)}
          />
        )}
      </div>
      <h1>{product.name}</h1>
      <h3>{product.price}</h3>
      <div className="flex space-x-2">{renderStars()}</div>
    </div>
  );
};

export default ProductElement;
