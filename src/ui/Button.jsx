import { motion } from "framer-motion";

const Button = ({
  children,
  outline = false,
  className = "",
}) => {
  return (
    <motion.button
      whileHover={{
        scale: 1.05,
        y: -3,
      }}
      whileTap={{
        scale: .95,
      }}
      className={`px-8 py-4 rounded-full font-semibold transition-all duration-300 ${
        outline
          ? "border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black"
          : "bg-gradient-to-r from-yellow-400 to-yellow-500 text-black shadow-xl hover:shadow-yellow-500/30"
      } ${className}`}
    >
      {children}
    </motion.button>
  );
};

export default Button;