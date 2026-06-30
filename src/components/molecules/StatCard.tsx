import React from 'react';

interface StatCardProps {
  number: string;
  symbol?: string;
  label: string;
  variant?: 'hero' | 'global';
  className?: string;
}

export const StatCard: React.FC<StatCardProps> = ({
  number,
  symbol,
  label,
  variant = 'hero',
  className = ''
}) => {
  if (variant === 'global') {
    return (
      <div className={`bg-card p-7 transition-colors duration-200 hover:bg-[#0f2244] ${className}`}>
        <div className="font-sora text-4xl font-bold leading-none text-white">
          {number}
          {symbol && <em className="text-blue-l not-italic">{symbol}</em>}
        </div>
        <div className="font-mono text-xs tracking-[0.14em] uppercase text-t2 mt-[6px]">
          {label}
        </div>
      </div>
    );
  }

  // Default is 'hero' variant
  return (
    <div className={className}>
      <div className="font-sora text-[34px] font-bold leading-none text-white">
        {number}
        {symbol && <em className="text-ora not-italic">{symbol}</em>}
      </div>
      <div className="font-mono text-[9.5px] tracking-[0.14em] uppercase text-t2 mt-1.2">
        {label}
      </div>
    </div>
  );
};
