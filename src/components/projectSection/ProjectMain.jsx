import React, { useState } from 'react'
import ProjectText from './ProjectText'
import SingleProject from './SingleProject'
import { motion } from 'motion/react';
import { fadeIn } from '../../framerMotion/variants';
import { projects } from './config';


const ProjectMain = () => {
  const [showMore, setShowMore] = useState(false)
  const visibleProjects = showMore ? projects : projects.slice(0, 3)
  return (
    <div id='projects' className='max-w-[1200px] mx-auto px-4'>
      <motion.div
        variants={fadeIn('up', 0.2)}
        initial='hidden'
        whileInView='show'
        viewport={{ once: false, amount: 0 }}>
        <ProjectText />
      </motion.div>

      <div className='flex flex-col gap-20 max-w-[900px] mx-auto mt-12'>
        {visibleProjects.map((item, index) => {
          const align = index % 2 == 0 ? "right" : "left";
          return (
            <SingleProject
              key={index}
              name={item.name}
              year={item.year}
              align={align}
              image={item.image}
              link={item.link}
            />
          );
        })}
        <div className='flex justify-center items-center'>
          {!showMore && (
            <button className='px-4 py-2 rounded-full w-fit text-xl font-bold text-white border-cyan border flex items-center gap-1 bg-gradient-to-r from-cyan to-orange hover:border-orange hover:scale-110 transition-all duration-500 hover:shadow-[0_0_20px_0_rgba(94,206,220,0.5)]' onClick={() => { setShowMore(true) }}>Check More Projects</button>
          )}

          {showMore && (
            <button className='px-4 py-2 rounded-full w-fit text-xl font-bold text-white border-cyan border flex items-center gap-1 bg-gradient-to-r from-cyan to-orange hover:border-orange hover:scale-110 transition-all duration-500 hover:shadow-[0_0_20px_0_rgba(94,206,220,0.5)]' onClick={() => { setShowMore(false) }}>Check Less</button>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProjectMain
