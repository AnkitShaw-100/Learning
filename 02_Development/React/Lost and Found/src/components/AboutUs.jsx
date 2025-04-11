// import React from "react";
// import { motion } from "framer-motion";
// import { useNavigate } from "react-router-dom";
// import Logo from "../assets/logo.png";

// const AboutUs = () => {
//   const navigate = useNavigate();

//   const handleGoBack = () => {
//     navigate("/"); // Navigate to the home page
//   };

//   // Animation variants
//   const fadeInVariant = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
//   };

//   const staggerContainer = {
//     hidden: { opacity: 1 },
//     visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
//   };

//   return (
//     <motion.div
//       className="min-h-screen bg-gradient-to-b from-white to-gray-100 text-gray-900 px-6 py-10"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 0.7 }}
//     >
//       {/* Header Section */}
//       <motion.header
//         className="max-w-4xl mx-auto flex items-center space-x-4 mb-10"
//         variants={fadeInVariant}
//         initial="hidden"
//         animate="visible"
//       >
//         <motion.img
//           src={Logo}
//           alt="Found It Logo"
//           className="w-12 h-12"
//           whileHover={{ scale: 1.1 }} // Subtle hover effect
//           whileTap={{ scale: 0.95 }}
//         />
//         <motion.h1
//           className="text-3xl font-semibold"
//           initial={{ x: -50, opacity: 0 }}
//           animate={{ x: 0, opacity: 1 }}
//           transition={{ duration: 0.5 }}
//         >
//           Found It
//         </motion.h1>
//       </motion.header>

//       {/* Main Content Section */}
//       <motion.div
//         className="max-w-4xl mx-auto p-10"
//         variants={staggerContainer}
//         initial="hidden"
//         animate="visible"
//       >
//         <motion.h2
//           className="text-4xl font-bold text-center text-gray-800 mb-6"
//           variants={fadeInVariant}
//         >
//           Reported items 
//         </motion.h2>
//         <motion.p
//           className="text-gray-700 leading-relaxed text-lg"
//           variants={fadeInVariant}
//         >
//           Found It is a dedicated platform for helping students recover lost belongings. Whether it’s
//           a misplaced ID card, a lost laptop, or even a forgotten notebook, our system connects
//           people who have lost their items with those who have found them.
//         </motion.p>
//         <motion.p
//           className="text-gray-700 leading-relaxed text-lg mt-4"
//           variants={fadeInVariant}
//         >
//           Our mission is to create a trusted community where students can safely report lost and
//           found items, ensuring that no item is left unclaimed. Join us in making our campus a more
//           connected and responsible space.
//         </motion.p>
//       </motion.div>

//       {/* Features Section */}
//       <motion.div
//         className="max-w-4xl mx-auto mt-12"
//         variants={staggerContainer}
//         initial="hidden"
//         animate="visible"
//       >
//         <motion.h3
//           className="text-2xl font-bold text-center text-gray-800 mb-6"
//           variants={fadeInVariant}
//         >
//           Why Choose Found It?
//         </motion.h3>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           <motion.ul
//             className="list-disc pl-5 space-y-3 text-gray-700 text-lg"
//             variants={fadeInVariant}
//           >
//             <li>
//               <strong>Fast & Reliable:</strong> Quick item recovery process.
//             </li>
//             <li>
//               <strong>Secure:</strong> Verified users ensure safety.
//             </li>
//             <li>
//               <strong>Easy to Use:</strong> Simple interface for everyone.
//             </li>
//             <li>
//               <strong>Community Driven:</strong> Helping students help each other.
//             </li>
//           </motion.ul>
//           <motion.ul
//             className="list-disc pl-5 space-y-3 text-gray-700 text-lg"
//             variants={fadeInVariant}
//           >
//             <li>
//               <strong>Real-Time Updates:</strong> Instant notifications on found items.
//             </li>
//             <li>
//               <strong>Location-Based Search:</strong> Easily find lost items in your area.
//             </li>
//             <li>
//               <strong>Identity Protection:</strong> Communicate anonymously until confirmation.
//             </li>
//             <li>
//               <strong>24/7 Accessibility:</strong> Report and search for items anytime, anywhere.
//             </li>
//           </motion.ul>
//         </div>
//       </motion.div>

//       {/* Call to Action */}
//       <motion.div
//         className="max-w-4xl mx-auto mt-12 text-center"
//         variants={fadeInVariant}
//         initial="hidden"
//         animate="visible"
//       >
//         <motion.button
//           className="bg-yellow-400 text-black px-8 py-3 rounded-lg font-medium hover:bg-yellow-500 transition duration-200 shadow-md"
//           onClick={handleGoBack} // Attach go-back function
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//         >
//           Back to Home
//         </motion.button>
//       </motion.div>

