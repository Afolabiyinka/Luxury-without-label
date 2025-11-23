import { useEffect, useState } from "react";
import { exclusives } from "./libs/exclusivesArray";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { AnimatePresence, motion } from "framer-motion";
import "swiper/css/pagination";
import "swiper/css";

const Exclusives = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="h-screen p-6 w-full flex justify-center items-center">
      <Swiper
        onSlideChange={(swiper) => {
          setCurrentIndex(swiper.realIndex);
        }}
        modules={[Autoplay, Pagination]}
        className="h-full w-full"
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
            <div className="flex flex-col md:flex-row shadow p-2 h-full w-full">
              <img
                src={item.coverImage}
                className="h-full w-full md:w-[40%] object-fill"
              />
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ y: -100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 100, opacity: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                  className="flex flex-col w-[60%] h-full justify- items-start border p-6"
                >
                  <motion.h1 className=" text-6xl text-gray-900 font-extrabold tracking-wider ">
                    {item.headingText}
                  </motion.h1>
                  <motion.p className="text-3xl tracking-widest font-semibold mt-4 font-mono">
                    {item.description}
                  </motion.p>
                  <motion.span
                    className="text-2xl  border  p-3 px-10 tracking-widest font-semibold mt-4 bg-black text-white"
                    initial={{ x: 50 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ y: 10, opacity: 0 }}
                    transition={{ duration: 0.3, delay: 0.4 }}
                  >
                    <p>{item.discount}</p>
                  </motion.span>
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
