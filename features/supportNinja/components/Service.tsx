"use client"
import { useState } from "react"
import { CheckSquare, Square } from "lucide-react"

interface Service {
  id: number
  title: string
  image: string
}

const services: Service[] = [
  {
    id: 1,
    title: "Customer Experience",
    image:
      "https://cdn.prod.website-files.com/64149f79022d0c3ed8ce46e9/672cd9b56f4a3c4346ff88b7_6728efd16a3b5a8ca8f2a32e_Characer%20Illustration%20Single__Customer-Experience_Square_Filled.svg",
  },
  {
    id: 2,
    title: "Customer Support",
    image:
      "https://cdn.prod.website-files.com/64149f79022d0c3ed8ce46e9/64149f79022d0cd6fece4b65_filled_customer_success.webp",
  },
  {
    id: 3,
    title: "Technical Customer Support",
    image:
      "https://cdn.prod.website-files.com/64149f79022d0c3ed8ce46e9/64149f79022d0c3491ce4b63_filled_technical_support.webp",
  },
  {
    id: 4,
    title: "Content Moderation",
    image:
      "https://cdn.prod.website-files.com/64149f79022d0c3ed8ce46e9/64149f79022d0cce61ce4b6b_filled_content_moderation.webp",
  },
  {
    id: 5,
    title: "Data Processing",
    image:
      "https://cdn.prod.website-files.com/64149f79022d0c3ed8ce46e9/64149f79022d0c1bd3ce4b69_filled_data_processing.webp",
  },
  {
    id: 6,
    title: "Finance & Accounting",
    image:
      "https://cdn.prod.website-files.com/64149f79022d0c3ed8ce46e9/66ab870287012990781761a1_649438d904b97f8a9692a85a_Solution%253DE-mail%2520Support%252C%2520State%253DHover.webp",
  },
]

const ServiceSelection = () => {
  const [selected, setSelected] = useState<number[]>([])

  const toggleSelection = (id: number) => {
    setSelected((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]))
  }

  return (
    <div className="w-full bg-[#f5dfcf]">
      <div className="grid grid-cols-1 gap-4 sm:hidden">
        {services.map((service) => (
          <div
            key={service.id}
            className={`relative cursor-pointer rounded-xl bg-[#fbeee6] p-4 transition-all duration-300 hover:bg-white ${
              selected.includes(service.id) ? "bg-white opacity-100 " : "bg-[#fbeee6]"
            }`}
            onClick={() => toggleSelection(service.id)}
          >
            <div className="flex items-center space-x-4 font-bold">
              <img src={service.image} alt={service.title} className="h-16 w-16 object-contain" />
              <h3 className="flex-1 font-bold text-xl">{service.title}</h3>
              <div className="text-gray-700">
                {selected.includes(service.id) ? (
                  <CheckSquare size={20} className="text-gray-700" />
                ) : (
                  <Square size={20} />
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="hidden w-full overflow-x-scroll sm:flex md:gap-6 xl:hidden custom-scrollbar">
        {services.map((service) => (
          <div
            key={service.id}
            className={`relative flex-shrink-0 cursor-pointer rounded-xl bg-[#fbeee6] p-4  transition-all duration-300 hover:bg-white ${
              selected.includes(service.id) ? "bg-white opacity-100 " : "bg-[#fbeee6]"
            } w-[250px]`}
            onClick={() => toggleSelection(service.id)}
          >
            <div className="absolute top-2 right-2 text-gray-700">
              {selected.includes(service.id) ? (
                <CheckSquare size={20} className="text-gray-700" />
              ) : (
                <Square size={20} />
              )}
            </div>

            <img src={service.image} alt={service.title} className="mb-4 h-28 w-full object-contain" />
            <h3 className="text-center font-semibold">{service.title}</h3>
          </div>
        ))}
      </div>
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          display: none;
        }

        .custom-scrollbar {
          -ms-overflow-style: none;  /* Hide scrollbar in IE/Edge */
          scrollbar-width: none;  /* Hide scrollbar in Firefox */
        }

          }
        }
      `}</style>

      <div className="hidden xl:grid xl:grid-cols-6 xl:gap-6">
        {services.map((service) => (
          <div
            key={service.id}
            className={`relative cursor-pointer rounded-xl bg-[#fbeee6] p-4  transition-all duration-300 hover:bg-white ${
              selected.includes(service.id) ? "bg-white opacity-100 " : "bg-[#fbeee6]"
            }`}
            onClick={() => toggleSelection(service.id)}
          >
            <div className="absolute top-2 right-2 font-semibold text-gray-700">
              {selected.includes(service.id) ? (
                <CheckSquare size={20} className="text-gray-700 font-semibold" />
              ) : (
                <Square size={20} />
              )}
            </div>

            <img src={service.image} alt={service.title} className="mb-4 h-32 w-full object-contain" />
            <h3 className="text-center font-bold">{service.title}</h3>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ServiceSelection
