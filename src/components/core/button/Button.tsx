import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { IconType } from '../icons/Icons';
import { cn } from '@/lib/utils';

export const buttonVariants = cva('leading-none text-white transition-all disabled:bg-slate-300', {
    variants: {
        variant: {
            roundedBtn:
                'rounded-[200px] text-xs px-[18px] py-[14px] md:text-[15px] bg-c-violet-500 hover:bg-c-violet-800 md:px-6 md:py-[15px] xl:px-8 xl:py-4 xl:text-[16px] ',
            // dashboardbtn:
            //     'rounded-[200px] text-xs px-[18px] py-[14px] md:text-[15px] bg-s6-Bg-4  md:px-6 md:py-[15px] xl:px-8 xl:py-4 xl:text-[16px] text-black',
            regulerBtn:
                'rounded-[10px] bg-c-violet-500 hover:bg-c-violet-800 text-xs px-[18px] py-[14px] md:text-[15px] md:px-6 md:py-[15px] xl:px-8 xl:py-4 xl:text-[16px]',
            smallBtn:
                'rounded-[100px]  text-12-regular px-3 py-[10px]  bg-c-violet-500 hover:bg-c-violet-800',
            iconBtn: 'text-14-regular p-1',
        },
    },
    defaultVariants: {
        variant: 'roundedBtn',
    },
});

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
    label: string;
    icon?: IconType;
    reverse?: boolean;
}

const Button: React.FC<ButtonProps> = ({
    variant,
    className,
    label,
    icon,
    reverse,
    ...props
}: ButtonProps) => {
    return (
        <button className={`${cn(buttonVariants({ variant, className }))}`} {...props}>
            <div
                className={
                    icon &&
                    `flex justify-center items-center gap-2  ${reverse ? 'flex-row-reverse justify-center items-center gap-2' : 'flex-row'}`
                }
            >
                <span>{icon && <>{icon}</>}</span>
                <span className="min-w-fit">{label}</span>
            </div>
        </button>
    );
};

export default Button;
