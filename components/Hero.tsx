"use client";

import { useEffect, useState } from "react";
import {
	motion,
	useScroll,
	useTransform,
	stagger,
	useAnimate,
} from "framer-motion";
import GlitchText from "@/components/GlitchText";
import Image from "next/image";
import levi from "@/public/levi.png";

interface Particle {
	left: number;
	top: number;
	delay: number;
	duration: number;
}

export default function Hero() {
	const { scrollY } = useScroll();
	const y2 = useTransform(scrollY, [0, 500], [0, -150]);
	const leviY = useTransform(scrollY, [0, 500], [0, 80]);
	const leviRotate = useTransform(scrollY, [0, 500], [0, 5]);
	const leviScrollOpacity = useTransform(scrollY, [0, 400], [1, 0]);
	const opacity = useTransform(scrollY, [0, 300], [1, 0]);
	const [text, setText] = useState("");
	const fullText = "Software Developer";
	const [mounted, setMounted] = useState(false);
	const [particles, setParticles] = useState<Particle[]>([]);
	const [scope, animate] = useAnimate();

	useEffect(() => {
		setMounted(true);
		setParticles(
			Array.from({ length: 20 }, () => ({
				left: Math.random() * 100,
				top: Math.random() * 100,
				delay: Math.random() * 2,
				duration: 3 + Math.random() * 2,
			})),
		);
	}, []);

	useEffect(() => {
		let i = 0;
		const timer = setInterval(() => {
			if (i <= fullText.length) {
				setText(fullText.slice(0, i));
				i++;
			} else {
				clearInterval(timer);
			}
		}, 80);
		return () => clearInterval(timer);
	}, []);

	// Staggered sequence for content
	useEffect(() => {
		if (mounted) {
			animate([
				[
					".wing-emblem",
					{ scale: [0, 1.2, 1], rotate: [0, -10, 10, 0], opacity: 1 },
					{ duration: 1.5, ease: "backOut" },
				],
				[
					".content-stagger",
					{ opacity: 1, y: 0 },
					{ duration: 0.8, delay: stagger(0.2), at: "-1" },
				],
			]);
		}
	}, [mounted, animate]);

	return (
		<section
			id="home"
			className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white screentone"
		>
			<div className="absolute inset-0 speed-lines" />

			{/* Levi Background Element */}
			{mounted && (
				<motion.div
					className="absolute right-[-10%] md:right-0 bottom-0 w-[65%] md:w-[35%] lg:w-[32%] pointer-events-none z-5 select-none"
					initial={{ x: 150, opacity: 0 }}
					animate={{ x: 0, opacity: 1 }}
					style={{ opacity: leviScrollOpacity }}
					transition={{
						duration: 1.8,
						delay: 0.8,
						ease: [0.22, 1, 0.36, 1],
					}}
				>
					<motion.div
						style={{ y: leviY, rotate: leviRotate }}
						className="relative w-full h-full grayscale opacity-20 md:opacity-25"
						initial={{ scale: 0.85, rotate: 12 }}
						animate={{ scale: 1, rotate: 0 }}
						transition={{
							duration: 2.2,
							delay: 1,
							ease: [0.22, 1, 0.36, 1],
						}}
					>
						{/*<img
							src="https://banner2.cleanpng.com/cb3/imh/jek/acq8l5mk4.webp"
							alt="Levi Ackerman"
							className="w-full h-auto drop-shadow-[0_0_20px_rgba(0,0,0,0.4)]"
						/>*/}

						<Image
							src={levi}
							alt="Levi Ackerman"
							className="w-full h-auto drop-shadow-[0_0_20px_rgba(0,0,0,0.4)]"
						/>

						{/* Slashing lines overlay - Aggressive and thematic */}
						<motion.div
							className="absolute inset-0 pointer-events-none overflow-hidden"
							animate={{
								opacity: [0, 0, 1, 0, 1, 0, 0],
								scale: [1, 1, 1.1, 1.1, 1.2, 1, 1],
							}}
							transition={{
								duration: 0.5,
								repeat: Infinity,
								repeatDelay: 4.5,
								times: [0, 0.4, 0.45, 0.5, 0.55, 0.6, 1],
							}}
						>
							<div className="absolute top-[20%] -left-[10%] w-[120%] h-[2px] bg-black/30 -rotate-[15deg] blur-[1px]" />
							<div className="absolute top-[50%] -left-[10%] w-[120%] h-[3px] bg-black/50 -rotate-[15deg] blur-[1px]" />
							<div className="absolute top-[80%] -left-[10%] w-[120%] h-[2px] bg-black/30 -rotate-[15deg] blur-[1px]" />

							{/* Flash effect on slash */}
							<motion.div
								className="absolute inset-0 bg-white"
								animate={{ opacity: [0, 0.2, 0] }}
								transition={{
									duration: 0.2,
									repeat: Infinity,
									repeatDelay: 4.8,
								}}
							/>
						</motion.div>
					</motion.div>
				</motion.div>
			)}

			{mounted &&
				particles.map((p, i) => (
					<motion.div
						key={`particle-${i}`}
						className="absolute font-mono pointer-events-none text-black/10 font-black text-sm"
						style={{ left: `${p.left}%`, top: `${p.top}%` }}
						initial={{ opacity: 0 }}
						animate={{
							y: [0, -40, 0],
							x: [0, (p.left % 20) - 10, 0],
							opacity: [0, 0.5, 0],
							rotate: [0, 10, 0],
						}}
						transition={{
							duration: p.duration,
							repeat: Infinity,
							ease: "easeInOut",
							delay: p.delay,
						}}
					>
						{["!", "!!", "?!", "...", "*"][i % 5]}
					</motion.div>
				))}

			<motion.div
				ref={scope}
				style={{ y: y2, opacity }}
				className="relative z-10 text-center px-6 max-w-5xl mx-auto"
			>
				<div className="wing-emblem opacity-0 mb-8">
					<svg
						width="100"
						height="100"
						viewBox="0 0 100 100"
						className="mx-auto"
					>
						<defs>
							<linearGradient
								id="wingGrad"
								x1="0%"
								y1="0%"
								x2="100%"
								y2="100%"
							>
								<stop offset="0%" stopColor="#000" />
								<stop offset="100%" stopColor="#333" />
							</linearGradient>
						</defs>
						<path
							d="M50 5 L15 25 L25 50 L15 75 L50 50 L85 75 L75 50 L85 25 Z"
							fill="none"
							stroke="url(#wingGrad)"
							strokeWidth="3"
						/>
						<circle
							cx="50"
							cy="50"
							r="10"
							fill="#000"
							opacity="0.8"
						/>
						<circle cx="50" cy="50" r="5" fill="#fff" />
					</svg>
				</div>

				<div className="content-stagger opacity-0 translate-y-10">
					<div className="overflow-hidden">
						<motion.div
							initial="hidden"
							animate="visible"
							variants={{
								visible: {
									transition: { staggerChildren: 0.1 },
								},
							}}
							className="flex justify-center"
						>
							{"BISHAL".split("").map((char, i) => (
								<motion.span
									key={i}
									variants={{
										hidden: {
											opacity: 0,
											y: 50,
											rotateX: 90,
										},
										visible: {
											opacity: 1,
											y: 0,
											rotateX: 0,
										},
									}}
								>
									<GlitchText
										text={char}
										as="span"
										className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-tight text-red-950"
									/>
								</motion.span>
							))}
						</motion.div>
					</div>

					<div className="overflow-hidden">
						<motion.div
							initial="hidden"
							animate="visible"
							variants={{
								visible: {
									transition: {
										staggerChildren: 0.05,
										delayChildren: 0.5,
									},
								},
							}}
							className="flex justify-center mt-2"
						>
							{"DEB ROY".split("").map((char, i) => (
								<motion.span
									key={i}
									variants={{
										hidden: {
											opacity: 0,
											x: -20,
											filter: "blur(10px)",
										},
										visible: {
											opacity: 1,
											x: 0,
											filter: "blur(0px)",
										},
									}}
									className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-tight text-black"
								>
									{char === " " ? "\u00A0" : char}
								</motion.span>
							))}
						</motion.div>
					</div>
				</div>

				<motion.div className="w-32 h-1 mx-auto my-6 bg-black content-stagger opacity-0 translate-y-10" />

				<div className="text-lg md:text-xl font-mono mb-8 h-8 text-black content-stagger opacity-0 translate-y-10">
					<span className="font-bold">&ldquo;</span>
					{text}
					<span className="font-bold">&rdquo;</span>
					<span className="inline-block w-0.5 h-5 ml-1 align-middle animate-blink bg-black" />
				</div>

				<div className="mb-12 max-w-2xl mx-auto speech-bubble content-stagger opacity-0 translate-y-10">
					<p className="text-base md:text-lg leading-relaxed text-gray-600">
						Creative and detail-oriented Software Developer
						specializing in building
						<span className="text-aot-green font-semibold">
							{" "}
							accessible
						</span>{" "}
						and{" "}
						<span className="text-aot-green font-semibold">
							optimized
						</span>{" "}
						web apps. Fighting for user-centric experiences.
					</p>
				</div>

				<div className="flex flex-col sm:flex-row gap-4 justify-center items-center content-stagger opacity-0 translate-y-10">
					<motion.a
						href="#projects"
						className="group relative px-8 py-4 font-bold rounded-lg overflow-hidden bg-black text-white border-3 border-black hover:bg-white hover:text-black transition-all duration-300"
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
					>
						<span className="relative z-10 flex items-center gap-2">
							View My Work
							<svg
								className="w-5 h-5 transition-transform group-hover:translate-x-1"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M13 7l5 5m0 0l-5 5m5-5H6"
								/>
							</svg>
						</span>
					</motion.a>

					<motion.a
						href="#contact"
						className="px-8 py-4 font-bold rounded-lg transition-all duration-300 border-3 border-black text-black hover:bg-black hover:text-white"
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
					>
						Contact Me
					</motion.a>
				</div>
			</motion.div>
		</section>
	);
}
