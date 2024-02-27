'use client'

import { motion } from 'framer-motion'
import Image from 'next/image';

const Stars = () => {

    const starxl = {
        animate: {
            scale: 1.1,
            rotate: 180,
            transition: {
                scale: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 3,
                    ease: "linear",
                },
                rotate: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 12,
                    ease: "linear",
                    delay: 1
                }
            },
        },
    };

    const starlg = {
        animate: {
            scale: 1.1,
            rotate: -180,
            transition: {
                scale: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 3,
                    ease: "linear",
                    delay: 1
                },
                rotate: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 12,
                    ease: "linear",
                    delay: 2
                }
            },
        },
    };

    const starmd = {
        animate: {
            scale: 1.1,
            rotate: 180,
            transition: {
                scale: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 3,
                    ease: "linear",
                    delay: 2,
                },
                rotate: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 12,
                    ease: "linear",
                    delay: 3
                }
            },
        },
    };


    return (
        <>
            <motion.div
                className="absolute hidden lg:block -top-[50px] left-5 lg:left-[20%] "
                variants={starxl}
                animate="animate"
            >
                <Image src='/icons/star-xl.svg' width={51} height={51} alt='star-xl-icon' />
            </motion.div>

            <motion.div
                className="absolute hidden lg:block lg:top-[200px] lg:right-[30%] "
                variants={starlg}
                animate="animate"
            >
                <Image src='/icons/star-lg.svg' width={48} height={48} alt='star-lg-icon' />
            </motion.div>

            <motion.div
                className="absolute hidden lg:block lg:top-[150px] lg:right-[25%] "
                variants={starmd}
                animate="animate"
            >
                <Image src='/icons/star-md.svg' width={34} height={34} alt='star-md-icon' />
            </motion.div>
        </>
    )
}

export default Stars;