import {motion} from 'motion/react'


export default function FooterComp(){
    return(
            <>
                <motion.div className="bg-black h-40 w-full mt-10 pt-5"
                initial={{opacity: 0}}
                transition={{duration: 0.4, ease:'linear'}}
                whileInView={{opacity: 1}}
                >
                <div className="">
                        <div className="">
                                <p className="stretch text-2xl text-white">Website by</p>
                        </div>
                        <div className="flex items-start">
                                <div className="w-1/5 h-7"></div><p className="text-xl w-auto text-white">Scott Mitchell Robertson</p><div className="w-3/5 h-7"></div>
                        </div>
                        <div>
                                <p className="text-white text-end mr-8 text-sm">“The path to paradise begins in hell.”</p>
                                <p className="text-white text-end mr-40 text-sm">―  Dante Alighieri</p>
                        </div>
                </div>
                </motion.div>
            </>

    )}