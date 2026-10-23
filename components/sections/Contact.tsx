"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Send, CheckCircle2, AlertCircle, Info } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import { profile } from "@/data/profile";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

function validate(data: FormData): FormErrors {
  const errors: FormErrors = {};
  if (!data.name.trim()) errors.name = "Name is required.";
  if (!data.email.trim()) {
    errors.email = "Email address is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "Please enter a valid email address.";
  }
  if (!data.subject.trim()) errors.subject = "Subject is required.";
  if (!data.message.trim()) {
    errors.message = "Message is required.";
  } else if (data.message.trim().length < 20) {
    errors.message = "Message must be at least 20 characters.";
  }
  return errors;
}

export default function Contact() {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    // Clear error on change
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validation = validate(form);
    if (Object.keys(validation).length > 0) {
      setErrors(validation);
      setSubmitError("");
      return;
    }

    setIsSubmitting(true);
    setSubmitError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(data.error || "Unable to send your message. Please try again later.");
      }

      setSubmitted(true);
      setForm({ name: "", email: "", subject: "", message: "" });
      setErrors({});
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : "Unable to send your message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass = (field: keyof FormErrors) =>
    `w-full bg-white/[0.04] border rounded-xl px-4 py-3 text-white placeholder-white/30 text-sm outline-none transition-all duration-200 focus:bg-white/[0.07] ${errors[field]
      ? "border-red-500/50 focus:border-red-400"
      : "border-white/10 focus:border-blue-500/60"
    }`;

  return (
    <section
      id="contact"
      className="py-24 md:py-32 relative"
      aria-label="Contact"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_#1d2a6e15_0%,_transparent_60%)]"
      />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Get In Touch"
          title="Let's Work Together"
          subtitle="I'm open to junior roles, remote opportunities, and contract work. Reach out — I'd love to hear from you."
          centered
        />

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Left: Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-white font-semibold text-xl mb-6">
              Contact Information
            </h3>

            <div className="space-y-4 mb-8">
              <a
                href={`mailto:${profile.email}`}
                className="group flex items-center gap-4 p-4 rounded-xl border border-white/8 bg-white/[0.03] hover:border-blue-500/30 hover:bg-blue-500/5 transition-all duration-300"
                aria-label="Send email"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/25 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-500/20 transition-colors">
                  <Mail size={16} className="text-blue-400" />
                </div>
                <div>
                  <p className="text-xs text-white/40 mb-0.5">Email</p>
                  <p className="text-white text-sm font-medium">{profile.email}</p>
                </div>
              </a>

              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-4 rounded-xl border border-white/8 bg-white/[0.03] hover:border-blue-500/30 hover:bg-blue-500/5 transition-all duration-300"
                aria-label="LinkedIn profile"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/25 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-500/20 transition-colors">
                  <Linkedin size={16} className="text-blue-400" />
                </div>
                <div>
                  <p className="text-xs text-white/40 mb-0.5">LinkedIn</p>
                  <p className="text-white text-sm font-medium">TEMBE FONGHO WILLIAM</p>
                </div>
              </a>

              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-4 rounded-xl border border-white/8 bg-white/[0.03] hover:border-blue-500/30 hover:bg-blue-500/5 transition-all duration-300"
                aria-label="GitHub profile"
              >
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/15 flex items-center justify-center flex-shrink-0 group-hover:bg-white/10 transition-colors">
                  <Github size={16} className="text-white/60" />
                </div>
                <div>
                  <p className="text-xs text-white/40 mb-0.5">GitHub</p>
                  <p className="text-white text-sm font-medium">@{profile.githubUsername}</p>
                </div>
              </a>
            </div>

            {/* Note about form */}
            <div className="flex items-start gap-2.5 p-4 rounded-xl bg-blue-500/5 border border-blue-500/15">
              <Info size={14} className="text-blue-400 mt-0.5 flex-shrink-0" />
              <p className="text-xs text-white/50 leading-relaxed">
                This form sends messages directly through SMTP to {profile.email}.
                Add your Gmail app password in the environment variables to enable live delivery.
              </p>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full gap-4 py-16">
                <CheckCircle2 size={48} className="text-emerald-400" />
                <h3 className="text-white font-bold text-xl">Message sent successfully!</h3>
                <p className="text-white/60 text-center max-w-xs">
                  Your message has been delivered to{" "}
                  <a href={`mailto:${profile.email}`} className="text-blue-400 hover:underline">
                    {profile.email}
                  </a>
                  .
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: "", email: "", subject: "", message: "" }); setSubmitError(""); }}
                  className="text-sm text-blue-400 hover:text-blue-300 transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                noValidate
                aria-label="Contact form"
                className="space-y-5"
              >
                {/* Name */}
                <div>
                  <label htmlFor="contact-name" className="block text-sm font-medium text-white/60 mb-1.5">
                    Your Name <span className="text-red-400" aria-hidden="true">*</span>
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    placeholder="John Doe"
                    value={form.name}
                    onChange={handleChange}
                    aria-describedby={errors.name ? "name-error" : undefined}
                    aria-invalid={!!errors.name}
                    className={inputClass("name")}
                  />
                  {errors.name && (
                    <p id="name-error" role="alert" className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                      <AlertCircle size={11} /> {errors.name}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="contact-email" className="block text-sm font-medium text-white/60 mb-1.5">
                    Email Address <span className="text-red-400" aria-hidden="true">*</span>
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="you@company.com"
                    value={form.email}
                    onChange={handleChange}
                    aria-describedby={errors.email ? "email-error" : undefined}
                    aria-invalid={!!errors.email}
                    className={inputClass("email")}
                  />
                  {errors.email && (
                    <p id="email-error" role="alert" className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                      <AlertCircle size={11} /> {errors.email}
                    </p>
                  )}
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="contact-subject" className="block text-sm font-medium text-white/60 mb-1.5">
                    Subject <span className="text-red-400" aria-hidden="true">*</span>
                  </label>
                  <input
                    id="contact-subject"
                    name="subject"
                    type="text"
                    placeholder="Job opportunity / Project collaboration"
                    value={form.subject}
                    onChange={handleChange}
                    aria-describedby={errors.subject ? "subject-error" : undefined}
                    aria-invalid={!!errors.subject}
                    className={inputClass("subject")}
                  />
                  {errors.subject && (
                    <p id="subject-error" role="alert" className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                      <AlertCircle size={11} /> {errors.subject}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="contact-message" className="block text-sm font-medium text-white/60 mb-1.5">
                    Message <span className="text-red-400" aria-hidden="true">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={5}
                    placeholder="Tell me about your project, opportunity, or question..."
                    value={form.message}
                    onChange={handleChange}
                    aria-describedby={errors.message ? "message-error" : undefined}
                    aria-invalid={!!errors.message}
                    className={`${inputClass("message")} resize-none`}
                  />
                  {errors.message && (
                    <p id="message-error" role="alert" className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                      <AlertCircle size={11} /> {errors.message}
                    </p>
                  )}
                </div>

                {submitError && (
                  <div className="rounded-xl border border-red-500/40 bg-red-500/5 px-4 py-3 text-sm text-red-300">
                    {submitError}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-all duration-200 shadow-lg shadow-blue-600/25 hover:shadow-blue-500/35 hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                >
                  <Send size={16} />
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
