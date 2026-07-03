import { motion } from "framer-motion";

const Card = ({ children, className = "" }) => {
  return (
    <motion.div
      whileHover={{
        y: -10,
      }}
      className={`
      rounded-3xl
      bg-[#181818]
      border
      border-white/5
      backdrop-blur-xl
      shadow-xl
      transition-all
      duration-500
      hover:border-yellow-500/40
      hover:shadow-yellow-500/10
      ${className}
      `}
    >
      {children}
    </motion.div>
  );
};

export default Card;