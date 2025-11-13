import React from 'react'
import { Link } from 'react-scroll'

const FooterMain = () => {
  const links = [
    { link: "About Me", section: "about" },
    { link: "Skills", section: "skills" },
    { link: "Experience", section: "experience" },
    { link: "Projects", section: "projects" },
    { link: "Contact", section: "contact" }
  ]
  return (
    <div className='px-4'>
      <div className='w-full h-[1px] bg-lightGrey mt-12'></div>
      {/* <div className='md:flex sm:hidden justify-between mt4 max-w-[1200px] mx-auto'>
        <p className='text-3xl text-lightGrey'>
          Sayantan Pakhira
        </p>
        <ul className='flex gap-4 text-lightGrey text-xl'>
          {links.map((link, index) => (
            <li key={index}>
              <Link to={link.section} className='hover:text-white transition-all duration-500 cursor-pointer'>{link.link}</Link>
            </li>
          ))}
        </ul>
      </div> */}
      <p className='max-w-[1200px] mx-auto text-center mt-7 mb-7 text-lightGrey'>Copyright © {new Date().getFullYear()} Sayantan | All Rights Reserved</p>
    </div>
  )
}

export default FooterMain