//       {/* Footer */}
//       <motion.footer
//         className="max-w-4xl mx-auto mt-16 text-center text-gray-600 text-sm"
//         variants={fadeInVariant}
//         initial="hidden"
//         animate="visible"
//       >
//         Created by the Found It team © 2025
//       </motion.footer>
//     </motion.div>
//   );
// };

// export default AboutUs;

import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/logo.png";

const AboutUs = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate("/"); // Navigate to the home page
  };

  const fadeInVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const staggerContainer = {
    hidden: { opacity: 1 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-b from-white to-gray-100 text-gray-900 px-6 py-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      {/* Header Section */}
      <motion.header
        className="max-w-4xl mx-auto flex items-center space-x-4 mb-10"
        variants={fadeInVariant}
        initial="hidden"
        animate="visible"
      >
        <motion.img
          src={Logo}
          alt="Found It Logo"
          className="w-12 h-12"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        />
        <motion.h1
          className="text-3xl font-semibold"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Found It
        </motion.h1>
      </motion.header>

      {/* Main Content Section */}
      <motion.div
        className="max-w-4xl mx-auto p-10"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.h2
          className="text-4xl font-bold text-center text-gray-800 mb-6"
          variants={fadeInVariant}
        >
          How Found It Works
        </motion.h2>
        <motion.p
          className="text-gray-700 leading-relaxed text-lg"
          variants={fadeInVariant}
        >
          <strong>Found It</strong> is an initiative by College X that allows students to easily report any items they find on campus and help them get back to their rightful owners. This platform is designed to connect students across all departments and make lost item recovery easy, accessible, and secure.
        </motion.p>
        <motion.p
          className="text-gray-700 leading-relaxed text-lg mt-4"
          variants={fadeInVariant}
        >
          Any student who finds an item can report it here by uploading a photo and description. Other students can browse these reports, and if one of the items belongs to them, they can reach out to the person who found it. The handover happens once the owner correctly identifies a unique feature of the item to prove it's theirs.
        </motion.p>
      </motion.div>

      {/* Features Section */}
      <motion.div
        className="max-w-4xl mx-auto mt-12"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.h3
          className="text-2xl font-bold text-center text-gray-800 mb-6"
          variants={fadeInVariant}
        >
          Why Use This Website Instead of WhatsApp Groups?
        </motion.h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.ul
            className="list-disc pl-5 space-y-3 text-gray-700 text-lg"
            variants={fadeInVariant}
          >
            <li>
              <strong>Unlimited Access:</strong> Unlike WhatsApp groups with user limits, this website can be accessed by students across all departments at any time.
            </li>
            <li>
              <strong>Organized Listings:</strong> Lost items are neatly listed with images and descriptions — no need to scroll through endless group chats.
            </li>
            <li>
              <strong>Always Online:</strong> Reports stay visible until resolved, ensuring higher chances of item recovery.
            </li>
            <li>
              <strong>Visibility:</strong> Every student on campus has equal access, increasing the chances of finding the rightful owner.
            </li>
          </motion.ul>
          <motion.ul
            className="list-disc pl-5 space-y-3 text-gray-700 text-lg"
            variants={fadeInVariant}
          >
            <li>
              <strong>Honesty Recognition:</strong> Students who return lost items will be acknowledged by the college.
            </li>
            <li>
              <strong>Exclusive Rewards:</strong> Get priority in industrial visits, event passes, and other special privileges.
            </li>
            <li>
              <strong>Safe Handovers:</strong> Owners must confirm a unique detail of the item before collection.
            </li>
            <li>
              <strong>Build Trust:</strong> Help build a culture of honesty and community care within the campus.
            </li>
          </motion.ul>
        </div>
      </motion.div>

      {/* Call to Action */}
      <motion.div
        className="max-w-4xl mx-auto mt-12 text-center"
        variants={fadeInVariant}
        initial="hidden"
        animate="visible"
      >
        <motion.button
          className="bg-yellow-400 text-black px-8 py-3 rounded-lg font-medium hover:bg-yellow-500 transition duration-200 shadow-md"
          onClick={handleGoBack}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Back to Home
        </motion.button>
      </motion.div>

      {/* Footer */}
      <motion.footer
        className="max-w-4xl mx-auto mt-16 text-center text-gray-600 text-sm"
        variants={fadeInVariant}
        initial="hidden"
        animate="visible"
      >
        Powered by College X • Built to reward honesty and responsibility © 2025
      </motion.footer>
    </motion.div>
  );
};

export default AboutUs;
