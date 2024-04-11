import React from "react";
import personImg from "../../../src/assets/Images/person.png";


const FirstPage = () => {
  return (
    <div className="h-full">
      <main className="h-full w-full bg-secondary page-shadow">
        <div className="p-5 md:p-10 space-y-4">
          {/* image-container */}
          <div>
            <img src={personImg} alt="" className="w-full md:w-[700px] mx-auto drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]" />
          </div>
          {/* text-container */}
          <div className="text-center md:text-left">
            <div className="space-y-3">
              <p className="uppercase font-bold hover:text-primary ">Hello 👋</p>
              <p className="text-4xl md:text-6xl font-bold text-black/80 transition duration-300 hover:text-primary animate-bounce ">
                I'm Vjola
              </p>
             
              <p className="text-black text-sm hover:text-primary">
                I am a qualified and professional front-end developer.
                Strong creative.Committed to growth, I stay updated on technology and digital marketing advancements.
              </p>
              <a
                className="inline-block primary-btn"
                href="mailto:bvjola20@gmail.com"
              >
                Hire me
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default FirstPage;
