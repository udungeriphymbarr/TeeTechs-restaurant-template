import { motion } from "framer-motion";
import { FaStar, FaArrowRight } from "react-icons/fa";
import menu from "../data/menu";

const Menu = () => {
  return (
    <section
      id="menu"
      className="py-24 bg-[#111111] px-6"
    >
      <div className="max-w-7xl mx-auto">

<motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
  className="text-center max-w-3xl mx-auto"
>

          <span className="uppercase tracking-[6px] text-yellow-500">
            Our Menu
          </span>

          <h2 className="text-5xl font-bold mt-6">
            Chef's Signature Dishes
          </h2>

          <p className="text-gray-400 mt-8 leading-8">
            Discover handcrafted meals prepared with premium ingredients
            and served with elegance.
          </p>

        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">

          {menu.map((item, index) => (

            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: .7,
                delay: index * .15,
              }}
              viewport={{ once: true }}
              className="bg-[#1A1A1A] rounded-3xl overflow-hidden group hover:-translate-y-4 transition duration-300 shadow-xl"
            >

              <div className="overflow-hidden">

                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-72 object-cover group-hover:scale-110 duration-500"
                />

              </div>

              <div className="p-6">

                <div className="flex justify-between items-center">

                  <span className="text-sm bg-yellow-500/20 text-yellow-400 px-3 py-1 rounded-full">
                    {item.category}
                  </span>

                  <div className="flex items-center gap-1 text-yellow-500">

                    <FaStar />

                    <span>{item.rating}</span>

                  </div>

                </div>

                <h3 className="text-2xl font-bold mt-5">
                  {item.name}
                </h3>

                <p className="text-gray-400 mt-4 leading-7">
                  {item.description}
                </p>

                <div className="flex justify-between items-center mt-8">

                  <span className="text-yellow-500 text-2xl font-bold">
                    {item.price}
                  </span>

                  <button className="bg-yellow-500 hover:bg-yellow-400 text-black p-3 rounded-full transition">

                    <FaArrowRight />

                  </button>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

        <div className="text-center mt-20">

          <button className="bg-yellow-500 text-black px-10 py-4 rounded-full font-semibold hover:scale-105 transition">

            View Full Menu

          </button>

        </div>

      </div>
    </section>
  );
};

export default Menu;