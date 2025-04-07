import * as React from "react";
import {
  IconButton,
  Typography,
  Collapse,
  Navbar,
  Avatar,
} from "@material-tailwind/react";

import { Home, Gem, PenLine, Sparkles, X, Menu } from "lucide-react";
import { Link } from "react-router-dom";

const LINKS = [
  {
    icon: Home,
    title: "Home",
    href: "/home",
  },
  {
    icon: Gem,
    title: "Luxury Collections",
    href: "/luxury collections",
  },
  {
    icon: PenLine,
    title: "Blogs",
    href: "/Blogs",
  },
  {
    icon: Sparkles,
    title: "Exclusives",
    href: "/Exclusives",
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
              className="flex items-center gap-x-2 p-1 hover:text-primary"
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
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const handleLinkClick = () => {
    setOpenNav(false); // Close the navbar when a link is clicked
  };

  return (
    <Navbar className="mx-auto w-full max-w-screen-xl">
      <div className="flex items-center">
        <Typography
          as="a"
          href="/"
          type="large"
          className="ml-6 mr-6 py-1 font-semibold text-2xl  flex gap-2"
        >
          {Month} {date}th Collections
        </Typography>
        <hr className="ml-1 mr-1.5 hidden h-5 w-px border-l border-t-0 border-secondary-dark lg:block" />
        <div className="hidden lg:block">
          <NavList onLinkClick={handleLinkClick} />
        </div>

        <Avatar
          src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/ct-assets/team-4.jpg"
          className="hidden lg:ml-auto lg:inline-block mr-2"
        />

        <IconButton
          size="sm"
          variant="ghost"
          color="secondary"
          onClick={() => setOpenNav(!openNav)}
          className="ml-auto grid lg:hidden transition-all duration-300 ease-in-out"
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
        <NavList onLinkClick={handleLinkClick} />
      </Collapse>
    </Navbar>
  );
}
