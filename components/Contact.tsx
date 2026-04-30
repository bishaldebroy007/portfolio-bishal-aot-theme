"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:rajroybishal@duck.com?subject=Message from ${formState.name}&body=${formState.message}`;
  };

  return (
    <section
      id="contact"
      className="relative py-32 bg-aot-dark-wall overflow-hidden"
      ref={ref}
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-aot-green/5 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.05, 0.1, 0.05] }}
          transition={{ duration: 5, repeat: Infinity }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            className="inline-block mb-4"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-aot-green font-bold tracking-widest uppercase text-sm">
              Send a Signal
            </span>
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-black mb-6">
            <span className="gradient-text">Contact</span>{" "}
            <span className="text-aot-cream">Me</span>
          </h2>
          <motion.div
            className="w-24 h-1 bg-linear-to-r from-transparent via-aot-green to-transparent mx-auto"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          />
          <p className="text-aot-smoke mt-6 max-w-2xl mx-auto">
            Ready to collaborate or have a question? Let's connect and create
            something amazing together!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-8"
          >
            {/* Contact Cards */}
            {[
              {
                icon: (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                ),
                label: "Email",
                value: "rajroybishal@duck.com",
                href: "mailto:rajroybishal@duck.com",
              },
              // {
              //   icon: (
              //     <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              //       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              //     </svg>
              //   ),
              //   label: 'Phone',
              //   value: '+8801766217660',
              //   href: 'tel:+8801766217660',
              // },
              {
                icon: (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                ),
                label: "Location",
                value: "Dhaka, Bangladesh",
                href: "#",
              },
            ].map((contact, index) => (
              <motion.a
                key={contact.label}
                href={contact.href}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + index * 0.1 }}
                whileHover={{ scale: 1.02, x: 10 }}
                className="glass-card rounded-xl p-6 flex items-center gap-4 group block"
              >
                <motion.div
                  className="w-14 h-14 rounded-lg bg-aot-green/20 flex items-center justify-center text-aot-green"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  {contact.icon}
                </motion.div>
                <div>
                  <div className="text-sm text-aot-smoke mb-1">
                    {contact.label}
                  </div>
                  <div className="text-aot-cream font-medium group-hover:text-aot-green transition-colors">
                    {contact.value}
                  </div>
                </div>
              </motion.a>
            ))}

            {/* Social Links */}
            <div className="glass-card rounded-xl p-6">
              <h4 className="text-aot-cream font-bold mb-4">Find Me On</h4>
              <div className="grid grid-cols-2 gap-3">
                {[
                  {
                    name: "LinkedIn",
                    url: "https://www.linkedin.com/in/bishal-deb-roy-0b31241a0/",
                    icon: "in",
                  },
                  {
                    name: "GitHub",
                    url: "https://github.com/bishaldebroy007",
                    icon: "GH",
                  },
                  {
                    name: "GitLab",
                    url: "https://gitlab.com/bishal.deb.roy",
                    icon: "GL",
                  },
                  {
                    name: "Medium",
                    url: "https://medium.com/@bishal-deb-roy",
                    icon: "M",
                  },
                  {
                    name: "ORCID",
                    url: "https://orcid.org/0009-0000-8224-4866",
                    icon: "iD",
                  },
                ].map((social, i) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.8 + i * 0.05 }}
                    whileHover={{ scale: 1.05, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-4 py-3 bg-aot-dark-wall/50 border border-aot-green/20 rounded-lg text-aot-smoke hover:text-aot-green hover:border-aot-green/40 transition-all text-sm"
                  >
                    <span className="font-bold text-aot-green">
                      {social.icon}
                    </span>
                    <span>{social.name}</span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <form
              onSubmit={handleSubmit}
              className="glass-card rounded-2xl p-8 space-y-6"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-aot-cream mb-2"
                >
                  Your Name
                </label>
                <motion.input
                  type="text"
                  id="name"
                  value={formState.name}
                  onChange={(e) =>
                    setFormState({ ...formState, name: e.target.value })
                  }
                  required
                  className="w-full px-4 py-3 bg-aot-dark-wall/50 border border-aot-cape rounded-lg text-aot-cream placeholder-aot-smoke focus:outline-none focus:border-aot-green focus:ring-2 focus:ring-aot-green/20 transition-all"
                  placeholder="John Doe"
                  whileFocus={{ scale: 1.01 }}
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-aot-cream mb-2"
                >
                  Your Email
                </label>
                <motion.input
                  type="email"
                  id="email"
                  value={formState.email}
                  onChange={(e) =>
                    setFormState({ ...formState, email: e.target.value })
                  }
                  required
                  className="w-full px-4 py-3 bg-aot-dark-wall/50 border border-aot-cape rounded-lg text-aot-cream placeholder-aot-smoke focus:outline-none focus:border-aot-green focus:ring-2 focus:ring-aot-green/20 transition-all"
                  placeholder="john@example.com"
                  whileFocus={{ scale: 1.01 }}
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-aot-cream mb-2"
                >
                  Your Message
                </label>
                <motion.textarea
                  id="message"
                  value={formState.message}
                  onChange={(e) =>
                    setFormState({ ...formState, message: e.target.value })
                  }
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-aot-dark-wall/50 border border-aot-cape rounded-lg text-aot-cream placeholder-aot-smoke focus:outline-none focus:border-aot-green focus:ring-2 focus:ring-aot-green/20 transition-all resize-none"
                  placeholder="Tell me about your project or idea..."
                  whileFocus={{ scale: 1.01 }}
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 0 30px rgba(45, 212, 191, 0.4)",
                }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 bg-gradient-to-r from-aot-green-dim to-aot-green text-aot-dark-wall font-bold rounded-lg hover:from-aot-green hover:to-aot-green-dim transition-all duration-300 flex items-center justify-center gap-2"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                  />
                </svg>
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
