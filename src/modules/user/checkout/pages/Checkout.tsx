import Cleave from "cleave.js/react";
import BagItems from "../../bag/pages/BagItems";
import { Button } from "@/components/ui/button";
import { Wallet } from "lucide-react";

const inputClass =
  "w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 text-sm outline-none focus:border-black";

const Checkout = () => {
  return (
    <div className="flex  w-full items-center justify-center h-screen gap-3 p-2">
      <BagItems />
      <div className="flex flex-col gap-3 w-[50%] p-3">
        <Cleave
          options={{ creditCard: true }}
          placeholder="Card number"
          className={inputClass}
        />

        <div className="flex gap-3">
          <Cleave
            options={{ date: true, datePattern: ["m", "y"] }}
            placeholder="MM / YY"
            className={inputClass}
          />

          <Cleave
            options={{ numericOnly: true, blocks: [4] }}
            placeholder="CVC"
            className={inputClass}
          />
        </div>
        <Button size={`lg`}>
          <Wallet className="mr-3" />
          Pay now
        </Button>
      </div>
    </div>
  );
};

export default Checkout;
