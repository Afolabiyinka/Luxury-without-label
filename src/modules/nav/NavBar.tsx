import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "../../components/ui/tooltip";
import DeEleganceLogo from "../../Assets/Fashion.jpeg";
import { X, Menu, Heart, ShoppingBag, User, Search } from "lucide-react";

import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { LINKS } from "./nav";

import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { useCart } from "../cart/store/useCart";
import { Badge } from "@/components/ui/badge";

function NavList({ onLinkClick }: { onLinkClick: any }) {
  const location = useLocation();
  return (
    <ul className="flex flex-col gap-x-8 gap-y-3  lg:mt-0 lg:flex-row lg:items-center lg:justify-start p-2">
      {LINKS.map(({ icon: Icon, title, href }) => (
        <Link to={href} key={title} onClick={onLinkClick}>
          <li>
            <span className="flex flex-col">
              <h1
                className={`flex items-center gap-x-2 p-1 border-none ${
                  location.pathname === href
                    ? "underline underline-offset-4"
                    : "hover:text-gray-500"
                }`}
              >
                <Icon className="h-4 w-4 stroke-[2px]" />
                {title}
              </h1>
            </span>
          </li>
        </Link>
      ))}
    </ul>
  );
}

export default function NavBar() {
  const [openNav, setOpenNav] = useState(false);
  const { cartItems } = useCart();

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  return (
    <>
      <div className="">
        <div className="p-1 mt-1 flex flex-col gap-4 md:flex-row justify-between items-center md:justify-between md:items-center w-full">
          <a href="/">
            <img
              src={DeEleganceLogo}
              alt=""
              className="h-12 bg-white rounded-full w-52 hidden md:block"
            />
          </a>
          <InputGroup>
            <InputGroupInput
              placeholder="Search for a product or brand"
              type="search"
            />
            <InputGroupAddon align={`inline-end`}>
              <Search />
            </InputGroupAddon>
          </InputGroup>
          {/* Nav actions for the desktop*/}
          <span className="flex gap-3 items-center justify-center mr-2">
            <Tooltip>
              <Link to="/account" className="p-2 hidden md:block">
                <TooltipTrigger>
                  <User size={30} className="stroke-[1.7px]" />
                </TooltipTrigger>
                <TooltipContent>You</TooltipContent>
              </Link>
            </Tooltip>
            <Tooltip>
              <Link to="/wishlist" className="p-2 hidden md:block">
                <TooltipTrigger>
                  <Heart size={30} className="stroke-[1.7px]" />
                </TooltipTrigger>
                <TooltipContent>WishList</TooltipContent>
              </Link>
            </Tooltip>
            <Tooltip>
              <Link to="/cart" className="hidden md:block p-2 relative">
                <Badge className="h-5 min-w-5 rounded-full px-1 font-mono tabular-nums absolute -top-0.5 -right-0.5">
                  {cartItems.length}
                </Badge>
                <TooltipTrigger>
                  <ShoppingBag size={30} className="stroke-[1.7px]" />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Bag</p>
                </TooltipContent>
              </Link>
            </Tooltip>
          </span>
        </div>
        <nav className="w-full border-none p-3 md:px-32 rounded-none flex flex-col shadow-none md:justify-start mb-3 ">
          <div className="flex justify-between">
            <div className="flex items-center md:justify-start">
              <div>
                <a href="/">
                  <img
                    src={DeEleganceLogo}
                    alt=""
                    className="h-14 bg-white  rounded-full w-52 block md:hidden mr-2"
                  />
                </a>
              </div>
              <div
                className={`hidden lg:block   ${
                  openNav ? "translate-y-2" : ""
                }`}
              >
                <NavList onLinkClick={() => setOpenNav(false)} />
              </div>
            </div>

            <div className="flex  justify-end items-center">
              <Tooltip>
                <Link to="/cart" className="md:hidden block ">
                  <TooltipTrigger>
                    <ShoppingBag size={30} className="stroke-[1.7px]" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Bag</p>
                  </TooltipContent>
                </Link>
              </Tooltip>
              <Button
                variant={`outline`}
                onClick={() => setOpenNav(!openNav)}
                className="grid ml-0.5 lg:hidden transition-all duration-500 border-0"
              >
                {openNav ? (
                  <X
                    size={30}
                    className="transform rotate-180 transition duration-500 ease-in-out stroke-[1px]"
                  />
                ) : (
                  <Menu
                    size={35}
                    className="transform rotate-0 transition duration-500 ease-in-out stroke-[1px]"
                  />
                )}
              </Button>
            </div>
          </div>
          <AnimatePresence>
            {openNav && (
              <motion.div
                initial={{ y: -20 }}
                animate={{ y: 0 }}
                exit={{ y: -20 }}
                transition={{ duration: 0.1, ease: "easeIn" }}
                className={` ${
                  openNav ? "translate-y-4" : ""
                }fixed top-36 left-0 w-full h-screen bg-white z-50 px-4 py-6 transform translate-y-0 animate-slideDown lg:hidden`}
              >
                <NavList onLinkClick={() => setOpenNav(false)} />
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </div>
    </>
  );
}
