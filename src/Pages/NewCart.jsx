import {
  EditPencil,
  UserPlus,
  Search,
  ArrowSeparateVertical,
  Trash,
  Cart,
} from "iconoir-react";

import {
  Input,
  Typography,
  Button,
  Chip,
  Tabs,
  Avatar,
  IconButton,
  Tooltip,
} from "@material-tailwind/react";
import { ShoppingCart } from "lucide-react";
import { motion } from "framer-motion";
import { useCartContext } from "../Contexts/CartContext";

export default function NewCart() {
  const { cartItems, removeFromCart } = useCartContext();
  return (
    <motion.div
      className="h-full w-full p-1"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <h2 className="text-3xl font-semibold mb-2 text-center">Your Cart</h2>
      {cartItems && cartItems.length > 0 ? (
        <div className="w-full]">
          <div className="mt-4 w-full overflow-hidden rounded-lg border border-surface">
            <table className="w-full">
              <tbody className="group text-sm text-black dark:text-white">
                {cartItems.map(({ image, name, id, maxPrice }, index) => {
                  return (
                    <tr
                      key={name}
                      className="border-b border-surface last:border-0"
                    >
                      <td className="p-3">
                        <div className="flex items-center gap-3">
                          <Avatar
                            src={image}
                            alt={name}
                            size="xl"
                            shape="rounded"
                          />
                          <div className="flex flex-col">
                            <Typography type="p">{name}</Typography>
                          </div>
                        </div>
                      </td>

                      <td className="p-3">
                        <div className="w-max bg-gray-400">
                          <Typography>{maxPrice}</Typography>
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
                              onClick={() => removeFromCart(id)}
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
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <div className="h-screen w-full flex justify-center items-center">
          <div className="text-center flex flex-col items-center justify-center">
            <ShoppingCart
              size={64}
              className=" animate-bounce mb-4"
              color="gray"
            />
            <h2 className="text-3xl font-semibold  mb-4">No Items in Cart</h2>
            <p className="text-lg">
              Start adding items to your cart and they will appear here!
            </p>
          </div>
        </div>
      )}
    </motion.div>
  );
}
