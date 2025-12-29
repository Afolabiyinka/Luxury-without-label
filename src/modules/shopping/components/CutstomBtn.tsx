import { Button } from "@/Components/ui/button";
import { type ReactNode } from "react";

const CustomBotton = ({ text, icon }: { text: string; icon: ReactNode }) => {
  return (
    <Button size={`lg`}>
      <p>{text}</p>
      <span children={icon} />
    </Button>
  );
};

export default CustomBotton;
