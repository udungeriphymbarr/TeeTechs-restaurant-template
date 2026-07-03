import { motion } from "framer-motion";
import {
  FaUtensils,
  FaGlassCheers,
  FaUserTie,
  FaClock,
} from "react-icons/fa";

const features = [
  {
    icon: <FaUtensils />,
    title: "Premium Cuisine",
    text: "Expertly crafted dishes made with the freshest ingredients."
  },
  {
    icon: <FaGlassCheers />,
    title: "Luxury Atmosphere",
    text: "Elegant interiors designed for memorable dining experiences."
  },
  {
    icon: <FaUserTie />,
    title: "Professional Chefs",
    text: "Our chefs combine creativity with years of culinary excellence."
  },
  {
    icon: <FaClock />,
    title: "Fast Reservation",
    text: "Reserve your table in minutes with our seamless booking system."
  }
];

const Features = () => {
  return (
    <section className="bg-[#0F0F0F] py-24 px-6">
      <div className="max-w-7xl mx-auto text-center">

        <div className="max-w-3xl mx-auto">
  <motion.span
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    className="uppercase tracking-[5px] text-yellow-500"
  >
          Why Choose Us
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
          className="text-5xl font-bold mt-6 leading-tight"
        >
          We Serve More Than Food
        </motion.h2>

        <p className="text-gray-400 mt-8 leading-8">
          Every meal is crafted to create unforgettable moments.
          We combine world-class hospitality, premium ingredients,
          and an elegant dining atmosphere.
        </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">

          {features.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.2,
                duration: .6,
              }}
              className="bg-[#171717] rounded-3xl p-8 border border-transparent hover:border-yellow-500 hover:-translate-y-3 transition duration-300"
            >

              <div className="w-16 h-16 mx-auto rounded-full bg-yellow-500 text-black flex items-center justify-center text-2xl mb-6">
                {item.icon}
              </div>

              <h3 className="text-2xl font-semibold mb-4">
                {item.title}
              </h3>

              <p className="text-gray-400 leading-7">
                {item.text}
              </p>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default Features;