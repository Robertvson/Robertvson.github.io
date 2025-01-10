"use client"
import { motion } from 'motion/react';


const techstackdis = [ 
    {name: 'HTML', icon: '/icons/HTML.svg'},
    {name: 'CSS', icon: '/icons/CSS.svg'},
    {name: 'JavaScript/Typescript', icon: '/icons/JS.svg'},
    {name: 'React.js', icon:'/icons/React.svg'},
    {name: 'Tailwind', icon: '/icons/Tailwind.svg'}
 ]



export default function TechStack(){
return(
    <>
        <h2 className='mt-10 text-center w-full'>My skills include (but are not limited to)</h2>
        <div className='flex flex-wrap w-1/2 justify-center mt-5 mx-auto'>
        {techstackdis.map((item, index) => (
                <motion.div
                    key={index}
                    className="mx-2 my-2 bg-white p-6 rounded-xl shadow-sm border border-stone-100 hover:shadow-md transition-shadow"
                >
                    <img alt='' className='h-10 w-10 mx-auto' src={item.icon}/>
                    <p className='text-black p-2'>{item.name}</p>
                </motion.div>
            ))}
        </div>
    </>
)}