import React from 'react'

export default function Navbar() {
  return (
    <div bg-grey-800>
     <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
     <a className="title-font font-medium text-white mb-4 md:mb-0">
          <a href="#about" className="ml-3 text-xl">
            Piyushi Anand
          </a>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          <a href="#projects" className="mr-5 hover:text-white">
            Past Work
          </a>
          <a href="#skills" className="mr-5 hover:text-white">
            Skills
          </a>
          <a href="#contacts" className="mr-5 hover:text-white">
            Contact
          </a>
          <a href='#know_more' className="mr-5 hover:text-white" >
            Know more about me
          </a>
        </nav>
     </div></div>
  )
}
