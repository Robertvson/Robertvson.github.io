import {motion} from 'motion/react'

export default function Home() { // re-name later
  return (
<div className="">
  <div>
    <div className="flex flex-row items-center mt-3">

      <motion.h1
      className="mx-auto bold text-5xl text-center w-fit text-stone-950 border-b-2 border-stone-950 sm:text-3xl md:text-3xl lg:text-3xl"
      initial={{opacity: 0}}
      transition={{duration: 0.4, ease:'linear'}}
      animate={{opacity: 1}}
      
      >Scott Mitchell Robertson </motion.h1>

      <motion.h1
      className="mx-auto bold text-3xl text-center w-fit text-stone-950 border-b-2 border-stone-950 sm:text-xl md:text-xl lg:text-xl"
      initial={{opacity: 0}}
      transition={{duration: 0.4, ease:'linear'}}
      animate={{opacity: 1}}
      
      >Web Developer</motion.h1>


      </div>
    </div>
  </div>
  );
}