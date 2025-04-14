import React from "react";
import { useCartContext } from "../Contexts/CartContext";
import ProductCard from "../Components/ProductCard";

const Cart = () => {
  const { cartItems } = useCartContext();

  if (cartItems) {
    return (
      <div className="favorites">
        <h2>Your Favorites</h2>
        <div className="movies-grid">
          {cartItems.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="favorites-empty">
      <h2>No Favorite Movies Yet</h2>
      <p>Start adding movies to your favorites and they will appear here!</p>
    </div>
  );
};

export default Cart;
