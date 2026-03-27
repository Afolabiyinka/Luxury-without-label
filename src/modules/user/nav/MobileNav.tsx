import Logo from "@/shared/components/logo";
import MenuButton from "@/shared/components/menu-button";
import { AnimatePresence } from "framer-motion";
import React from "react";
import { LINKS } from "./nav";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const MobileNav = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="w-full p-1">
      <div className="flex justify-between w-full p-1 mb-2">
        <Logo />
        <MenuButton open={open} onClick={() => setOpen(!open)} />
      </div>

      {open && (
        <AnimatePresence>
          <motion.div
            initial={{ height: 0 }}
            exit={{ height: 0 }}
            animate={{ height: "100vh" }}
            transition={{ duration: 0.4 }}
            className="h-screen relative z-50 flex flex-col gap-10 justify-center p-4 border"
          >
            {LINKS.map(({ href, icon: Icon, title }, i) => (
              <motion.span key={i}>
                <NavLink
                  to={href}
                  onClick={() => setOpen(!open)}
                  className={({ isActive }) =>
                    `${isActive && "underline underline-offset-4"} flex gap-2 text-2xl items-center`
                  }
                >
                  <Icon className="stroke-[1px]" />
                  {title}
                </NavLink>
              </motion.span>
            ))}
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  );
};

export default MobileNav;
