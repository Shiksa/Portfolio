import React from 'react'

const ExperienceTopRight = () => {
  const spanClass = 'font-bold text-white';

  return (
    <div className='xl:w-[35%] lg:w-[45%] border border-lightBrown p-4 rounded-xl'>
      <p className='text-lg text-center text-lightGrey'>I have a sound knowledge in <span className={spanClass}> React and modern JavaScript</span>, focused on building scalable, clean, and user-friendly web applications. With <span className={spanClass}>industrial training in the MERN stack and Java Full Stack Development</span>, I’m comfortable working across the stack.

        I've delivered some industry standard <span className={spanClass}> freelance projects </span> and also gained real-world experience during my <span className={spanClass}> contractual employment at T2A Technologies Pvt. Ltd.</span>, working on practical, production-level tasks.

        I follow best practices and enjoy creating <span className={spanClass}>responsive, maintainable</span> solutions. I'm now <span className={spanClass}>actively looking for opportunities</span> where I can apply all my experiences and gain hand-on knowledge.</p>
    </div>
  )
}

export default ExperienceTopRight
