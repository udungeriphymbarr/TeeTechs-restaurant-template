import { useState, useEffect } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const links = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Menu", href: "#menu" },
  { name: "Gallery", href: "#gallery" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scroll
          ? "bg-black/80 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">

        <a
          href="#home"
          className="text-3xl font-bold text-yellow-500 tracking-wide"
        >
          Savora
        </a>

        <nav className="hidden lg:flex items-center gap-10">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-white hover:text-yellow-500 duration-300"
            >
              {link.name}
            </a>
          ))}

          <button className="bg-yellow-500 text-black px-6 py-3 rounded-full font-semibold hover:scale-105 duration-300">
            Book Table
          </button>
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-3xl"
        >
          {open ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-[#111] px-6 pb-6">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block py-4 border-b border-gray-800"
            >
              {link.name}
            </a>
          ))}

          <button className="w-full mt-6 bg-yellow-500 text-black py-3 rounded-full font-semibold">
            Book Table
          </button>
        </div>
      )}
    </header>
  );
};

export default Navbar;