import React from 'react'
import ExperienceInfo from './ExperienceInfo'

//check from 1:25 or something like this

const ExperienceTopLeft = () => {
  return (
    <div className='flex flex-col gap-6 w-[300px]'>
      <p className='text-orange font-bold uppercase text-3xl font-special text-center'>Since 2024</p>
      <div className='flex justify-center items-center gap-4'>
        <ExperienceInfo number="1+" text="Years" />
        <p className='font-bold text-6xl text-lightBrown mb-2.5'>-</p>
        <ExperienceInfo number="15" text="Websites" />
      </div>
      <p className='text-white text-center'>Over 1 year of experience in building dynamic and user-friendly web applications through my journey in web development freelancing and contractual employment.</p>
      <ExperienceInfo number="10+" text="Happy Client" />
    </div>
  )
}

export default ExperienceTopLeft
