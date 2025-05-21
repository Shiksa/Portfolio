import React from 'react'
import ProjectText from './ProjectText'
import SingleProject from './SingleProject'

const projects = [
  {
    name: 'Tic Tac Toe',
    year: 'Apr 2024',
    align: 'right',
    image: '/website-img-1.jpg',
    link: 'https://shikshatictactoe.netlify.app/',
  },
  {
    name: 'Currency Converter',
    year: 'Sep 2024',
    align: 'left',
    image: '/website-img-2.webp',
    link: 'https://currency-converter-webapp-sooty.vercel.app/',
  },
  {
    name: 'Med Buddy',
    year: 'April 2025',
    align: 'right',
    image: '/website-img-3.jpg',
    link: '#',
  },
  {
    name: 'Geniquest Pharma',
    year: 'May 2025',
    align: 'left',
    image: '/website-img-4.jpg',
    link: 'https://geniquest-pharma.vercel.app/',
  },
]

const ProjectMain = () => {
  return (
    <div id='projects' className='max-w-[1200px] mx-auto px-4'>
      <ProjectText />
      <div className='flex flex-col gap-20 max-w-[900px] mx-auto mt-12'>
        {projects.map((item, index) => (<SingleProject key={index} name={item.name} year={item.year} align={item.align} image={item.image} link={item.link} />))}

      </div>
    </div>
  )
}

export default ProjectMain
