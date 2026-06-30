import React from 'react';
import { Badge } from '../atoms/Badge';
import { StatCard } from '../molecules/StatCard';

export const GlobalScale: React.FC = () => {
  return (
    <section id="global" className="py-20 bg-surf">
      <div className="max-w-[1100px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[72px] items-center">
          {/* Left Description Column */}
          <div className="gl-left rv">
            <Badge text="Global Scale" variant="overline" />
            <h2 className="font-sora text-[clamp(26px,2.8vw,38px)] font-light leading-[1.15] text-white mb-4">
              U.S. Based.<br /><b className="font-bold">Worldwide Ready.</b>
            </h2>
            <p className="font-inter text-[15px] leading-relaxed text-t1">
              Headquartered in the United States, we deliver programs across industries and geographies. Our team operates in four languages and brings the cultural fluency to work effectively with partners anywhere in the world — in-person, remote, or hybrid.
            </p>
          </div>

          {/* Right Metrics Grid */}
          <div className="gl-right rv d2 grid grid-cols-2 gap-[1px] bg-div border border-div rounded-lg overflow-hidden">
            <StatCard number="EN" symbol=" · PT" label="English · Portuguese" variant="global" />
            <StatCard number="FR" symbol=" · ES" label="French · Spanish" variant="global" />
            <StatCard number="3" symbol="+" label="Continents Served" variant="global" />
            <StatCard number="On" symbol=" · Off" label="Remote & On-site" variant="global" />
          </div>
        </div>
      </div>
    </section>
  );
};
