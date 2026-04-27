import { useState } from "react";
import type { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import { AnimatePresence, motion } from "framer-motion";
import { exclusives } from "./libs/exclusivesArray";

import "swiper/css";
import "swiper/css/pagination";
import AddToBag from "../bag/components/AddtoBag";

const Exclusives = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  return (
    <div className="px-4 md:px-8 py-10 w-full flex justify-center">
      <Swiper
        onSlideChange={(swiper: SwiperType) =>
          setCurrentIndex(swiper.realIndex)
        }
        modules={[Autoplay, Pagination]}
        className="w-full max-w-7xl"
        loop
        speed={800} // ✅ smoother (1500 was too slow)
        slidesPerView={1}
        spaceBetween={24}
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
      >
        {exclusives.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col md:flex-row gap-8 bg-white  rounded-2xl overflow-hidden transition">

              {/* IMAGE */}
              <div className="md:w-1/2 flex items-center justify-center p-6">
                <img
                  src={item.coverImage}
                  alt={item.headingText}
                  className="max-h-[350px] object-contain transition-transform duration-300 hover:scale-105"
                />
              </div>

              {/* CONTENT */}
              <div className="md:w-1/2 flex items-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 30 }}
                    transition={{ duration: 0.35 }}
                    className="flex flex-col gap-4 p-6"
                  >
                    {/* BRAND */}
                    <div className="flex items-center gap-3 text-sm text-gray-500">
                      <img
                        src={item.brandLogo}
                        alt={item.brand}
                        className="w-8 h-8 object-contain"
                      />
                      <span className="tracking-wide">{item.brand}</span>
                    </div>

                    {/* TITLE */}
                    <h1 className="text-2xl md:text-4xl font-bold leading-tight tracking-tight">
                      {item.headingText}
                    </h1>

                    {/* DESCRIPTION */}
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                      {item.description}
                    </p>

                    {/* PRICE + DISCOUNT */}
                    <div className="flex items-center gap-6 mt-2">
                      <p className="text-2xl font-semibold tracking-tight">
                        {item.price}
                      </p>

                      {item.discount && (
                        <span className="text-xs bg-gray-100 px-2 py-1 rounded-md text-gray-600">
                          {item.discount}
                        </span>
                      )}
                    </div>

                    {/* CTA */}
                    <div className="mt-4">
                      <AddToBag text="Buy now" />
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Exclusives;