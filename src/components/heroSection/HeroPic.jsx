import React from 'react'
import { RxCircle } from "react-icons/rx";
import styles from "./HeroPic.module.css";

const HeroPic = () => {
  return (
    <div className={`h-full flex items-center justify-center `}>
      <div className={styles.wrapper}>
        <img src="/sayantan 1.png" alt="Sayantan" className={` ${styles.image}`} />

        {/* <div className='absolute -z-10 flex justify-center items-center animate-pulse scale-80'>
        <RxCircle className='md:h-[90%] sm:h-[120%] min-h-[470px] w-auto text-cyan blur-md animate-[spin_20s_linear_infinite]' />
      </div> */}
      </div>
    </div>
  )
}

export default HeroPic
