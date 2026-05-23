'use client';

import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(data as unknown as Record<string, string>).toString(),
    })
      .then(() => setSubmitted(true))
      .catch(() => alert('Something went wrong. Please try again.'));
  }

  return (
    <section id="contact" className="relative py-20 px-4 sm:px-6">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2
            className="text-3xl md:text-4xl font-bold mb-3 text-gradient"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            GET IN TOUCH
          </h2>
          <p className="text-[#9999aa] text-sm">
            Questions, collabs, or just want to say hey? Drop a message.
          </p>
        </motion.div>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-16 rounded-2xl border border-[#D4A853]/20 bg-[#0a0a1a]/60 backdrop-blur-sm"
          >
            <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-[#D4A853]/10 flex items-center justify-center">
              <svg className="w-7 h-7 text-[#D4A853]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Message Sent</h3>
            <p className="text-[#9999aa] text-sm">Thanks for reaching out — I&apos;ll get back to you soon.</p>
          </motion.div>
        ) : (
          <motion.form
            name="contact"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-5 rounded-2xl border border-[#D4A853]/10 bg-[#0a0a1a]/60 backdrop-blur-sm p-6 sm:p-8"
          >
            <input type="hidden" name="form-name" value="contact" />
            <p className="hidden"><label>Don&apos;t fill this out: <input name="bot-field" /></label></p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="name" className="block text-xs font-semibold text-[#D4A853] mb-1.5 tracking-wider uppercase">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full bg-[#060610] border border-[#D4A853]/15 rounded-lg px-4 py-3 text-sm text-white placeholder-[#55556a] focus:outline-none focus:border-[#D4A853]/40 transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-xs font-semibold text-[#D4A853] mb-1.5 tracking-wider uppercase">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full bg-[#060610] border border-[#D4A853]/15 rounded-lg px-4 py-3 text-sm text-white placeholder-[#55556a] focus:outline-none focus:border-[#D4A853]/40 transition-colors"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-xs font-semibold text-[#D4A853] mb-1.5 tracking-wider uppercase">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                className="w-full bg-[#060610] border border-[#D4A853]/15 rounded-lg px-4 py-3 text-sm text-white placeholder-[#55556a] focus:outline-none focus:border-[#D4A853]/40 transition-colors"
                placeholder="What's this about?"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-xs font-semibold text-[#D4A853] mb-1.5 tracking-wider uppercase">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="w-full bg-[#060610] border border-[#D4A853]/15 rounded-lg px-4 py-3 text-sm text-white placeholder-[#55556a] focus:outline-none focus:border-[#D4A853]/40 transition-colors resize-none"
                placeholder="Your message..."
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-gradient-to-r from-[#D4A853] to-[#b8892e] text-[#060610] font-bold text-sm tracking-wider uppercase hover:shadow-lg hover:shadow-[#D4A853]/20 transition-all"
            >
              Send Message
            </button>
          </motion.form>
        )}
      </div>
    </section>
  );
}
