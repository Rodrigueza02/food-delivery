import { ButtonHTMLAttributes } from 'react';

interface PrimaryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  fullWidth?: boolean;
}

export default function PrimaryButton({ children, fullWidth = true, className = '', ...props }: PrimaryButtonProps) {
  return (
    <button
      className={`
        bg-brand text-white font-poppins font-semibold py-4 px-6 
        rounded-full shadow-hover hover:opacity-90 active:scale-[0.98]
        transition-all duration-200
        ${fullWidth ? 'w-full' : ''}
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
}
