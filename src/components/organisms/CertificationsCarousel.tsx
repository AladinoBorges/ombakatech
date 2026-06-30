import React from 'react';
import { Badge } from '../atoms/Badge';

export const CertificationsCarousel: React.FC = () => {
  return (
    <section id="partners" className="py-20 bg-bg">
      <div className="max-w-[1100px] mx-auto px-6 md:px-10">
        <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-t2 block text-center mb-9 rv">
          Certifications We Prepare Teams For
        </span>
        <div className="flex flex-wrap items-center justify-center gap-3 rv d1">
          <Badge text="AWS" dotColor="#f90" variant="cert" />
          <Badge text="Azure" dotColor="#0078d4" variant="cert" />
          <Badge text="Google Cloud" dotColor="#ea4335" variant="cert" />
          <Badge text="Cisco" dotColor="#1ba954" variant="cert" />
          <Badge text="CompTIA" dotColor="#f60" variant="cert" />
          <Badge text="ISC²" dotColor="#0096c8" variant="cert" />
          <Badge text="ISACA" dotColor="#5032aa" variant="cert" />
          <Badge text="PMP" dotColor="#c0182a" variant="cert" />
        </div>
      </div>
    </section>
  );
};
