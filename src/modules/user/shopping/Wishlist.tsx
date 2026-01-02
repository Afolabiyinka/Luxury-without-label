import { Link } from "react-router-dom";

const Wishlist = () => {
  return (
    <div className="w-full h-screen flex flex-col gap-3 justify-center items-center">
      <h1 className="text-xl">Wishlist section still under development </h1>
      <Link to="/store" className="bg-amber-800 p-3 rounded-lg text-white">
        View Products
      </Link>
    </div>
  );
};

export default Wishlist;
