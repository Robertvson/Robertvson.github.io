"use client"
import { motion } from 'motion/react';


const techstackdis = [ 
    {name: 'HTML', icon: '/icons/HTML.svg'},
    {name: 'CSS', icon: '/icons/CSS.svg'},
    {name: 'JavaScript', icon: '/icons/JS.svg'},
    {name: 'C# (Basic)', icon: '/icons/Csharp.svg'},
    {name: 'React.js', icon:'/icons/React.svg'},
    {name: 'SvelteKit', icon: '/icons/Svelte.svg'},
    {name: 'Tailwind', icon: '/icons/Tailwind.svg'}
 ]



export default function TechStack(){
return(
    <>
        <motion.h2 className='mt-10 text-center w-full'
        initial={{opacity: 0}}
        transition={{duration: 0.3, ease:'linear'}}
        animate={{opacity: 1}}
        >My skills include (but are not limited to)</motion.h2>
        <div className='flex flex-wrap w-1/2 justify-center mt-5 mx-auto'>
        {techstackdis.map((item, index) => (
                <motion.div
                    key={index}
                    className="mx-2 my-2 bg-white px-6 py-2 rounded-xl shadow-sm border border-stone-100 hover:shadow-md transition-shadow"
                    initial={{opacity: 0}}
                    transition={{duration: 0.3, ease:'linear'}}
                    animate={{opacity: 1}}
                    >
                    <img alt='icon' className='h-10 w-10 mx-auto' src={item.icon}/>
                    <p className='text-black p-2 text-center'>{item.name}</p>
                </motion.div>
            ))}
        </div>
    </>
)}