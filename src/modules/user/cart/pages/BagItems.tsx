import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Trash } from "lucide-react";
import { useBagItems } from "../store/useBag";
import { useNavigate } from "react-router-dom";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

const BagItems = () => {
  const navigate = useNavigate();

  const { removeFromBag, bagItems } = useBagItems();
  return (
    <div className=" w-full md:w-[60%] h-full p-3 overflow-hidden rounded-3xl border border-surface">
      <table className="w-full rounded-xl">
        <tbody className="group text-sm text-black dark:text-white cursor-pointer">
          {bagItems.map((product) => (
            <tr
              key={product.webID}
              onClick={() => navigate(`/product/${product.webID}`)}
              className="hover:bg-gray-200  rounded-xl"
            >
              <td className="p-2">
                <div className="flex items-center gap-3">
                  <Avatar size="lg">
                    <AvatarImage
                      src={product.image?.url}
                      className={`rounded-none`}
                    ></AvatarImage>
                  </Avatar>
                  <div className="flex flex-col max-w-50">
                    <p
                      className="line-clamp-3 text-sm font-medium"
                      title={product.productTitle}
                    >
                      {product.productTitle}
                    </p>
                  </div>
                </div>
              </td>

              <td className="">
                <div className="w-max text-xl font-bold">
                  <p>
                    $
                    {(
                      product.prices?.[0]?.salePrice?.minPrice ??
                      product.prices?.[0]?.regularPrice?.minPrice ??
                      0
                    ).toFixed(2)}
                  </p>
                </div>
              </td>
              <td className="p-3">
                <Tooltip>
                  <TooltipTrigger>
                    <Button
                      variant={`outline`}
                      className={`border-0`}
                      onClick={(e) => {
                        e.stopPropagation();
                        removeFromBag(product.webID);
                      }}
                    >
                      <Trash scale={10} className="stroke-1" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>Remove From Bag</TooltipContent>
                </Tooltip>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BagItems;
