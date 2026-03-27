import {
  HeartIcon,
  MagnifyingGlassIcon,
  ToteIcon,
  UserIcon,
} from "@phosphor-icons/react";

import { Link, NavLink } from "react-router-dom";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Badge } from "@/components/ui/badge";
import Logo from "@/shared/components/logo";
import { useBagItems } from "../bag/store/useBag";
import { LINKS } from "./nav";

const DesktopNav = () => {
  const { bagItems } = useBagItems();

  return (
    <div className="w-full md:flex flex-col justify-center items-center p-3 gap-6 hidden">
      <div className="flex items-center justify-between w-full">
        <Logo />
        <InputGroup>
          <InputGroupInput
            placeholder="Search for a product or brand"
            type="search"
          />
          <InputGroupAddon align={`inline-end`}>
            <MagnifyingGlassIcon />
          </InputGroupAddon>
        </InputGroup>

        {/* Nav actions for the desktop*/}
        <span className="flex gap-3 items-center justify-center mr-2">
          <Tooltip>
            <Link to="/account" className="p-2 hidden lg:block ">
              <TooltipTrigger>
                <UserIcon size={30} weight="thin" />
              </TooltipTrigger>
              <TooltipContent>You</TooltipContent>
            </Link>
          </Tooltip>
          <Tooltip>
            <Link to="/wishlist" className="p-2 hidden lg:block">
              <TooltipTrigger>
                <HeartIcon size={30} weight="thin" />
              </TooltipTrigger>
              <TooltipContent>WishList</TooltipContent>
            </Link>
          </Tooltip>
          <Tooltip>
            <Link to="/bag" className="hidden lg:block p-2 relative">
              <Badge className="h-5 min-w-5 rounded-full px-1 font-mono tabular-nums absolute -top-0.5 -right-0.5">
                {bagItems.length}
              </Badge>
              <TooltipTrigger>
                <ToteIcon size={30} weight="thin" />
              </TooltipTrigger>
              <TooltipContent>
                <p>Bag</p>
              </TooltipContent>
            </Link>
          </Tooltip>
        </span>
      </div>
      <div className="flex gap-6 w-full justify-start items-center ml-20">
        {LINKS.map(({ icon: Icon, title, href }) => (
          <NavLink
            to={href}
            key={title}
            className={({ isActive }) =>
              `${isActive && "underline underline-offset-8"} flex gap-2 items-center`
            }
          >
            <Icon className="h-5 w-5 stroke-[2px]" />
            {title}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default DesktopNav;
