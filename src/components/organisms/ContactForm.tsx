import React, { useState } from 'react';
import { useSubmitContact } from '../../queries/contact';
import { Button } from '../atoms/Button';

export const ContactForm: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const contactMutation = useSubmitContact();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    contactMutation.mutate(
      { name, email, message },
      {
        onSuccess: () => {
          setSubmitted(true);
          setName('');
          setEmail('');
          setMessage('');
        },
      }
    );
  };

  return (
    <section id="cta" className="py-24 bg-surf text-center relative overflow-hidden">
      {/* Background illumination */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(192,24,42,0.06)_0%,transparent_65%)] pointer-events-none select-none" />

      <div className="max-w-[600px] mx-auto px-6 md:px-10 relative z-10">
        <h2 className="font-sora text-[clamp(32px,4vw,58px)] font-light leading-[1.1] text-white rv">
          Ready to Train<br />
          <b className="font-bold text-red-l">Your Team?</b>
        </h2>
        
        <p className="font-inter text-[15px] leading-relaxed text-t1 max-w-[400px] mx-auto mt-4 mb-9 rv d1">
          Tell us about your organization and goals. We'll get back to you within 24 hours with a program proposal.
        </p>

        {submitted ? (
          <div className="bg-card border border-blue-l/20 p-8 rounded-lg text-center animate-up">
            <h3 className="font-sora text-xl font-bold text-white mb-2">Thank you!</h3>
            <p className="font-inter text-sm text-t1">
              Your inquiry has been successfully sent. Our academic team will contact you within 24 hours.
            </p>
            <Button 
              label="Send another request" 
              onClick={() => setSubmitted(false)} 
              variant="outline" 
              className="mt-6"
            />
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-card/50 backdrop-blur-md border border-div p-6 md:p-8 rounded-lg text-left flex flex-col gap-5 rv d2">
            <div>
              <label htmlFor="name-input" className="block font-mono text-[10px] tracking-[0.14em] uppercase text-t2 mb-1.5">
                Full Name
              </label>
              <input
                id="name-input"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. John Doe"
                className="w-full px-4 py-3 bg-bg border border-div text-white text-sm rounded-[4px] focus:border-blue-l focus:outline-none transition-colors"
              />
            </div>

            <div>
              <label htmlFor="email-input" className="block font-mono text-[10px] tracking-[0.14em] uppercase text-t2 mb-1.5">
                Corporate Email Address *
              </label>
              <input
                id="email-input"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="e.g. j.doe@company.com"
                required
                className="w-full px-4 py-3 bg-bg border border-div text-white text-sm rounded-[4px] focus:border-blue-l focus:outline-none transition-colors"
              />
            </div>

            <div>
              <label htmlFor="message-input" className="block font-mono text-[10px] tracking-[0.14em] uppercase text-t2 mb-1.5">
                Training Goals &amp; Scope
              </label>
              <textarea
                id="message-input"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Describe your team size, dynamic scheduling, and custom objectives..."
                rows={4}
                className="w-full px-4 py-3 bg-bg border border-div text-white text-sm rounded-[4px] focus:border-blue-l focus:outline-none transition-colors resize-none"
              />
            </div>

            {contactMutation.isError && (
              <div className="text-red-l text-xs font-inter font-medium mt-1">
                {contactMutation.error?.message || 'Submission failed. Please check inputs.'}
              </div>
            )}

            <Button
              type="submit"
              label={contactMutation.isPending ? 'Submitting...' : 'Submit Request →'}
              disabled={contactMutation.isPending}
              variant="primary"
              className="w-full mt-2"
            />
          </form>
        )}

        {/* Fallback Direct Contact Buttons */}
        <div className="flex justify-center gap-3 mt-10 flex-wrap rv d3">
          <a href="mailto:info@ombakatech.com" className="font-mono text-xs text-t2 underline hover:text-white">
            Or email us directly at info@ombakatech.com
          </a>
        </div>
      </div>
    </section>
  );
};
