"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GoOrganization } from "react-icons/go";
import { VscFilePdf } from "react-icons/vsc";
// import { TbMoneybag } from "react-icons/tb";
import { HiDevicePhoneMobile } from "react-icons/hi2";
import { MdOutlineFoodBank } from "react-icons/md";
import { GiTakeMyMoney } from "react-icons/gi";
import { FaGithub } from "react-icons/fa";
import { AiFillThunderbolt } from "react-icons/ai";

const projects = [
	{
		title: "Penta Solutions Website",
		description:
			"Collaborating with frontend and backend teams to build a fully functional company website using modern web technologies.",
		tech: ["NEXT JS", "Tailwind CSS", "Shadcn UI", "Payload CMS"],
		period: "06/2025 – Present",
		status: "Completed",
		icon: <GoOrganization />, // Building Icon
		color: "from-aot-green to-aot-green-dim",
	},
	{
		title: "VanillaPDF | Manga Edition",
		description:
			"VanillaPDF is a high-performance, browser-based PDF editor featuring a privacy-first architecture and a striking Dark/Red Manga/Cyberpunk design.",
		tech: ["NEXT JS", "Tailwind CSS", "Gemini-CLI"],
		period: "03/2025 – Present",
		status: "Open Source [Beta version]",
		icon: <VscFilePdf />, // PDF Icon
		color: "from-aot-cream to-aot-green",
		live: "https://vanillapdf.netlify.app/", // live project
		github: "https://github.com/bishaldebroy007/vanillaPDF", // github link
	},
	{
		title: "Naruto Finance",
		description:
			"Naruto Finance is a full-stack expense tracker featuring an anime theme, user authentication, and spending analytics. It offers two visual modes (Leaf Village light and Akatsuki dark) and supports CSV exports with category-based charts.",
		tech: ["NEXT JS", "Tailwind CSS", "Gemini-CLI"],
		period: "03/2025 – Present",
		status: "Open Source [Beta version]",
		icon: <GiTakeMyMoney />, // money Icon
		color: "from-aot-cream to-aot-green",
		live: "https://naruto-expense.netlify.app/", // live project
		github: "https://github.com/bishaldebroy007/naruto-expense", // github link
	},
	{
		title: "HRMS Mobile App",
		description:
			"A web application designed to help users manage their personal expenses efficiently with intuitive tracking and analytics.",
		tech: ["React JS", "React Native", "Expo", "O'Auth"],
		period: "03/2025 – 05/2025",
		status: "Completed",
		icon: <HiDevicePhoneMobile />, // Money Icon
		color: "from-aot-green-dim to-aot-cream",
	},
	{
		title: "Resturent Website",
		description:
			"A responsive restaurant website with Django to explore backend logic and data modeling. A perfect blend of learning and building.",
		tech: ["Python", "Django"],
		period: "07/2025",
		status: "Completed",
		icon: <MdOutlineFoodBank />, // Money Icon
		color: "from-aot-green-dim to-aot-cream",
		github: "https://github.com/bishaldebroy007/resturent-menu-django", // github link
	},
	// {
	// 	title: "SmartSpend",
	// 	description:
	// 		"A web application designed to help users manage their personal expenses efficiently with intuitive tracking and analytics.",
	// 	tech: ["React JS", "Tailwind CSS", "Daisy UI"],
	// 	period: "03/2025 – 05/2025",
	// 	status: "Completed",
	// 	icon: <TbMoneybag />,
	// 	color: "from-aot-green-dim to-aot-cream",
	// },
];

const certificates = [
	{
		title: "Basics of Web Development",
		description: "HTML, CSS, Bootstrap & JavaScript",
		issuer: "Mentors' Learning",
		date: "March 2025",
	},
	{
		title: "Intermediate Git",
		description: "Git & GitHub",
		issuer: "DataCamp",
		date: "March 2025",
	},
	{
		title: "Introduction to Python",
		description: "Python Programming Language & NumPy",
		issuer: "DataCamp",
		date: "March 2025",
	},
	{
		title: "Stepping into Machine Learning: A Hands-On Experience",
		description: "Basics of Machine Learning",
		issuer: "IEEE BRAC University Student Branch",
		date: "March 2023",
	},
];

