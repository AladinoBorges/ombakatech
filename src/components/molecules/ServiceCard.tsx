import React from 'react';

interface ServiceCardProps {
  index: string;
  title: string;
  description: string;
  shineGradient: string;
  topBg: string;
  icon: React.ReactNode;
  className?: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  index,
  title,
  description,
  shineGradient,
  topBg,
  icon,
  className = ''
}) => {
  return (
    <div className={`sv bg-card px-7 py-9 relative overflow-hidden transition-all duration-[220ms] cursor-default hover:bg-[#0f2244] group ${className}`}>
      {/* Dynamic Shine Header Bar */}
      <div 
        style={{ background: shineGradient }} 
        className="absolute top-0 left-0 right-0 h-[2px] opacity-0 transition-opacity duration-[220ms] group-hover:opacity-100" 
      />
      
      {/* Icon Container */}
      <div 
        style={{ background: topBg }} 
        className="w-10 h-10 rounded-md flex items-center justify-center mb-5 shrink-0"
      >
        {icon}
      </div>
      
      {/* Details */}
      <div className="font-mono text-[9px] tracking-[0.2em] uppercase text-t2 mb-2.5">
        {index}
      </div>
      
      <div className="font-sora text-lg font-bold text-white mb-2.5 leading-[1.25]">
        {title}
      </div>
      
      <p className="font-inter text-[13px] leading-relaxed text-t1">
        {description}
      </p>
    </div>
  );
};
