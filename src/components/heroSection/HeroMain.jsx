import React from 'react'
import { motion } from "framer-motion";
import HeroText from './HeroText'
import HeroPic from './HeroPic'

const HeroMain = ({ introDone }) => {
  return (
    <div className='pt-40 pb16'>
      <div className='flex md:flex-row sm:flex-col max-w-[1200px] mx-auto justify-between items-center relative px-4'>

        {/* HeroText appears AFTER intro animation */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={introDone ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <HeroText />
        </motion.div>

        {/* HeroPic appears AFTER intro animation */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={introDone ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.35 }}
        >
          <HeroPic />
        </motion.div>

      </div>
    </div>
  )
}

export default HeroMain
