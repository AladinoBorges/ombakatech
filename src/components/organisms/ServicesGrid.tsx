import React from 'react';
import { Badge } from '../atoms/Badge';
import { ServiceCard } from '../molecules/ServiceCard';

export const ServicesGrid: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-bg">
      <div className="max-w-[1100px] mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="sec-h rv mb-[52px]">
          <Badge text="Services" variant="overline" />
          <h2 className="font-sora text-[clamp(28px,3vw,42px)] font-light leading-[1.1] text-white">
            Four Programs.<br /><b className="font-bold">One Clear Focus.</b>
          </h2>
          <p className="font-inter text-[15px] leading-relaxed text-t1 mt-2.5 max-w-[480px]">
            Everything we deliver is built for corporate teams — no individual learner tracks, no generic content.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-div border border-div rounded-[10px] overflow-hidden">
          {/* Service 1: Cloud Infrastructure */}
          <ServiceCard
            index="01"
            title="Cloud Infrastructure Training"
            description="We prepare IT teams to architect, deploy, and manage enterprise cloud environments. Hands-on, production-aligned, and mapped to AWS and Azure certification paths."
            shineGradient="linear-gradient(90deg, var(--blue), var(--blue-l))"
            topBg="linear-gradient(135deg, #1a6cde, #0d4aa0)"
            icon={
              <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] fill-none stroke-white stroke-[1.8] stroke-linecap-round stroke-linejoin-round">
                <path d="M3 15a4 4 0 004 4h9a5 5 0 10-4.5-8.5" />
                <path d="M3 15V9a6 6 0 0112 0v1" />
              </svg>
            }
            className="rv"
          />

          {/* Service 2: Applied AI */}
          <ServiceCard
            index="02"
            title="Applied AI for Teams"
            description="We enable teams to understand, evaluate, and operationalize AI — from identifying use cases to governing adoption. Built for both IT leads and business decision-makers."
            shineGradient="linear-gradient(90deg, #7b2ff7, var(--blue-l))"
            topBg="linear-gradient(135deg, #5a1fcc, #2d0e8a)"
            icon={
              <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] fill-none stroke-white stroke-[1.8] stroke-linecap-round stroke-linejoin-round">
                <rect x="2" y="3" width="20" height="14" rx="2" />
                <circle cx="12" cy="10" r="3" />
                <path d="M12 17v4M8 21h8" />
              </svg>
            }
            className="rv d1"
          />

          {/* Service 3: Cybersecurity */}
          <ServiceCard
            index="03"
            title="Cybersecurity Awareness"
            description="We build security-conscious organizations — from awareness training for all staff to advanced threat defense for IT leads. Aligned to CISSP, CompTIA Security+, and Zero Trust frameworks."
            shineGradient="linear-gradient(90deg, var(--red), var(--ora))"
            topBg="linear-gradient(135deg, #c0182a, #7a0a18)"
            icon={
              <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] fill-none stroke-white stroke-[1.8] stroke-linecap-round stroke-linejoin-round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            }
            className="rv d2"
          />

          {/* Service 4: Business Consulting */}
          <ServiceCard
            index="04"
            title="Business Consulting"
            description="Strategic advisory for organizations navigating technology transformation — digital roadmaps, workforce planning, and technology adoption strategy across industries and markets."
            shineGradient="linear-gradient(90deg, var(--ora), #f5a623)"
            topBg="linear-gradient(135deg, #f26522, #b84800)"
            icon={
              <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] fill-none stroke-white stroke-[1.8] stroke-linecap-round stroke-linejoin-round">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 8v4l3 3" />
              </svg>
            }
            className="rv d3"
          />
        </div>
      </div>
    </section>
  );
};
