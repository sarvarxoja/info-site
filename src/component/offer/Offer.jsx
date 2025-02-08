import "./offer.css";
import React, { useState } from "react";

export const CoffeeForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    services: [],
  });

  const services = [
    "Backend",
    "Frontend",
    "CRM tizim ishlab chiqish",
    "Grafik dizayn",
    "Internet magazin ishlab chiqish",
    "Motion dizayn",
    "Logotip va Brandbook",
    "Mobil ilova ishlab chiqish",
    "Portal ishlab chiqish",
    "Veb sayt ishlab chiqish",
    "Veb dizayn",
    "SMM dizayn",
    "Mobilograf",
  ];

  const beverages = [
    { id: "achiq", name: "Achchiq kofe", image: "../../../public/b coffe.png" },
    { id: "sutli", name: "Sutli kofe", image: "../../../public/coffe.png" },
    { id: "suv", name: "Suv", image: "../../../public/water.png" },
    { id: "choy", name: "Choy", image: "../../../public/tea.png" },
  ];

  const handleServiceChange = (service) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }));
  };

  return (
    <div className="coffe_form_container bg-opacity-9 text-white p-6 backdrop-blur-sm bg-[#0E1014E5] pt-6 pb-6 ">
      <div className="form_position">
        <div className="mb-8 coffe_form">
          <div>
            <div className="space-y-4 mb-8">
              <h2 className="text-xl mb-6 w-[70%]">
                Sizni bir finjon qahva ustida loyihangizni batafsil muhokama
                qilishga mamnuniyat ila taklif qilamiz.
              </h2>
              <div className="a_form_zone">
              <input
                type="text"
                placeholder="Ismingiz"
                className="w-full bg-transparent border-b border-gray-600 p-2 focus:outline-none focus:border-purple-500"
                value={formData.fullName}
                onChange={(e) =>
                  setFormData({ ...formData, fullName: e.target.value })
                }
              />
              <input
                type="tel"
                placeholder="Telefon raqamingiz"
                className="w-full bg-transparent border-b border-gray-600 p-2 focus:outline-none focus:border-purple-500"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
              />
              <input
                type="email"
                placeholder="Qo'shimcha xabar qoldirish (Mulkin emas)"
                className="w-full bg-transparent border-b border-gray-600 p-2 focus:outline-none focus:border-purple-500"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
              </div>
            </div>
            <div className="mb-8 w-[80%]">
              <h3 className="text-lg mb-4">
                Qanday xizmatlardan foydalanishni xohlaysiz?
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
                {services.map((service) => (
                  <label
                    key={service}
                    className="flex items-center space-x-2 cursor-pointer"
                  >
                    <div className="relative">
                      <input
                        type="checkbox"
                        className="hidden"
                        checked={formData.services.includes(service)}
                        onChange={() => handleServiceChange(service)}
                      />
                      <div
                        className={`w-5 h-5 border-2 rounded ${
                          formData.services.includes(service)
                            ? "border-purple-600 bg-purple-600"
                            : "border-gray-400"
                        }`}
                      >
                        {formData.services.includes(service) && (
                          <svg
                            className="w-4 h-4 text-white mx-auto"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        )}
                      </div>
                    </div>
                    <span className="text-sm">{service}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
          <div className="coffe_type">
            <h3 className="text-lg mb-4">NIMANI MA'QUL KO'RASIZ?</h3>
            <div className="grid grid-cols-2 md:grid-cols-2 gap-6 ">
              {beverages.map((beverage) => (
                <div key={beverage.id} className="text-center">
                  <img
                    src={beverage.image}
                    alt={beverage.name}
                    className="mx-auto rounded-full mb-2"
                  />    
                  <p className="text-sm">{beverage.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4">
          {/* Desktop Button */}
          <button className="hidden md:block bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition-colors duration-300">
            Barchasini ko'rish
          </button>
        </div>
      </div>
    </div>
  );
};
