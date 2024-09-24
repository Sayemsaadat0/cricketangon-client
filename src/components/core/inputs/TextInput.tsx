
import { cn } from '@/lib/utils';
import { cva } from 'class-variance-authority';
import React from 'react';

const inputVariants = cva(' outline-none bg-inherit py-2.5 px-4 peer ', {
    variants: {
        variant: {
            primaryInput: 'border border-c-white-600 rounded-[10px] ',
        },
    },
    defaultVariants: {
        variant: 'primaryInput',
    },
});

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    placeholder?: string;
    variant?: any;
    label?: string;
    error?: any;
    id: string;
    isBgWhite?: boolean;
}

const TextInput: React.FC<InputProps> = ({
    label,
    variant,
    className,
    id,
    error,
    placeholder,
    isBgWhite,
    ...props
}: InputProps) => {
    return (
        <div>
            <div className="relative rounded-[10px]">
                <input
                    autoComplete="off"
                    type="text"
                    id={id}
                    className={`${isBgWhite ? "bg-white" : "bg-c-white-200"} ${error && 'border-red-500'} ${cn(inputVariants({ variant, className }))}`}
                    {...props}
                    placeholder={placeholder ? placeholder : ''}
                />
                <label
                    htmlFor={id}
                    className={`absolute rounded-[15px] text-sm transform ${isBgWhite ? "bg-white peer-focus:bg-white placeholder-black" : "bg-c-white-200 peer-focus:bg-c-white-200 placeholder-c-white-200"} cursor-pointer
          -translate-y-4 scale-75 px-4 top-1 z-10 origin-[0] duration-300 md:text-base  
          peer-focus:px-4 peer-focus:top-2 peer-focus:scale-75 
          peer-focus:-translate-y-5
          peer-placeholder-shown:scale-100
          peer-placeholder-shown:top-1/2 
          peer-placeholder-shown:-translate-y-1/2
          rtl:peer-focus:translate-x-1/4 
          rtl:peer-focus:left-auto start-1 text-c-white-900 `}
                >
                    {label}
                </label>
            </div>
            {error && <p className="py-1 text-red-500">{error}</p>}
        </div>
    );
};

export default TextInput;
