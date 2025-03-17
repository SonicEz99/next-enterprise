import React from "react"

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
    <div className="flex flex-col">
      <div className="mb-4">{icon}</div>
      <h3 className="mb-2 text-xl font-medium text-gray-800">{title}</h3>
      <p className="mb-4 text-gray-600">{description}</p>
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
  )
}

const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: (
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-700"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
            />
          </svg>
        </div>
      ),
      title: "Customer Support",
      description:
        "Transform every interaction into a positive experience with customer-centric support that scales as you grow.",
      linkText: "Explore Customer Support",
    },
    {
      icon: (
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-700"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
            />
          </svg>
        </div>
      ),
      title: "Customer Experience",
      description:
        "Enhance every stage of your customer journey and scale confidently – from a single touchpoint to the entire lifecycle.",
      linkText: "Explore Customer Experience",
    },
    {
      icon: (
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-700"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
        </div>
      ),
      title: "Technical Customer Support",
      description: "Outsource dedicated experts on your business to answer customer questions.",
      linkText: "Explore Technical Customer Support",
    },
    {
      icon: (
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-700"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
            />
          </svg>
        </div>
      ),
      title: "Content Moderation",
      description: "Build a thriving online presence with a team specially trained to uphold your community standards.",
      linkText: "Explore Content Moderation",
    },
    {
      icon: (
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-700"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
            />
          </svg>
        </div>
      ),
      title: "Data Processing",
      description: "Receive analyzed data, specific to how you need it interpreted and presented.",
      linkText: "Explore Data Processing",
    },
    {
      icon: (
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-700"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
      ),
      title: "Finance & Accounting",
      description: "Streamline your financial operations with expert accounting and bookkeeping services.",
      linkText: "Explore Finance & Accounting",
    },
  ]

  return (
    <section className="mx-auto max-w-7xl px-4 py-16">
      <div className="grid grid-cols-1 gap-x-8 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
            linkText={service.linkText}
          />
        ))}
      </div>
    </section>
  )
}

export default ServicesSection
