"use client"
import { useState, useEffect } from "react"
import { ArrowDown } from "lucide-react"

const SupportNinjaStickyNavbar = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 mt-18 flex w-full items-center justify-around px-6 py-4 transition-all duration-300 ${
        scrolled ? "mt-[5]" : "bg-[#f5dfcf]"
      }`}
    >
      {/* Logo */}
      <div
        className={`flex gap-5 text-xl font-bold transition-opacity duration-300 ${
          scrolled ? "invisible opacity-0" : "visible opacity-100"
        }`}
      >
        <img
          src="https://cdn.prod.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0cd45cce4719_Support%20Ninja%20%7C%20Full%20Logo.svg"
          width="200"
          height="200"
          alt="Support Ninja Logo"
        />
      </div>

      {/* Navigation Menu */}
      <ul
        className={`hidden space-x-8 font-semibold text-black md:flex ${
          scrolled ? "rounded-full bg-white px-6 py-4" : ""
        }`}
      >
        <li className="group relative">
          <a href="#" className="flex items-center gap-1 hover:text-green-600">
            Solutions <ArrowDown width={12} height={12} />
          </a>
          <Dropdown items={["Customer Experience", "customer Conversion", "Customer OOnboarding", "Customer Supply", "Technical Customer Support", "Customer Renewals"]} />
        </li>

        <li className="group relative">
          <a href="#" className="flex items-center gap-1 hover:text-green-600">
            Industries
            <ArrowDown width={12} height={12} />
          </a>
          <Dropdown items={["SaaS", "AI", "Ecommerce", "Healthcare","SupplyChain & Logistics", "Fintech"]} />
        </li>

        <li className="group relative">
          <a href="#" className="hover:text-green-600">
            How it Works
          </a>
        </li>

        <li className="group relative">
          <a href="#" className="flex items-center gap-1 hover:text-green-600">
            About <ArrowDown width={12} height={12} />
          </a>
          <Dropdown items={["About us", "Careers"]} />
        </li>

        <li>
          <a href="#">Resources</a>
        </li>
      </ul>

      {/* Get Started Button */}
      <button className="rounded-full bg-[#0c3a23] px-4 py-2 text-white">Get Started</button>
    </nav>
  )
}

/** DROPDOWN COMPONENT */
interface DropdownProps {
    items: string[];
  }
  
  const Dropdown: React.FC<DropdownProps> = ({ items }) => {
    return (
      <ul className="absolute left-0 z-50 mt-2 w-48 p-5 rounded-md bg-white opacity-0 shadow-lg transition-opacity duration-300 group-hover:opacity-100">
        {items.map((item, index) => (
          <li key={index} className="border-b px-4 py-2 last:border-none hover:bg-gray-100">
            <a href="#" className="block">
              {item}
            </a>
          </li>
        ))}
      </ul>
    );
  };
  

export default SupportNinjaStickyNavbar