import { motion } from 'motion/react'

export const tabulardata = [
    { header: "My First Project", para: "In my first project I took the position of stylist and front-end developer, working on user expierence and sleek design. I worked with my associate who did the back-end and the login system, authentication and authorisation. I liaised with the customer regarding the design and layout throughout and making sure the customer's ideals were represented in their site via design layout and colourisation"},
];



export default function Table() {
    return (
        <div className="grid grid-flow-row mt-10 grid-cols-1 gap-2 w-3/4 mx-auto">
            {tabulardata.map((item, index) => (
                <motion.div
                    key={index}
                    className="flex flex-wrap bg-white p-6 rounded-xl shadow-sm border border-stone-100 hover:shadow-md transition-shadow"
                    initial={{opacity: 0}}
                    transition={{duration: 0.3, ease:'linear'}}
                    animate={{opacity: 1}}
                    >
                    <h1 className='mx-auto text-black p-2 text-center'>{item.header}</h1>
                    <p className="text-black p-2 text-center">{item.para}</p>
                </motion.div>
            ))}
        </div>
    );
}

