import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";

const EsxButton = () => {
  return (
    <Button size={`lg`}>
      Buy Now <ShoppingBag className="ml-2" />
    </Button>
  );
};

export default EsxButton;
