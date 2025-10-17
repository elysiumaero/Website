import { useState } from "react";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";

export function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setSubmitted(true);
        setEmail("");
        setTimeout(() => setSubmitted(false), 5000);
      }
    } catch (error) {
      console.error("Error subscribing to newsletter:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900 via-slate-950 to-black p-8 sm:p-10"
    >
      <div className="absolute inset-0 bg-[radial-gradient(30rem_12rem_at_20%_-20%,rgba(56,189,248,.15),transparent),radial-gradient(24rem_10rem_at_100%_0%,rgba(168,85,247,.18),transparent)]" />
      
      <div className="relative">
        <div className="flex items-start gap-4 sm:gap-6">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <Mail size={20} className="text-cyan-400" />
              <h3 className="text-2xl font-bold tracking-tight">Stay Updated</h3>
            </div>
            <p className="text-muted-foreground mb-6">
              Subscribe to our newsletter and be the first to know about Elysium milestones, flight tests, and updates.
            </p>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="rounded-lg bg-green-500/20 border border-green-500/30 p-3"
              >
                <p className="text-sm text-green-400 font-medium">
                  ✓ Thanks for subscribing! Check your email for confirmation.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex gap-3 flex-col sm:flex-row">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 rounded-md bg-white/10 border border-white/10 px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/30 transition-colors"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="rounded-md bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm ring-1 ring-inset ring-white/10 transition hover:brightness-110 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? "Subscribing..." : "Subscribe"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
