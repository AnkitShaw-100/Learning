import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaUserTie, FaHome } from "react-icons/fa";

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2 }
  }),
};

const SignupPage: React.FC = () => {
  const navigate = useNavigate();

  const handleChoice = (role: string) => {
    navigate(`/register/${role.toLowerCase()}`);
  };

  const handleLoginRedirect = () => {
    navigate("/login");
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-blue-100 via-white to-blue-200 px-4 py-20">
      {/* Background image with less fade */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center pointer-events-none z-0"></div>

      {/* Glass container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 bg-white/40 backdrop-blur-2xl border border-white/30 shadow-2xl rounded-3xl p-8 sm:p-12 w-full max-w-4xl text-center"
      >
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-blue-700 mb-10"
        >
          Register As
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[
            {
              label: "Buyer",
              description:
                "Looking for your dream property? Register as a buyer and explore verified listings.",
              icon: <FaHome className="text-blue-500 text-4xl mb-3" />,
              color: "blue",
            },
            {
              label: "Seller",
              description:
                "Have a property to list? Register as a seller and connect with potential buyers.",
              icon: <FaUserTie className="text-blue-500 text-4xl mb-3" />,
              color: "blue",
            },
          ].map((card, i) => (
            <motion.div
              key={card.label}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="cursor-pointer bg-white/70 hover:bg-white border border-gray-200 rounded-2xl p-6 transition-all shadow-md hover:shadow-xl"
              onClick={() => handleChoice(card.label)}
            >
              <div className="flex flex-col items-center text-center">
                {card.icon}
                <h3
                  className={`text-xl font-semibold text-${card.color}-600 mb-2`}
                >
                  {card.label}
                </h3>
                <p className="text-gray-600 text-sm">{card.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-10"
        >
          <p className="text-base sm:text-lg text-gray-800 mb-3">
            Already have an account?
          </p>
          <button
            onClick={handleLoginRedirect}
            className="px-6 py-2 sm:px-8 sm:py-3 bg-blue-600 hover:bg-blue-700 text-white text-sm sm:text-base font-semibold rounded-full transition-all"
          >
            Login
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default SignupPage;
