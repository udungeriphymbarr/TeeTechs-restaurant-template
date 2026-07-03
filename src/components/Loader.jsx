import { motion } from "framer-motion";

const Loader = () => {
  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-[9999]">

      <motion.h1
        initial={{ opacity: 0, scale: .7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          repeat: Infinity,
          repeatType: "reverse",
          duration: 1,
        }}
        className="text-6xl font-black text-yellow-500 tracking-widest"
      >
        SAVORA
      </motion.h1>

    </div>
  );
};

export default Loader;