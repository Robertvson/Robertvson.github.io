import { motion } from 'motion/react'

export const tabulardata = [
    { header: "My First Project", para: "In my first project I worked with an associate to create an e-commerce site for users who would like to sell their courses. My associate is an expert in back-end systems such as logins, payments , authentication and control. I on the other hand am an expert in the layout, styles and general user expierence."},
];



export default function Table() {
    return (
        <div className="grid grid-flow-row mt-10 grid-cols-1 gap-2 w-3/4 mx-auto">
            {tabulardata.map((item, index) => (
                <motion.div
                    key={index}
                    className="flex flex-wrap bg-white p-6 rounded-xl shadow-sm border border-stone-100 hover:shadow-md transition-shadow"
                >
                    <h1 className='mx-auto text-black p-2 text-center'>{item.header}</h1>
                    <p className="text-black p-2 text-center">{item.para}</p>
                </motion.div>
            ))}
        </div>
    );
}