export default function Projects() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: "-100px" });

	return (
		<section
			id="projects"
			className="relative py-32 bg-gray-50 overflow-hidden screentone"
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
							Missions Completed
						</span>
					</motion.div>
					<h2 className="text-4xl md:text-6xl font-black mb-6 text-black">
						<span className="gradient-text">Projects</span>{" "}
						<span className="text-aot-cream">& Certificates</span>
					</h2>
					<motion.div
						className="w-24 h-1 bg-black mx-auto"
						initial={{ scaleX: 0 }}
						animate={isInView ? { scaleX: 1 } : {}}
						transition={{ duration: 0.8, delay: 0.4 }}
					/>
				</motion.div>

				{/* Projects Grid */}
				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
					{projects.map((project, index) => (
						<motion.div
							key={project.title}
							initial={{ opacity: 0, y: 100, rotateX: -15 }}
							animate={
								isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}
							}
							transition={{ duration: 0.8, delay: index * 0.15 }}
							whileHover={{ scale: 1.05, y: -10 }}
							className="bg-white border-3 border-black rounded-2xl overflow-hidden group relative hover:shadow-[8px_8px_0_#000] transition-all"
							style={{ perspective: "1000px" }}
						>
							<div className="p-6">
								{/* Icon & Status */}
								<div className="flex items-center justify-between mb-4">
									<motion.div
										className="text-4xl"
										whileHover={{ rotate: 360, scale: 1.2 }}
										transition={{ duration: 0.5 }}
									>
										{project.icon}
									</motion.div>
									<span className="px-3 py-1 rounded-full text-xs font-bold bg-white border-2 border-black text-black">
										{project.status}
									</span>
								</div>

								{/* Title & Description */}
								<h3 className="text-xl font-black text-black mb-3 group-hover:text-aot-red transition-colors uppercase">
									{project.title}
								</h3>
								<p className="text-sm text-gray-600 mb-4 leading-relaxed font-medium">
									{project.description}
								</p>

								{/* Tech Stack */}
								<div className="flex flex-wrap gap-2 mb-4">
									{project.tech.map((tech, i) => (
										<motion.span
											key={tech}
											initial={{ opacity: 0, scale: 0.8 }}
											animate={
												isInView
													? { opacity: 1, scale: 1 }
													: {}
											}
											transition={{
												delay:
													0.5 +
													index * 0.15 +
													i * 0.05,
											}}
											className="px-2 py-1 border-2 border-black rounded text-xs text-black font-bold"
										>
											{tech}
										</motion.span>
									))}
								</div>

								{/* Period */}
								<div className="text-xs text-gray-400 font-bold mb-4">
									{project.period}
								</div>

								{/* Action Buttons */}
								<div className="flex gap-2 mt-auto">
									{project.live && (
										<motion.a
											href={project.live}
											target="_blank"
											rel="noopener noreferrer"
											className="flex-1 flex items-center justify-center py-2 bg-black text-white border-2 border-black rounded-lg text-sm font-bold hover:bg-white hover:text-black transition-colors"
											whileHover={{ scale: 1.05 }}
											whileTap={{ scale: 0.95 }}
										>
											<AiFillThunderbolt size="18" /> Live
											Demo
										</motion.a>
									)}
									{project.github && (
										<motion.a
											href={project.github}
											target="_blank"
											rel="noopener noreferrer"
											className="flex-1 flex items-center justify-center gap-2 py-2 bg-black text-white border-2 border-black rounded-lg text-sm font-bold hover:bg-white hover:text-black transition-colors"
											whileHover={{ scale: 1.05 }}
											whileTap={{ scale: 0.95 }}
										>
											<FaGithub size="18" /> GitHub
										</motion.a>
									)}
								</div>
							</div>
						</motion.div>
					))}
				</div>

				{/* Certificates Section */}
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					animate={isInView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.8, delay: 0.8 }}
				>
					<h3 className="text-3xl font-black text-center mb-12 text-black uppercase">
						Certificates
					</h3>

					<div className="grid md:grid-cols-3 gap-6">
						{certificates.map((cert, index) => (
							<motion.div
								key={cert.title}
								initial={{ opacity: 0, scale: 0.8 }}
								animate={
									isInView ? { opacity: 1, scale: 1 } : {}
								}
								transition={{ delay: 1 + index * 0.1 }}
								whileHover={{ scale: 1.05, y: -5 }}
								className="bg-white border-3 border-black rounded-xl p-6 text-center group hover:shadow-[8px_8px_0_#000] transition-all"
							>
								<motion.div
									className="w-16 h-16 mx-auto mb-4 rounded-full border-2 border-black flex items-center justify-center"
									whileHover={{ rotate: 360 }}
									transition={{ duration: 0.6 }}
								>
									<svg
										className="w-8 h-8 text-black"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
										/>
									</svg>
								</motion.div>

								<h4 className="text-lg font-black text-black mb-2 group-hover:text-aot-red transition-colors uppercase">
									{cert.title}
								</h4>
								<p className="text-sm text-gray-600 mb-2 font-bold">
									{cert.description}
								</p>
								<div className="text-xs text-gray-400 font-black">
									{cert.issuer} • {cert.date}
								</div>
							</motion.div>
						))}
					</div>
				</motion.div>

				{/* Publication */}
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					animate={isInView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.8, delay: 1.5 }}
					className="mt-16 bg-white border-3 border-black rounded-2xl p-8 relative overflow-hidden hover:shadow-[12px_12px_0_#000] transition-all"
				>
					<div className="relative z-10">
						<div className="flex items-center gap-3 mb-4">
							<motion.div
								className="w-12 h-12 rounded-xl border-2 border-black flex items-center justify-center"
								whileHover={{ rotate: 360 }}
								transition={{ duration: 0.5 }}
							>
								<svg
									className="w-6 h-6 text-black"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
									/>
								</svg>
							</motion.div>
							<div>
								<h3 className="text-2xl font-black text-black uppercase">
									Publication
								</h3>
								<p className="text-sm text-gray-500 font-bold">
									COMPASS &apos;24: ACM SIGCAS/SIGCHI
									Conference
								</p>
							</div>
						</div>

						<p className="text-black font-black leading-relaxed mb-4 text-lg">
							<span className="text-aot-red italic">
								&quot;Bridging the Gap: Exploring the Factors
								Influencing Women&apos;s Adoption of Mobile
								Financial Services (MFS) in Rural Areas of
								Bangladesh&quot;
							</span>
						</p>
						<p className="text-sm text-gray-600 mb-4 font-bold">
							Authors: Bishal Deb Roy, Sumaia Arefin Ritu, Anika
							Priodorshinee Mrittika, and Jannatun Noor
						</p>

						<motion.a
							href="https://dl.acm.org/doi/10.1145/3663670.3663678"
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex items-center gap-2 px-4 py-2 bg-black text-white border-2 border-black rounded-lg text-sm font-bold hover:bg-white hover:text-black transition-colors uppercase tracking-wider"
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
						>
							View Paper
							<svg
								className="w-4 h-4"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
								/>
							</svg>
						</motion.a>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
