import { motion } from "framer-motion";
import { useBagItems } from "./store/useBag";
import CheckoutBox from "../checkout/pages/CheckoutBox";
import EmptyBag from "./pages/EmptyBag";
import BagItems from "./pages/BagItems";

export default function Bag() {
  const { bagItems } = useBagItems();

  return (
    <motion.div
      className="h-full w-full p-1 flex flex-col justify-center items-center"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
    >
      {bagItems && bagItems.length > 0 ? (
        <div className="w-full">
          <h2 className="text-3xl font-semibold mb-2 text-center ">Your Bag</h2>
          <div className="h-full flex flex-col w-full  md:flex-row gap-4 justify-center items-start p-3">
            <BagItems />
            <CheckoutBox />
          </div>
        </div>
      ) : (
        <EmptyBag />
      )}
    </motion.div>
  );
}
