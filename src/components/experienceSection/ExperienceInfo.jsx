import React from 'react'

//check from 1:25 or something like this

const ExperienceInfo = ({ number, text }) => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <p className='font-bold text-6xl text-cyan'>{number}</p>
      <p className='font-bold text-xl text-lightGrey uppercase -mt-4'>{text}</p>
    </div>
  )
}

export default ExperienceInfo
// { number, text }