import React from 'react';

interface NavLinkProps {
  label: string;
  href: string;
  className?: string;
}

export const NavLink: React.FC<NavLinkProps> = ({ label, href, className = '' }) => {
  return (
    <li>
      <a 
        href={href} 
        className={`text-xs md:text-[13px] font-medium text-t1 transition-colors duration-[180ms] hover:text-white ${className}`}
      >
        {label}
      </a>
    </li>
  );
};
