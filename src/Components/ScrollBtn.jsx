import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

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
        className="fixed bottom-12 right-5 bg-gray-500 text-white p-3 rounded-full shadow-lg hover:bg-gray-400 transition-all duration-300 z-50"
        title="Go to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    )
  );
};

export default ScrollToTopButton;
