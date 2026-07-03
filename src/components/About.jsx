import { motion } from "framer-motion";
import { FaUtensils, FaAward, FaLeaf } from "react-icons/fa";

const features = [
  {
    icon: <FaUtensils size={26} />,
    title: "Premium Dishes",
    text: "Prepared daily using fresh and carefully selected ingredients."
  },
  {
    icon: <FaAward size={26} />,
    title: "Award Winning",
    text: "Recognized for exceptional taste, quality and hospitality."
  },
  {
    icon: <FaLeaf size={26} />,
    title: "Fresh Ingredients",
    text: "Every meal is crafted from locally sourced fresh produce."
  }
];

const About = () => {
  return (
    <section
      id="about"
      className="bg-[#121212] py-24 px-6"
    >
      <div className="max-w-4xl mx-auto text-center">


        <motion.div
          initial={{ opacity: 0, x: 70 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
        >

          <span className="text-yellow-500 uppercase tracking-[5px]">
            About Us
          </span>

          <h2 className="text-5xl font-bold mt-6 leading-tight">
            A Luxury Dining
            Experience Like
            No Other
          </h2>

          <p className="text-gray-400 mt-8 leading-8">
            At Savora Restaurant, we combine premium cuisine,
            exceptional hospitality and elegant ambience to
            create unforgettable dining experiences for every
            guest.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-12">

            {features.map((item, index) => (

              <div
                key={index}
                className="bg-[#1B1B1B] rounded-2xl p-6 hover:bg-yellow-500 hover:text-black duration-300"
              >
                <div className="text-yellow-500 mb-4">
                  {item.icon}
                </div>

                <h3 className="font-bold text-lg">
                  {item.title}
                </h3>

                <p className="text-sm mt-3 leading-6">
                  {item.text}
                </p>

              </div>

            ))}

          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default About;