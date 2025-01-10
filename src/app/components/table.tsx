import { motion } from 'motion/react'

export const tabulardata = [
    { header: "My First Project", para: "My first project consisted of an e-commerse site that I made with my buddy who is good with the back-end. This project was a paid project. In this project we used git to track the code and revert any mistaken commits. I did have to do this once so I am glad we used git. See the images of the styling on the right hand side."},
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

