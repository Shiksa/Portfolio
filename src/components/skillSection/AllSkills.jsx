import React from 'react'
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaJava } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { FaWordpress } from "react-icons/fa";
import { TbFileTypeSql } from "react-icons/tb";
import SingleSkill from './SingleSkill';

import { motion } from 'motion/react';
import { fadeIn } from '../../framerMotion/variants';
import { div } from 'motion/react-client';


const skills = [
  { skill: "HTML", icon: FaHtml5 },
  { skill: "CSS", icon: IoLogoCss3 },
  { skill: "JavaScript", icon: IoLogoJavascript },
  { skill: "ReactJS", icon: FaReact },
  { skill: "Redux", icon: SiRedux },
  { skill: "Mongo DB", icon: SiMongodb },
  { skill: "Core JAVA", icon: FaJava },
  { skill: "SQL", icon: TbFileTypeSql },
  { skill: "TailwindCSS", icon: RiTailwindCssFill },
  { skill: "Wordpress", icon: FaWordpress },
]


const AllSkills = () => {
  return (
    <div>
      <div className='flex items-center justify-center relative gap-2 max-w-[1200px] mx-auto'>
        {skills.map((skill, index) => (
          <motion.div
            variants={fadeIn('up', `0.${index}`)}
            initial='hidden'
            whileInView='show'
            viewport={{ once: false, amount: 0 }}
            key={index}>
            <SingleSkill text={skill.skill} imgSvg={<skill.icon />} />
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default AllSkills
