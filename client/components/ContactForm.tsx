import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  company: z.string().min(2, "Company name is required"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export const ContactForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // In production, you would send this to your backend
      console.log("Form data:", data);

      toast({
        title: "Success!",
        description: "Thank you for your message. We'll get back to you soon.",
      });

      reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Name */}
      <div>
        <label className="block text-sm font-orbitron text-primary mb-2 uppercase tracking-widest">Name *</label>
        <input
          {...register("name")}
          type="text"
          placeholder="Your name"
          className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-colors"
        />
        {errors.name && <p className="text-sm text-destructive mt-1">{errors.name.message}</p>}
      </div>

      {/* Email */}
      <div>
        <label className="block text-sm font-orbitron text-primary mb-2 uppercase tracking-widest">Email *</label>
        <input
          {...register("email")}
          type="email"
          placeholder="your.email@example.com"
          className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-colors"
        />
        {errors.email && <p className="text-sm text-destructive mt-1">{errors.email.message}</p>}
      </div>

      {/* Company */}
      <div>
        <label className="block text-sm font-orbitron text-primary mb-2 uppercase tracking-widest">
          Company *
        </label>
        <input
          {...register("company")}
          type="text"
          placeholder="Your company name"
          className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-colors"
        />
        {errors.company && <p className="text-sm text-destructive mt-1">{errors.company.message}</p>}
      </div>

      {/* Subject */}
      <div>
        <label className="block text-sm font-orbitron text-primary mb-2 uppercase tracking-widest">Subject *</label>
        <input
          {...register("subject")}
          type="text"
          placeholder="What is this about?"
          className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-colors"
        />
        {errors.subject && <p className="text-sm text-destructive mt-1">{errors.subject.message}</p>}
      </div>

      {/* Message */}
      <div>
        <label className="block text-sm font-orbitron text-primary mb-2 uppercase tracking-widest">Message *</label>
        <textarea
          {...register("message")}
          placeholder="Tell us more about your inquiry..."
          rows={5}
          className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
        />
        {errors.message && <p className="text-sm text-destructive mt-1">{errors.message.message}</p>}
      </div>

      {/* Submit button */}
      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-3 font-semibold text-lg rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <>
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
            Sending...
          </>
        ) : (
          "Send Message"
        )}
      </Button>

      <p className="text-xs text-muted-foreground text-center">
        * All fields are required. We'll get back to you within 24 hours.
      </p>
    </form>
  );
};
