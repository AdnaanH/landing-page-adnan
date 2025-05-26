"use client";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

const NAME = "Adnan W. Hamisi";

export const Header = () => {
  const [typedCount, setTypedCount] = useState(0);

  useEffect(() => {
    setTypedCount(0);
    const interval = setInterval(() => {
      setTypedCount((prev) => {
        if (prev < NAME.length) return prev + 1;
        clearInterval(interval);
        return prev;
      });
    }, 80);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: -40, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 1, type: "spring", bounce: 0.25 }}
      className="lg:mb-12 mb-6 flex flex-col items-center"
    >
      {/* Avatar with animated gradient border */}
      <motion.div
        initial={{ boxShadow: "0 0 0px 0px #fff" }}
        animate={{
          boxShadow:
            "0 4px 32px 0 rgba(80,80,255,0.10), 0 0 0 8px rgba(59,130,246,0.15)",
        }}
        transition={{ duration: 1.2, delay: 0.2 }}
        className="relative mb-6 rounded-full"
      >
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400 via-fuchsia-400 to-pink-400 animate-gradient-spin blur-[3px] opacity-60" />
        <div className="relative w-36 h-36 rounded-full overflow-hidden border-4 border-white dark:border-zinc-900 shadow-2xl">
          <Image
            src="/profile.jpg"
            alt="Adnan W. Hamisi"
            width={144}
            height={144}
            className="object-cover w-full h-full"
            priority
          />
        </div>
      </motion.div>
      {/* Name with animated typing effect */}
      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="text-3xl sm:text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-100 text-center drop-shadow font-mono flex justify-center"
      >
        <AnimatePresence>
          {NAME.split("").map((char, i) =>
            i < typedCount ? (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.04 }}
                style={char === " " ? { display: "inline-block", width: "0.6em" } : {}}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ) : null
          )}
        </AnimatePresence>
        <span className="inline-block animate-blink ml-1 align-middle">|</span>
      </motion.h1>
      {/* Stack */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.6 }}
        className="mt-3 text-xs sm:text-lg text-center font-semibold w-full text-wrap"
      >
        <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          HTML
        </span>
        <span className="mx-2 text-zinc-400 dark:text-zinc-500">•</span>
        <span className="text-blue-600 dark:text-blue-400">JavaScript</span>
        <span className="mx-2 text-zinc-400 dark:text-zinc-500">•</span>
        <span className="text-yellow-600 dark:text-yellow-400">TypeScript</span>
        <span className="mx-2 text-zinc-400 dark:text-zinc-500">•</span>
        <span className="text-green-600 dark:text-green-400">Python</span>
        <span className="mx-2 text-zinc-400 dark:text-zinc-500">•</span>
        <span className="text-indigo-600 dark:text-indigo-400">PHP</span>
        <span className="mx-2 text-zinc-400 dark:text-zinc-500">•</span>
        <span className="text-pink-600 dark:text-pink-400">SQL</span>
      </motion.p>
      {/* Tagline */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className="mt-2 text-sm text-zinc-500 dark:text-zinc-400 text-center max-w-md"
      >
        Fullstack Developer building modern user experiences with a passion for clean code, beautiful UI, and seamless UX.
      </motion.p>
      {/* Gradient spin animation and blink animation */}
      <style jsx>{`
        .animate-gradient-spin {
          animation: gradient-spin 4s linear infinite;
        }
        @keyframes gradient-spin {
          0% {
            filter: hue-rotate(0deg);
          }
          100% {
            filter: hue-rotate(360deg);
          }
        }
        .animate-blink {
          animation: blink 1s steps(2, start) infinite;
        }
        @keyframes blink {
          to {
            visibility: hidden;
          }
        }
      `}</style>
    </motion.div>
  );
};