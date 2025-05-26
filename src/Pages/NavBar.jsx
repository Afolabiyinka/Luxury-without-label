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
  Gem,
  X,
  Menu,
  ShoppingBag,
  ShoppingCartIcon,
  MessageCircle,
  Pen,
} from "lucide-react";

import { Link } from "react-router-dom";
import { useCartContext } from "../Contexts/CartContext";
import ModeToggle from "../Components/ModeToggle";

const LINKS = [
  {
    icon: Home,
    title: "Home",
    href: "/home",
  },

  {
    icon: Gem,
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
    icon: MessageCircle,
    title: "FAQs",
    href: "/FAQs",
  },
];

function NavList({ onLinkClick }) {
  const [currentLink, setCurrentLink] = useState("");
  return (
    <ul className="mt-4 flex flex-col gap-x-6 gap-y-3 lg:mt-0 lg:flex-row lg:items-center transition-all duration-300">
      {LINKS.map(({ icon: Icon, title, href }) => (
        <Link to={href} key={title} onClick={onLinkClick}>
          <li>
            <Typography
              // type="medium"
              className={` ${
                currentLink
                  ? "flex items-center gap-x-2 p-1 underline-offset-2 underline"
                  : "flex items-center gap-x-2 p-1  hover:underline-offset-1"
              } `}
            >
              <Icon className="h-4 w-4" />
              {title}
            </Typography>
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
    <Navbar className="w-full bg-inherit shadow-none border-none">
      <div className="flex justify-between">
        <div className="flex items-center">
          <Typography
            as="a"
            href="/"
            type="large"
            className="ml-6 mr-6 py-1 font-semibold text-2xl "
          >
            De Elegance
          </Typography>
          <hr className="ml-1 mr-1.5 hidden h-5 w-px border-l border-t-0 border-secondary-dark lg:block" />
          <div className="hidden lg:block">
            <NavList onLinkClick={() => setOpenNav(false)} />
          </div>
        </div>
        <div></div>
        <Link to="/cart">
          <Badge className="ml-16 lg:grid lg:mr-2">
            <Badge.Content>
              <IconButton
                variant="ghost"
                className="outline-none border-none active:animate-bounce duration-300"
              >
                <ShoppingCartIcon className="h-6 w-6 " />
              </IconButton>
            </Badge.Content>
            <Badge.Indicator>
              {cartItems ? cartItems.length : 0}
            </Badge.Indicator>
          </Badge>
        </Link>
        <IconButton
          size="sm"
          variant="ghost"
          // color="secondary"
          onClick={() => setOpenNav(!openNav)}
          className="grid lg:hidden transition-all duration-300 ease-in-out"
        >
          {openNav ? <X size={30} /> : <Menu size={35} />}
        </IconButton>
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
