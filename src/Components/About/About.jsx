import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { MdFacebook } from "react-icons/md";
import Heading from "../Helpercomp/Heading";

const About = () => {
  return (
    <div className="h-full page-shadow bg-white p-10">
      {/* heading */}
      <Heading
        title="About"
        subtitle="Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet."
      />

      {/* Details section  */}

      <div className="mt-10 text-slate-500">
        <p>
          I tackle challenges head-on, finding innovative solutions. Thriving in collaborative environments, I leverage diverse perspectives to achieve shared goals. Adept at multitasking, I ensure timely project delivery without compromising quality. Committed to growth, I stay updated on technology and digital marketing advancements
        </p>{" "}
        <br />
        <p>
    
        </p>
        {/* Social Links */}
        <div className="flex space-x-4 mt-10">
          <MdFacebook className="social-btn" />
          <AiFillInstagram className="social-btn" />
          <AiFillGithub className="social-btn" />
          <AiFillLinkedin className="social-btn" />
        </div>
        {/* Button Links */}
        <div className="flex space-x-4 mt-4">
        <a href="tel:+355697209599" className="primary-btn">
        Contact Me
      </a>
         
        </div>
      </div>
    </div>
  );
};

export default About;