import React from 'react';

interface BadgeProps {
  text: string;
  dotColor?: string;
  variant?: 'default' | 'overline' | 'kicker' | 'cert';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({ 
  text, 
  dotColor, 
  variant = 'default',
  className = ''
}) => {
  if (variant === 'kicker') {
    return (
      <div className={`inline-flex items-center gap-2.5 font-mono text-[10.5px] tracking-[0.2em] uppercase text-ora mb-7 ${className}`}>
        <span className="w-1.5 h-1.5 rounded-full bg-ora shadow-[0_0_8px_#f26522]" />
        {text}
      </div>
    );
  }

  if (variant === 'overline') {
    return (
      <span className={`font-mono text-[10px] tracking-[0.2em] uppercase text-blue-l mb-4 block ${className}`}>
        {text}
      </span>
    );
  }

  if (variant === 'cert') {
    return (
      <div className={`flex items-center justify-center h-[52px] px-6 min-w-[110px] bg-card border border-div rounded-[6px] font-mono text-[11px] tracking-[0.1em] uppercase text-t2 transition-all duration-200 cursor-default hover:border-div-b hover:text-blue-l hover:bg-[#0f2244] ${className}`}>
        {dotColor && (
          <span 
            style={{ backgroundColor: dotColor }} 
            className="w-1.5 h-1.5 rounded-full flex-shrink-0 mr-[7px]" 
          />
        )}
        {text}
      </div>
    );
  }

  return (
    <span className={`px-2 py-1 text-xs font-medium rounded bg-card text-t1 ${className}`}>
      {text}
    </span>
  );
};
