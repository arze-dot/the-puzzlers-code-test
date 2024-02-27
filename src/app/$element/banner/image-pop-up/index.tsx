'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

const ImagePopUp: React.FC = () => {

    const avatar = {
        animate: {
            y: [100, 0],
            transition: {
                scale: {
                    duration: 3,
                    ease: "linear",
                },
            },
        },
    }

    const avatarName = {
        animate: {
            opacity: [0, 100],
            transition: {
                opacity: {
                    duration: 1,
                    ease: 'linear'
                }
            },
        }
    }

    return (
        <>
            <motion.div
                className="absolute hidden top-[650px] left-[15%] xl:block"
                variants={avatar}
                animate='animate'
            >
                <Image src='/images/sales.png' width={138} height={150} alt='sales-image' />
            </motion.div>

            <motion.div
                className="absolute hidden xl:block top-[765px] left-[15.8%] font-pt-sans font-bold text-[24px] text-white bg-state-info px-[28px] py-[4px] rounded-3xl"
                variants={avatarName}
                animate='animate'
            >
                Sales
            </motion.div>

            <motion.div
                className="absolute hidden xl:block top-[350px] right-[15%]"
                variants={avatar}
                animate='animate'
            >
                <Image src='/images/client.png' width={138} height={150} alt='sales-image' />
            </motion.div>

            <motion.div
                className="absolute hidden xl:block top-[465px] right-[15.8%] font-pt-sans font-bold text-[24px] text-white bg-state-success px-[28px] py-[4px] rounded-3xl"
                variants={avatarName}
                animate='animate'
            >
                Client
            </motion.div>

            <motion.div
                className="absolute hidden xl:block top-[800px] right-[17%]"
                variants={avatar}
                animate='animate'
            >
                <Image src='/images/sales-manager.png' width={138} height={150} alt='sales-image' />
            </motion.div>

            <motion.div
                className="absolute hidden xl:block top-[915px] right-[15%] font-pt-sans font-bold text-[24px] text-white bg-state-warning px-[28px] py-[4px] rounded-3xl"
                variants={avatarName}
                animate='animate'
            >
                Sales Manager
            </motion.div>
        </>
    )
}

export default ImagePopUp