'use client'

import Image from "next/image";
import Button from "../button";

const Header: React.FC = () => {

    const menu: string[] = [
        'Home',
        'Features',
        'About',
        'Pricing',
        'Contact'
    ]

    return (
        <header className="w-full h-[70px] shadow-sm flex flex-row items-center justify-between lg:px-[120px] md:px-[50px] px-[16px]">
            {/* Logo */}
            <Image src='/images/logo.svg' width={144} height={22} alt='logo' />

            {/* Menu */}
            <div className="flex-row items-center justify-center hidden lg:flex">
                {
                    menu.map((item, index) => {
                        return (
                            <button className="rounded-3xl text-black font-pt-sans font-bold text-[16px] px-[24px] py-[8px] hover:border-border-dark hover:border hover:border-b-4" key={index}>
                                {item}
                            </button>
                        )
                    })
                }

            </div>

            <Image className="block lg:hidden" src='icons/menu.svg' alt='menu-icon' width={40} height={40} />

            {/* Button */}
            <Button className="hidden lg:block" variant="primary">
                Try for free
            </Button>
        </header>
    )
}

export default Header;