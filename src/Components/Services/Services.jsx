import React from "react";
import ServicesBox from "./ServicesBox.jsx";
import Heading from "../Helpercomp/Heading.jsx";

const Services = () => {
  return (
    <div className="h-full page-shadow bg-white p-5">
      <Heading
        title="Services"
        subtitle="Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet."
      />

      <div>
        <ServicesBox />
      </div>
    </div>
  );
};

export default Services;