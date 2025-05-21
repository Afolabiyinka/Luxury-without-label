import { Card, Typography, IconButton, Button } from "@material-tailwind/react";
import { Trash } from "lucide-react";
import { useCartContext } from "../Contexts/CartContext";
import { FaShoppingCart } from "react-icons/fa";

export default function ProductCard({ product }) {
  const { isCart, addToCart, removeFromCart } = useCartContext();
  const cartItem = isCart(product.id);

  function onCartClick(e) {
    e.preventDefault();
    if (cartItem) removeFromCart(product.id);
    else addToCart(product);
  }

  return (
    <Card className="p-0">
      <Card.Header
        as="img"
        src={product.image}
        alt={product.name}
        className="h-80 object-cover hover:scale-105 transition-transform duration-300"
      />
      <Card.Body>
        <div className="mb-2 flex items-center justify-between">
          <Typography type="h6">{product.name}</Typography>
          <Typography type="h6">${product.price}</Typography>
        </div>
      </Card.Body>
      <Card.Footer className="flex gap-2 justify-center items-center">
        <Button
          isFullWidth
          isPill
          color="primary"
          variant="solid"
          className="bg-amber-600 hover:bg-orange-400 border-none"
        >
          View Product
        </Button>
        <IconButton
          isFullWidth
          color="secondary"
          onClick={onCartClick}
          className="transition-all duration-300"
        >
          {cartItem ? <Trash size={24} /> : <FaShoppingCart size={24} />}
        </IconButton>
      </Card.Footer>
    </Card>
  );
}
