import React from 'react'

import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaJava } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";

const skills = [
  { skill: "HTML5", icon: FaHtml5 },
  { skill: "CSS", icon: IoLogoCss3 },
  { skill: "JavaScript", icon: IoLogoJavascript },
  { skill: "ReactJS", icon: FaReact },
  { skill: "Redux", icon: SiRedux },
  { skill: "TailwindCSS", icon: RiTailwindCssFill },
  { skill: "Mongo DB", icon: SiMongodb },
  { skill: "Core JAVA", icon: FaJava },
];

const AllSkillsSm = () => {
  return (
    <div className='grid md:grid-cols-4 sm:grid-cols-2 gap-12 my-12'>
      {skills.map((skill, index) => (
        <div key={index} className='flex flex-col items-center'>
          <skill.icon className='text-7xl text-orange' />
          <p className='text-center mt-4 text-white'>{skill.skill}</p>
        </div>
      ))}
    </div>
  );
};

export default AllSkillsSm;
