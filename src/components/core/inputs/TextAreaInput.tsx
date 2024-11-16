import { cn } from '@/lib/utils';
import { cva } from 'class-variance-authority';
import * as React from 'react';

// Define variants for the textarea input
const textAreaInputVariants = cva(
  'outline-none bg-inherit py-3 px-4 peer h-36 w-full bg-transparent',
  {
    variants: {
      variant: {
        primaryInput: 'border border-c-white-600 rounded-[10px]',
        secondaryInput: 'border-b ',
      },
    },
    defaultVariants: {
      variant: 'primaryInput',
    },
  },
);

// Define the props interface for the TextAreaInput component
export interface TextAreaInputProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  variant?: 'primaryInput' | 'secondaryInput'; // Define specific variants
  placeholder?: string;
  error?: any; // Error can be string or boolean for truthy/falsy check
  id?: string;
}

// Define the TextAreaInput component
const TextAreaInput = React.forwardRef<HTMLTextAreaElement, TextAreaInputProps>(
  ({ label, placeholder, variant, className, error, id, ...props }, ref) => {
    return (
      <div>
        <div className="relative">
          <textarea
            autoComplete="off"
            ref={ref}
            id={id}
            // ${error ? 'border-red-500' : ''}
            className={` ${cn(textAreaInputVariants({ variant, className }))}`}
            {...props}
            placeholder={placeholder || ''}
          />
          <label
            htmlFor={id}
            className={`text-sm md:text-base cursor-pointer transform absolute -top-2 z-10 origin-[0] mx-1 px-3 duration-300 bg-white rounded-[10px] scale-75
              peer-placeholder-shown:-translate-y-3 
              peer-placeholder-shown:top-6 
              peer-placeholder-shown:scale-100
              peer-focus:px-4 peer-focus:scale-75 peer-focus:top-1
              peer-focus:-translate-y-4
              rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1
              ${error ? 'text-red-500' : 'text-black'}`}
          >
            {label}
          </label>
        </div>
        {error && <p className="py-1 text-red-500">{error}</p>}
      </div>
    );
  },
);

TextAreaInput.displayName = 'TextAreaInput'; // Correct the display name

export { TextAreaInput };
