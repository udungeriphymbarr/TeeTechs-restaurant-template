import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import business from "../data/business";

const Footer = () => {
  return (
    <footer className="bg-black text-white">

      {/* Top */}

      <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-4 md:grid-cols-2 gap-12">

        {/* Logo */}

        <div>

          <h2 className="text-4xl font-black text-yellow-500">
            SAVORA
          </h2>

          <p className="text-gray-400 mt-6 leading-8">
            Experience premium dining,
            unforgettable flavors,
            and exceptional hospitality.
          </p>

          <div className="flex gap-4 mt-8">

            <a
              href="#"
              className="w-11 h-11 rounded-full bg-[#181818] hover:bg-yellow-500 hover:text-black flex items-center justify-center transition"
            >
              <FaFacebookF />
            </a>

            <a
              href="#"
              className="w-11 h-11 rounded-full bg-[#181818] hover:bg-yellow-500 hover:text-black flex items-center justify-center transition"
            >
              <FaInstagram />
            </a>

            <a
              href="#"
              className="w-11 h-11 rounded-full bg-[#181818] hover:bg-yellow-500 hover:text-black flex items-center justify-center transition"
            >
              <FaTwitter />
            </a>

            <a
              href="#"
              className="w-11 h-11 rounded-full bg-[#181818] hover:bg-yellow-500 hover:text-black flex items-center justify-center transition"
            >
              <FaLinkedinIn />
            </a>

          </div>

        </div>

        {/* Quick Links */}

        <div>

          <h3 className="text-2xl font-bold mb-6">
            Quick Links
          </h3>

          <ul className="space-y-4 text-gray-400">

            <li><a href="#home" className="hover:text-yellow-500">Home</a></li>

            <li><a href="#about" className="hover:text-yellow-500">About</a></li>

            <li><a href="#menu" className="hover:text-yellow-500">Menu</a></li>

            <li><a href="#gallery" className="hover:text-yellow-500">Gallery</a></li>

            <li><a href="#reservation" className="hover:text-yellow-500">Reservation</a></li>

            <li><a href="#contact" className="hover:text-yellow-500">Contact</a></li>

          </ul>

        </div>

        {/* Contact */}

        <div>

          <h3 className="text-2xl font-bold mb-6">
            Contact
          </h3>

          <div className="space-y-6 text-gray-400">

            <div className="flex gap-4">

              <FaMapMarkerAlt className="text-yellow-500 mt-1" />

              <p>
                12 Admiralty Way,
                Lekki, Lagos.
              </p>

            </div>

            <div className="flex gap-4">

              <FaPhoneAlt className="text-yellow-500 mt-1" />

              <p>
                {business.phone}
              </p>

            </div>

            <div className="flex gap-4">

              <FaEnvelope className="text-yellow-500 mt-1" />

              <p>
                {business.email}
              </p>

            </div>

          </div>

        </div>

        {/* Newsletter */}

        <div>

          <h3 className="text-2xl font-bold mb-6">
            Newsletter
          </h3>

          <p className="text-gray-400 leading-8">
            Subscribe to receive
            our latest offers,
            events and promotions.
          </p>

          <form className="mt-8">

            <input
              type="email"
              placeholder="Email Address"
              className="w-full bg-[#181818] rounded-full px-6 py-4 outline-none border border-transparent focus:border-yellow-500"
            />

            <button
              className="w-full mt-4 bg-yellow-500 hover:bg-yellow-400 text-black py-4 rounded-full font-bold transition"
            >
              Subscribe
            </button>

          </form>

        </div>

      </div>

      {/* Bottom */}

      <div className="border-t border-gray-800">

        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-gray-500 text-center md:text-left">

            © {new Date().getFullYear()} SAVORA Restaurant.
            All Rights Reserved.

          </p>

          <p className="text-gray-500">

            Designed with ❤️ by
            <span className="text-yellow-500 font-semibold">
              {" "}TEETECHS
            </span>

          </p>

        </div>

      </div>

    </footer>
  );
};

export default Footer;