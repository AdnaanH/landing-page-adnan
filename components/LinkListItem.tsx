"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

export const LinkListItem = ({
  title,
  href,
}: {
  title: string;
  href: string;
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
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className="rounded-xl overflow-hidden shadow-lg bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 hover:shadow-xl transition duration-300"
    >
      <div className="flex items-center justify-between">
        <Link
          href={href}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
          className="flex-1 py-3 px-6 text-center font-medium text-zinc-800 dark:text-zinc-100 hover:text-blue-500 dark:hover:text-blue-400"
          aria-label={title}
        >
          {title}
        </Link>
        <div className="flex gap-2 pr-4">
          <button
            onClick={handleCopy}
            className="p-2 rounded hover:bg-zinc-100 dark:hover:bg-zinc-700"
            aria-label="Copy link"
            title="Copy link"
          >
            {copied ? (
              <span role="img" aria-label="Copied">
                ✅
              </span>
            ) : (
              <span role="img" aria-label="Copy">
                📋
              </span>
            )}
          </button>
          <button
            onClick={handleNavigate}
            className="p-2 rounded hover:bg-zinc-100 dark:hover:bg-zinc-700"
            aria-label="Open link"
            title="Open link"
          >
            <span role="img" aria-label="Navigate">
              🔗
            </span>
          </button>
        </div>
      </div>
    </motion.div>
  );
};