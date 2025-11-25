import React, { useState } from 'react'
import ProjectText from './ProjectText'
import SingleProject from './SingleProject'
import { motion } from 'motion/react';
import { fadeIn } from '../../framerMotion/variants';

const projects = [

  {
    name: 'Shriyam Herbal Care',
    year: 'Oct 2025',
    image: '\ShriyamPharma.webp',
    link: 'https://shriyamcare.com/',
  },
  {
    name: 'Geniquest Pharma',
    year: 'Aug 2025',
    image: '\GeniquestPharma.webp',
    link: 'https://geniquestpharma.com/',
  },
  // {
  //   name: 'Kwinbee',
  //   year: 'Jul 2025',
  //   image: '/KwinBee.webp',
  //   link: 'https://kwinbee.com/',
  // },
  {
    name: 'Rajnandini Rice',
    year: 'June 2025',
    image: '/RajnandiniRice.webp',
    link: 'https://rajnandinirice.com/',
  },
  {
    name: 'Med Buddy',
    year: 'April 2025',
    image: '/MedBuddy.webp',
    link: 'https://github.com/Shiksa/2k25-Final-Year-B.Tech-Project',
  },
  {
    name: 'To-Do Buddy',
    year: 'Feb 2025',
    image: '/ToDoBuddy.webp',
    link: 'https://to-do-list-shiksas-projects.vercel.app/',
  },
  {
    name: 'Currency Converter',
    year: 'Dec 2024',
    image: '/CurrencyConverter.webp',
    link: 'https://currency-converter-webapp-sooty.vercel.app/',
  },
  {
    name: 'Lef-Lif',
    year: 'Aug 2024',
    image: '/Lef-Lif.webp',
    link: 'https://github.com/Shiksa/NGO-Waste-Food-Management',
  },
  {
    name: 'Rock_Paper_Scissor',
    year: 'Nov 2024',
    image: '/RockPaperScisor.webp',
    link: 'https://rock-paper-scissor-one-pied.vercel.app/',
  },
  {
    name: 'Tic Tac Toe',
    year: 'Apr 2024',
    image: '/TicTacToe.webp',
    link: 'https://shikshatictactoe.netlify.app/',
  },
]

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
