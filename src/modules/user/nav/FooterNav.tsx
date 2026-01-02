import { FOOTERICONS } from "./footer";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip.tsx";
import { Button } from "@/components/ui/button";

const YEAR = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="w-full border-t border-surface bg-background text-sm">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-6 py-12 md:grid-cols-4">
        {/* Brand */}
        <div className="space-y-3">
          <h2 className="text-lg font-semibold tracking-wide">De Elegance</h2>
          <p className="text-muted-foreground leading-relaxed">
            Refined Luxury, Exceptional Experience
          </p>
        </div>

        {/* Shop */}
        <div>
          <h3 className="mb-4 font-medium uppercase tracking-wider">Shop</h3>
          <ul className="space-y-2 text-muted-foreground">
            <li>New Arrivals</li>
            <li>Luxury Collections</li>
            <li>Best Sellers</li>
            <li>Sale</li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="mb-4 font-medium uppercase tracking-wider">Support</h3>
          <ul className="space-y-2 text-muted-foreground">
            <li>Contact Us</li>
            <li>Shipping & Returns</li>
            <li>Size Guide</li>
            <li>FAQs</li>
          </ul>
        </div>

        {/* Store Owner CTA */}
        <div className="space-y-4">
          <div
            className="flex gap-4
        "
          >
            {FOOTERICONS.map(({ name, icon: Icon }) => (
              <Tooltip>
                <TooltipTrigger>
                  <Icon size={30} />
                </TooltipTrigger>
                <TooltipContent>
                  <p>{name}</p>
                </TooltipContent>
              </Tooltip>
            ))}
          </div>
          <div className="flex flex-col justify-start mb-2">
            <span className="flex flex-col w-full gap-3 text-sm text-muted-foreground">
              <h1 className="font-medium text-xl">Sell with De Elegance</h1>{" "}
              <Button size={`lg`}>Join now</Button>
            </span>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-surface">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-4 md:flex-row">
          <p className="text-muted-foreground">
            © {YEAR} De Elegance. All rights reserved.
          </p>

          <p className="text-muted-foreground">
            Made with ❤️ by{" "}
            <a
              href="https://github.com/Afolabiyinka"
              target="_blank"
              className="underline underline-offset-4 hover:text-foreground"
            >
              Olayinka
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
