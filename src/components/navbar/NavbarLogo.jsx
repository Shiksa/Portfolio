import React from 'react'

const NavbarLogo = () => {
  return (
    <div className='h-[36px]  overflow-hidden flex'>
      <h1 className='text-white text-2xl sm:hidden md:block justify-center items-center'>Sayantan Pakhira</h1>
      {/* <h1 className='text-white font-special font-extrabold text-4xl sm:block md:hidden'>SP</h1> */}
      <img src="/sp logo.png" alt="SP" className='sm:block md:hidden object-contain' />
    </div>
  )
}

export default NavbarLogo
