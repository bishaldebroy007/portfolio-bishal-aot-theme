"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Footer() {
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		// eslint-disable-next-line react-hooks/set-state-in-effect
		setMounted(true);
	}, []);

	return (
		<footer className="relative bg-white border-t-3 border-black py-12">
			<div className="max-w-7xl mx-auto px-6">
				<div className="text-center space-y-6">
					{/* Wings Emblem */}
					<motion.svg
						width="50"
						height="50"
						viewBox="0 0 100 100"
						className="mx-auto"
						initial={{ opacity: 0, scale: 0 }}
						whileInView={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.5 }}
						viewport={{ once: true }}
					>
						<path
							d="M50 5 L15 25 L25 50 L15 75 L50 50 L85 75 L75 50 L85 25 Z"
							fill="none"
							stroke="#000"
							strokeWidth="3"
						/>
						<circle cx="50" cy="50" r="8" fill="#000" />
					</motion.svg>

					<div className="text-black text-sm">
						<p className="font-bold uppercase tracking-widest">
							Dedicate your hearts —{" "}
							<span className="text-aot-red">Bishal Deb Roy</span>
						</p>
					</div>

					<div className="flex flex-wrap justify-center gap-6 text-sm">
						{[
							{
								label: "LinkedIn",
								url: "https://www.linkedin.com/in/bishal-deb-roy-0b31241a0/",
							},
							{
								label: "GitHub",
								url: "https://github.com/bishaldebroy007",
							},
							{
								label: "Medium",
								url: "https://medium.com/@bishal-deb-roy",
							},
							{
								label: "Email",
								url: "mailto:bishaldebroy2000@gmail.com",
							},
						].map((link) => (
							<motion.a
								key={link.label}
								href={link.url}
								target={
									link.url.startsWith("http")
										? "_blank"
										: undefined
								}
								rel="noopener noreferrer"
								className="text-gray-600 hover:text-black font-bold uppercase"
								whileHover={{ scale: 1.1 }}
								whileTap={{ scale: 0.95 }}
							>
								{link.label}
							</motion.a>
						))}
					</div>

					<motion.div
						className="pt-6 border-t-2 border-black/10 text-xs text-gray-400"
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						transition={{ delay: 0.3 }}
						viewport={{ once: true }}
					>
						<p className="font-medium">
							© {mounted ? new Date().getFullYear() : "2026"}{" "}
							Bishal Deb Roy. Built with{" "}
							<span className="text-black font-bold">
								Next.JS
							</span>{" "}
							and{" "}
							<span className="text-aot-red font-bold">Love</span>{" "}
							inspired by Anime
						</p>
					</motion.div>
				</div>
			</div>
		</footer>
	);
}
