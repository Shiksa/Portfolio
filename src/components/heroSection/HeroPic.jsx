import React from 'react'
import { RxCircle } from "react-icons/rx";
import styles from "./HeroPic.module.css";
import { motion } from 'motion/react';
import { fadeIn } from '../../framerMotion/variants';

const HeroPic = () => {
  return (
    <motion.div
      variants={fadeIn('left', 0.2)}
      initial='hidden'
      whileInView='show'
      viewport={{ once: false, amount: 0 }} className={`h-full flex items-center justify-center `}>
      <div className={styles.wrapper}>
        <img src="/sayantan 1.png" alt="Sayantan" className={` ${styles.image}`} />

        {/* <div className='absolute -z-10 flex justify-center items-center animate-pulse scale-80'>
        <RxCircle className='md:h-[90%] sm:h-[120%] min-h-[470px] w-auto text-cyan blur-md animate-[spin_20s_linear_infinite]' />
      </div> */}

      </div>
    </motion.div>
  )
}

export default HeroPic
