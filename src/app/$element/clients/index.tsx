'use client'

import Image from "next/image"
import { motion } from 'framer-motion'

const Clients = () => {

    // Triple the logo so it can loop nicely without empty state
    const clients: string[] = [
        '/images/circle-logo.svg',
        '/images/foxhub-logo.svg',
        '/images/treva-logo.svg',
        '/images/muzica-logo.svg',
        '/images/goldline-logo.svg',
        '/images/circle-logo.svg',
        '/images/foxhub-logo.svg',
        '/images/treva-logo.svg',
        '/images/muzica-logo.svg',
        '/images/goldline-logo.svg',
        '/images/circle-logo.svg',
        '/images/foxhub-logo.svg',
        '/images/treva-logo.svg',
        '/images/muzica-logo.svg',
        '/images/goldline-logo.svg',
    ]

    const marqueeVariants = {
        animate: {
            x: [0, 1000],
            transition: {
                x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 15,
                    ease: "linear",
                },
            },
        },
    };

    return (
        <section className="w-full flex flex-col items-center justify-center gap-6 mt-[64px]">
            <p className="text-text-secondary font-pt-sans text-[24px]">
                Trusted by leading companies
            </p>

            {/* Marquee */}
            <div className="flex flex-row items-center justify-center w-[90%] overflow-hidden max-w-[1000px] relative">
                <motion.div
                    className="flex flex-row items-center justify-center "
                    variants={marqueeVariants}
                    animate="animate"
                >
                    {
                        clients.map((item, index) => {
                            return (
                                <Image src={item} width={208} height={68} alt='clients' key={index} />
                            )
                        })
                    }
                </motion.div>
            </div>
        </section>
    )
}

export default Clients;