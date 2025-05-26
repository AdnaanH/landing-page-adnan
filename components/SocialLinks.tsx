"use client";
import { motion } from "framer-motion";
import { FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const links = [
  { href: "https://twitter.com", icon: FaTwitter, label: "Twitter", color: "from-sky-400 to-blue-500" },
  { href: "https://youtube.com", icon: FaYoutube, label: "YouTube", color: "from-red-500 to-pink-500" },
  { href: "https://instagram.com", icon: FaInstagram, label: "Instagram", color: "from-pink-500 via-yellow-400 to-purple-500" },
];

export const SocialLinks = () => (
  <motion.div
    className="flex gap-6 mb-10 justify-center"
    initial="hidden"
    animate="visible"
    variants={{
      visible: { transition: { staggerChildren: 0.15 } },
    }}
  >
    {links.map(({ href, icon: Icon, label, color }) => (
      <motion.a
        key={label}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        className="group relative"
        whileHover={{ scale: 1.18, y: -4 }}
        whileTap={{ scale: 0.96 }}
      >
        <span
          className={`
            inline-flex items-center justify-center w-14 h-14 rounded-full
            bg-gradient-to-br ${color}
            shadow-lg transition-all duration-300
            group-hover:shadow-xl group-hover:brightness-110
            border-2 border-white dark:border-zinc-900
          `}
        >
          <Icon className="text-white text-3xl drop-shadow" />
        </span>
        <span className="absolute left-1/2 -bottom-7 -translate-x-1/2 px-2 py-1 rounded bg-zinc-900 text-xs text-white opacity-0 group-hover:opacity-90 transition pointer-events-none select-none">
          {label}
        </span>
      </motion.a>
    ))}
  </motion.div>
);
