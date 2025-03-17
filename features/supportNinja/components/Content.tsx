import React from "react"

function Content() {
  return (
    <div className="container mt-[150px] flex w-full justify-between gap-10 rounded-2xl bg-[#bfc1b9] px-4 py-6 sm:flex-col md:flex-col lg:flex-row">
      <div className="lg:w-0.5/2 flex items-center p-4">
        <h2 className="text-left text-2xl font-light text-gray-800">
          <b>
            {" "}
            Driving better business results <br /> for 200+ companies.
          </b>
        </h2>
      </div>
      <div className="lg:w-1.5/2 flex flex-wrap items-center justify-center gap-6 px-2">
        <img
          src="https://cdn.prod.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0c0380ce484b_B%26MG_foundation.svg"
          alt="Company Logo"
          className="h-6 object-contain"
        />
        <img
          src="https://cdn.prod.website-files.com/64149f79022d0c5fc8ce46e8/64f9e7ede9b6df55f6f1a029_Midjourney%20Logo%20(1).svg"
          alt="Company Logo"
          className="h-6 object-contain"
        />
        <img
          src="https://cdn.prod.website-files.com/64149f79022d0c5fc8ce46e8/65a7f1f93afe1bee1bb429a4_Happy%20Socks%20Logo.svg"
          alt="Company Logo"
          className="h-6 object-contain"
        />
        <img
          src="https://cdn.prod.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0c0a86ce483a_Customer%20Logo__Vidyard.svg"
          alt="Company Logo"
          className="h-6 object-contain"
        />
        <img
          src="https://cdn.prod.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0cd632ce484a_redweek.svg"
          alt="Company Logo"
          className="h-6 object-contain"
        />
        <img
          src="https://cdn.prod.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0cd161ce4839_Customer%20Logo__Product%20Madness.svg"
          alt="Company Logo"
          className="h-6 object-contain"
        />
      </div>
    </div>
  )
}

export default Content