"use client"
import { ArrowRight, ChevronDown, ChevronRight, Menu, X } from "lucide-react"
import { useEffect, useState } from "react"

interface DropdownProps {
  items: string[]
}

interface NavItem {
  title: string
  items?: {
    name: string
  }[]
  icon: React.ReactNode
  link?: string
}

interface MegaDropdownProps {
  items: NavItem[]
}

const MegaDropdown: React.FC<MegaDropdownProps> = ({ items }) => {
  return (
    <div className="absolute left-[-100] z-50 w-[740px] rounded-lg bg-white opacity-0 shadow-lg transition-opacity duration-700 group-hover:opacity-100">
      <div className="grid grid-cols-2 gap-8 p-8">
        <div className="flex flex-col">
          <div className="mt-2 flex items-center gap-4 hover:bg-gray-100">
            
            <img src="https://cdn.prod.website-files.com/64149f79022d0c3ed8ce46e9/64149f79022d0c6675ce474a_Solutions%20Icon__Customer%20Service.svg" alt="" />
            <h3 className="flex items-center text-lg font-semibold text-gray-800">Customer Experience</h3>
            <ChevronRight className="ml-1" width={14} height={14} />
          </div>
          <div className="text-gray-500">
            <div className="flex hover:bg-gray-100">
              <p className="mt-2 ml-15">Customer Conversion</p>
              <ChevronRight className="mt-3 ml-1" width={14} height={14} />
            </div>
            <div className="flex hover:bg-gray-100">
              <p className="mt-2 ml-15">Customer Onboarding</p>
              <ChevronRight className="mt-3 ml-1" width={14} height={14} />
            </div>
            <div className="flex hover:bg-gray-100">
              <p className="mt-2 ml-15">Customer Support</p>
              <ChevronRight className="mt-3 ml-1" width={14} height={14} />
            </div>
            <div className="flex hover:bg-gray-100">
              <p className="mt-2 ml-15">Technical Customer Support</p>
              <ChevronRight className="mt-3 ml-1" width={14} height={14} />
            </div>
            <div className="flex hover:bg-gray-100">
              <p className="mt-2 ml-15">Customer Renewals</p>
              <ChevronRight className="mt-3 ml-1" width={14} height={14} />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          {items.map((category, index) => (
            <div key={index} className="flex flex-col gap-4 hover:bg-gray-100">
              <h3 className="flex items-center text-lg font-semibold text-gray-800">
                {category.icon}
                <span className="ml-2">{category.title}</span>
                <ChevronRight className="ml-1" width={14} height={14} />
                {category.items && <ChevronRight className="ml-1" width={14} height={14} />}
              </h3>
              {category.items && (
                <div className="flex flex-col gap-3 pl-8">
                  {category.items.map((item, itemIndex) => (
                    <a key={itemIndex} href="#" className="flex items-center text-gray-600">
                      {item.name} <ChevronRight className="ml-1 rotate-270" width={14} height={14} />
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

const DropIndustriesdown: React.FC<DropdownProps> = ({ items }) => {
  return (
    <ul className="absolute left-[-300] z-50 grid w-250 grid-cols-3 gap-x-4 gap-y-2 rounded-xl bg-white p-4 opacity-0 shadow-xl transition-opacity duration-700 group-hover:opacity-100">
      {items.map((item, index) => (
        <li key={index} className="px-4 py-2 hover:bg-gray-100">
          <a href="#" className="flex items-center justify-between">
            {item}
          </a>
        </li>
      ))}
    </ul>
  )
}

const DropAboutdown: React.FC<DropdownProps> = ({ items }) => {
  return (
    <ul className="absolute left-[-100] z-50 w-70 rounded-xl bg-white p-4 opacity-0 shadow-xl transition-opacity duration-700 group-hover:opacity-100">
      {items.map((item, index) => (
        <li key={index} className="border-b px-4 py-2 last:border-none hover:bg-gray-100">
          <a href="#" className="flex items-center justify-between">
            {item}
            <ArrowRight width={20} height={20} />
          </a>
        </li>
      ))}
    </ul>
  )
}

const SupportNinjaStickyNavbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null) // Track which dropdown is open

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const industriesItems: NavItem[] = [
    {
      title: "Finance & Accounting",

      icon: (
        <div className="rounded-md bg-gray-100 p-2">
          <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none">
            <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
            <line x1="8" y1="21" x2="16" y2="21"></line>
            <line x1="12" y1="17" x2="12" y2="21"></line>
          </svg>
        </div>
      ),
    },

    {
      title: "Content Moderation",
      icon: (
        <div className="rounded-md bg-gray-100 p-2">
          <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none">
            <path d="M12 20h9"></path>
            <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
          </svg>
        </div>
      ),
    },
    {
      title: "Data Processing",
      icon: (
        <div className="rounded-md bg-gray-100 p-2">
          <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none">
            <circle cx="12" cy="12" r="3"></circle>
            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
          </svg>
        </div>
      ),
      items: [],
    },
  ]

  const handleDropdownToggle = (dropdown: string) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown)
  }

  return (
    <nav
      className={`fixed top-0 left-1/2 z-50 mt-15 flex w-full max-w-[1500px] sm:max-w-[900px] md:max-w-[800px] lg:max-w-[1700px] xl:max-w-[1700px]  -translate-x-1/2 items-center justify-between px-10 py-6 transition-all duration-300 ${
        scrolled ? "mt-[5]" : ""
      }`}
    >
      <div
        className={`flex gap-5 text-xl font-bold transition-opacity duration-300  ${
          scrolled ? "invisible opacity-0 " : "opacity-100"
        }`}
      >
        <img
          src="https://cdn.prod.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0cd45cce4719_Support%20Ninja%20%7C%20Full%20Logo.svg"
          width="200"
          height="200"
          alt="Support Ninja Logo"
          className=" w-40 h-18 sm:w-38 sm:h-12 lg:w-3xs"
        />
      </div>

      {/* Desktop Navigation Menu */}
      <ul
        className={`hidden space-x-8 font-semibold text-black lg:flex lg:hidden xl:flex pr-30 ${
          scrolled ? "rounded-full bg-white px-8 py-4 border border-[#d5d2d2]" : ""
        }`}
      >
        <li
          className="group relative "
          onMouseEnter={() => handleDropdownToggle("solutions")}
          onMouseLeave={() => handleDropdownToggle("solutions")}
        >
          <a href="#" className="flex items-center gap-1">
            Solutions
            <ChevronDown width={12} height={12} />
          </a>
          {openDropdown === "solutions" && <MegaDropdown items={industriesItems} />}
        </li>

        <li
          className="group relative"
          onMouseEnter={() => handleDropdownToggle("industries")}
          onMouseLeave={() => handleDropdownToggle("industries")}
        >
          <a href="#" className="flex items-center gap-1">
            Industries
            <ChevronDown width={12} height={12} />
          </a>
          {openDropdown === "industries" && (
            <DropIndustriesdown
              items={["SaaS", "AI", "Ecommerce", "Healthcare", "Supply Chain & Logistics", "Fintech"]}
            />
          )}
        </li>

        <li className="group relative">
          <a href="#" className="">
            How it Works
          </a>
        </li>

        <li
          className="group relative"
          onMouseEnter={() => handleDropdownToggle("about")}
          onMouseLeave={() => handleDropdownToggle("about")}
        >
          <a href="#" className="flex items-center gap-1">
            About <ChevronDown width={12} height={12} />
          </a>
          {openDropdown === "about" && <DropAboutdown items={["About us", "Careers"]} />}
        </li>

        <li>
          <a href="#" className="">
            Resources
          </a>
        </li>
      </ul>

      <button className="hidden lg:hidden xl:flex rounded-full bg-[#0c3a23] px-7 py-3 font-sans text-xl font-semibold text-white lg:block">
        Get Started
      </button>

      <div className="relative flex items-center xl:hidden">
        {/* Hamburger Icon */}
        <button onClick={toggleMobileMenu} className="z-50 text-[#0c3a23] focus:outline-none">
          {mobileMenuOpen ? <X width={40} height={40} /> : <Menu width={40} height={40} />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="absolute top-0 left-0 z-50 max-h-screen w-full overflow-y-auto bg-white px-6 py-4 shadow-md lg:hidden">
          <div className="absolute top-4 right-6">
            <button onClick={toggleMobileMenu} className="text-[#0c3a23] focus:outline-none">
              <X width={40} height={40} />
            </button>
          </div>
          <ul className="mt-20 space-y-4 font-semibold text-black ">
            <li className="font-sans ">
              <a href="#" className="mt-3 flex items-center justify-between">
                <h1 className="text-xl">Solutions</h1>
              </a>
              <ul className="mt-2 space-y-1 text-gray-500">
                <li className="flex items-center justify-between">
                  <a href="#" className="block py-1">
                    Customer Experience
                  </a>
                  <ArrowRight width={16} height={16} />
                </li>
                <li className="flex items-center justify-between">
                  <a href="#" className="block py-1">
                    Customer Conversion
                  </a>
                  <ArrowRight width={16} height={16} />
                </li>
                <li className="flex items-center justify-between">
                  <a href="#" className="block py-1">
                    Customer Onboarding
                  </a>
                  <ArrowRight width={16} height={16} />
                </li>
                <li className="flex items-center justify-between">
                  <a href="#" className="block py-1">
                    Customer Supply
                  </a>
                  <ArrowRight width={16} height={16} />
                </li>
                <li className="flex items-center justify-between">
                  <a href="#" className="block py-1">
                    Technical Customer Support
                  </a>
                  <ArrowRight width={16} height={16} />
                </li>
                <li className="flex items-center justify-between">
                  <a href="#" className="block py-1">
                    Customer Renewals
                  </a>
                  <ArrowRight width={16} height={16} />
                </li>
              </ul>
            </li>
            <li>
              <a href="#" className="mt-3 flex items-center justify-between">
                Industries
              </a>
              <ul className="mt-2 space-y-1 text-gray-500">
                <li className="flex items-center justify-between">
                  <a href="#" className="block py-1">
                    SaaS
                  </a>
                  <ArrowRight width={16} height={16} />
                </li>
                <li className="flex items-center justify-between">
                  <a href="#" className="block py-1">
                    AI
                  </a>
                  <ArrowRight width={16} height={16} />
                </li>
                <li className="flex items-center justify-between">
                  <a href="#" className="block py-1">
                    Ecommerce
                  </a>
                  <ArrowRight width={16} height={16} />
                </li>
                <li className="flex items-center justify-between">
                  <a href="#" className="block py-1">
                    Healthcare
                  </a>
                  <ArrowRight width={16} height={16} />
                </li>
                <li className="flex items-center justify-between">
                  <a href="#" className="block py-1">
                    Supply Chain & Logistics
                  </a>
                  <ArrowRight width={16} height={16} />
                </li>
                <li className="flex items-center justify-between">
                  <a href="#" className="block py-1">
                    Fintech
                  </a>
                  <ArrowRight width={16} height={16} />
                </li>
              </ul>
            </li>
            <li className="flex items-center">
              <a href="#" className="block py-2">
                How it Works
              </a>
              <ArrowRight className="ml-2" width={16} height={16} />
            </li>
            <li>
              <a href="#" className="flex items-center py-2">
                About
              </a>
              <ul className="mt-2 space-y-1 text-gray-500">
                <li className="flex items-center justify-between">
                  <a href="#" className="block py-1">
                    About us
                  </a>
                  <ArrowRight width={16} height={16} />
                </li>
                <li className="flex items-center justify-between">
                  <a href="#" className="block py-1">
                    Careers
                  </a>
                  <ArrowRight width={16} height={16} />
                </li>
              </ul>
            </li>
            <li className="flex items-center">
              <a href="#" className="block py-2">
                Resources
              </a>
              <ArrowRight className="ml-2" width={16} height={16} />
            </li>
          </ul>
          <button className="group relative mt-10 inline-flex w-full items-center rounded-full bg-[#E33D3D] py-3 pr-14 pl-6 text-white transition-all duration-500 ease-out hover:cursor-pointer hover:border hover:border-green-700 hover:bg-transparent hover:text-black hover:shadow-xl hover:ring-white/20 active:scale-95">
            <span className="text-lg font-medium">Get Started</span>
            <div className="absolute top-1/2 right-1 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white transition-all duration-500 ease-out group-hover:shadow-md hover:text-black">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M5 12H19M19 12L12 5M19 12L12 19"
                  stroke="#E33D3D"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </button>
        </div>
      )}
    </nav>
  )
}

export default SupportNinjaStickyNavbar
