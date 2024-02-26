'use client'

import { ReactNode } from "react";

interface ButtonProps {
    children: ReactNode,
    className?: string,
    variant: 'primary' | 'disabled'
}

const Button: React.FC<ButtonProps> = ({ children, className = null, variant = 'primary' }) => {

    const style = () => {
        switch (variant) {
            case 'primary':
                return 'bg-surface-brand';
            case 'disabled':
                return 'bg-gray-100';
            default:
                break;
        }
    }

    console.log(variant === 'disabled')

    return (
        <button disabled={variant === 'disabled'} className={`px-[33px] py-[8px] rounded-3xl border border-border-dark ${variant !== 'disabled' && 'hover:border-b-4'} font-pt-sans font-bold text-[16px] ${style()} ${className} `}>
            {children}
        </button>
    )
}

export default Button;