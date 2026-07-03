import { motion } from "framer-motion";
import testimonials from "../data/testimonials";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import { FaStar } from "react-icons/fa";

const Testimonials = () => {
  return (
    <section className="py-24 bg-[#111111]" id="testimonials">
      <div className="max-w-7xl mx-auto px-6">

<motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
  className="max-w-3xl mx-auto text-center"
>

          <span className="uppercase tracking-[6px] text-yellow-500">
            Testimonials
          </span>

          <h2 className="text-5xl font-bold mt-6">
            What Our Guests Say
          </h2>

          <p className="text-gray-400 mt-8 leading-8">
            Hundreds of satisfied guests continue to enjoy unforgettable
            dining experiences at Savora Restaurant.
          </p>

        </motion.div>

        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          spaceBetween={30}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            900: {
              slidesPerView: 2,
            },
            1200: {
              slidesPerView: 3,
            },
          }}
          className="mt-20 pb-16"
        >

          {testimonials.map((item) => (

            <SwiperSlide key={item.id}>

              <motion.div
                whileHover={{ y: -10 }}
                className="bg-[#1A1A1A] rounded-3xl p-8 border border-gray-800 h-full"
              >

                <div className="flex gap-1 text-yellow-500">

                  {[...Array(item.rating)].map((_, index) => (
                    <FaStar key={index} />
                  ))}

                </div>

                <p className="text-gray-300 mt-8 leading-8 italic">
                  "{item.review}"
                </p>

                <div className="flex items-center gap-4 mt-10">

                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />

                  <div>

                    <h4 className="font-bold text-lg">
                      {item.name}
                    </h4>

                    <p className="text-gray-500">
                      {item.role}
                    </p>

                  </div>

                </div>

              </motion.div>

            </SwiperSlide>

          ))}

        </Swiper>

      </div>
    </section>
  );
};

export default Testimonials;