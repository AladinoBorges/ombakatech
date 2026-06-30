import React from 'react';

interface ButtonProps {
  label: string;
  onClick?: () => void;
  href?: string;
  variant?: 'primary' | 'outline' | 'nav';
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  href,
  variant = 'primary',
  disabled = false,
  type = 'button',
  className = ''
}) => {
  const baseClasses = "inline-flex items-center justify-center gap-2 font-inter text-xs font-semibold tracking-[0.1em] uppercase rounded-[4px] transition-all duration-200";
  
  let variantClasses = "";
  if (variant === 'primary') {
    variantClasses = "bg-red text-white px-[26px] py-[13px] shadow-[0_0_20px_rgba(192,24,42,0.35)] hover:bg-red-l hover:shadow-[0_0_34px_rgba(232,25,47,0.5)] hover:-translate-y-[2px]";
  } else if (variant === 'outline') {
    variantClasses = "bg-transparent text-white border border-white/15 px-[26px] py-[13px] hover:border-blue-l hover:text-blue-l";
  } else if (variant === 'nav') {
    variantClasses = "text-white bg-red px-5 py-2.5 shadow-[0_0_16px_rgba(192,24,42,0.3)] hover:bg-red-l hover:shadow-[0_0_28px_rgba(232,25,47,0.45)] hover:-translate-y-[1px]";
  }

  const disabledClasses = disabled ? "opacity-50 cursor-not-allowed pointer-events-none" : "";

  if (href) {
    return (
      <a 
        href={href} 
        onClick={onClick}
        className={`${baseClasses} ${variantClasses} ${disabledClasses} ${className}`}
      >
        {label}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variantClasses} ${disabledClasses} ${className}`}
    >
      {label}
    </button>
  );
};
