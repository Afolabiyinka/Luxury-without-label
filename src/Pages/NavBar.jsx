import { useState, useEffect } from "react";
import {
  IconButton,
  Typography,
  Navbar,
  Badge,
  Tooltip,
} from "@material-tailwind/react";

import {
  Home,
  X,
  Menu,
  ShoppingBag,
  ShoppingCartIcon,
  Pen,
  Diamond,
  CircleHelp,
  Heart,
  Shirt,
  Search,
} from "lucide-react";

import { Link, useLocation } from "react-router-dom";
import { useCartContext } from "../hooks/CartContext";
import { AnimatePresence, motion } from "framer-motion";

const LINKS = [
  {
    icon: Home,
    title: "Home",
    href: "/",
  },

  {
    icon: Diamond,
    title: "Luxury Collections",
    href: "/luxury-collections",
  },
  {
    icon: ShoppingBag,
    title: "Store",
    href: "/store",
  },
  {
    icon: Pen,
    title: "Blogs",
    href: "/Blogs",
  },
  {
    icon: CircleHelp,
    title: "FAQs",
    href: "/FAQs",
  },
  {
    icon: Heart,
    title: "WishList",
    href: "/wishlist",
  },
];

function NavList({ onLinkClick }) {
  const location = useLocation();
  return (
    <ul className="flex flex-col gap-x-8 gap-y-3  lg:mt-0 lg:flex-row lg:items-center lg:justify-start transition-all duration-1000">
      {LINKS.map(({ icon: Icon, title, href }) => (
        <Link to={href} key={title} onClick={onLinkClick}>
          <li>
            <span className="flex flex-col">
              <Typography
                className={`flex items-center gap-x-2 p-1 ${
                  location.pathname === href ? "underline text-gray-600" : ""
                }`}
              >
                <Icon className="h-4 w-4 stroke-[2px]" />
                {title}
              </Typography>
            </span>
          </li>
        </Link>
      ))}
    </ul>
  );
}

export default function NavBar() {
  const [openNav, setOpenNav] = useState(false);
  const { cartItems } = useCartContext();
  const location = useLocation();

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  return (
    <>
      <div className="bg-gray-50/40 shadow-sm p-1 mt-2 flex flex-col gap-4 md:flex-row justify-center items-center md:justify-around md:items-center w-full">
        <Typography
          as="a"
          href="/"
          type="large"
          className="ml-3 mr-6 py-1 font-semibold text-xl md:flex gap-2 hidden "
        >
          <Shirt color="black" fill="gray" />
          De Elegance
        </Typography>

        <span className="flex gap-2 items-center justify-center border p-1 rounded-md">
          <input
            type="search"
            className="outline-none p-1 w-[17rem] border-none bg-inherit text-sm"
            placeholder="Search here..."
          />
          <Search color="gray" />
        </span>
        <span className="flex gap-3 items-center justify-center">
          <Link
            to="/cart"
            className="hidden md:flex gap-2 justify-center items-center rounded-3xl p-3 border"
          >
            <ShoppingCartIcon size={20} />

            <p className="font-semibold tracking-wide">Cart</p>
            <p className="bg-black/50 text-white h-6 w-6 flex justify-center items-center rounded-full">
              {cartItems ? cartItems.length : 0}
            </p>
          </Link>
          <Tooltip>
            <Link to="/wishlist">
              <Tooltip.Content>
                WishList <Tooltip.Arrow />
              </Tooltip.Content>
              <Tooltip.Trigger>
                <IconButton
                  variant="ghost"
                  className="hidden md:block shadow-sm rounded-3xl p-2
                  "
                >
                  <Heart size={30} />
                </IconButton>
              </Tooltip.Trigger>
            </Link>
          </Tooltip>
        </span>
      </div>
      <Navbar className="w-full border-none p-3 md:px-32 rounded-none flex flex-col shadow-none md:justify-start mb-3 ">
        <div className="flex justify-between">
          <div className="flex items-center md:justify-start">
            <Typography
              as="a"
              href="/"
              type="large"
              className="ml-3 mr-6  font-semibold text-xl md:hidden flex gap-2 text-gray-600"
            >
              <Shirt color="black" fill="gray" />
              De Elegance
            </Typography>
            <div
              className={`hidden lg:block   ${openNav ? "translate-y-2" : ""}`}
            >
              <NavList onLinkClick={() => setOpenNav(false)} />
            </div>
          </div>

          <div className="flex gap-3 justify-center items-center">
            <Link to="/cart">
              <Badge className=" lg:mr-2 lg:mt-1 lg:hidden">
                <Badge.Content>
                  <IconButton
                    variant={`${
                      location.pathname === "/cart" ? "solid" : "outline"
                    }`}
                    color="secondary"
                    className="outline-none border-none"
                  >
                    <ShoppingCartIcon size={27} />
                  </IconButton>
                </Badge.Content>
                <Badge.Indicator>
                  {cartItems ? cartItems.length : 0}
                </Badge.Indicator>
              </Badge>
            </Link>
            <span
              onClick={() => setOpenNav(!openNav)}
              className="grid ml-0.5 lg:hidden transition-all duration-500 p-1"
            >
              {openNav ? (
                <X
                  size={30}
                  className="transform rotate-180 transition duration-500 ease-in-out"
                />
              ) : (
                <Menu
                  size={35}
                  className="transform rotate-0 transition duration-500 ease-in-out"
                />
              )}
            </span>
          </div>
        </div>
        <AnimatePresence>
          {openNav && (
            <motion.div
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              exit={{ y: -20 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className={` ${
                openNav ? "translate-y-4" : ""
              }fixed top-[8rem] left-0 w-full h-screen bg-white z-50 px-4 py-6 transition-transform duration-500 transform translate-y-0 animate-slideDown lg:hidden`}
            >
              <NavList onLinkClick={() => setOpenNav(false)} />
            </motion.div>
          )}
        </AnimatePresence>
      </Navbar>
    </>
  );
}
