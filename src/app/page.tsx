"use client"
import { motion } from "motion/react";
import Home from './components/heading';
import Table from './components/table';
import TechStack from "./components/techstack";
import ExtraSkills from "./components/extraskills";
//imports



export default function homepage(){
return(
<>

<div className="w-100% h-100">
  <Home/>
  <Table/>
  <TechStack/>
  <motion.div className= "flex bg-black w-100% h-64 z-0 mt-20"
  initial={{opacity: 0}}
  transition={{duration: 0.4, ease:'linear'}}
  whileInView={{opacity: 1}}
  ><p className="mx-auto my-auto text-white text-6xl md:text-center">New Possibilites Await</p></motion.div>
  <ExtraSkills/>
  <motion.div className="bg-orange-500 w-10 h-10 mx-auto mt-20 z-50"
  ></motion.div>
  <motion.div className="bg-orange-500 w-10 h-10 mx-auto mt-20 z-50"
  >check</motion.div>

</div>

</>
)
}
