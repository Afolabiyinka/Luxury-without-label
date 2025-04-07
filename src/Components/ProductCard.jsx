import { Card, Typography, Button } from "@material-tailwind/react";

export default function ProductCard({ product }) {
  return (
    <Card className="w-96">
      <Card.Header
        as="img"
        src={product.image_link}
        alt="card-image"
        className="h-96 object-cover"
      />
      <Card.Body>
        <div className="mb-2 flex items-center justify-between">
          <Typography type="h6">{product.name}</Typography>
          <Typography type="h6">{product.price}</Typography>
        </div>
        <Typography className="text-foreground">{product.desc}</Typography>
      </Card.Body>
      <Card.Footer>
        <Button isFullWidth color="secondary">
          Add to Cart
        </Button>
      </Card.Footer>
    </Card>
  );
}
