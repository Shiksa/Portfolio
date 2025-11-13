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

import { motion } from 'motion/react';
import { fadeIn } from '../../framerMotion/variants';

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
];

const AllSkillsSm = () => {
  return (
    <div className='grid md:grid-cols-4 sm:grid-cols-2 gap-12 my-12'>
      {skills.map((skill, index) => (
        <motion.div
          variants={fadeIn('up', 0.2)}
          initial='hidden'
          whileInView='show'
          viewport={{ once: false, amount: 0 }}
          key={index} className='flex flex-col items-center'>
          <skill.icon className='text-7xl text-orange' />
          <p className='text-center mt-4 text-white'>{skill.skill}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default AllSkillsSm;
