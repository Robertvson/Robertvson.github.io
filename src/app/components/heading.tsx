import {motion} from 'motion/react'

export default function Home() {
  return (
<div className="">
  <div>
    <div className="flex flex-row items-center mt-3 flex-wrap">

      <motion.h1
      className="custom-element"
      initial={{opacity: 0}}
      transition={{duration: 0.3, ease:'linear'}}
      animate={{opacity: 1}}
      
      >Scott Mitchell Robertson </motion.h1>

      <motion.h1
      className="custom-element1"
      initial={{opacity: 0}}
      transition={{duration: 0.4, ease:'linear'}}
      animate={{opacity: 1}}
      
      >Front End Developer</motion.h1>


      </div>
    </div>
  </div>
  );
}