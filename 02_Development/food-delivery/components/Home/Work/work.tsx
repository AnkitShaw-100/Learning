import React from "react";
import WorkCard from "./WorkCard";

const Work = () => {
  return (
    <div className="pt-16 pb-16">
      {/* Section Heading */}
      <h2 className="text-xl sm:text-2xl text-center font-extrabold">
        Let's see how it works
      </h2>

      {/* Card Grid */}
      <div className="w-[90%] xl:w-[80%] mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-14">
        <WorkCard
          image="/images/w1.png"
          title="Become a Delivery man"
          subHeading="As a delivery driver, you'll make reliable money—working anytime, anywhere."
          start="Start Earning →"
        />
        <WorkCard
          image="/images/w2.png"
          title="Become a Partner"
          subHeading="Grow your business and reach new customers by parenting with us."
          start="Start Earning →"
        />
        <WorkCard
          image="/images/w3.png"
          title="Try Android/IOS app"
          subHeading="Get the best DoorDash experince with live order tracking."
          start="Start Earning →"
        />
      </div>
    </div>
  );
};

export default Work;
