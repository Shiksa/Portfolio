import React from 'react'
import { RxCircle } from "react-icons/rx";

const HeroPic = () => {
  return (
    <div className='h-full flex items-center justify-center'>
      <img src="/sayantan 1.png" alt="Sayantan" className='max-h-[450px] w-auto' />

      <div className='absolute -z-10 flex justify-center items-center animate-pulse scale-80'>
        {/* <RxCircle className='md:h-[90%] sm:h-[120%] min-h-[470px] w-auto text-cyan blur-md animate-[spin_20s_linear_infinite]' /> */}
      </div>
    </div>
  )
}

export default HeroPic
