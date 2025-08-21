import { Link } from "react-router-dom";
import { Play, Pause, SkipBack, SkipForward, Icon } from "lucide-react";
import { Button } from "@material-tailwind/react";

const Wishlist = () => {
  const materialStuff = [{ SkipBack, Play, Pause, SkipForward }];
  return (
    <div className="w-full h-screen flex flex-col gap-3 justify-center items-center">
      <h1 className="text-xl">Wishlist section still under development </h1>
      <Link to="/store" className="bg-amber-800 p-3 rounded-lg text-white">
        View Products
      </Link>

      {/* <div>
        {materialStuff.map((icon) => (
          <Button>{icon}</Button>
        ))}
      </div> */}
    </div>
  );
};

export default Wishlist;
