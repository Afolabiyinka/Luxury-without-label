import Logo from "@/shared/components/logo";
import MenuButton from "@/shared/components/menu-button";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { LINKS } from "./nav";
import { Link, NavLink } from "react-router-dom";
import { ToteIcon } from "@phosphor-icons/react";
import { Badge } from "@/components/ui/badge";
import { useBagItems } from "../bag/store/useBag";

const MobileNav = () => {
  const [open, setOpen] = React.useState(false);
  const { bagItems } = useBagItems();

  return (
    <div className="w-full px-3 py-2">
      <div className="flex justify-between items-center mb-2">
        <Logo />

        <div className="flex items-center gap-4">
          {/* BAG */}
          <Link to="/bag" className="relative">
            <Badge className="absolute -top-2 -right-2 h-5 min-w-5 flex items-center justify-center rounded-full text-xs">
              {bagItems.length}
            </Badge>
            <ToteIcon size={26} weight="thin" />
          </Link>

          <MenuButton open={open} onClick={() => setOpen(!open)} />
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            key="menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-white/80 backdrop-blur-xl flex flex-col justify-center items-center gap-10"
          >
            <div className="absolute top-6 right-6">
              <MenuButton open={open} onClick={() => setOpen(false)} />
            </div>

            {LINKS.map(({ href, icon: Icon, title }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <NavLink
                  to={href}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center gap-3 text-2xl tracking-tight transition ${isActive
                      ? "text-black"
                      : "text-neutral-500 hover:text-black"
                    }`
                  }
                >
                  <Icon className="stroke-[1px]" />
                  {title}
                </NavLink>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileNav;