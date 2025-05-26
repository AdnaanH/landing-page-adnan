"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { IconType } from "react-icons";

export const LinkListItem = ({
  title,
  href,
  icon: Icon,
  color,
}: {
  title: string;
  href: string;
  icon: IconType;
  color: string;
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async (e: React.MouseEvent) => {
    e.preventDefault();
    await navigator.clipboard.writeText(href);
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  };

  const handleNavigate = (e: React.MouseEvent) => {
    e.preventDefault();
    window.open(href, "_blank", "noopener,noreferrer");
  };

  return (
    <motion.div
      whileHover={{
        scale: 1.025,
        boxShadow: "0 8px 32px 0 rgba(80,80,255,0.10)",
      }}
      whileTap={{ scale: 0.98 }}
      className="rounded-2xl overflow-hidden bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 shadow-md hover:shadow-xl transition-all duration-300"
    >
      <div className="flex items-center justify-between px-2 py-2">
        {/* Icon */}
        <div
          className={`flex-shrink-0 mr-3 w-12 h-12 rounded-xl flex items-center justify-center shadow ${color} transition-all duration-300`}
        >
          <Icon className="text-white text-2xl drop-shadow" />
        </div>
        {/* Title */}
        <Link
          href={href}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
          className="flex-1 px-2 py-3 text-lg font-semibold text-zinc-800 dark:text-zinc-100 hover:text-blue-500 dark:hover:text-blue-400 transition-colors text-center"
          aria-label={title}
        >
          {title}
        </Link>
        {/* Actions */}
        <div className="flex gap-2 pl-2">
          <motion.button
            whileHover={{ scale: 1.15, rotate: -10 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleCopy}
            className="cursor-pointer p-2 rounded-full bg-zinc-100 dark:bg-zinc-700 hover:bg-blue-100 dark:hover:bg-blue-900 transition"
            aria-label="Copy link"
            title="Copy link"
          >
            {copied ? (
              <span
                role="img"
                aria-label="Copied"
                className="transition-all"
              >
                ✅
              </span>
            ) : (
              <span role="img" aria-label="Copy" className="transition-all">
                📋
              </span>
            )}
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.15, rotate: 10 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleNavigate}
            className="cursor-pointer p-2 rounded-full bg-zinc-100 dark:bg-zinc-700 hover:bg-pink-100 dark:hover:bg-pink-900 transition"
            aria-label="Open link"
            title="Open link"
          >
            <span
              role="img"
              aria-label="Navigate"
              className="transition-all"
            >
              🔗
            </span>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};