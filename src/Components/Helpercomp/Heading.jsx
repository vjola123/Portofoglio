import React from "react";

const Heading = ({ title, subtitle }) => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="inline-block text-xl text-center font-bold mb-3 border-b-2 border-primary pb-1 ">
        {title}
      </h1>
    
    </div>
  );
};

export default Heading;