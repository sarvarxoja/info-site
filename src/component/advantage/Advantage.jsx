import "./advantage.css";
import React from "react";
import services from "./advantage.json";
import Lines from "../../../public/back lines.png";
import Ellipse from "../../../public/Ellipse 1947.png";

export const Adventage = () => {
  return (
    <div className="w-full min-h-screen py-16 full-body-bg">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-white text-center mb-12">
          Bizning afzalliklarimiz
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
             <div 
             key={service.id}
             className="backdrop-blur-sm bg-opacity-10 bg-[#020202] rounded-lg p-6  hover:border-purple-500 transition-all duration-300 service_box"
           >
             <div className="mb-4">
               <img 
                 src={service.icon} 
                 alt={service.title}
                 className="w-12 h-12 text-purple-500"
               />
             </div>
             <h3 className="text-xl font-semibold text-white mb-3">
               {service.title}
             </h3>
             <p className="text-gray-400">
               {service.description}
             </p>
           </div>
          ))}
        </div>
      </div>
      <img src={Lines} className="line_image" />
      <img src={Ellipse} className="ellipse_bg"/>
    </div>
  );
};
