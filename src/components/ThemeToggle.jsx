import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";
import { cn } from "../lib/utils";
import { motion, AnimatePresence } from "framer-motion";

export const ThemeToggle = ({ className }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const theme = localStorage.getItem("theme");

    if (theme === "light") {
      document.documentElement.classList.remove("dark");
      setIsDarkMode(false);
    } else {
      // Default to dark mode
      document.documentElement.classList.add("dark");
      setIsDarkMode(true);
      localStorage.setItem("theme", "dark"); 
    }
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  };

  // Prevent layout shift during SSR or before mount
  if (!mounted) return <div className="w-[36px] h-[36px]" />;

  return (
    <button 
      onClick={toggleTheme} 
      className={cn(
        "relative p-2 rounded-full transition-all duration-300 focus:outline-none overflow-hidden flex items-center justify-center hover:bg-foreground/10 active:scale-90",
        className
      )}
      aria-label="Toggle theme"
    >
      <AnimatePresence mode="wait" initial={false}>
        {isDarkMode ? (
          <motion.div
            key="moon"
            initial={{ y: -20, opacity: 0, rotate: -90 }}
            animate={{ y: 0, opacity: 1, rotate: 0 }}
            exit={{ y: 20, opacity: 0, rotate: 90 }}
            transition={{ duration: 0.2 }}
          >
            <Moon className="h-5 w-5 text-blue-400 drop-shadow-[0_0_8px_rgba(96,165,250,0.5)]" />
          </motion.div>
        ) : (
          <motion.div
            key="sun"
            initial={{ y: -20, opacity: 0, rotate: -90 }}
            animate={{ y: 0, opacity: 1, rotate: 0 }}
            exit={{ y: 20, opacity: 0, rotate: 90 }}
            transition={{ duration: 0.2 }}
          >
            <Sun className="h-5 w-5 text-amber-500 drop-shadow-[0_0_8px_rgba(245,158,11,0.5)]" />
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  );
};
