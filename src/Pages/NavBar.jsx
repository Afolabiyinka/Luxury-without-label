import { useState, useEffect } from "react";
import {
  IconButton,
  Typography,
  Collapse,
  Navbar,
  Badge,
} from "@material-tailwind/react";

import {
  Home,
  X,
  Menu,
  ShoppingBag,
  ShoppingCartIcon,
  MessageCircle,
  Pen,
  Diamond,
  HelpCircle,
  CircleHelp,
  Heart,
} from "lucide-react";

import { Link, useLocation } from "react-router-dom";
import { useCartContext } from "../Contexts/CartContext";

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
    <ul className="flex flex-col gap-x-8 gap-y-3  lg:mt-0 lg:flex-row lg:items-center transition-all duration-1000">
      {LINKS.map(({ icon: Icon, title, href }) => (
        <Link
          to={href}
          key={title}
          onClick={onLinkClick}
          className={`${
            location.pathname === href ? "bg-gray-300 p-1 rounded-xl" : ""
          }`}
        >
          <li>
            <span className="flex flex-col">
              <Typography className={`flex items-center gap-x-2 p-1`}>
                <Icon className="h-4 w-4" />
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

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  return (
    <Navbar className="w-full border p-4 rounded-none flex flex-col items-center justify-center mb-3">
      <div className="flex justify-between">
        <div className="flex items-center ">
          <Typography
            as="a"
            href="/"
            type="large"
            className="ml-3 mr-6 py-1 font-semibold text-2xl"
          >
            De Elegance
          </Typography>
          <div className={`hidden lg:block  ${openNav ? "translate-x-7" : ""}`}>
            <NavList onLinkClick={() => setOpenNav(false)} />
          </div>
        </div>

        <Link to="/cart">
          <Badge className="ml-16 lg:grid lg:mr-2 lg:mt-1">
            <Badge.Content>
              <IconButton variant="ghost" className="outline-none border-none">
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
          className="grid ml-0.5 lg:hidden transition-all duration-1000 ease-in-out p-1"
        >
          {openNav ? (
            <X
              size={30}
              className="transition-transform  transform active:-rotate-180  duration-1000"
            />
          ) : (
            <Menu
              size={35}
              className=" transition-transform transform active:-rotate-180  duration-1000"
            />
          )}
        </span>
      </div>
      {openNav && (
        <div className="p-2 flex justify-center  w-screen h-screen items-center translate-x-8  transform transition-all duration-700">
          <NavList onLinkClick={() => setOpenNav(false)} />
        </div>
      )}
    </Navbar>
  );
}
