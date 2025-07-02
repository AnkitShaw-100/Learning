import React from "react";
import { FaApple, FaGooglePlay } from "react-icons/fa";

const AppDownload = () => {
  return (
    <section className="bg-gray-50 dark:bg-zinc-900 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-6 leading-tight">
            Connecting You Through iOS & Android
          </h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Seamlessly access our services with our powerful mobile apps.
            Whether you're using iOS or Android, we’ve got you covered. Stay
            connected, order faster, and manage your deliveries effortlessly.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-6 mt-12">
          {/* App Store Button */}
          <a
            href="#_"
            className="flex items-center group border border-gray-400 px-5 py-3 rounded-md hover:bg-gray-950 transition-all duration-300"
          >
            <FaApple className="text-2xl mr-3 group-hover:text-white transition-all duration-300" />
            <div>
              <p className="text-xs text-gray-600 dark:text-gray-300 group-hover:text-white">
                Download on the
              </p>
              <p className="text-sm font-semibold text-gray-800 dark:text-white group-hover:text-white">
                App Store
              </p>
            </div>
          </a>

          {/* Google Play Button */}
          <a
            href="#_"
            className="flex items-center group border border-gray-400 px-5 py-3 rounded-md hover:bg-gray-950 transition-all duration-300"
          >
            <FaGooglePlay className="text-2xl mr-3 group-hover:text-white transition-all duration-300" />
            <div>
              <p className="text-xs text-gray-600 dark:text-gray-300 group-hover:text-white">
                Download on the
              </p>
              <p className="text-sm font-semibold text-gray-800 dark:text-white group-hover:text-white">
                Google Play
              </p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default AppDownload;
