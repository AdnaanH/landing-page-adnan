"use client";
import { motion } from "framer-motion";
import { LinkListItem } from "./LinkListItem";
import { useState } from "react";

const links = [
  { title: "GitHub", href: "https://github.com" },
  { title: "Medium", href: "https://medium.com" },
  { title: "Resume", href: "/resume.pdf" },
  { title: "Twitter", href: "https://twitter.com" },
  { title: "LinkedIn", href: "https://linkedin.com" },
  { title: "Portfolio", href: "https://yourportfolio.com" },
  { title: "Blog", href: "https://yourblog.com" },
];

export const LinkList = () => {
  const [expanded, setExpanded] = useState(false);
  const visibleLinks = expanded ? links : links.slice(0, 3);

  return (
    <div>
      <motion.div
        className="space-y-4"
        initial="hidden"
        animate="visible"
        variants={{
          visible: { transition: { staggerChildren: 0.1 } },
        }}
      >
        {visibleLinks.map((link) => (
          <LinkListItem key={link.title} {...link} />
        ))}
      </motion.div>
      {links.length > 3 && (
        <div className="flex justify-center mt-4">
          <button
            onClick={() => setExpanded((v) => !v)}
            className="px-4 py-2 rounded bg-zinc-200 dark:bg-zinc-700 text-zinc-800 dark:text-zinc-100 hover:bg-zinc-300 dark:hover:bg-zinc-600 transition"
          >
            {expanded ? "Show less" : "Show more"}
          </button>
        </div>
      )}
    </div>
  );
};