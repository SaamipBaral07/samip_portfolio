import { cn } from "../lib/utils";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeToggle } from "./ThemeToggle";

const navItems = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Certifications", href: "#certifications" },
    { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);    
    const [activeSection, setActiveSection] = useState("#hero");
    
    // Scroll handling for both Navbar appearance and active section tracking
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
            
            // Robust active section tracker (triggers when section reaches the top third of the viewport)
            const scrollPosition = window.scrollY + window.innerHeight / 3;
            
            let currentActive = navItems[0].href; // Default to top section
            
            // Iterate in reverse to find the deepest section currently scrolled past
            for (let i = navItems.length - 1; i >= 0; i--) {
                const section = document.querySelector(navItems[i].href);
                if (section && section.offsetTop <= scrollPosition) {
                    currentActive = navItems[i].href;
                    break;
                }
            }
            
            setActiveSection(currentActive);
        };

        window.addEventListener("scroll", handleScroll);
        // Fire initially after DOM paints
        const timer = setTimeout(handleScroll, 100);
        
        return () => {
            window.removeEventListener("scroll", handleScroll);
            clearTimeout(timer);
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
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
                className={cn(
                    "fixed top-0 left-0 right-0 z-50 flex justify-center w-full px-3 sm:px-4 transition-all duration-300 pointer-events-none",
                    isScrolled ? "pt-3 sm:pt-4" : "pt-4 sm:pt-6"
                )}
            >
                <div 
                    className={cn(
                        "container max-w-5xl flex items-center justify-between transition-all duration-500 rounded-full pointer-events-auto shadow-2xl overflow-hidden",
                        isScrolled 
                            ? "py-2.5 sm:py-3 px-4 sm:px-6 bg-background/70 backdrop-blur-2xl border border-white/5 dark:border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.1)] ring-1 ring-border/5" 
                            : "py-3 sm:py-4 px-4 sm:px-6 bg-transparent border-transparent shadow-none"
                    )}
                >
                    <a className="flex items-center group relative overflow-visible" href="#hero">
                        <span className="text-[1.05rem] sm:text-xl font-extrabold tracking-tight relative z-10 transition-all duration-500 block">
                            <span className="bg-gradient-to-r from-foreground to-foreground/80 group-hover:from-primary group-hover:to-purple-500 bg-clip-text text-transparent transition-all duration-500">
                                Samip
                            </span>
                            <span className="ml-[4px] font-medium text-foreground/50 group-hover:text-foreground transition-colors duration-500">
                                Baral
                            </span>
                            {/* Animated Underline Glow */}
                            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-primary to-purple-500 transition-all duration-500 group-hover:w-full rounded-full shadow-[0_0_8px_rgba(139,92,246,0.8)] opacity-0 group-hover:opacity-100" />
                        </span>
                    </a>
                    
                    {/* Desktop nav */}
                    <div className="hidden md:flex items-center space-x-1 lg:space-x-1 bg-foreground/5 p-1 rounded-full border border-border/40 backdrop-blur-sm">
                        {navItems.map((item, key) => (
                            <a 
                                key={key} 
                                href={item.href}
                                onClick={(e) => {
                                    // Let native scroll happen, just forcibly set state instantly to avoid flicker
                                    setActiveSection(item.href);
                                }}
                                className="relative px-4 py-2 text-sm font-medium transition-colors duration-300 rounded-full hover:text-primary z-10"
                            >
                                {activeSection === item.href && (
                                    <motion.div
                                        layoutId="active-nav-pill"
                                        className="absolute inset-0 bg-background rounded-full shadow-sm border border-border/50 -z-10"
                                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                    />
                                )}
                                <span className={cn(
                                    "relative z-10 transition-colors duration-300", 
                                    activeSection === item.href ? "text-primary" : "text-foreground/80 hover:text-foreground"
                                )}>
                                    {item.name}
                                </span>
                            </a>
                        ))}
                    </div>
                    
                    <div className="hidden md:flex items-center space-x-4">
                         <div className="w-[1px] h-6 bg-border mx-2" />
                         <ThemeToggle />
                    </div>

                    {/* Mobile nav triggers */}
                    <div className="flex items-center gap-2 md:hidden">
                        <ThemeToggle />
                        <button
                            onClick={() => setIsMenuOpen((prev) => !prev)}
                            className="p-2 text-foreground/80 hover:text-primary transition-colors z-50 rounded-full hover:bg-foreground/10 active:scale-95 border border-transparent shadow-xs bg-background/40 backdrop-blur-sm"
                            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                        >
                            <AnimatePresence mode="wait">
                                {isMenuOpen ? (
                                    <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
                                        <X size={20} />
                                    </motion.div>
                                ) : (
                                    <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
                                        <Menu size={20} />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </button>
                    </div>
                </div>  
            </motion.nav>

            {/* Mobile Navigation Overlay */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
                        animate={{ opacity: 1, backdropFilter: "blur(24px)" }}
                        exit={{ opacity: 0, backdropFilter: "blur(0px)", transition: { duration: 0.4 } }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 bg-background/95 z-40 md:hidden flex flex-col items-center justify-center pointer-events-auto"
                    >
                        <motion.div 
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            transition={{ type: "spring", stiffness: 300, damping: 25, delay: 0.1 }}
                            className="flex flex-col items-center space-y-6 text-2xl"
                        >
                            {navItems.map((item, key) => (
                                <motion.a 
                                    key={key} 
                                    href={item.href} 
                                    whileHover={{ scale: 1.05, color: "hsl(var(--primary))" }}
                                    whileTap={{ scale: 0.95 }}
                                    className={cn(
                                        "font-bold tracking-tight transition-colors py-2",
                                        activeSection === item.href ? "text-primary" : "text-foreground/90"
                                    )}
                                    onClick={() => {
                                        setIsMenuOpen(false);
                                        setActiveSection(item.href);
                                    }}
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