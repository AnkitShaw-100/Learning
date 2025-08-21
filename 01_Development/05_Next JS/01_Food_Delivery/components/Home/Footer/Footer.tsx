import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-zinc-900 text-gray-700 dark:text-gray-300 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Logo and description */}
        <div className="mb-10 text-center sm:text-left">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-pink-600">
            Foodie
          </h1>
          <p className="mt-2 max-w-md text-sm leading-relaxed text-gray-600 dark:text-gray-400">
            Delivering happiness through food! Enjoy your favorite meals at
            lightning speed with unbeatable quality.
          </p>
        </div>

        {/* Links grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 text-sm">
          {/* Company */}
          <div>
            <h2 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">
              Company
            </h2>
            <ul className="space-y-2">
              {[
                "About Us",
                "News & Press",
                "Our Customers",
                "Leadership",
                "Careers",
              ].map((item, i) => (
                <li key={i}>
                  <a
                    href="#"
                    className="hover:text-cyan-700 dark:hover:text-amber-300 transition-colors duration-200"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h2 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">
              Resources
            </h2>
            <ul className="space-y-2">
              {["Blog", "Webinar & Events", "Podcast", "E-book & Guides"].map(
                (item, i) => (
                  <li key={i}>
                    <a
                      href="#"
                      className="hover:text-cyan-700 dark:hover:text-amber-300 transition-colors duration-200"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h2 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">
              Contact Us
            </h2>
            <ul className="space-y-3 text-gray-600 dark:text-gray-400">
              <li className="flex items-start space-x-2 text-amber-300">
                <span>📱</span>
                <span>+91 9876543210</span>
              </li>
              <li className="flex items-start space-x-2 text-amber-300">
                <span>✉️</span>
                <span>support@foodie.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="border-t border-gray-200 dark:border-gray-700 mt-10 pt-8 flex flex-col sm:flex-row justify-between items-center text-sm">
          <p className="mb-4 sm:mb-0 text-gray-500 dark:text-gray-400">
            © 2025 Foodie Inc. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <a
              href="#"
              className="w-9 h-9 rounded-full bg-gray-300 dark:bg-zinc-700 flex items-center justify-center hover:bg-cyan-700 dark:hover:bg-amber-400 transition-colors duration-300"
            >
              <FaFacebookF className="text-gray-800 dark:text-white text-sm" />
            </a>
            <a
              href="#"
              className="w-9 h-9 rounded-full bg-gray-300 dark:bg-zinc-700 flex items-center justify-center hover:bg-cyan-700 dark:hover:bg-amber-400 transition-colors duration-300"
            >
              <FaTwitter className="text-gray-800 dark:text-white text-sm" />
            </a>
            <a
              href="#"
              className="w-9 h-9 rounded-full bg-gray-300 dark:bg-zinc-700 flex items-center justify-center hover:bg-cyan-700 dark:hover:bg-amber-400 transition-colors duration-300"
            >
              <FaInstagram className="text-gray-800 dark:text-white text-sm" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
