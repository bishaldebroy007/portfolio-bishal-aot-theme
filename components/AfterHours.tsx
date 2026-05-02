"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { afterHoursData } from "@/lib/data";
import {
	FaFilm,
	FaTv,
	FaBook,
	FaMicrophone,
	FaNewspaper,
	FaMask,
} from "react-icons/fa";

const categoryIcons: Record<string, JSX.Element> = {
	Movie: <FaFilm />,
	Series: <FaTv />,
	Anime: <FaMask />,
	Book: <FaBook />,
	Podcast: <FaMicrophone />,
	Article: <FaNewspaper />,
};

const categories = [
	"All",
	"Movie",
	"Series",
	"Anime",
	"Book",
	"Podcast",
	"Article",
];

export default function AfterHours() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: "-100px" });
	const [activeCategory, setActiveCategory] = useState("All");

	const filteredData =
		activeCategory === "All"
			? afterHoursData
			: afterHoursData.filter((item) => item.category === activeCategory);

	return (
		<section
			id="after-hours"
			className="relative py-32 overflow-hidden bg-white screentone"
			ref={ref}
		>
			<div className="max-w-7xl mx-auto px-6 relative z-10">
				{/* Section Header */}
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					animate={isInView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.8 }}
					className="text-center mb-16"
				>
					<motion.div
						className="inline-block mb-4"
						initial={{ scaleX: 0 }}
						animate={isInView ? { scaleX: 1 } : {}}
						transition={{ duration: 0.8, delay: 0.2 }}
					>
						<span className="font-bold tracking-widest uppercase text-sm text-black">
							Off Duty
						</span>
					</motion.div>
					<h2 className="text-4xl md:text-6xl font-black mb-6 text-black">
						<span className="gradient-text">After</span>{" "}
						<span className="text-aot-red">Hours</span>
					</h2>
					<p className="text-gray-600 max-w-2xl mx-auto font-medium mb-8">
						When the scouts return from the walls, we seek refuge in
						stories, music, and knowledge. Here are some of my
						personal recommendations.
					</p>
					<motion.div
						className="w-24 h-1 mx-auto bg-black"
						initial={{ scaleX: 0 }}
						animate={isInView ? { scaleX: 1 } : {}}
						transition={{ duration: 0.8, delay: 0.4 }}
					/>
				</motion.div>

				{/* Category Filter */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={isInView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.6, delay: 0.5 }}
					className="flex flex-wrap justify-center gap-3 mb-12"
				>
					{categories.map((cat) => (
						<motion.button
							key={cat}
							onClick={() => setActiveCategory(cat)}
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
							className={`flex items-center gap-2 px-6 py-2.5 rounded-sm text-sm font-black uppercase tracking-tighter transition-all duration-300 border-3 border-black cursor-pointer ${
								activeCategory === cat
									? "bg-black text-white shadow-[4px_4px_0_#000]"
									: "bg-white text-black hover:bg-aot-red hover:text-white hover:shadow-[4px_4px_0_#000]"
							}`}
						>
							{cat !== "All" && (
								<span className="text-lg">
									{categoryIcons[cat]}
								</span>
							)}
							{cat}
						</motion.button>
					))}
				</motion.div>

				{/* Recommendations Grid */}
				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
					{filteredData.map((item, index) => (
						<motion.div
							key={item.title}
							initial={{
								opacity: 0,
								rotate: index % 2 === 0 ? -2 : 2,
								y: 50,
							}}
							animate={
								isInView
									? {
											opacity: 1,
											rotate: index % 2 === 0 ? -1 : 1,
											y: 0,
										}
									: {}
							}
							transition={{ delay: 0.6 + index * 0.1 }}
							whileHover={{
								scale: 1.05,
								rotate: 0,
								zIndex: 20,
								transition: { duration: 0.2 },
							}}
							className="bg-aot-cream/30 border-3 border-black p-6 relative group cursor-pointer overflow-hidden"
						>
							{/* Decorative "Classified" Stamp */}
							<div className="absolute -right-4 -top-4 opacity-10 group-hover:opacity-20 transition-opacity">
								<div className="border-4 border-aot-red text-aot-red font-black text-2xl px-4 py-1 rotate-12 uppercase">
									Approved
								</div>
							</div>

							<div className="flex items-start justify-between mb-4">
								<div className="p-3 bg-black text-white text-2xl border-2 border-black">
									{categoryIcons[item.category]}
								</div>
								{item.rating && (
									<span className="text-xs font-black bg-white border-2 border-black px-2 py-1 text-black">
										SCORE: {item.rating}
									</span>
								)}
							</div>

							<h3 className="text-2xl font-black text-black mb-2 uppercase group-hover:text-aot-red transition-colors">
								{item.title}
							</h3>

							<div className="w-12 h-1 bg-black mb-4 group-hover:w-full transition-all duration-500" />

							<p className="text-gray-700 text-sm font-bold leading-relaxed">
								{item.description}
							</p>

							{/* Category Badge */}
							<div className="mt-6 flex justify-end">
								<span className="text-[10px] font-black uppercase tracking-widest text-gray-500">
									REF_LOG: {item.category}
								</span>
							</div>
						</motion.div>
					))}
				</div>

				{/* Bottom Message */}
				<motion.div
					className="mt-20 text-center"
					initial={{ opacity: 0 }}
					animate={isInView ? { opacity: 1 } : {}}
					transition={{ delay: 1.2 }}
				>
					<p className="font-black text-black uppercase tracking-tighter text-xl">
						&quot;Those who cannot abandon anything, can never
						change anything.&quot;
					</p>
					<p className="text-aot-red font-bold mt-2">
						— Armin Arlert
					</p>
				</motion.div>
			</div>
		</section>
	);
}
