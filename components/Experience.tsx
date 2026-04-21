"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
// import { FaComputer } from "react-icons/fa6";

const experiences = [
  {
    title: "Junior Software Engineer",
    company: "Penta Global Ltd.",
    location: "Dhaka, Bangladesh",
    period: "08/2025 – Present",
    description: [
      "Working on Projects like the HRMS app of the company",
      "Experience in HTML5, CSS3, JavaScript, React.JS, NEXT.Js, React Native + expo, Tailwind CSS, etc.",
    ],
    type: "work",
  },
  {
    title: "Intern Frontend Developer",
    company: "Penta Global Ltd.",
    location: "Dhaka, Bangladesh",
    period: "01/2025 – 07/2025",
    description: [
      "Developed & contributed to 4+ responsive web applications, including the Penta Solutions website",
      "Used React.js, Next.js, Tailwind CSS, Shadcn UI, and Payload CMS",
    ],
    type: "work",
  },
  {
    title: "Campus Ambassador",
    company: "Airwork AI",
    location: "Remote",
    period: "07/2023 – 12/2024",
    description: [
      "Conducted student outreach campaigns, increasing brand visibility by 25% in target communities",
      "Worked on small parts of their projects",
    ],
    type: "work",
  },
  {
    title: "Participant, Aspire Leaders Program",
    company: "Aspire Institute",
    location: "Remote",
    period: "10/2025",
    description: [
      "Online leadership development program for undergraduate students & recent graduates from around the world",
      "Program founded by Harvard Business School professors, curriculum guided by Harvard faculty",
    ],
    type: "education",
  },
  {
    title: "Treasurer",
    company: "IEEE BRAC University Student Branch",
    location: "Brac University",
    period: "06/2023 – 12/2023",
    description: [
      "Oversaw and reconciled event budgets exceeding BDT 100,000",
      "Introduced tracking mechanisms that improved financial reporting efficiency by 30%",
      "Organized an intra-university programming contest",
    ],
    type: "leadership",
  },
  {
    title: "Assistant Director (A&D Dept.)",
    company: "Robotics Club Of BRAC University",
    location: "Brac University",
    period: "02/2023 – 12/2023",
    description: [
      "Led the design team in creating branding assets for over 10 tech events",
      "Streamlined team workflows to ensure consistent delivery of creative assets",
    ],
    type: "leadership",
  },
];

const education = {
  degree: "B.Sc. in Computer Science",
  institution: "BRAC University",
  location: "Dhaka, Bangladesh",
  period: "2020 – 2024",
  coursework: [
    "Programming Language I & II (Python 3)",
    "Data Structures",
    "Algorithms",
    "Software Engineering",
    "Data Communications",
    "Database Systems",
    "System Analysis and Design",
    "Artificial Intelligence",
  ],
  recognition:
    "1st place in War Room Debate at Banglalink HQ (2023), organized by IEEE BRACU CS SBC",
};

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="experience"
      className="relative py-32 bg-aot-dark-wall overflow-hidden"
      ref={ref}
    >
      {/* Background Wall Texture */}
      <div className="absolute inset-0 wall-texture opacity-30" />

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
              Battle Record
            </span>
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-black mb-6">
            <span className="gradient-text">Experience</span>{" "}
            <span className="text-aot-cream">& Education</span>
          </h2>
          <motion.div
            className="w-24 h-1 bg-linear-to-r from-transparent via-aot-green to-transparent mx-auto"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          />
        </motion.div>

        {/* Education Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-16"
        >
          <div className="glass-card rounded-2xl p-8 relative overflow-hidden group">
            <motion.div
              className="absolute top-0 right-0 w-32 h-32 bg-linear-to-br from-aot-green/20 to-transparent rounded-bl-full"
              whileHover={{ scale: 1.5 }}
              transition={{ duration: 0.5 }}
            />

            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-6">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <motion.div
                    className="w-12 h-12 rounded-xl bg-aot-green/20 flex items-center justify-center"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <svg
                      className="w-6 h-6 text-aot-green"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 14l9-5-9-5-9 5 9 5z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                      />
                    </svg>
                  </motion.div>
                  <div>
                    <h3 className="text-2xl font-bold text-aot-cream">
                      {education.degree}
                    </h3>
                    <p className="text-aot-green font-medium">
                      {education.institution}
                    </p>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-aot-green font-bold">
                  {education.period}
                </div>
                <div className="text-sm text-aot-smoke">
                  {education.location}
                </div>
              </div>
            </div>

            <div className="mb-4">
              <h4 className="text-sm font-bold text-aot-cream uppercase tracking-wider mb-3">
                Relevant Coursework
              </h4>
              <div className="flex flex-wrap gap-2">
                {education.coursework.map((course, i) => (
                  <motion.span
                    key={course}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.5 + i * 0.05 }}
                    className="px-3 py-1 bg-aot-green/10 border border-aot-green/30 rounded-full text-xs text-aot-green"
                  >
                    {course}
                  </motion.span>
                ))}
              </div>
            </div>

            <motion.div
              className="p-4 bg-aot-green/5 border-l-4 border-aot-green rounded-r-lg"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 1 }}
            >
              <p className="text-aot-smoke text-sm">
                <span className="text-aot-green font-semibold">
                  Recognition:{" "}
                </span>
                {education.recognition}
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <motion.div
            className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-aot-green via-aot-green-dim to-transparent"
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.5, delay: 0.5 }}
            style={{ transformOrigin: "top" }}
          />

          {/* Experience Cards */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.3 + index * 0.15 }}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline Dot */}
                <motion.div
                  className="absolute left-4 md:left-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full bg-aot-green border-4 border-aot-dark-wall z-10"
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ delay: 0.5 + index * 0.15, type: "spring" }}
                  whileHover={{
                    scale: 1.5,
                    boxShadow: "0 0 20px rgba(45, 212, 191, 0.8)",
                  }}
                />

                {/* Card */}
                <div
                  className={`flex-1 md:w-1/2 ${index % 2 === 0 ? "md:pr-16" : "md:pl-16"} pl-12 md:pl-0`}
                >
                  <motion.div
                    className="glass-card rounded-xl p-6 group"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-aot-cream mb-1 group-hover:text-aot-green transition-colors">
                          {exp.title}
                        </h3>
                        <p className="text-aot-green font-medium">
                          {exp.company}
                        </p>
                      </div>
                      <div className="text-right text-sm">
                        <div className="text-aot-green font-bold whitespace-nowrap">
                          {exp.period}
                        </div>
                        <div className="text-aot-smoke">{exp.location}</div>
                      </div>
                    </div>

                    <ul className="space-y-2">
                      {exp.description.map((desc, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-sm text-aot-smoke"
                        >
                          <span className="text-aot-green mt-1.5">▹</span>
                          <span>{desc}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Type Badge */}
                    <div className="mt-4">
                      <span
                        className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                          exp.type === "work"
                            ? "bg-aot-green/10 text-aot-green border border-aot-green/30"
                            : exp.type === "education"
                              ? "bg-aot-cream/10 text-aot-cream border border-aot-cream/30"
                              : "bg-aot-red/10 text-aot-red border border-aot-red/30"
                        }`}
                      >
                        {exp.type === "work"
                          ? "Work"
                          : exp.type === "education"
                            ? "Education"
                            : "Leadership"}
                      </span>
                    </div>
                  </motion.div>
                </div>

                {/* Spacer for other side */}
                <div className="hidden md:block md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
