import React from "react";
import { AiFillLayout } from "react-icons/ai";
import { HiMiniComputerDesktop } from "react-icons/hi2";
import { MdOutlinePhoneAndroid, MdSecurity } from "react-icons/md";


const ServicesData = [
  {
    name: "UX research",
    description: "Optimal user experience.",
    icon: <AiFillLayout className="text-xl" />,
    bgColor: "bg-blue-500/80",
  },
  {
    name: "Framework Implementation",
    description: "Utilizing front-end frameworks.",
    icon: <MdOutlinePhoneAndroid className="text-xl" />,
    bgColor: "bg-lime-500/70",
  },
  {
    name: "App Development",
    description: "Engaging websites.",
    icon: <HiMiniComputerDesktop className="text-xl" />,
    bgColor: "bg-fuchsia-500/70",
  },
  {
    name: "SEO",
    description: "Optimizing website performance.",
    icon: <MdSecurity className="text-xl" />,
    bgColor: "bg-orange-500/70",
  },
];
const ServicesBox = () => {
  return (
    <div className="h-full mt-5 text-white">
      <div className="grid grid-cols-2 gap-6">
        {ServicesData.map(({ name, description, icon, bgColor }) => (
          <div className={`p-3 ${bgColor} min-h-[180px] rounded-xl`}>
            <div className="p-3 space-y-3">
              {icon}
              <h1>{name}</h1>
              <p>{description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesBox;