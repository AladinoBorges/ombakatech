import React from 'react';
import { Badge } from '../atoms/Badge';
import { Button } from '../atoms/Button';
import { StatCard } from '../molecules/StatCard';

export const HeroSection: React.FC = () => {
  return (
    <section id="hero" className="min-h-screen pt-[66px] flex items-center relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute inset-0 bg-radial-gradient hbg-dots from-card/90 via-bg to-bg pointer-events-none select-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_80%_at_0%_50%,rgba(13,30,58,0.98)_0%,transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_100%_20%,rgba(192,24,42,0.08)_0%,transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_60%_at_55%_100%,rgba(26,108,222,0.06)_0%,transparent_55%)]" />
        {/* Floating background title word */}
        <div className="absolute right-[-40px] top-1/2 -translate-y-1/2 font-sora text-[clamp(160px,22vw,320px)] font-bold text-white/[0.022] tracking-tighter select-none pointer-events-none whitespace-nowrap leading-none">
          CLARITY
        </div>
      </div>

      <div className="relative z-10 px-6 md:px-10 max-w-[1100px] mx-auto w-full py-20 animate-up">
        {/* Kicker badge */}
        <Badge text="B2B · Corporate IT Training · Global" variant="kicker" />
        
        {/* Title */}
        <h1 className="font-sora text-[clamp(42px,6vw,80px)] font-light leading-[1.04] text-white max-w-[760px] mb-6">
          Equipping Teams to<br />
          <b className="font-bold">
            <span className="text-blue-l">Build.</span> <span className="text-red-l">Defend.</span> <span className="text-blue-l">Lead.</span>
          </b>
        </h1>

        {/* Text paragraph */}
        <p className="font-inter text-base leading-relaxed text-t1 max-w-[480px] mb-9">
          We train corporate IT teams in Cloud, AI, and Cybersecurity — and advise organizations on the technology strategies that move them forward.
        </p>

        {/* Buttons list */}
        <div className="flex gap-3 flex-wrap">
          <Button label="Get in Touch" href="#cta" variant="primary" />
          <Button label="Our Programs" href="#services" variant="outline" />
        </div>

        {/* Proof metrics counter */}
        <div className="flex gap-10 mt-[60px] pt-8 border-t border-div flex-wrap">
          <StatCard number="3" symbol="+" label="Years Delivering" variant="hero" />
          <StatCard number="4" label="Languages" variant="hero" />
          <StatCard number="4" label="Core Programs" variant="hero" />
        </div>
      </div>
    </section>
  );
};
