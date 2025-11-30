import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const IntroLoader = ({ onFinish }) => {
  const [exitAnim, setExitAnim] = useState(false);

  const loaderVariants = {
    initial: { height: "100vh", scaleY: 1 },
    exit: {
      height: 0,
      scaleY: 0,
      transition: {
        duration: 1.1,
        ease: [0.76, 0, 0.24, 1],
      },
    },
  };

  const textVariants = {
    hidden: { x: "100%", opacity: 0 },
    visible: (i) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: i * 0.25,
        duration: 0.8,
      },
    }),
  };

  useEffect(() => {
    // Play text animation
    const t1 = setTimeout(() => {
      setExitAnim(true); // trigger collapse
    }, 2200);

    // After collapse ends → finish intro
    const t2 = setTimeout(() => {
      onFinish();
    }, 3400);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  const lines = ["Welcome", "to my Portfolio"];

  return (
    <motion.div
      className="fixed top-0 left-0 w-full bg-black text-white flex justify-center items-center z-[1000] overflow-hidden"
      variants={loaderVariants}
      initial="initial"
      animate={exitAnim ? "exit" : "initial"}
      style={{ transformOrigin: "top" }}
    >
      <div className="flex flex-col gap-5 text-4xl font-bold justify-center">
        {lines.map((t, i) => (
          <motion.span
            key={i}
            variants={textVariants}
            initial="hidden"
            animate="visible"
            custom={i}
          >
            {t}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
};

export default IntroLoader;
