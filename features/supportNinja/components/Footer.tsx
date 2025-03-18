import React from "react"
import ButtonGetStarted from "features/supportNinja/components/getstartButton"

interface FooterLinkProps {
  href: string
  children: React.ReactNode
}

const FooterLink: React.FC<FooterLinkProps> = ({ href, children }) => (
  <a href={href} className="text-gray-600 transition-colors duration-200 hover:text-gray-800">
    {children}
  </a>
)

interface FooterColumnProps {
  title: string
  links: { name: string; href: string }[]
}

const FooterColumn: React.FC<FooterColumnProps> = ({ title, links }) => (
  <div className="flex flex-col space-y-3">
    <h3 className="mb-1 font-semibold text-gray-800">{title}</h3>
    {links.map((link) => (
      <FooterLink key={link.name} href={link.href}>
        {link.name}
      </FooterLink>
    ))}
  </div>
)

interface FooterProps {
  companyName?: string
  year?: number
}

const Footer: React.FC<FooterProps> = ({ companyName = "SupportNinja", year = 2025 }) => {
  const solutions = [
    { name: "Customer Experience", href: "/solutions/customer-experience" },
    { name: "Customer Conversion", href: "/solutions/customer-conversion" },
    { name: "Customer Onboarding", href: "/solutions/customer-onboarding" },
    { name: "Customer Support", href: "/solutions/customer-support" },
    { name: "Technical Customer Support", href: "/solutions/technical-support" },
    { name: "Customer Renewals", href: "/solutions/customer-renewals" },
    { name: "Content Moderation", href: "/solutions/content-moderation" },
    { name: "Data Processing", href: "/solutions/data-processing" },
    { name: "Finance & Accounting", href: "/solutions/finance-accounting" },
  ]

  const industries = [
    { name: "SaaS", href: "/industries/saas" },
    { name: "AI", href: "/industries/ai" },
    { name: "Ecommerce", href: "/industries/ecommerce" },
    { name: "Healthcare", href: "/industries/healthcare" },
    { name: "Supply Chain & Logistics", href: "/industries/supply-chain" },
    { name: "Fintech", href: "/industries/fintech" },
  ]

  const resources = [
    { name: "Resources", href: "/resources" },
    { name: "FAQs", href: "/resources/faqs" },
    { name: "Glossary", href: "/resources/glossary" },
  ]

  const company = [
    { name: "How it Works", href: "/company/how-it-works" },
    { name: "About", href: "/company/about" },
    { name: "Careers", href: "/company/careers" },
    { name: "Contact", href: "/company/contact" },
  ]

  const social = [
    { name: "LinkedIn", href: "https://www.linkedin.com/company/supportninja" },
    { name: "YouTube", href: "https://www.youtube.com/supportninja" },
    { name: "Twitter", href: "https://twitter.com/supportninja" },
    { name: "Facebook", href: "https://www.facebook.com/supportninja" },
  ]

  const legal = [
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Security Policy", href: "/security-policy" },
    { name: "Terms of Use", href: "/terms-of-use" },
  ]

  return (
    <footer className="w-full border-t border-gray-200 bg-[#bfc1b9] py-12 min-h-[500px]">
      <div className="container mx-auto ">
        <div className="mb-10">
          <a href="/" className="flex items-center">
            <img
              src="https://cdn.prod.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0cd45cce4719_Support%20Ninja%20%7C%20Full%20Logo.svg"
              alt={`${companyName} logo`}
              className="h-8 w-auto"
            />
          </a>
        </div>
  
        <div className="mb-12 flex flex-col lg:flex-row lg:justify-between">
          {/* Footer columns container */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <div className="space-y-8">
              <FooterColumn title="Solutions" links={solutions} />
            </div>
            <div className="space-y-8">
              <FooterColumn title="Industries" links={industries} />
            </div>
            <div className="space-y-8">
              <FooterColumn title="Resources" links={resources} />
              <FooterColumn title="Company" links={company} />
            </div>
            <div className="space-y-8">
              <FooterColumn title="Follow" links={social} />
            </div>
          </div>
  
          {/* Get Started button */}
          <div className="mt-8 flex items-start lg:mt-0">
            <ButtonGetStarted />
          </div>
        </div>
  
        
        <div className="mt-8 flex flex-col border-t border-gray-200 pt-8 md:flex-row md:items-center md:justify-between">
          <div className="mb-4 text-sm text-gray-600 md:mb-0">
            © 2025 SupportNinja, a registered trademark of Ninja Partners, LLC
          </div>
          <div className="flex flex-wrap gap-4">
            {legal.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm text-gray-600 hover:text-gray-800"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
