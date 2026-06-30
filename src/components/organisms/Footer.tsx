import React from 'react';
import { Logo } from '../atoms/Logo';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-bg border-t border-div py-12 md:py-16">
      <div className="max-w-[1100px] mx-auto px-6 md:px-10">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-10 pb-9 border-b border-div mb-6">
          
          {/* Brand Signature */}
          <div className="ft-brand">
            <Logo className="h-[30px] block mb-2.5" />
            <div className="font-mono text-[9.5px] tracking-[0.14em] uppercase text-blue-l">
              Turning Confusion Into Clarity
            </div>
          </div>

          {/* Nav Maps */}
          <div className="flex gap-12 md:gap-16 flex-wrap">
            <div className="flex flex-col">
              <h4 className="font-mono text-[9.5px] tracking-[0.18em] uppercase text-t2 mb-3.5">
                Programs
              </h4>
              <ul className="list-none m-0 p-0 flex flex-col gap-2">
                <li>
                  <a href="#services" className="text-sm text-t2 no-underline hover:text-white transition-colors">
                    Cloud Infrastructure
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-sm text-t2 no-underline hover:text-white transition-colors">
                    Applied AI
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-sm text-t2 no-underline hover:text-white transition-colors">
                    Cybersecurity
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-sm text-t2 no-underline hover:text-white transition-colors">
                    Business Consulting
                  </a>
                </li>
              </ul>
            </div>

            <div className="flex flex-col">
              <h4 className="font-mono text-[9.5px] tracking-[0.18em] uppercase text-t2 mb-3.5">
                Contact
              </h4>
              <ul className="list-none m-0 p-0 flex flex-col gap-2">
                <li>
                  <a href="mailto:info@ombakatech.com" className="text-sm text-t2 no-underline hover:text-white transition-colors">
                    info@ombakatech.com
                  </a>
                </li>
                <li>
                  <a href="#cta" className="text-sm text-t2 no-underline hover:text-white transition-colors">
                    Schedule a Call
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright & Language indicators */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="text-xs text-t2">
            &copy; {new Date().getFullYear()} Ombaka Tech Academy. All rights reserved.
          </span>
          <div className="flex flex-col items-center md:items-end gap-2">
            <span className="font-mono text-xs tracking-[0.12em] text-white/20">
              EN &middot; PT &middot; FR &middot; ES
            </span>
            <span className="text-[11px] text-t2">
              developed by{' '}
              <a
                href="https://www.linkedin.com/in/aladinoborges"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-white transition-colors"
              >
                aladino borges
              </a>{' '}
              at{' '}
              <a
                href="https://studio.gerialy.com"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-white transition-colors"
              >
                gerialy
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
