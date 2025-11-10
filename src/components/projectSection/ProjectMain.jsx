import React, { useState } from 'react'
import ProjectText from './ProjectText'
import SingleProject from './SingleProject'

const projects = [

  {
    name: 'Shriyam Herbal Care',
    year: 'Oct 2025',
    align: 'right',
    image: '\ShriyamPharma.png',
    link: 'https://shriyamcare.com/',
  },
  {
    name: 'Geniquest Pharma',
    year: 'Aug 2025',
    align: 'left',
    image: '\GeniquestPharma.png',
    link: 'https://geniquestpharma.com/',
  },
  {
    name: 'Kwinbee',
    year: 'Jul 2025',
    align: 'right',
    image: '/KwinBee.png',
    link: 'https://kwinbee.com/',
  },
  {
    name: 'Rajnandini Rice',
    year: 'June 2025',
    align: 'left',
    image: '/RajnandiniRice.png',
    link: 'https://rajnandinirice.com/',
  },
  {
    name: 'Med Buddy',
    year: 'April 2025',
    align: 'right',
    image: '/MedBuddy.png',
    link: 'https://github.com/Shiksa/2k25-Final-Year-B.Tech-Project',
  },
  {
    name: 'To-Do Buddy',
    year: 'Feb 2025',
    align: 'left',
    image: '/ToDoBuddy.png',
    link: 'https://to-do-list-shiksas-projects.vercel.app/',
  },
  {
    name: 'Currency Converter',
    year: 'Dec 2024',
    align: 'right',
    image: '/CurrencyConverter.png',
    link: 'https://currency-converter-webapp-sooty.vercel.app/',
  },
  {
    name: 'Lef-Lif',
    year: 'Aug 2024',
    align: 'left',
    image: '/Lef-Lif.png',
    link: 'https://github.com/Shiksa/NGO-Waste-Food-Management',
  },
  {
    name: 'Rock_Paper_Scissor',
    year: 'Nov 2024',
    align: 'right',
    image: '/RockPaperScisor.png',
    link: 'https://rock-paper-scissor-one-pied.vercel.app/',
  },
  {
    name: 'Tic Tac Toe',
    year: 'Apr 2024',
    align: 'left',
    image: '/TicTacToe.png',
    link: 'https://shikshatictactoe.netlify.app/',
  },
]

const ProjectMain = () => {
  const [showMore, setShowMore] = useState(false)
  const visibleProjects = showMore ? projects : projects.slice(0, 3)
  return (
    <div id='projects' className='max-w-[1200px] mx-auto px-4'>
      <ProjectText />
      <div className='flex flex-col gap-20 max-w-[900px] mx-auto mt-12'>
        {visibleProjects.map((item, index) => (<SingleProject key={index} name={item.name} year={item.year} align={item.align} image={item.image} link={item.link} />))}
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
