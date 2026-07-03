import { motion } from "framer-motion";

const SectionTitle = ({
  subtitle,
  title,
  description,
  center = true,
}) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: .8,
      }}
      className={center ? "text-center" : ""}
    >
      <span className="uppercase tracking-[6px] text-yellow-500 font-semibold">
        {subtitle}
      </span>

      <h2 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
        {title}
      </h2>

      {description && (
        <p
          className={`mt-6 text-lg text-gray-400 leading-8 ${
            center ? "max-w-2xl mx-auto" : "max-w-xl"
          }`}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
};

export default SectionTitle;