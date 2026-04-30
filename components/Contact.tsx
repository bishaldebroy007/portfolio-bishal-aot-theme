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
      className="relative py-32 bg-white overflow-hidden"
      ref={ref}
    >
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
            <span className="text-black font-bold tracking-widest uppercase text-sm">
              Send a Signal
            </span>
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-black mb-6 text-black">
            <span className="gradient-text">Contact</span>{" "}
            <span className="text-aot-cream">Me</span>
          </h2>
          <motion.div
            className="w-24 h-1 bg-black mx-auto"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          />
          <p className="text-gray-600 mt-6 max-w-2xl mx-auto font-medium">
            Ready to collaborate or have a question? Let&apos;s connect and create
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
                className="bg-white border-3 border-black rounded-xl p-6 flex items-center gap-4 group block hover:shadow-[8px_8px_0_#000] transition-all"
              >
                <motion.div
                  className="w-14 h-14 rounded-lg border-2 border-black flex items-center justify-center text-black"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  {contact.icon}
                </motion.div>
                <div>
                  <div className="text-sm text-gray-500 mb-1 font-bold">
                    {contact.label}
                  </div>
                  <div className="text-black font-black group-hover:text-aot-red transition-colors">
                    {contact.value}
                  </div>
                </div>
              </motion.a>
            ))}

            {/* Social Links */}
            <div className="bg-white border-3 border-black rounded-xl p-6">
              <h4 className="text-black font-black mb-4 uppercase tracking-wider">Find Me On</h4>
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
                    className="flex items-center gap-2 px-4 py-3 border-2 border-black rounded-lg text-black hover:bg-black hover:text-white transition-all text-sm font-bold"
                  >
                    <span className="font-black text-aot-red">
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
              className="bg-white border-3 border-black rounded-2xl p-8 space-y-6"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-black text-black mb-2 uppercase"
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
                  className="w-full px-4 py-3 bg-gray-50 border-2 border-black rounded-lg text-black placeholder-gray-400 focus:outline-none focus:ring-0 focus:border-aot-red transition-all font-bold"
                  placeholder="John Doe"
                  whileFocus={{ scale: 1.01 }}
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-black text-black mb-2 uppercase"
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
                  className="w-full px-4 py-3 bg-gray-50 border-2 border-black rounded-lg text-black placeholder-gray-400 focus:outline-none focus:ring-0 focus:border-aot-red transition-all font-bold"
                  placeholder="john@example.com"
                  whileFocus={{ scale: 1.01 }}
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-black text-black mb-2 uppercase"
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
                  className="w-full px-4 py-3 bg-gray-50 border-2 border-black rounded-lg text-black placeholder-gray-400 focus:outline-none focus:ring-0 focus:border-aot-red transition-all resize-none font-bold"
                  placeholder="Tell me about your project or idea..."
                  whileFocus={{ scale: 1.01 }}
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{
                  scale: 1.02,
                  boxShadow: "8px 8px 0 #000",
                }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 bg-black text-white font-black rounded-lg hover:bg-white hover:text-black border-2 border-black transition-all duration-300 flex items-center justify-center gap-2 uppercase tracking-widest"
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
