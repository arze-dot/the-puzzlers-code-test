'use client'

import Image from "next/image"
import Button from "../button"
import { motion } from 'framer-motion'
import ImagePopUp from "./image-pop-up"
import Stars from "./stars"

const Banner: React.FC = () => {




    return (
        <section className="w-full flex flex-col items-center justify-center gap-[24px] text-center mt-[64px] px-5 relative">
            <p className="text-[40px] font-pt-serif font-bold text-text-primary text-center">
                Field sales software for humans
            </p>
            <p className="font-pt-sans text-[24px] text-text-secondary text-center max-w-[800px]">
                Supersales enables your team to perform at the highest level, yet stay human. With a sleek design and an easy-to-navigate app.
            </p>
            <div className="flex flex-row items-center justify-center gap-6">
                <Button variant="primary">
                    Book a demo
                </Button>
                <div className="flex flex-row items-center justify-center gap-1 cursor-pointer group">
                    <Image src='/icons/play.svg' width={24} height={24} alt='icon-play' />
                    <p className="font-pt-sans text-text-primary text-[16px] group-hover:underline">See how it works</p>
                </div>
            </div>

            {/* Stars */}
            <Stars />

            <Image className="mt-[64px]" alt='hero-banner' src='/images/hero-banner.png' width={1177} height={699} />

            {/* Image Avatar Pop Up */}
            <ImagePopUp />


        </section>
    )
}

export default Banner