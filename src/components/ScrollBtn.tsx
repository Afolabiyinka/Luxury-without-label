import { useEffect, useState } from "react";
import { ArrowUpIcon } from "@phosphor-icons/react";
const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
}, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        className="fixed flex gap-2 items-center bottom-12 right-5 bg-black text-white p-3 rounded-full shadow-lg hover:text-black z-50 hover:bg-transparent border transition-all duration-300"
        title="Go to top"
      >
        <ArrowUpIcon className="w-6 h-6" />
      </button>
    )
  );
};

export default ScrollToTopButton;
