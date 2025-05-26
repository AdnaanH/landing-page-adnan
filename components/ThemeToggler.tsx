"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export const ThemeToggler = () => {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <button
      aria-label="Toggle Theme"
      className=" cursor-pointer fixed top-5 right-5 z-50 bg-zinc-200 dark:bg-zinc-800 rounded-full p-2 shadow hover:scale-110 transition"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
    >
      {resolvedTheme === "dark" ? (
        <span role="img" aria-label="Light mode" className="text-xl">🌞</span>
      ) : (
        <span role="img" aria-label="Dark mode" className="text-xl">🌙</span>
      )}
    </button>
  );
};