import { Button } from "@/components/ui/button";
import { ArrowLeft, Heart } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Wishlist = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="min-h-screen w-full flex flex-col items-center justify-center px-4 text-center"
    >
      {/* Icon */}
      <div className="mb-6 p-4 rounded-full bg-gray-100">
        <Heart className="w-10 h-10 text-gray-600" />
      </div>

      {/* Title */}
      <h1 className="text-2xl md:text-3xl font-semibold mb-2">
        Wishlist coming soon
      </h1>

      {/* Subtitle */}
      <p className="text-gray-500 max-w-md mb-6">
        Save your favorite items and keep track of what you love. This feature is
        currently under development.
      </p>

      {/* CTA */}
      <Button size="lg" onClick={() => navigate("/store")}>
        <ArrowLeft className="mr-2 h-5 w-5" />
        Continue shopping
      </Button>
    </motion.div>
  );
};

export default Wishlist;