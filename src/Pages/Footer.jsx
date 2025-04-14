import { Typography, IconButton } from "@material-tailwind/react";
import { Heart } from "lucide-react";

const YEAR = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="flex w-full flex-row flex-wrap items-center justify-center gap-x-12 gap-y-3 border-t border-surface py-4 text-center md:justify-center ">
      <Typography>&copy; {YEAR} Luxury Store</Typography>
      <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
        <p>
          {" "}
          Made With &#x2665;&#xfe0f; from{" "}
          <a href="https://github.com/Afolabiyinka" target="_blank">
            Olayinka
          </a>
        </p>
      </ul>
    </footer>
  );
}
