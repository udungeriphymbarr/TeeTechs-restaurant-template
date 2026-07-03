import { motion } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";

const contactInfo = [
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    value: "12 Admiralty Way, Lekki, Lagos",
  },
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    value: "+234 805 766 3703",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    value: "hello@savora.com",
  },
  {
    icon: <FaClock />,
    title: "Opening Hours",
    value: "Mon - Sun | 9:00 AM - 11:00 PM",
  },
];

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-[#111111] py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
          className="text-center"
        >

          <span className="uppercase tracking-[6px] text-yellow-500">
            Contact Us
          </span>

          <h2 className="text-5xl font-bold mt-6">
            We'd Love To Hear From You
          </h2>

          <p className="text-gray-400 mt-8 leading-8">
            Whether you're planning a romantic dinner, family gathering,
            or corporate event, we're ready to welcome you.
          </p>

        </motion.div>

        {/* Contact Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">

          {contactInfo.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: .6,
                delay: index * .15,
              }}
              className="bg-[#1B1B1B] rounded-3xl p-8 text-center hover:-translate-y-3 transition duration-300"
            >

              <div className="w-16 h-16 rounded-full bg-yellow-500 text-black flex items-center justify-center mx-auto text-2xl mb-6">
                {item.icon}
              </div>

              <h3 className="text-xl font-bold mb-4">
                {item.title}
              </h3>

              <p className="text-gray-400 leading-7">
                {item.value}
              </p>

            </motion.div>

          ))}

        </div>

        {/* Google Map */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
          className="mt-20 rounded-3xl overflow-hidden shadow-2xl"
        >

          <iframe
            title="Google Map"
            src="https://www.google.com/maps?q=Lekki,Lagos&output=embed"
            width="100%"
            height="500"
            loading="lazy"
            className="border-0"
          ></iframe>

        </motion.div>

      </div>
    </section>
  );
};

export default Contact;