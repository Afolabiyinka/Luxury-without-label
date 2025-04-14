import { useState, useEffect, useContext } from "react";
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
  PenLine,
  X,
  Menu,
  ShoppingBag,
  ShoppingCartIcon,
} from "lucide-react";

import { Link } from "react-router-dom";
import { useCartContext } from "../Contexts/CartContext"; // Import the CartContext

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
    href: "/products",
  },
  {
    icon: PenLine,
    title: "Blogs",
    href: "/Blogs",
  },
];

const date = new Date().getDate();
const Month = new Date().toLocaleString("default", { month: "long" });

function NavList({ onLinkClick }) {
  return (
    <ul className="mt-4 flex flex-col gap-x-4 gap-y-1.5 lg:mt-0 lg:flex-row lg:items-center transition-all duration-300">
      {LINKS.map(({ icon: Icon, title, href }) => (
        <Link to={href} key={title} onClick={onLinkClick}>
          <li>
            <Typography
              type="medium"
              className="flex items-center gap-x-2 p-1  hover:underline-offset-1"
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
  const { cartItems } = useCartContext(); // Access cartItems from the context

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  return (
    <Navbar className="mx-auto w-full max-w-screen-xl">
      <div className="flex items-center">
        <div className="flex items-center flex-grow">
          {" "}
          {/* Pushes items to the left */}
          <Typography
            as="a"
            href="/"
            type="large"
            className="ml-6 mr-6 py-1 font-semibold text-2xl  flex gap-2"
          >
            {Month} {date}th Collections
          </Typography>
          <hr className="ml-1 mr-1.5 hidden h-5 w-px border-l border-t-0 border-secondary-dark lg:block" />
          <div className="hidden lg:block">
            <NavList onLinkClick={() => setOpenNav(false)} />
          </div>
        </div>

        <Link to="/cart">
          <Badge className="ml-4">
            <Badge.Content>
              <IconButton color="secondary">
                <ShoppingCartIcon className="h-4 w-4 stroke-2" />
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
          color="secondary"
          onClick={() => setOpenNav(!openNav)}
          className="ml-4 grid lg:hidden transition-all duration-300 ease-in-out"
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
