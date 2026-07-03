import { FaWhatsapp } from "react-icons/fa";

const WhatsappButton = () => {
  const phone = "2348057663703"; // Replace with client's number

  return (
    <a
      href={`https://wa.me/${phone}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 z-50"
    >
      <div className="relative flex items-center justify-center">

        {/* Pulse */}

        <span className="absolute inline-flex h-16 w-16 rounded-full bg-green-500 opacity-30 animate-ping"></span>

        {/* Button */}

        <div className="w-16 h-16 rounded-full bg-green-500 hover:bg-green-600 transition duration-300 flex items-center justify-center shadow-2xl">

          <FaWhatsapp className="text-white text-4xl" />

        </div>

      </div>
    </a>
  );
};

export default WhatsappButton;