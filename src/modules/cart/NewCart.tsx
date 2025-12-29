import { useMemo } from "react";
import { useNavigate } from "react-router-dom";

import { Avatar, AvatarImage } from "../../components/ui/avatar";
import { Button } from "../../components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "../../components/ui/tooltip";

import { ShoppingCart, Trash } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useCart } from "./store/useCart";

export default function NewCart() {
  const { cartItems, removeFromCart } = useCart();
  const navigate = useNavigate();

  const subtotal = useMemo(
    () =>
      cartItems.reduce(
        (acc, item) =>
          acc +
          Number(
            item.prices?.[0]?.salePrice?.minPrice ??
              item.prices?.[0]?.regularPrice?.minPrice ??
              0
          ),
        0
      ),
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
                      key={product.webID}
                      onClick={() => navigate(`/product/${product.webID}`)}
                      className="hover:bg-gray-200  rounded-xl"
                    >
                      <td className="p-2">
                        <div className="flex items-center gap-3">
                          <Avatar size="lg">
                            <AvatarImage src={product.image?.url}></AvatarImage>
                          </Avatar>
                          <div className="flex flex-col max-w-50">
                            <p
                              className="line-clamp-3 text-sm font-medium"
                              title={product.productTitle}
                            >
                              {product.productTitle}
                            </p>
                          </div>
                        </div>
                      </td>

                      <td className="">
                        <div className="w-max text-xl font-bold">
                          <p>
                            $
                            {(
                              product.prices?.[0]?.salePrice?.minPrice ??
                              product.prices?.[0]?.regularPrice?.minPrice ??
                              0
                            ).toFixed(2)}
                          </p>
                        </div>
                      </td>
                      <td className="p-3">
                        <Tooltip>
                          <TooltipTrigger>
                            <Button
                              variant={`outline`}
                              className={`border-0`}
                              onClick={(e) => {
                                e.stopPropagation();
                                removeFromCart(product.webID);
                              }}
                            >
                              <Trash scale={10} className="stroke-1" />
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent>Remove From Cart</TooltipContent>
                        </Tooltip>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <Card className="w-full md:w-[40%] p-6 rounded-3xl">
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

              <Button variant={`default`}>
                <Link to="/checkout">Proceed to Checkout</Link>
              </Button>
            </Card>
          </div>
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
            <Button>
              <Link to="/store">Go to Store</Link>
            </Button>
          </div>
        </div>
      )}
    </motion.div>
  );
}
