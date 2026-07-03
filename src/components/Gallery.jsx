import { motion } from "framer-motion";
import { FaSearchPlus } from "react-icons/fa";
import gallery from "../data/gallery";

const Gallery = () => {
  return (
    <section
      id="gallery"
      className="py-24 bg-[#0F0F0F] px-6"
    >
      <div className="container mx-auto px-6 lg:px-8 xl:px-0">

        {/* Heading */}

       <motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
  className="max-w-3xl mx-auto text-center"
>
  <span className="uppercase tracking-[6px] text-yellow-500">
    Gallery
  </span>

  <h2 className="text-5xl font-bold mt-6 leading-tight">
    Discover Our Atmosphere
  </h2>

  <p className="text-gray-400 mt-8 leading-8">
    Every meal tells a story. Every moment creates a memory.
    Take a glimpse into our elegant dining experience.
  </p>
</motion.div>

        {/* Gallery Grid */}

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">

          {gallery.map((item, index) => (

            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: .9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: .7,
                delay: index * .15
              }}
              viewport={{ once: true }}
              className="relative rounded-3xl overflow-hidden group cursor-pointer"
            >

              <img
                src={item.image}
                alt={item.title}
                className="w-full h-[420px] object-cover group-hover:scale-110 transition duration-700"
              />

              {/* Overlay */}

              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col justify-center items-center">

                <div className="bg-yellow-500 w-16 h-16 rounded-full flex items-center justify-center text-black text-xl mb-6">

                  <FaSearchPlus />

                </div>

                <h3 className="text-2xl font-bold text-white">
                  {item.title}
                </h3>

                <p className="text-gray-300 mt-3">
                  Premium Restaurant
                </p>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default Gallery;