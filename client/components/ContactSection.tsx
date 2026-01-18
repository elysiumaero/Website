import React from "react";
import { ContactForm } from "@/components/ContactForm";

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="relative py-24 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-orbitron mb-6">
            Partner <span className="text-primary">With Us</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Ready to collaborate? Get in touch with our team to explore partnership opportunities and discuss how we
            can work together to advance aerospace technology.
          </p>
          <div className="h-1 w-24 bg-primary mx-auto rounded-full mt-6" />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left side - Contact info and benefits */}
          <div className="lg:col-span-1">
            {/* Contact channels */}
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-bold font-orbitron text-primary mb-4">Get In Touch</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-xs uppercase font-orbitron text-primary/80 tracking-widest mb-1">Email</p>
                    <a
                      href="mailto:contact@elysium-aerotech.com"
                      className="text-foreground hover:text-primary transition-colors"
                    >
                      contact@elysium-aerotech.com
                    </a>
                  </div>

                  <div>
                    <p className="text-xs uppercase font-orbitron text-primary/80 tracking-widest mb-1">Phone</p>
                    <a href="tel:+1234567890" className="text-foreground hover:text-primary transition-colors">
                      +1 (234) 567-890
                    </a>
                  </div>

                  <div>
                    <p className="text-xs uppercase font-orbitron text-primary/80 tracking-widest mb-1">Address</p>
                    <p className="text-foreground">
                      Innovation Hub
                      <br />
                      New Delhi, India
                    </p>
                  </div>
                </div>
              </div>

              {/* Why partner with us */}
              <div className="pt-8 border-t border-border">
                <h3 className="text-lg font-bold font-orbitron text-primary mb-4">Why Partner With Us?</h3>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold mt-1">✓</span>
                    <span>Cutting-edge aerospace technology and innovation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold mt-1">✓</span>
                    <span>Defense-grade reliability and security standards</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold mt-1">✓</span>
                    <span>Expert team with proven track record</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold mt-1">✓</span>
                    <span>Commitment to precision and excellence</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold mt-1">✓</span>
                    <span>Long-term partnership approach</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right side - Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-card border border-border rounded-lg p-8 hover:border-primary/50 transition-colors">
              <h3 className="text-2xl font-bold font-orbitron mb-6">Send us a message</h3>
              <ContactForm />
            </div>
          </div>
        </div>

        {/* Response time info */}
        <div className="mt-12 p-6 bg-card/50 border border-border/50 rounded-lg text-center">
          <p className="text-muted-foreground">
            ⚡ We typically respond to inquiries within <strong>24 hours</strong> during business days
          </p>
        </div>
      </div>

      {/* Background accent */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full filter blur-3xl opacity-30 pointer-events-none" />
    </section>
  );
};
