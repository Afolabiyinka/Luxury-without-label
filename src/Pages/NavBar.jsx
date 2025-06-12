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
    <ul className="mt-4 flex flex-col gap-x-6 gap-y-3  lg:mt-0 lg:flex-row lg:items-center  transition-all duration-150">
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
    <Navbar className="w-full  border m-0 lg:mt-1 rounded-xl  lg:items-center lg:justify-center mb-3">
      <div className="flex justify-between">
        <div className="flex items-center">
          <Typography
            as="a"
            href="/"
            type="large"
            className="ml-3 mr-6 py-1 font-semibold text-2xl"
          >
            De Elegance
          </Typography>
          <hr className="ml-1 mr-1.5 hidden h-5 w-px border-l border-t-0 border-secondary-dark lg:block" />
          <div className={`hidden lg:block  ${openNav ? "translate-x-7" : ""}`}>
            <NavList onLinkClick={() => setOpenNav(false)} />
          </div>
        </div>

        <Link to="/cart">
          <Badge className="ml-16 lg:grid lg:mr-2 lg:mt-1">
            <Badge.Content>
              <IconButton
                variant="ghost"
                className="outline-none border-none"
                isCircular
              >
                <ShoppingCartIcon className="h-6 w-6 " />
              </IconButton>
            </Badge.Content>
            <Badge.Indicator>
              {cartItems ? cartItems.length : 0}
            </Badge.Indicator>
          </Badge>
        </Link>
        <span
          // size="sm"
          // variant="ghost"
          // color="secondary"
          onClick={() => setOpenNav(!openNav)}
          className="grid lg:hidden transition-all duration-700 ease-in-out p-1"
        >
          {openNav ? (
            <X
              size={30}
              className="active:rotate-180 transition-all duration-700"
            />
          ) : (
            <Menu
              size={35}
              className="active:rotate-180 transition-all duration-700"
            />
          )}
        </span>
      </div>
      <Collapse
        open={openNav}
        className="transition-all duration-700 ease-in-out transform"
        style={{
          transform: openNav ? "translateY(0)" : "translateY(-100%)",
        }}
      >
        <NavList onLinkClick={() => setOpenNav(false)} />
      </Collapse>
    </Navbar>
  );
}
