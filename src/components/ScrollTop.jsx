import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollTop = () => {

  const [visible, setVisible] = useState(false);

  useEffect(() => {

    const toggleVisibility = () => {

      if (window.scrollY > 500) {
        setVisible(true);
      } else {
        setVisible(false);
      }

    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);

  }, []);

  const scrollToTop = () => {

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

  };

  return (

    visible && (

      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-yellow-500 hover:bg-yellow-400 text-black shadow-2xl transition"
      >

        <FaArrowUp className="mx-auto" />

      </button>

    )

  );

};

export default ScrollTop;