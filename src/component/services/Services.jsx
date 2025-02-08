import "./service.css";
import React from "react";

export const ServicesSection = () => {
  const services = [
    {
      title: "Veb saytlar",
      description:
        "Bizdan eng yaxshi va eng soz sifatga ega platforma yararing",
      icon: "../../../public/web.png",
    },
    {
      title: "UI/UX Dizayn",
      description: "Biz UI/UX dizayn xizmatlarini taqdim etamiz",
      icon: "../../../public/ui ux.png",
    },
    {
      title: "Mobil ilovalar",
      description: "Biz eng yaxshi dizayndagi xizmatlarini taqdim etamiz",
      icon: "../../../public/mobile.png",
    },
    {
      title: "SMM",
      description:
        "Bizdan eng yaxshi va eng soz sifatga ega platforma yararing",
      icon: "../../../public/smm.png",
    },
    {
      title: "Grafik dizayn",
      description: "Biz fotografiya xizmatlarini taqdim etamiz",
      icon: "../../../public/graphic.png",
    },
    {
      title: "Motion dizayn",
      description:
        "Bizdan eng yaxshi va eng soz sifatga ega platforma yaraning",
      icon: "../../../public/motion.png",
    },
  ];

  return (
    <div className="bg-gradient-to-br to-gray-900 py-16">
      <div className="max-w-[1227px] mx-auto px-4 sm:px-6 lg:px-8 backdrop-blur-sm bg-opacity-10 bg-[#020202] pt-6 pb-6">
        <h2 className="text-3xl font-bold text-center text-white mb-12">
          Bizning xizmatlar
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {services.map((service, index) => (
            <div
              key={index}
              className="rounded-lg p-6 transform transition duration-500 hover:scale-105 service_box"
            >
              <div className="text-white mb-4"> 
                <img src={service.icon} alt={service.title} className="service_image"/>
                </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {service.title}
              </h3>
              <p className="text-gray-300">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
