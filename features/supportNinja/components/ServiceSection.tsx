import { motion } from "framer-motion"
import React from "react"
import { fadeInUp } from "../../../utils/animations"

// Icons can be imported from a library like heroicons or defined inline
const ServiceCard = ({
  icon,
  title,
  description,
  linkText,
}: {
  icon: React.ReactNode
  title: string
  description: string
  linkText: string
}) => {
  return (
    <div className="flex w-full mx-4 mx-auto rounded-xl gap-4 flex-col items-start sm:items-start md:flex-row md:items-strech lg:flex-row lg:items-strech xl:flex-row xl:items-strech">
      <div className="flex-shrink-0 items-start sm:items-start sm:left-5">{icon}</div>
      <div className="flex flex-col">
        <h3 className="mb-2 text-xl font-medium text-gray-800 ">{title}</h3>
        <p className="mb-4 text-gray-600 sm:flex-row md:flex md:flex-wrap md:w-min md:text-md md:font-medium lg:flex-row lg:w-full xl:flex-row xl:w-full">{description}</p>
        <div className="mt-auto">
          <a href="#" className="group flex items-center font-medium text-gray-700 hover:text-gray-900">
            {linkText}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="ml-1 h-5 w-5 transition-transform group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
  
}

const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: (
        <div className="flex h-12 w-12 items-center justify-center rounded-full">
          <img
            className="h-8 w-8 text-gray-700"
            src="https://cdn.prod.website-files.com/64149f79022d0c3ed8ce46e9/6734db6b63d29b612d1a8d19_Icons_Customer-Support.svg"
            alt=""
          />
        </div>
      ),
      title: "Customer Support",
      description:
        "Transform every interaction into a positive experience with customer-centric support that scales as you grow.",
      linkText: "Explore Customer Support",
    },
    {
      icon: (
        <div className="flex h-12 w-12 items-center justify-center rounded-full">
          <img
            className="h-8 w-8 text-gray-700"
            src="https://cdn.prod.website-files.com/64149f79022d0c3ed8ce46e9/64149f79022d0c6675ce474a_Solutions%20Icon__Customer%20Service.svg"
            alt=""
          />
        </div>
      ),
      title: "Customer Experience",
      description:
        "Enhance every stage of your customer journey and scale confidently – from a single touchpoint to the entire lifecycle.",
      linkText: "Explore Customer Experience",
    },
    {
      icon: (
        <div className="flex h-12 w-12 items-center justify-center rounded-full">
          <img
            className="h-8 w-8 text-gray-700"
            src="https://cdn.prod.website-files.com/64149f79022d0c3ed8ce46e9/64149f79022d0cb1f3ce472c_Solutions%20Icon__Technical%20Support.svg"
            alt=""
          />
        </div>
      ),
      title: "Technical Customer Support",
      description: "Outsource dedicated experts on your business to answer customer questions.",
      linkText: "Explore Technical Customer Support",
    },
    {
      icon: (
        <div className="flex h-12 w-12 items-center justify-center rounded-full">
          <img
            className="h-8 w-8 text-gray-700"
            src="https://cdn.prod.website-files.com/64149f79022d0c3ed8ce46e9/64149f79022d0ca966ce478f_icons%3DPencil.svg"
            alt=""
          />
        </div>
      ),
      title: "Content Moderation",
      description: "Build a thriving online presence with a team specially trained to uphold your community standards.",
      linkText: "Explore Content Moderation",
    },
    {
      icon: (
        <div className="flex h-12 w-12 items-center justify-center rounded-full">
          <img
            className="h-8 w-8 text-gray-700"
            src="https://cdn.prod.website-files.com/64149f79022d0c3ed8ce46e9/64149f79022d0c1b4ace4778_icons%3DData%20Processing.svg"
            alt=""
          />
        </div>
      ),
      title: "Data Processing",
      description: "Receive analyzed data, specific to how you need it interpreted and presented.",
      linkText: "Explore Data Processing",
    },
    {
      icon: (
        <div className="flex h-12 w-12 items-center justify-center rounded-full">
          <img
            className="h-8 w-8 text-gray-700"
            src="https://cdn.prod.website-files.com/64149f79022d0c3ed8ce46e9/66ab870287012990781761c9_66a94bdb23f9b933553ccdb1_Untitled%2520design%2520(40)%2520(1).png"
            alt=""
          />
        </div>
      ),
      title: "Finance & Accounting",
      description: "Streamline your financial operations with expert accounting and bookkeeping services.",
      linkText: "Explore Finance & Accounting",
    },
  ]

  return (
    <section className="mx-auto py-16">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
        className="grid grid-cols-1 gap-x-8 gap-y-16 md:grid-cols-2 lg:grid-cols-3"
      >
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
            linkText={service.linkText}
          />
        ))}
      </motion.div>
    </section>
  )
}

export default ServicesSection
