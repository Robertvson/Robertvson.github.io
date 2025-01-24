"use client"
import { motion } from "motion/react";
import Home from './components/heading';
import TechStack from "./components/techstack";
import ExtraSkills from "./components/extraskills";
import FooterComp from './components/footer';

//imports



export default function homepage(){
return(
<>

<div className="w-100% h-100">
  <Home/>
  <TechStack/>
  <motion.div className= "flex bg-black w-100% h-64 z-0 mt-20"
  initial={{opacity: 0}}
  transition={{duration: 0.4, ease:'linear'}}
  whileInView={{opacity: 1}}
  ><p className="text-center mx-auto my-auto text-white text-6xl">New Possibilites Await</p></motion.div>
  <div>
  <ExtraSkills/>
  </div>
  <FooterComp></FooterComp>
</div>

</>
)
}
