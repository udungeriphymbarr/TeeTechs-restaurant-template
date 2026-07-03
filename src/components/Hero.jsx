import { motion } from "framer-motion";
import heroImg from "../assets/images/hero.jpg";
import business from "../data/business";
import { FaArrowRight, FaPlay, FaStar } from "react-icons/fa";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-[#0F0F0F] text-white overflow-hidden flex items-center"
    >
      {/* Background Glow */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-yellow-500/10 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-orange-500/10 blur-[120px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center pt-28">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
        >
          <span className="inline-block bg-yellow-500/20 text-yellow-400 px-5 py-2 rounded-full text-sm tracking-widest uppercase">
            {business.tagline}
          </span>

          <h1 className="mt-8 text-5xl md:text-6xl lg:text-7xl font-black leading-tight">
            Taste The
            <br />
            <span className="text-yellow-500">
              Luxury
            </span>
            <br />
            Of Fine Dining
          </h1>

          <p className="mt-8 text-gray-400 text-lg leading-8 max-w-xl">
            Experience unforgettable meals prepared by professional chefs
            using only premium ingredients in an elegant atmosphere designed
            for memorable moments.
          </p>

          <div className="flex flex-wrap gap-5 mt-10">

            <button className="flex items-center gap-3 bg-yellow-500 hover:bg-yellow-400 text-black px-8 py-4 rounded-full font-semibold transition duration-300">
              Reserve Table
              <FaArrowRight />
            </button>

            <button className="flex items-center gap-3 border border-yellow-500 hover:bg-yellow-500 hover:text-black px-8 py-4 rounded-full transition duration-300">
              <FaPlay />
              View Menu
            </button>

          </div>

          {/* Stats */}
          <div className="flex gap-10 mt-16 flex-wrap">

            <div>
              <h2 className="text-3xl font-bold text-yellow-500">
                20K+
              </h2>
              <p className="text-gray-400">
                Happy Guests
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-yellow-500">
                150+
              </h2>
              <p className="text-gray-400">
                Premium Dishes
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-yellow-500">
                4.9
              </h2>

              <div className="flex text-yellow-500 mt-1">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>

            </div>

          </div>

        </motion.div>

        {/* RIGHT IMAGE */}

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="relative"
        >

          <div className="absolute -top-10 -left-10 w-48 h-48 rounded-full bg-yellow-500/20 blur-3xl"></div>

          <motion.img
            animate={{
              y: [0, -12, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 4,
            }}
            src={heroImg}
            alt="Restaurant"
            className="rounded-[40px] shadow-2xl object-cover w-full"
          />

          {/* Floating Card */}

          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 3,
            }}
            className="absolute bottom-8 -left-8 bg-white text-black rounded-3xl p-6 shadow-2xl"
          >

            <h3 className="font-bold text-lg">
              Chef's Choice
            </h3>

            <p className="text-gray-500 text-sm mt-2">
              Fresh ingredients prepared
              daily with passion.
            </p>

          </motion.div>

        </motion.div>

      </div>

      {/* Scroll Indicator */}

      <motion.div
        animate={{
          y: [0, 12, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 2,
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >

        <div className="w-7 h-12 border-2 border-yellow-500 rounded-full flex justify-center">

          <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>

        </div>

      </motion.div>

    </section>
  );
};

export default Hero;