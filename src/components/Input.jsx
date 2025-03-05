import React, { useId } from 'react';
import { twMerge } from 'tailwind-merge';

const Input = React.forwardRef(function Input(
  { label, type = 'text', className = '', ...props }, ref
  
) {
  const id = useId();
  return (
    <div className="w-full">
      {label && (
        <label className="block mb-2 text-sm font-medium text-gray-900" htmlFor={id}>
          {label}
        </label>
      )}
      <input
        type={type}
        className={twMerge('bg-gray-50 border-2 border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 outline-none', className)}
        ref={ref}
        {...props}
        id={id}
      />
    </div>
  );
});

export default Input;