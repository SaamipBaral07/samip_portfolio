import { ArrowDown, Github, Linkedin, Twitter, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const Typewriter = ({ phrases }) => {
    const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
    const [currentText, setCurrentText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const typeSpeed = isDeleting ? 30 : 80;
        const pauseTime = isDeleting ? 400 : 2000;
        
        const fullText = phrases[currentPhraseIndex];
        
        const handleType = () => {
            if (!isDeleting && currentText === fullText) {
                setTimeout(() => setIsDeleting(true), pauseTime);
            } else if (isDeleting && currentText === "") {
                setIsDeleting(false);
                setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
            } else {
                const addStr = isDeleting ? -1 : 1;
                setCurrentText(fullText.substring(0, currentText.length + addStr));
            }
        };

        const timer = setTimeout(handleType, currentText === fullText ? pauseTime : typeSpeed);
        return () => clearTimeout(timer);
    }, [currentText, isDeleting, currentPhraseIndex, phrases]);

    return (
        <div className="min-h-[40px] md:min-h-[48px] flex items-center justify-center md:justify-start">
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground/80">
                {currentText}
                <motion.span 
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                    className="inline-block w-[3px] h-6 md:h-8 ml-1 bg-primary align-middle"
                />
            </h2>
        </div>
    );
};

export const HeroSection = () => {
    const professionalPhrases = ["IT scholar", "Full stack developer", "React/NextJS Developer"];

    return (
        <section id="hero" className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden pt-16">
            <div className="container max-w-6xl mx-auto z-10">
                <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 lg:gap-20">
                    
                    {/* Text Section */}
                    <motion.div 
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="flex-1 text-center md:text-left space-y-4 md:space-y-6"
                    >
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight pb-2">
                            Hi, I'm <br className="hidden md:block" />
                            <span className="text-primary">Samip </span>
                            <span className="bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">Baral</span>
                        </h1>
                        
                        {/* Typewriter Effect */}
                        <Typewriter phrases={professionalPhrases} />

                        <p className="text-lg md:text-xl text-muted-foreground max-w-lg mx-auto md:mx-0 leading-relaxed pt-2">
                            I craft robust full-stack digital solutions, combining powerful backend architectures with my passion for specialized front-end development to create interfaces that are both beautifully immersive and highly functional.
                        </p>
                        
                        <div className="pt-6 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-8">
                            <a href="#projects" className="cosmic-button inline-flex items-center justify-center shrink-0">
                                View My Work
                            </a>
                            
                            {/* Social Icons */}
                            <div className="flex items-center gap-5 text-muted-foreground">
                                <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-primary hover:drop-shadow-[0_0_8px_rgba(139,92,246,0.5)] transition-all hover:scale-110">
                                    <Github className="w-6 h-6" />
                                </a>
                                <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-primary hover:drop-shadow-[0_0_8px_rgba(139,92,246,0.5)] transition-all hover:scale-110">
                                    <Linkedin className="w-6 h-6" />
                                </a>
                                <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter" className="hover:text-primary hover:drop-shadow-[0_0_8px_rgba(139,92,246,0.5)] transition-all hover:scale-110">
                                    <Twitter className="w-6 h-6" />
                                </a>
                                <a href="mailto:info@example.com" aria-label="Email" className="hover:text-primary hover:drop-shadow-[0_0_8px_rgba(139,92,246,0.5)] transition-all hover:scale-110">
                                    <Mail className="w-6 h-6" />
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    {/* Image Section */}
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ duration: 1, ease: [0.175, 0.885, 0.32, 1.275] }}
                        className="flex-1 flex justify-center md:justify-end relative w-full max-w-[280px] md:max-w-[400px]"
                    >
                        <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
                            {/* Animated Background Glow */}
                            <motion.div 
                                animate={{ scale: [1, 1.05, 1], rotate: [0, 90, 0] }}
                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/30 to-purple-500/20 blur-[50px]"
                            />
                            
                            {/* Decorative Rings */}
                            <div className="absolute inset-0 rounded-full border border-primary/20 animate-[spin_10s_linear_infinite]" />
                            <div className="absolute inset-[-15px] rounded-full border border-purple-500/20 animate-[spin_15s_linear_infinite_reverse]" />
                            
                            {/* Image Container with Float Effect */}
                            <motion.div 
                                animate={{ y: [-10, 10, -10] }}
                                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute inset-2 group"
                            >
                                <div className="w-full h-full rounded-full overflow-hidden border-4 border-background/50 ring-2 ring-primary/40 shadow-[0_0_30px_rgba(139,92,246,0.2)] bg-gradient-to-br from-primary/10 to-transparent transition-all duration-500 group-hover:ring-primary/80 group-hover:shadow-[0_0_50px_rgba(139,92,246,0.4)] relative">
                                    <img 
                                        src="/Myself.png" 
                                        alt="Samip Baral"
                                        className="w-full h-full object-cover object-center scale-110 transition-transform duration-700 ease-out group-hover:scale-[1.15]"
                                        style={{ objectPosition: "50% 20%" }} 
                                    />
                                    {/* Inner shadow to blend image edges better */}
                                    <div className="absolute inset-0 rounded-full shadow-[inset_0_0_30px_rgba(0,0,0,0.5)] pointer-events-none" />
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>

                </div>
            </div>            
            
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
            >
                <span className="text-sm text-muted-foreground mb-2 tracking-widest uppercase text-[10px]">Scroll</span>
                <div className="animate-bounce">
                    <ArrowDown className="h-5 w-5 text-primary" />
                </div>
            </motion.div>
        </section>
    );
};