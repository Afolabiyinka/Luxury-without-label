import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import { ShoppingBagOpenIcon } from "@phosphor-icons/react/dist/ssr";

const HomePage = () => {
  const HEROIMAGES = [
    "https://res.cloudinary.com/dz0v1gqb1/image/upload/f_auto,q_auto,w_1200/v1767947982/wrqni7mvlbdiogpbzerp.jpg",
    "https://res.cloudinary.com/dz0v1gqb1/image/upload/f_auto,q_auto,w_1200/v1767947977/jxiontdjsgbdkvemnk6t.jpg",
    "https://res.cloudinary.com/dz0v1gqb1/image/upload/f_auto,q_auto,w_1200/v1767947970/ucayyak2o98x17vlin6x.jpg",
    "https://res.cloudinary.com/dz0v1gqb1/image/upload/f_auto,q_auto,w_1200/v1767947965/h4r4uosngw5nh8jcym4c.jpg",
  ];

  return (
    <section className="h-screen flex flex-col lg:flex-row items-center justify-center px-6 lg:px-24 py-10 lg:py-20 gap-12 lg:gap-20">
      <div className="w-full lg:w-1/2  text-center flex flex-col  lg:text-left space-y-6">
        <motion.p
          className="text-xl font-medium text-gray-800 uppercase tracking-[0.25em] mb-2"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          New Collection
        </motion.p>

        <motion.h2
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight 
                     bg-linear-to-r from-gray-900 via-gray-700 to-gray-500 
                     text-transparent bg-clip-text"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Luxury Without <br /> Labels
        </motion.h2>

        <motion.p
          className="text-xl text-gray-600 leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.4 }}
        >
          Explore new-in products and discover future bestsellers made just for
          you.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.5 }}
          className="w-full flex  md:flex-row justify-center items-center md:justify-start"
        >
          <Link to="/store">
            <Button size={`lg`}>
              <ShoppingBagOpenIcon className="mr-2 h-6 w-6" />
              Start Shopping
            </Button>
          </Link>
        </motion.div>
      </div>

      {/* Hero Image */}
      <Swiper
        className="w-full lg:w-1/2 flex h-screen  items-center justify-center"
        modules={[Autoplay, Pagination]}
        freeMode
        loop
        speed={1500}
        slidesPerView={1}
        spaceBetween={20}
        // pagination={{ dynamicBullets: true }}
        autoplay={{ delay: 3000, disableOnInteraction: true }}
      >
        {HEROIMAGES.map((image, index) => (
          <SwiperSlide
            key={index}
            className="w-full h-full flex items-center justify-center"
          >
            <motion.img
              src={image}
              alt={`Hero Model ${index + 1}`}
              loading="lazy"
              className="w-full h-full object-contain "
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              fetchPriority="high"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HomePage;
