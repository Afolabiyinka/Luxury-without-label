import { Card, IconButton, Button, Typography } from "@material-tailwind/react";
import StarRating from "./Ratings";
import randomImage from "../Assets/Images/heroModel.png";
import { Heart, Truck, Sparkle, Calendar, Box, Icon } from "lucide-react";

const ProductDetailsCard = () => {
  const clothSizes = ["S", "M", "L", "XL", "XXL"];
  const shoeSizes = [41, 42, 43, 44, 46];

  const shippingOptions = [
    { name: "Discount", desc: "Disc 50%", icon: Sparkle },
    { name: "Package", desc: "Regular Package", icon: Box },
    { name: "Delivery Time", desc: "3-4 Working Days", icon: Calendar },
    { name: "Estimation Arrive", desc: "10-12 October 2024", icon: Truck },
  ];

  return (
    <Card
      className="flex h-fit w-full  flex-col gap-1 p-2 lg:flex-row transition-all duration-1000 border-none shadow-none
    "
    >
      <Card.Header className="m-0 h-[60%]  w-full lg:w-1/2 p-2">
        <img
          src={randomImage}
          className="h-full w-full object-cover rounded-md"
        />
      </Card.Header>
      <Card.Body className="h-fit w-full lg:w-1/2 flex flex-col ">
        <div className=" flex flex-col  p-2">
          <div className="w-full h-8 rounded-lg mb-4 bg-gray-300 animate-pulse duration-200"></div>
          <Typography
            variant="h1"
            className="text-2xl mb-3 font-semibold font-sans "
          >
            Hermes lace material
          </Typography>
          <StarRating rating={4} />
          <Typography className="mb-6 mt-2 text-3xl tracking-wide font-bold font-serif">
            $24.99
          </Typography>
          <div id="sizes" className=" p-1 flex flex-col gap-3 mb-5">
            <Typography className=" tracking-wider text-gray-500 font-serif">
              Select Size
            </Typography>
            <span className="flex gap-3">
              {clothSizes.map((size) => (
                <IconButton
                  variant="outline"
                  color="secondary"
                  isCircular
                  size="lg"
                >
                  {size}
                </IconButton>
              ))}
            </span>
          </div>

          <div className="flex gap-3">
            <Button
              isFullWidth
              size="lg"
              className="bg-black rounded-full hover:bg-opacity-90"
            >
              Add to Cart
            </Button>
            <IconButton
              variant="outline"
              color="secondary"
              isCircular
              size="lg"
            >
              <Heart color="black" />
            </IconButton>
          </div>
        </div>
        <Card.Footer>
          <div className="p-2 rounded-lg mb-5" id="shipping stuff">
            <p>Shipping</p>

            <div className="grid md:grid-cols-2 gap-6 mt-2">
              {shippingOptions.map(({ name, desc, icon: Icon }) => (
                <span className="flex gap-3 p-1">
                  <IconButton
                    variant="solid"
                    color="secondary"
                    isCircular
                    className="p-1"
                    size="lg"
                  >
                    <Icon />
                  </IconButton>
                  <span>
                    <p className="text-gray-600 text-sm">{name}</p>
                    <p>{desc}</p>
                  </span>
                </span>
              ))}
            </div>
          </div>
          <span className="flex gap-1">
            <Truck />
            <p>Free Delivery on orders above $30.00</p>
          </span>
        </Card.Footer>
      </Card.Body>
    </Card>
  );
};

export default ProductDetailsCard;
