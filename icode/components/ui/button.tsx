import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'ghost' | 'outline';
}

const Button: React.FC<ButtonProps> = ({ variant = 'default', className, children, ...props }) => {
  const baseStyles = 'px-4 py-2 rounded focus:outline-none';
  const variantStyles = {
    default: 'bg-blue-600 text-white hover:bg-blue-700',
    ghost: 'bg-transparent text-blue-600 hover:bg-blue-100',
    outline: 'border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white',
  };

  return (
    <button className={`${baseStyles} ${variantStyles[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;