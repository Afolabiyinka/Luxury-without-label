import { Card, Typography, Button } from "@material-tailwind/react";
import { Trash } from "lucide-react";
import { useCartContext } from "../Contexts/CartContext";

export default function ProductCard({ product }) {
  const { isCart, addToCart, removeFromCart } = useCartContext;
  const cartIte = isCart(product.id);

  function onCartClick(e) {
    e.preventDefault();
    if (cartIte) removeFromCart(product.id);
    else addToCart(product);
  }

  return (
    <Card className="bg-[#F5DEB3]">
      <Card.Header
        as="img"
        src={product.image_link}
        alt="card-image"
        className="h-80 object-cover"
      />
      <Card.Body>
        <div className="mb-2 flex items-center justify-between">
          <Typography type="h6">{product.name}</Typography>
          <Typography type="h6">${product.price}</Typography>
        </div>
        <Typography className="text-foreground">{product.desc}</Typography>
      </Card.Body>
      <Card.Footer className="flex gap-2 justify-center items-center">
        <Button
          isFullWidth
          color="secondary"
          onClick={onCartClick}
          className=" bg-amber-800 text-amber-50 hover:bg-amber-900 transition-colors"
        >
          Add to Cart
        </Button>
        <Trash size={35} className="cursor-pointer" />
      </Card.Footer>
    </Card>
  );
}
