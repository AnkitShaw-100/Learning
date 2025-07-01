import React from "react";
import FeaturesCard from "./FeaturesCard";

const features = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 py-16 w-[90%] xl:w-[80%] mx-auto">
      <FeaturesCard
        image="/images/f1.svg"
        title="Analytics Business"
        subHeading="Make data-driven decisions with powerful analytics dashboards and insights."
      />

      <FeaturesCard
        image="/images/f2.svg"
        title="Largest People"
        subHeading="Access a vast network of users and grow your customer base faster than ever."
      />

      <FeaturesCard
        image="/images/f3.svg"
        title="Wide Coverage Map"
        subHeading="We deliver to even the most remote locations with our wide-reaching logistics."
      />

      <FeaturesCard
        image="/images/f4.svg"
        title="Artificial Intelligence"
        subHeading="Leverage AI to personalize user experience and automate routine tasks."
      />

      <FeaturesCard
        image="/images/f5.svg"
        title="Trusted & Secure"
        subHeading="Your data and transactions are protected with enterprise-grade security."
      />

      <FeaturesCard
        image="/images/f6.svg"
        title="Mobile Apps"
        subHeading="Manage everything on the go with our fast and intuitive mobile applications."
      />
    </div>
  );
};

export default features;
