import { useCartContext } from "../Contexts/CartContext";
import ProductCard from "../Components/ProductCard";
import { ShoppingCart } from "lucide-react";
import { motion } from "framer-motion";

const Cart = () => {
  const { cartItems } = useCartContext();

  return (
    <motion.div
      className="h-full w-full p-4"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <h2 className="text-3xl font-semibold mb-6 text-center">Your Cart</h2>
      {cartItems && cartItems.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 justify-center items-center p-5 gap-4">
          {cartItems.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
      ) : (
        <div className="h-screen w-full flex justify-center items-center">
          <div className="text-center flex flex-col items-center justify-center">
            <ShoppingCart
              size={64}
              className="text-gray-400 animate-bounce mb-4"
            />
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">
              No Items in Cart
            </h2>
            <p className="text-lg text-gray-600">
              Start adding items to your cart and they will appear here!
            </p>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default Cart;
