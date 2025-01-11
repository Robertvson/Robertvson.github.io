import {motion} from 'motion/react'

export default function Home() {
  return (
<div className="">
  <div>
    <div className="flex flex-row items-center mt-3">

      <motion.h1
      className="mx-auto bold text-5xl text-center w-fit text-stone-950 border-b-2 border-stone-950"
      initial={{opacity: 0}}
      transition={{duration: 0.3, ease:'linear'}}
      animate={{opacity: 1}}
      
      >Scott Mitchell Robertson </motion.h1>

      <motion.h1
      className="mx-auto bold text-3xl text-center w-fit text-stone-950 border-b-2 border-stone-950"
      initial={{opacity: 0}}
      transition={{duration: 0.4, ease:'linear'}}
      animate={{opacity: 1}}
      
      >Front End Developer</motion.h1>


      </div>
    </div>
  </div>
  );
}