import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useBagItems } from "@/modules/user/cart/store/useBag";
import { useMemo } from "react";
import { Link } from "react-router-dom";

const CheckoutBox = () => {
  const { bagItems } = useBagItems();

  const subtotal = useMemo(
    () =>
      bagItems.reduce(
        (acc, item) =>
          acc +
          Number(
            item.prices?.[0]?.salePrice?.minPrice ??
              item.prices?.[0]?.regularPrice?.minPrice ??
              0
          ),
        0
      ),
    [bagItems]
  );

  const deliveryFee = subtotal > 0 ? 5 : 0;
  const total = subtotal + deliveryFee;
  return (
    <Card className="w-full md:w-[40%] p-6 rounded-3xl">
      <h3 className="text-xl font-semibold mb-4">Order Summary</h3>
      <div className="flex justify-between mb-2">
        <span className="text-gray-600">Subtotal</span>
        <span className="font-medium">${subtotal.toFixed(2)}</span>
      </div>
      <div className="flex justify-between mb-2">
        <span className="text-gray-600">Delivery Fee</span>
        <span className="font-medium">${deliveryFee.toFixed(2)}</span>
      </div>
      <div className="flex justify-between text-lg font-bold mt-4 border-t pt-3">
        <span>Total</span>
        <span>${total.toFixed(2)}</span>
      </div>

      <Button variant={`default`} size={`lg`}>
        <Link to="/checkout">Proceed to Checkout</Link>
      </Button>
    </Card>
  );
};

export default CheckoutBox;
