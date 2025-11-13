import React from 'react'
import SkillText from './SkillText'
import AllSkills from './AllSkills'
import AllSkillsSm from './AllSkillsSm'
import { motion } from 'motion/react';
import { fadeIn } from '../../framerMotion/variants';

const SkillMain = () => {
  return (
    <div id='skills'>
      <div className='max-w-[1200px] px-4 mx-auto min-h-[600px] relative overflow-hidden'>
        <motion.div
          variants={fadeIn('down', 0.2)}
          initial='hidden'
          whileInView='show'
          viewport={{ once: false, amount: 0 }}>
          <SkillText />
        </motion.div>
        <div className='bottom-[50px] absolute left-[50%] -translate-x-[50%] lg:block sm:hidden'>
          <AllSkills />
        </div>
        <div className='sm:block lg:hidden'>
          <AllSkillsSm />
        </div>
      </div>
    </div>
  )
}

export default SkillMain
