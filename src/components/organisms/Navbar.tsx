import React, { useEffect, useState } from 'react';
import { Logo } from '../atoms/Logo';
import { NavLink } from '../molecules/NavLink';
import { Button } from '../atoms/Button';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 h-[66px] flex items-center justify-between px-6 md:px-10 bg-[#060e1a]/92 backdrop-blur-[20px] transition-all duration-300 border-b border-div ${
      isScrolled ? 'border-b-[rgba(29,108,222,0.18)] shadow-[0_1px_40px_rgba(0,0,0,0.6)]' : ''
    }`}>
      {/* Brand logo */}
      <a href="#" className="flex items-center gap-2.5 no-underline">
        <Logo />
        <div className="font-mono text-[9px] tracking-[0.18em] uppercase text-blue-l leading-none">
          Tech Academy
        </div>
      </a>

      {/* Center Links */}
      <ul className="hidden md:flex gap-7 list-none m-0 p-0">
        <NavLink label="About" href="#about" />
        <NavLink label="Services" href="#services" />
        <NavLink label="Certifications" href="#partners" />
      </ul>

      {/* Call to action */}
      <Button label="Get in Touch →" href="#cta" variant="nav" />
    </nav>
  );
};
