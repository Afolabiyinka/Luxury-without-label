import { Button as ButtonPrimitive } from "@base-ui/react/button";
import { cva, type VariantProps } from "class-variance-authority";
import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "rounded-md text-sm font-medium cursor-pointer focus-visible:ring-[3px] inline-flex items-center justify-center transition-all disabled:pointer-events-none disabled:opacity-50 outline-none",
  {
    variants: {
      variant: {
        default: "bg-primary text-white hover:bg-primary/95",
        outline: "border border-gray-300 text-gray-800",
      },
      size: {
        default: "h-9 px-4",
        sm: "h-8 px-3",
        lg: "h-14 px-14",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

type ButtonProps = ButtonPrimitive.Props & VariantProps<typeof buttonVariants>;

const Button: React.FC<ButtonProps> = ({
  className,
  variant,
  size,
  ...props
}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      style={{ display: "inline-block" }}
    >
      <ButtonPrimitive
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      />
    </motion.div>
  );
};

export { Button, buttonVariants };
