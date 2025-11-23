import { useState } from "react";
import { exclusives } from "./libs/exclusivesArray";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { AnimatePresence, motion } from "framer-motion";
import Button from "./components/EsxBtn";
import "swiper/css/pagination";
import "swiper/css";

const Exclusives = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="p-6 w-full flex justify-center items-center">
      <Swiper
        onSlideChange={(swiper) => setCurrentIndex(swiper.realIndex)}
        modules={[Autoplay, Pagination]}
        className="w-full max-w-7xl"
        freeMode
        loop={true}
        speed={1500}
        slidesPerView={1}
        spaceBetween={20}
        pagination={{ dynamicBullets: true }}
        autoplay={{ delay: 5000, disableOnInteraction: true }}
      >
        {exclusives.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col md:flex-row shadow-md p-2 gap-6">
              <img
                src={item.coverImage}
                alt={item.headingText}
                className="w-full md:w-[45%] h-64 md:h-auto object-cover rounded-md"
              />

              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ y: -50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 50, opacity: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                  className="flex flex-col flex-1 p-4 justify-start"
                >
                  <motion.h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 tracking-wide leading-tight">
                    {item.headingText}
                  </motion.h1>

                  <motion.p className="text-lg md:text-2xl tracking-wide font-semibold mt-3 font-mono leading-relaxed">
                    {item.description}
                  </motion.p>

                  <motion.div
                    className="flex flex-wrap md:flex-nowrap items-center gap-4 mt-4"
                    initial={{ y: 50 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 10, opacity: 0 }}
                    transition={{ duration: 0.3, delay: 0.4 }}
                  >
                    <h1 className="text-2xl md:text-3xl font-bold">
                      {item.price}
                    </h1>
                    <Button />
                  </motion.div>

                  <div className="flex flex-wrap gap-4 mt-5">
                    <motion.span
                      className="text-lg md:text-xl px-6 py-2 tracking-widest font-semibold bg-transparent rounded-full border flex items-center"
                      initial={{ y: 50 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: 10, opacity: 0 }}
                      transition={{ duration: 0.3, delay: 0.5 }}
                    >
                      {item.discount}
                    </motion.span>

                    <motion.span
                      className="text-lg md:text-xl px-6 py-2 tracking-widest font-semibold bg-transparent rounded-full border flex items-center gap-2"
                      initial={{ y: 50 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: 10, opacity: 0 }}
                      transition={{ duration: 0.3, delay: 0.5 }}
                    >
                      <img
                        src={item.brandLogo}
                        alt={item.brand}
                        className="w-8 h-8 md:w-12 md:h-12 object-contain"
                      />
                      {item.brand}
                    </motion.span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Exclusives;
