//<a className="mx-auto text-center col-start-2 col-end-3 bg-white px-6 py-2 rounded-xl shadow-sm border border-stone-100 hover:shadow-md transition-shadow hover:cursor-pointer"><img className="w-10 h-10 mx-auto" src="/icons/Weather-Man.svg"></img><p className="mt-3">Weather Man</p></a>
//<a className="mx-auto text-center col-start-3 col-end-4 bg-white px-6 py-2 rounded-xl shadow-sm border border-stone-100 hover:shadow-md transition-shadow hover:cursor-pointer"><img className="w-10 h-10 mx-auto" src="/icons/Vetrina.svg"></img><p className="mt-3">Vetrina</p></a>

import Link from "next/link";
import {motion} from 'motion/react';

//to-do
//Change cols once above projects are finished

export default function Projects(){
return(
<motion.div className="mx-auto w-100 h-100"
initial={{opacity: 0}}
transition={{duration: 0.4, ease:'linear'}}
animate={{opacity: 1}}>
    <h2 className="text-center mt-10 text-lg mont">View some example projects</h2>
    <p className="text-center mont">These projects are theoretical where otherwise mentioned. When visiting you'll see my design process and the end result, happy looking!</p>
    <div className="grid grid-cols-auto grid-rows-auto grid-flow-row place-items-center mt-5 w-1/2 mx-auto">
      <Link className="mont mx-auto text-center bg-white px-6 py-2 rounded-xl shadow-sm border hover:shadow-md transition-shadow hover:cursor-pointer border-gray-300" href="./widget"><img className="w-10 h-10 mx-auto" src="/icons/Widget.svg"></img><p className="mt-3">Widget & Co.</p></Link>
    </div>
  </motion.div>
)}