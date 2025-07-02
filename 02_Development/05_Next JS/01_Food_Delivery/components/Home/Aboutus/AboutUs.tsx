import React from "react";
import Image from "next/image";

const AboutUs = () => {
  return (
    <div className="py-16 bg-white dark:bg-zinc-900 ">
      <div className="w-[90%] xl:w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Image */}
        <div className="w-full flex justify-center">
          <Image
            src="/images/a.png"
            alt="Delivery Illustration"
            width={400}
            height={400}
            className="object-contain"
          />
        </div>

        {/* Right Text Section */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white mb-4">
            We deliver our products as fast as{" "}
            <span className="text-pink-600">superman</span> can do
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, quos
            distinctio eaque deserunt porro doloremque.
          </p>

          {/* Steps */}
          <div className="space-y-8">
            {/* Step 1 */}
            <div className="flex items-start gap-4">
              <p className="text-2xl font-bold text-pink-600">01</p>
              <div>
                <h4 className="font-bold text-lg text-gray-900 dark:text-white">
                  Easy to use application
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  We're driven beyond just finishing the projects. We want to
                  find solutions using our website & apps.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex items-start gap-4">
              <p className="text-2xl font-bold text-pink-600">02</p>
              <div>
                <h4 className="font-bold text-lg text-gray-900 dark:text-white">
                  Deliver Food within 30 min
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  We're driven beyond just finishing the projects. We want to
                  find solutions using our website & apps.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex items-start gap-4">
              <p className="text-2xl font-bold text-pink-600">03</p>
              <div>
                <h4 className="font-bold text-lg text-gray-900 dark:text-white">
                  100% Reliable with Privacy
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  We're driven beyond just finishing the projects. We want to
                  find solutions using our website & apps.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
