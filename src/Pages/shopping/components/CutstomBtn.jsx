import { useState } from "react";

const CustomBotton = ({ text, Icon }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <button
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span
        to={null}
        className="px-10 py-3.5 rounded-full font-medium tracking-wide  text-white bg-gray-900 hover:bg-gray-800   shadow-md hover:shadow-lg  transition-all duration-300 ease-in-out flex gap-4 items-center"
      >
        {text}{" "}
        {Icon && (
          <Icon
            className={` h-8  w-8  ${
              isHovered ? "translate-x-2" : "translate-0"
            }`}
          />
        )}
      </span>
    </button>
  );
};

export default CustomBotton;
