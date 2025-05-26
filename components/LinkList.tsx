"use client";
import { motion } from "framer-motion";
import { LinkListItem } from "./LinkListItem";
import { useState } from "react";
import { FaGithub, FaMedium, FaFileAlt, FaLinkedin, FaGlobe } from "react-icons/fa";

const links = [
    {
		title: "Portfolio",
		href: "https://ahamisi.me",
		icon: FaGlobe,
		color: "bg-gradient-to-br from-purple-500 to-indigo-500",
	},
    {
		title: "LinkedIn",
		href: "https://www.linkedin.com/in/adnan-hamisi/",
		icon: FaLinkedin,
		color: "bg-gradient-to-br from-blue-600 to-blue-400",
	},
	{
		title: "GitHub",
		href: "https://github.com/AdnaanH",
		icon: FaGithub,
		color: "bg-gradient-to-br from-gray-800 to-gray-600",
	},
	{
		title: "Medium",
		href: "https://medium.com/@ahamisi777",
		icon: FaMedium,
		color: "bg-gradient-to-br from-green-400 to-green-600",
	},
	{
		title: "Resume",
		href: "https://drive.google.com/file/d/1aCHbjdn6IhIBCbGZR5vDRaMvR64eqoJg/view",
		icon: FaFileAlt,
		color: "bg-gradient-to-br from-yellow-400 to-yellow-600",
	},
	// {
	// 	title: "Twitter",
	// 	href: "https://twitter.com",
	// 	icon: FaTwitter,
	// 	color: "bg-gradient-to-br from-sky-400 to-blue-500",
	// },
	// {
	// 	title: "Blog",
	// 	href: "https://yourblog.com",
	// 	icon: FaBlog,
	// 	color: "bg-gradient-to-br from-pink-500 to-red-400",
	// },
];

export const LinkList = () => {
	const [expanded, setExpanded] = useState(false);
	const visibleLinks = expanded ? links : links.slice(0, 3);

	return (
		<div>
			<motion.div
				className="space-y-5"
				initial="hidden"
				animate="visible"
				variants={{
					visible: { transition: { staggerChildren: 0.12 } },
				}}
			>
				{visibleLinks.map((link) => (
					<LinkListItem key={link.title} {...link} />
				))}
			</motion.div>
			{links.length > 3 && (
				<div className="flex justify-center mt-5">
					<button
						onClick={() => setExpanded((v) => !v)}
						className="px-5 py-2 rounded-full bg-gradient-to-r from-blue-400 to-pink-400 text-white font-semibold shadow-md hover:scale-105 transition-all cursor-pointer"
					>
						{expanded ? "Show less" : "Show more"}
					</button>
				</div>
			)}
		</div>
	);
};