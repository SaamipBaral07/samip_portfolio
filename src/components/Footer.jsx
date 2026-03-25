import { ArrowUp, Github, Linkedin, Facebook, Instagram, Twitter, Mail } from "lucide-react";
import { motion } from "framer-motion";

const navLinks = [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
];

const socialLinks = [
    { icon: <Linkedin size={18} />, href: "https://www.linkedin.com/in/samip-baral-9191b52bb", label: "LinkedIn" },
    { icon: <Github size={18} />, href: "https://github.com/SaamipBaral07", label: "GitHub" },
    { icon: <Facebook size={18} />, href: "https://www.facebook.com/Samip.Baralcr7/", label: "Facebook" },
    { icon: <Instagram size={18} />, href: "https://www.instagram.com/saamip07/", label: "Instagram" },
    { icon: <Twitter size={18} />, href: "#", label: "Twitter" },
];

export const Footer = () => {
    return (
        <footer className="relative overflow-hidden border-t border-border/50">
            {/* Top gradient line */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
            {/* Ambient glow */}
            <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-[600px] h-32 bg-primary/5 rounded-full blur-[60px] pointer-events-none" />

            <div className="container mx-auto max-w-6xl px-4 py-14 relative z-10">

                {/* Top CTA Area */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3 tracking-tight">
                        Let's Build Something <span className="text-primary">Remarkable</span>
                    </h3>
                    <p className="text-muted-foreground text-sm md:text-base max-w-md mx-auto mb-6 leading-relaxed">
                        Open to exciting opportunities, freelance projects, and collaborations. Let's create together.
                    </p>
                    <a
                        href="mailto:baralsamip4@gmail.com"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-white text-sm font-semibold hover:bg-primary/90 hover:shadow-[0_0_20px_rgba(139,92,246,0.4)] hover:scale-105 active:scale-95 transition-all duration-300"
                    >
                        <Mail size={16} />
                        baralsamip4@gmail.com
                    </a>
                </motion.div>

                {/* Divider */}
                <div className="border-t border-border/40 mb-10" />

                {/* Middle Grid: Navigation + Socials */}
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10"
                >
                    {/* Nav Links */}
                    <div>
                        <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4">Navigation</h4>
                        <ul className="flex flex-wrap gap-x-6 gap-y-3">
                            {navLinks.map(link => (
                                <li key={link.label}>
                                    <a
                                        href={link.href}
                                        className="text-sm text-foreground/70 hover:text-primary transition-colors duration-200 font-medium"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Social Links */}
                    <div className="md:text-right">
                        <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4">Connect</h4>
                        <div className="flex flex-wrap md:justify-end gap-3">
                            {socialLinks.map(s => (
                                <a
                                    key={s.label}
                                    href={s.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={s.label}
                                    className="group flex items-center gap-2 px-3 py-2 rounded-lg
                                        bg-card border border-border/50
                                        text-foreground/70 hover:text-primary
                                        hover:border-primary/40 hover:-translate-y-0.5 hover:shadow-md
                                        transition-all duration-200 text-xs font-medium"
                                >
                                    <span className="group-hover:scale-110 transition-transform">{s.icon}</span>
                                    {s.label}
                                </a>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Bottom Bar */}
                <div className="border-t border-border/40 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-sm text-muted-foreground">
                        &copy; {new Date().getFullYear()}{" "}
                        <span className="font-semibold text-foreground">Samip Baral</span>
                        {" "}· All rights reserved.
                    </p>
                    <p className="text-xs text-muted-foreground/60">
                        Crafted with ❤️ using React & Tailwind CSS
                    </p>
                    <a
                        href="#hero"
                        aria-label="Scroll to top"
                        className="p-2.5 rounded-full bg-primary/10 hover:bg-primary hover:text-white text-primary transition-all duration-300 hover:scale-110 hover:shadow-[0_0_15px_rgba(139,92,246,0.4)]"
                    >
                        <ArrowUp size={18} />
                    </a>
                </div>

            </div>
        </footer>
    );
};