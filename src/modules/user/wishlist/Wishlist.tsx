import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
const Wishlist = () => {
  const navigate = useNavigate();
  return (
    <div className="h-screen w-full flex flex-col gap-5 justify-center items-center">
      <p className="text-4xl">Wishlist section is still under developement</p>
      <Button size={`lg`} onClick={() => navigate("/store")}>
        <ArrowLeft className="mr-3" />
        View products
      </Button>
    </div>
  );
};

export default Wishlist;
