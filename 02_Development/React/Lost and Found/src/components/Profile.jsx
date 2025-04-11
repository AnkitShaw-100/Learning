import React, { useState } from "react";
import { motion } from "framer-motion"; 
import Logo from "../assets/logo.png";

const ProfilePage = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [enrollmentNumber, setEnrollmentNumber] = useState("");
  const [hostel, setHostel] = useState("");
  const [department, setDepartment] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);

    // Simulate data submission
    console.log({
      firstName,
      lastName,
      enrollmentNumber,
      hostel,
      department,
    });

    setTimeout(() => {
      alert("Profile submitted successfully!");
      setSubmitting(false);
    }, 1000);
  };

  // Animation Variants
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
      className="flex items-center justify-center min-h-screen bg-gray-100"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      <motion.form
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-white rounded-lg shadow-md p-8 text-center"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Logo with bounce animation */}
        <motion.img
          src={Logo}
          alt="Logo"
          className="w-20 h-20 mx-auto mb-4"
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          transition={{
            type: "spring",
            stiffness: 120,
            damping: 10,
            repeat: Infinity,
            repeatType: "reverse",
            duration: 1.5,
          }}
        />

        <motion.h2
          className="text-2xl font-semibold mb-6"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          Profile Registration
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="flex flex-col"
            variants={fadeInVariant}
          >
            <label className="mb-1 font-semibold">First Name</label>
            <motion.input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="border border-gray-300 rounded px-3 py-2 w-full"
              required
              whileFocus={{ scale: 1.02 }} // Subtle scaling on focus
            />
          </motion.div>

          <motion.div
            className="flex flex-col"
            variants={fadeInVariant}
          >
            <label className="mb-1 font-semibold">Last Name</label>
            <motion.input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="border border-gray-300 rounded px-3 py-2 w-full"
              required
              whileFocus={{ scale: 1.02 }} // Subtle scaling on focus
            />
          </motion.div>

          <motion.div
            className="flex flex-col col-span-2"
            variants={fadeInVariant}
          >
            <label className="mb-1 font-semibold">University Enrollment Number</label>
            <motion.input
              type="text"
              value={enrollmentNumber}
              onChange={(e) => {
                if (!/^[0-9]*$/.test(e.target.value)) return;
                if (e.target.value.length <= 10) {
                  setEnrollmentNumber(e.target.value);
                } else {
                  alert("Limit reached");
                }
              }}
              pattern="^[0-9]{10}$"
              maxLength={10}
              className="border border-gray-300 rounded px-3 py-2 w-full"
              required
              whileFocus={{ scale: 1.02 }} // Subtle scaling on focus
            />
          </motion.div>

          <motion.div
            className="flex flex-col col-span-2"
            variants={fadeInVariant}
          >
            <label className="font-semibold mb-2">Hostel</label>
            <div className="flex gap-8">
              {["H1", "H2", "H3", "H4", "H5"].map((hostelOption, index) => (
                <motion.label
                  key={index}
                  className={`flex items-center space-x-2 px-3 py-1 rounded-lg ${
                    hostelOption === "H1"
                      ? "bg-yellow-100"
                      : hostelOption === "H2"
                      ? "bg-blue-100"
                      : hostelOption === "H3"
                      ? "bg-green-100"
                      : hostelOption === "H4"
                      ? "bg-purple-100"
                      : "bg-red-100"
                  }`}
                  whileHover={{ scale: 1.1 }} // Slight hover effect
                >
                  <input
                    type="radio"
                    name="hostel"
                    value={hostelOption}
                    checked={hostel === hostelOption}
                    onChange={(e) => setHostel(e.target.value)}
                    className={`form-radio ${
                      hostelOption === "H1"
                        ? "text-yellow-500"
                        : hostelOption === "H2"
                        ? "text-blue-500"
                        : hostelOption === "H3"
                        ? "text-green-500"
                        : hostelOption === "H4"
                        ? "text-purple-500"
                        : "text-red-500"
                    }`}
                  />
                  <span className="font-medium">{hostelOption}</span>
                </motion.label>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="flex flex-col col-span-2"
            variants={fadeInVariant}
          >
            <label className="mb-1 font-semibold">Department</label>
            <motion.select
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
              className="border border-gray-300 rounded px-3 py-2 w-full"
              required
              whileFocus={{ scale: 1.02 }} // Subtle scaling on focus
            >
              <option value="" disabled>
                Choose...
              </option>
              <option value="Computer Science">Computer Science</option>
              <option value="Mechanical Engineering">
                Mechanical Engineering
              </option>
              <option value="Electrical Engineering">
                Electrical Engineering
              </option>
              <option value="Civil Engineering">Civil Engineering</option>
              <option value="Electronics and Communication">
                Electronics and Communication
              </option>
            </motion.select>
          </motion.div>
        </motion.div>

        <motion.div className="mt-6 flex justify-center">
          <motion.button
            type="submit"
            className="bg-yellow-400 text-white w-40 py-2 rounded hover:bg-yellow-500 transition duration-200 font-medium focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            disabled={submitting}
          >
            {submitting ? "Submitting..." : "Submit"}
          </motion.button>
        </motion.div>
      </motion.form>
    </motion.div>
  );
};

export default ProfilePage;