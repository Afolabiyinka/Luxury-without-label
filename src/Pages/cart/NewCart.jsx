import { useState, useMemo } from "react";
import ProductDetailsCard from "../shopping/components/ProductDetailsCard";

import {
  Typography,
  Avatar,
  IconButton,
  Tooltip,
  Button,
  Card,
} from "@material-tailwind/react";
import { ShoppingCart, Trash } from "lucide-react";
import { motion } from "framer-motion";
import { useCart } from "./hooks/CartContext";
import { Link } from "react-router-dom";

export default function NewCart() {
  const { cartItems, removeFromCart } = useCart();

  const [isOpen, setIsOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleOpenModal = (product) => {
    setSelectedProduct(product);
    setIsOpen(true);
  };
  const handleCloseModal = () => {
    setIsOpen(false);
    setSelectedProduct(null);
  };

  const subtotal = useMemo(
    () => cartItems.reduce((acc, item) => acc + Number(item.price), 0),
    [cartItems]
  );
  const deliveryFee = subtotal > 0 ? 5 : 0;
  const total = subtotal + deliveryFee;

  return (
    <motion.div
      className="h-full w-full p-1 flex flex-col justify-center items-center"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
    >
      {cartItems && cartItems.length > 0 ? (
        <div className="w-full">
          <h2 className="text-3xl font-semibold mb-2 text-center ">
            Your Cart
          </h2>
          <div className="h-full flex flex-col md:flex-row gap-4 justify-center items-start p-3">
            <div className=" w-full md:w-[60%] h-full p-3 overflow-hidden rounded-3xl border border-surface">
              <table className="w-full rounded-xl">
                <tbody className="group text-sm text-black dark:text-white cursor-pointer">
                  {cartItems.map((product) => (
                    <tr
                      key={product.id}
                      onClick={() => handleOpenModal(product)}
                      className="hover:bg-gray-200  rounded-xl"
                    >
                      <td className="p-2">
                        <div className="flex items-center gap-3">
                          <Avatar
                            src={product.image}
                            alt={product.name}
                            size="xl"
                            shape="rounded"
                          />
                          <div className="flex flex-col max-w-[200px]">
                            <Typography
                              as="p"
                              className="line-clamp-3 text-sm font-medium"
                              title={product.name}
                            >
                              {product.name}
                            </Typography>
                          </div>
                        </div>
                      </td>

                      <td className="">
                        <div className="w-max text-xl font-bold">
                          <Typography>${product.price}</Typography>
                        </div>
                      </td>
                      <td className="p-3">
                        <Tooltip>
                          <Tooltip.Trigger
                            as={IconButton}
                            variant="ghost"
                            color="secondary"
                          >
                            <span
                              className="bg-red-600 text-white p-2 rounded-md hover:scale-105 duration-150"
                              onClick={(e) => {
                                e.stopPropagation();
                                removeFromCart(product.id);
                              }}
                            >
                              <Trash
                                color="white"
                                scale={10}
                                className="stroke-2"
                              />
                            </span>
                          </Tooltip.Trigger>
                          <Tooltip.Content>
                            Remove From Cart
                            <Tooltip.Arrow />
                          </Tooltip.Content>
                        </Tooltip>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <Card className="w-full md:w-[40%] p-6 rounded-3xl shadow-md border">
              <h3 className="text-xl font-semibold mb-4">Order Summary</h3>
              <div className="flex justify-between mb-2">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-medium">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="text-gray-600">Delivery Fee</span>
                <span className="font-medium">${deliveryFee.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-lg font-bold mt-4 border-t pt-3">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>

              <Button
                color="secondary"
                className="mt-6 w-full text-black font-semibold py-3 rounded-3xl hover:bg-gray-300 cursor-pointer"
              >
                <Link to="/checkout">Proceed to Checkout</Link>
              </Button>
            </Card>
          </div>

          {isOpen && selectedProduct && (
            <ProductDetailsCard
              isOpen={isOpen}
              isClose={handleCloseModal}
              product={selectedProduct}
            />
          )}
        </div>
      ) : (
        <div className="h-screen w-full flex justify-center items-center">
          <div className="text-center flex flex-col items-center justify-center">
            <ShoppingCart
              size={64}
              className="animate-bounce mb-4"
              color="gray"
            />
            <h2 className="text-3xl font-semibold mb-4">No Items in Cart</h2>
            <p className="text-lg mb-3">
              Start adding items to your cart and they will appear here!
            </p>
            <Button color="secondary" variant="solid">
              <Link to="/store">Go to Store</Link>
            </Button>
          </div>
        </div>
      )}
    </motion.div>
  );
}
