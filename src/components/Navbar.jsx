import { cn } from "../lib/utils";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);    
    
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener("scroll", handleScroll);
        
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    // Prevent scrolling when menu is open on mobile
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [isMenuOpen]);

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                className={cn(
                    "fixed top-0 left-0 right-0 z-50 flex justify-center w-full px-4 transition-all duration-300",
                    isScrolled ? "pt-4" : "pt-6"
                )}
            >
                <div 
                    className={cn(
                        "container max-w-5xl flex items-center justify-between transition-all duration-500 rounded-full",
                        isScrolled 
                            ? "py-3 px-6 bg-background/60 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.2)]" 
                            : "py-4 px-6 bg-transparent border border-transparent shadow-none"
                    )}
                >
                    <a className="text-xl font-bold flex items-center group" href="#hero">
                        <span className="relative z-10 transition-transform group-hover:scale-105 duration-300 block">
                            <span className="bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">Samip Baral</span>
                        </span>
                    </a>
                    
                    {/* Desktop nav */}
                    <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
                        {navItems.map((item, key) => (
                            <a 
                                key={key} 
                                href={item.href} 
                                className="relative px-4 py-2 text-sm font-medium text-foreground/80 hover:text-white transition-colors duration-300 rounded-full hover:bg-white/5 active:scale-95"
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>
                    
                    {/* Mobile nav trigger */}
                    <button
                        onClick={() => setIsMenuOpen((prev) => !prev)}
                        className="md:hidden p-2 text-foreground/80 hover:text-white transition-colors z-50 rounded-full hover:bg-white/10 active:scale-95"
                        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>  
            </motion.nav>

            {/* Mobile Navigation Overlay */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
                        animate={{ opacity: 1, backdropFilter: "blur(16px)" }}
                        exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 bg-background/90 z-40 md:hidden flex flex-col items-center justify-center pointer-events-auto"
                    >
                        <motion.div 
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ duration: 0.3, delay: 0.1 }}
                            className="flex flex-col items-center space-y-8 text-2xl"
                        >
                            {navItems.map((item, key) => (
                                <motion.a 
                                    key={key} 
                                    href={item.href} 
                                    whileHover={{ scale: 1.1, color: "hsl(var(--primary))" }}
                                    whileTap={{ scale: 0.95 }}
                                    className="font-medium text-foreground/90 transition-colors"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item.name}
                                </motion.a>
                            ))}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};