import { useState, useEffect } from "react";
import {
  IconButton,
  Typography,
  Navbar,
  Badge,
  Tooltip,
} from "@material-tailwind/react";
import DeEleganceLogo from "../../Assets/Images/DeElegance Logo.png";
import { X, Menu, ShoppingCartIcon, Heart, Search } from "lucide-react";

import { Link, useLocation } from "react-router-dom";
import { useCartContext } from "../cart/hooks/CartContext";
import { AnimatePresence, motion } from "framer-motion";
import { LINKS } from "./Nav-Related";

function NavList({ onLinkClick }) {
  const location = useLocation();
  return (
    <ul className="flex flex-col gap-x-8 gap-y-3  lg:mt-0 lg:flex-row lg:items-center lg:justify-start transition-all duration-1000">
      {LINKS.map(({ icon: Icon, title, href }) => (
        <Link to={href} key={title} onClick={onLinkClick}>
          <li>
            <span className="flex flex-col">
              <Typography
                className={`flex items-center gap-x-2 p-1 border-none ${
                  location.pathname === href
                    ? "border rounded-full  p-2 px-4 bg-gray-200"
                    : ""
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
      <div className="">
        <div className="bg-gray-50/40  shadow-sm text-black p-1 mt-2 flex flex-col gap-4 md:flex-row justify-center items-center md:justify-around md:items-center w-full">
          <div>
            <a href="/">
              <img
                src={DeEleganceLogo}
                alt=""
                className="h-12 bg-white  rounded-full w-[17rem] hidden md:block"
              />
            </a>
          </div>

          <span className="flex gap-2 items-center justify-center border p-2.5 rounded-3xl ">
            <input
              type="search"
              className="outline-none p-1 w-[17rem] border-none bg-inherit text-sm"
              placeholder="Search for a product or brand"
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
              <p className="bg-black/90 text-white h-6 w-6 flex justify-center items-center rounded-full">
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
              <div>
                <a href="/">
                  <img
                    src={DeEleganceLogo}
                    alt=""
                    className="h-14 bg-white  rounded-full w-[13rem] block md:hidden mr-2"
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
                      <ShoppingCartIcon size={27} className="stroke-[1.5px]" />
                    </IconButton>
                  </Badge.Content>
                  <Badge.Indicator>
                    {cartItems ? cartItems.length : 0}
                  </Badge.Indicator>
                </Badge>
              </Link>
              <button
                onClick={() => setOpenNav(!openNav)}
                className="grid ml-0.5 lg:hidden transition-all duration-500 p-1 "
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
              </button>
            </div>
          </div>
          <AnimatePresence>
            {openNav && (
              <motion.div
                initial={{ y: -20 }}
                animate={{ y: 0 }}
                exit={{ y: -20 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className={` ${
                  openNav ? "translate-y-4" : ""
                }fixed top-[8rem] left-0 w-full h-screen bg-white z-50 px-4 py-6 transition-transform duration-500 transform translate-y-0 animate-slideDown lg:hidden`}
              >
                <NavList onLinkClick={() => setOpenNav(false)} />
              </motion.div>
            )}
          </AnimatePresence>
        </Navbar>
      </div>
    </>
  );
}
