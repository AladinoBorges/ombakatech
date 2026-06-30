import { createLazyFileRoute } from '@tanstack/react-router';
import React from 'react';
import { HeroSection } from '../components/organisms/HeroSection';
import { AboutSection } from '../components/organisms/AboutSection';
import { ServicesGrid } from '../components/organisms/ServicesGrid';
import { GlobalScale } from '../components/organisms/GlobalScale';
import { CertificationsCarousel } from '../components/organisms/CertificationsCarousel';
import { ContactForm } from '../components/organisms/ContactForm';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const HomeRouteComponent: React.FC = () => {
  // Activate scroll-reveal animation observer
  useIntersectionObserver();

  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesGrid />
      <GlobalScale />
      <CertificationsCarousel />
      <ContactForm />
    </>
  );
};

export const Route = createLazyFileRoute('/')({
  component: HomeRouteComponent,
});
