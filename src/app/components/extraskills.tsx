import { motion } from 'motion/react';


const extraskillsdis = [ 
    {name: 'The Italian Language', icon: '/icons/italy.svg'},
    {name: 'Networking', icon: '/icons/plug.svg'},
    {name: 'Computer Systems', icon: '/icons/system.svg'},
    {name: 'Dog Grooming', icon:'/icons/dog.svg'},
    {name: 'TEFL (teaching English as a foreign language)', icon: '/icons/teach.svg'}
 ]



export default function ExtraSkills(){
return(
    <>
        <h2 className='mt-10 text-center w-full mont'>My other skills:</h2>
        <div className='flex flex-wrap w-1/2 justify-center mt-5 mx-auto mont'>
        {extraskillsdis.map((item, index) => (
                <motion.div
                    key={index}
                    className="mont  mx-2 my-2 bg-white p-6 rounded-xl shadow-sm border border-stone-300 hover:shadow-md transition-shadow"
                >
                    <img alt= '' className='h-10 w-10 mx-auto mont' src={item.icon}/>
                    <p className='text-black p-2 text-center mont'>{item.name}</p>
                </motion.div>
            ))}
        </div>
    </>
)}