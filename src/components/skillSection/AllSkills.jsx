import React from 'react'


import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaJava } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import SingleSkill from './SingleSkill';


const skills = [{
  skill: "HTML5",
  icon: FaHtml5
}, {
  skill: "CSS",
  icon: IoLogoCss3
}, {
  skill: "JavaScript",
  icon: IoLogoJavascript
}, {
  skill: "ReactJS",
  icon: FaReact
}, {
  skill: "Redux",
  icon: SiRedux
}, {
  skill: "TailwindCSS",
  icon: RiTailwindCssFill
},
{
  skill: "Mongo DB",
  icon: SiMongodb
},
{
  skill: "Core JAVA",
  icon: FaJava
},
]


const AllSkills = () => {
  return (
    <div>
      <div className='flex items-center justify-center relative gap-2 max-w-[1200px] mx-auto'>
        {skills.map((skill, index) => (<SingleSkill key={index} text={skill.skill} imgSvg={<skill.icon />} />))}
      </div>
    </div>
  )
}

export default AllSkills
