import React from 'react';
import { Badge } from '../atoms/Badge';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-surf">
      <div className="max-w-[1100px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[72px] items-center">
          {/* Left Column Description */}
          <div className="ab-left rv">
            <Badge text="What is Ombaka Tech Academy" variant="overline" />
            <h2 className="font-sora text-[clamp(28px,3vw,42px)] font-light leading-[1.15] text-white mb-5">
              Corporate Training,<br /><b className="font-bold">Built for IT Teams</b>
            </h2>
            <p className="font-inter text-[15px] leading-relaxed text-t1">
              Ombaka Tech Academy is a U.S.-based B2B training and consulting firm. We help organizations develop capable, confident IT teams through focused programs in Cloud, AI, and Cybersecurity — and support leadership with the strategic advisory services that drive real transformation.
            </p>
          </div>

          {/* Right Column Core Values */}
          <div className="ab-right rv d2 flex flex-col border border-div rounded-lg overflow-hidden">
            <div className="mv p-6 md:px-7 md:py-6 border-b border-div relative transition-colors duration-200 hover:bg-[rgba(29,108,222,0.05)] before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-[2px] before:bg-blue before:opacity-0 before:transition-opacity before:duration-200 hover:before:opacity-100">
              <div className="font-mono text-[9.5px] tracking-[0.18em] uppercase text-blue-l mb-[7px]">
                Mission
              </div>
              <div className="font-sora text-base font-normal leading-normal text-white">
                Turn confusion into clarity — delivering training that makes complex technology accessible and actionable for every team.
              </div>
            </div>

            <div className="mv p-6 md:px-7 md:py-6 border-b border-div relative transition-colors duration-200 hover:bg-[rgba(29,108,222,0.05)] before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-[2px] before:bg-blue before:opacity-0 before:transition-opacity before:duration-200 hover:before:opacity-100">
              <div className="font-mono text-[9.5px] tracking-[0.18em] uppercase text-blue-l mb-[7px]">
                Objective
              </div>
              <div className="font-sora text-base font-normal leading-normal text-white">
                Develop high-performing IT professionals and enterprise teams ready to compete and lead in a technology-driven world.
              </div>
            </div>

            <div className="mv p-6 md:px-7 md:py-6 relative transition-colors duration-200 hover:bg-[rgba(29,108,222,0.05)] before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-[2px] before:bg-blue before:opacity-0 before:transition-opacity before:duration-200 hover:before:opacity-100">
              <div className="font-mono text-[9.5px] tracking-[0.18em] uppercase text-blue-l mb-[7px]">
                Approach
              </div>
              <div className="font-sora text-base font-normal leading-normal text-white">
                Practitioner-led. Outcome-focused. Customized to your team's context, schedule, and goals — not a generic curriculum.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
