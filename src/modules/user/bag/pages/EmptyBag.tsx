import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ToteIcon } from "@phosphor-icons/react";
const EmptyBag = () => {
  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div className="text-center flex flex-col items-center justify-center">
        <ToteIcon size={64} className="animate-bounce mb-4" color="gray" />
        <h2 className="text-3xl font-semibold mb-4">No Items in your bag</h2>
        <p className="text-lg mb-3">
          Start adding items to your bag and they will appear here!
        </p>
        <Button size={`lg`}>
          <Link to="/store">Go to Store</Link>
        </Button>
      </div>
    </div>
  );
};

export default EmptyBag;
