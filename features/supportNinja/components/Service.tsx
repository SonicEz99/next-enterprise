"use client"
import { useState } from "react";
import { CheckSquare, Square } from "lucide-react";

interface Service {
  id: number;
  title: string;
  image: string;
}

const services: Service[] = [
  { id: 1, title: "Customer Experience", image: "https://cdn.prod.website-files.com/64149f79022d0c3ed8ce46e9/672cd9b56f4a3c4346ff88b7_6728efd16a3b5a8ca8f2a32e_Characer%20Illustration%20Single__Customer-Experience_Square_Filled.svg" },
  { id: 2, title: "Customer Support", image: "https://cdn.prod.website-files.com/64149f79022d0c3ed8ce46e9/64149f79022d0cd6fece4b65_filled_customer_success.webp" },
  { id: 3, title: "Technical Customer Support", image: "https://cdn.prod.website-files.com/64149f79022d0c3ed8ce46e9/64149f79022d0c3491ce4b63_filled_technical_support.webp" },
  { id: 4, title: "Content Moderation", image: "https://cdn.prod.website-files.com/64149f79022d0c3ed8ce46e9/64149f79022d0cce61ce4b6b_filled_content_moderation.webp" },
  { id: 5, title: "Data Processing", image: "https://cdn.prod.website-files.com/64149f79022d0c3ed8ce46e9/64149f79022d0c1bd3ce4b69_filled_data_processing.webp" },
  { id: 6, title: "Finance & Accounting", image: "https://cdn.prod.website-files.com/64149f79022d0c3ed8ce46e9/66ab870287012990781761a1_649438d904b97f8a9692a85a_Solution%253DE-mail%2520Support%252C%2520State%253DHover.webp" },
];

const ServiceSelection = () => {
  const [selected, setSelected] = useState<number[]>([]);

  const toggleSelection = (id: number) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <div className="w-full grid grid-cols-1 gap-10 justify-center bg-[#f5dfcf] p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
      {services.map((service) => (
        <div
          key={service.id}
          className={`bg-[#fbeee6] gap-4 relative p-4 rounded-xl shadow-md cursor-pointer transition-all duration-300 hover:bg-white shadow-xl ${
            selected.includes(service.id) ? "shadow-xl opacity-100 bg-white" : "bg-[#fbeee6]"
          } w-full mx-auto sm:w-72 md:w-50 lg:w-55`} // Set the width here
          onClick={() => toggleSelection(service.id)}
        >
          {/* Selection Checkbox (Top Right) */}
          <div className="absolute top-2 right-2 text-gray-700">
            {selected.includes(service.id) ? (
              <CheckSquare size={20} className="text-gray-700" />
            ) : (
              <Square size={20} />
            )}
          </div>

          {/* Image Placeholder */}
          <img src={service.image} alt={service.title} className="w-full h-28 object-contain mb-4 opacity-100" />

          {/* Title */}
          <h3 className="text-center font-semibold">{service.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default ServiceSelection;
