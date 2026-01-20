import { AppLayout } from "@/layouts/AppLayout";
import { ContactSection } from "@/components/ContactSection";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export default function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "elysiumaero@gmail.com",
      description: "Reach out to our team with inquiries and partnership requests",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91 9319247500",
      description: "Call us during business hours for immediate assistance",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "New Delhi, India",
      description: "Our headquarters and research facilities",
    },
    {
      icon: Clock,
      title: "Hours",
      value: "24/7 Operations",
      description: "Round-the-clock R&D and support operations",
    },
  ];

  const partnershipTypes = [
    {
      title: "Technology Partners",
      description:
        "Integrate our autonomous systems and technologies into your products and services",
      examples: ["System Integration", "API Access", "Co-development Opportunities"],
    },
    {
      title: "Industry Partnerships",
      description: "Collaborate on industry-specific solutions and applications",
      examples: ["Custom Solutions", "Consulting Services", "Joint Ventures"],
    },
    {
      title: "Academic Collaborations",
      description: "Partner with us on research initiatives and student programs",
      examples: ["Joint Research", "Internships", "Knowledge Exchange"],
    },
    {
      title: "Investment Opportunities",
      description:
        "Invest in the future of autonomous flight technology and aerospace innovation",
      examples: ["Series Funding", "Strategic Investment", "Angel Investment"],
    },
  ];

  return (
    <AppLayout>
      <div className="pt-24 pb-24">
        {/* Hero Section */}
        <section className="relative py-16 px-6 mb-20">
          <div className="max-w-6xl mx-auto">
            <div className="text-center">
              <h1 className="text-5xl md:text-6xl font-bold font-orbitron text-foreground mb-6">
                Get <span className="bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">In Touch</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Reach out to explore partnership opportunities, inquire about our solutions, or join our team
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="relative py-20 px-6 bg-card/30 border-y border-border">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactInfo.map((info, idx) => {
                const Icon = info.icon;
                return (
                  <div key={idx} className="p-6 bg-background border border-border rounded-lg hover:border-primary/50 transition-colors">
                    <Icon className="w-8 h-8 text-primary mb-4" />
                    <h3 className="text-lg font-bold font-orbitron text-foreground mb-2">{info.title}</h3>
                    <p className="text-primary font-semibold mb-2">{info.value}</p>
                    <p className="text-sm text-muted-foreground">{info.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="relative py-20 px-6">
          <ContactSection />
        </section>

        {/* Partnership Types */}
        <section className="relative py-20 px-6 bg-card/30 border-y border-border">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold font-orbitron text-foreground mb-4">Partnership Opportunities</h2>
              <p className="text-lg text-muted-foreground">
                Explore different ways to collaborate with Elysium Aerotech
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {partnershipTypes.map((type, idx) => (
                <div key={idx} className="p-8 bg-background border border-border rounded-lg hover:border-primary/50 transition-colors group">
                  <h3 className="text-2xl font-bold font-orbitron text-primary mb-3 group-hover:text-primary/80 transition-colors">
                    {type.title}
                  </h3>
                  <p className="text-foreground mb-6">{type.description}</p>

                  <div>
                    <p className="text-xs uppercase tracking-widest text-primary font-orbitron mb-3">Examples</p>
                    <ul className="space-y-2">
                      {type.examples.map((example, eidx) => (
                        <li key={eidx} className="flex items-center gap-2 text-muted-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                          {example}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="relative py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold font-orbitron text-foreground mb-4">Frequently Asked Questions</h2>
              <p className="text-lg text-muted-foreground">
                Common questions about partnerships and collaboration
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  question: "What types of partnerships does Elysium Aerotech engage in?",
                  answer:
                    "We welcome partnerships in technology integration, industry collaboration, academic research, and investment. We work with enterprises, academic institutions, and individual investors.",
                },
                {
                  question: "How long does the partnership process take?",
                  answer:
                    "Partnership timelines vary based on complexity. Typically, initial discussions to agreement takes 4-12 weeks. We streamline the process to get started quickly.",
                },
                {
                  question: "Do you offer customized solutions?",
                  answer:
                    "Yes, we provide customized solutions tailored to specific requirements. Our team can discuss your needs and develop a solution that meets your operational objectives.",
                },
                {
                  question: "How can academic institutions collaborate with Elysium?",
                  answer:
                    "We offer research partnerships, student internships, and doctoral collaboration programs. Contact our academic partnerships team to explore opportunities.",
                },
                {
                  question: "What support do partners receive?",
                  answer:
                    "Partners receive technical support, documentation, training, and ongoing assistance. We're committed to the success of our partnerships.",
                },
                {
                  question: "How do I get started?",
                  answer:
                    "Fill out the partnership inquiry form above or contact us directly. Our team will respond within 24-48 hours to discuss your interests.",
                },
              ].map((faq, idx) => (
                <div key={idx} className="p-8 bg-card border border-border rounded-lg hover:border-primary/50 transition-colors group">
                  <h3 className="text-lg font-bold font-orbitron text-foreground mb-4 group-hover:text-primary transition-colors">
                    {faq.question}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="relative py-20 px-6 bg-card/30 border-y border-border">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold font-orbitron text-foreground mb-12 text-center">
              Partnership Process
            </h2>

            <div className="grid md:grid-cols-4 gap-6">
              {[
                { step: "1", title: "Inquiry", description: "Reach out with your partnership interest" },
                { step: "2", title: "Discussion", description: "Meet with our partnership team" },
                { step: "3", title: "Evaluation", description: "We assess fit and requirements" },
                { step: "4", title: "Onboarding", description: "Begin collaboration and support" },
              ].map((item, idx) => (
                <div key={idx} className="relative">
                  <div className="p-6 text-center rounded-lg border border-primary/30 bg-primary/5 hover:border-primary/50 transition-colors h-full">
                    <div className="text-3xl font-bold text-primary font-orbitron mb-3">{item.step}</div>
                    <h4 className="text-lg font-bold font-orbitron text-foreground mb-2">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                  {idx < 3 && (
                    <div className="hidden md:flex absolute -right-3 top-1/2 transform -translate-y-1/2">
                      <div className="w-6 h-1 bg-primary/50" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Social Proof Section */}
        <section className="relative py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold font-orbitron text-foreground mb-12 text-center">
              Trusted by Industry Leaders
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  stat: "50+",
                  label: "Active Partnerships",
                  description: "Companies and institutions worldwide",
                },
                {
                  stat: "100+",
                  label: "Researchers Engaged",
                  description: "From academic and industry partners",
                },
                {
                  stat: "24/7",
                  label: "Support Available",
                  description: "Dedicated partnership support team",
                },
              ].map((item, idx) => (
                <div key={idx} className="text-center p-8 rounded-lg border border-primary/30 bg-primary/5">
                  <div className="text-4xl font-bold text-primary font-orbitron mb-2">{item.stat}</div>
                  <h3 className="text-lg font-bold font-orbitron text-foreground mb-2">{item.label}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </AppLayout>
  );
}
