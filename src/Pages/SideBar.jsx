import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaInbox,
  FaBars,
  FaTiktok,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";
import { Menu, Home, X } from "lucide-react";
const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);
  const handleClick = () => setIsOpen(false);

  const menuItems = [
    { icon: <Home size={25} />, label: "Dashboard", path: "/" },
    { icon: <FaInstagram size={25} />, label: "Tiktok", path: "/store" },
    {
      icon: <FaWhatsapp size={25} />,
      label: "Whatsapp",
      path: "/luxury-collections",
    },
    { icon: <FaTiktok size={25} />, label: "Tiktok", path: "/cart" },
  ];

  return (
    <div className="flex justify-center items-center">
      <aside
        className={`h-screen hidden md:block bg-[#F5DEB3] text-white transition-all duration-300 ease-in-out py-8 m-0.5 ${
          isOpen ? "w-64" : "w-15"
        } fixed top-0 left-0 z-10 rounded-lg`}
      >
        <div
          className={`${
            isOpen
              ? "flex items-center justify-between p-4"
              : "flex items-center justify-center"
          }`}
        >
          <h2
            className={`text-xl font-bold transition-opacity duration-300 ${
              isOpen ? "opacity-100" : "opacity-0 hidden"
            }`}
          >
            Socially
          </h2>
          <button
            onClick={toggleSidebar}
            className="text-white text-2xl focus:outline-none"
          >
            {isOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>

        <nav className="mt-4">
          <ul>
            {menuItems.map((item, idx) => (
              <li key={idx} className="mb-2">
                <Link
                  to={item.path}
                  className={`${
                    isOpen
                      ? "flex items-center justify-start gap-4 p-4 rounded-xl  duration-700 transition-colors"
                      : "flex items-center justify-center gap-4 p-4 rounded-xl hover:animate-bounce duration-700 transition-colors"
                  }`}
                >
                  <span className="text-lg">{item.icon}</span>
                  <span
                    onClick={handleClick}
                    className={` transition-all duration-300 ${
                      isOpen ? "opacity-100" : "opacity-0 hidden"
                    }`}
                  >
                    {item.label}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </div>
  );
};

export default Sidebar;
