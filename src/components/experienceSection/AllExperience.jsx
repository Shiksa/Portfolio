import React from 'react';
import SingleExperience from './SingleExperience';
import { FaArrowRight } from "react-icons/fa6";

import { motion } from 'motion/react';
import { fadeIn } from '../../framerMotion/variants';
import { div } from 'motion/react-client';

const experiences = [
  {
    job: 'Industrial Training on MERN Stack',
    company: 'Ardent Infotech Pvt. Ltd.',
    date: '04/07/2024 - 04/08/2024',
    responsibilities: [
      'Gained knowledge about establishing and managing databases using MongoDB.',
      'Built a project named "LEF-LIF" focused on NGO and food waste management.',
      'Learned frontend development with HTML, CSS, and React.',
      'Connected frontend with backend using Express and MongoDB.'
    ]
  },
  {
    job: 'Freelance Web Developer',
    company: 'Plazma Digital',
    date: '15/10/2024 - Present',
    responsibilities: [
      'Developed responsive frontend interfaces.',
      'Attended client meetings and handled requirement analysis.',
      'Assisted with project lead collection and client communication.',
      'Provided technical support and maintenance.'
    ]
  },
  {
    job: 'Industrial Training on Java Full Stack Development',
    company: 'QSpider-JSpider (Kolkata)',
    date: '22/02/2025 - Present',
    responsibilities: [
      'Learned Core Java and OOP fundamentals.',
      'Explored HTML, CSS, JS, and React.',
      'Studied SDLC models including Agile.',
      'Gained SQL experience and RDBMS knowledge.'
    ]
  },
  {
    job: 'Front-End Developer (Contractual)',
    company: 'T2A Technologies Pvt. Ltd.',
    date: '10/04/2025 - 10/10/2025',
    responsibilities: [
      'Worked as a contractual Frontend Developer.',
      'Contributed to project tasks based on assigned scope.',
      'Delivered work according to deadlines and project requirements.',
      'Collaborated with the team for task completion and coordination.'
    ]
  },
];

const AllExperience = () => {
  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-center md:gap-12 flex-wrap  mt-5">
      {experiences.map((experience, index) => {
        return (
          <motion.div key={index} variants={fadeIn('right', 0.2)}
            initial='hidden'
            whileInView='show'
            viewport={{ once: false, amount: 0 }} className='flex items-center'>
            <SingleExperience experience={experience} />
            {/* Show arrow except after the last item */}
            {index < experiences.length - 1 && (
              <FaArrowRight className="lg:block sm:hidden text-4xl text-orange ml-6" />
            )}
          </motion.div>
        )
      })}
    </div>
  );
};

export default AllExperience;
