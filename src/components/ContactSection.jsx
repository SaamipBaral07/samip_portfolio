import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter, Send, CheckCircle2, Loader2, AlertCircle } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const ContactSection = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError("");
        setIsSuccess(false);

        const formData = new FormData(e.target);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            message: formData.get('message'),
        };

        try {
            // Sends request to Vercel Serverless Function (api/contact.js)
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                setIsSuccess(true);
                e.target.reset(); // Clear the form
                setTimeout(() => setIsSuccess(false), 5000); // Reset success state after 5 seconds
            } else {
                const result = await response.json();
                setError(result.message || "Failed to send message. Please verify your .env settings or try again.");
            }
        } catch (err) {
            setError("Network error. (Note: The /api/contact route runs on Vercel deployment, not standard Vite local dev server without Vite proxy).");
        } finally {
            setIsSubmitting(false);
        }
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { type: "spring", stiffness: 100, damping: 15 }
        }
    };

    return (
        <section id="contact" className="py-24 px-4 relative bg-secondary/10 overflow-hidden">
            {/* Minimal Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-full bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="container mx-auto max-w-6xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
                        Get In <span className="text-primary tracking-wide">Touch</span>
                    </h2>
                    <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto text-lg leading-relaxed">
                        Have a project in mind or want to collaborate? Feel free to reach out! I'm always open to discussing new ideas, tech stacks, or career opportunities.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
                    {/* Left Column: Contact Info */}
                    <motion.div 
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        className="lg:col-span-5 space-y-10"
                    >
                        <div>
                            <motion.h3 variants={itemVariants} className="text-2xl font-bold mb-8 text-foreground tracking-tight">
                                Contact Information
                            </motion.h3>

                            <div className="space-y-6">
                                {/* Email */}
                                <motion.a 
                                    variants={itemVariants}
                                    href="mailto:baralsamip4@gmail.com" 
                                    className="group flex items-start space-x-5 p-4 rounded-xl hover:bg-card/50 transition-all border border-transparent hover:border-border/50 hover:shadow-sm"
                                >
                                    <div className="p-3 rounded-full bg-primary/10 text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 shadow-sm border border-primary/20">
                                        <Mail className="h-6 w-6" />
                                    </div>
                                    <div className="flex flex-col">
                                        <h4 className="font-semibold text-foreground mb-1">Email</h4>
                                        <span className="text-muted-foreground group-hover:text-primary transition-colors">baralsamip4@gmail.com</span>
                                    </div>
                                </motion.a>

                                {/* Phone */}
                                <motion.a 
                                    variants={itemVariants}
                                    href="tel:+9779846922543" 
                                    className="group flex items-start space-x-5 p-4 rounded-xl hover:bg-card/50 transition-all border border-transparent hover:border-border/50 hover:shadow-sm"
                                >
                                    <div className="p-3 rounded-full bg-primary/10 text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 shadow-sm border border-primary/20">
                                        <Phone className="h-6 w-6" />
                                    </div>
                                    <div className="flex flex-col">
                                        <h4 className="font-semibold text-foreground mb-1">Phone</h4>
                                        <span className="text-muted-foreground group-hover:text-primary transition-colors">+977-9846922543</span>
                                    </div>
                                </motion.a>

                                {/* Location */}
                                <motion.div 
                                    variants={itemVariants}
                                    className="group flex items-start space-x-5 p-4 rounded-xl hover:bg-card/50 transition-all border border-transparent hover:border-border/50 hover:shadow-sm"
                                >
                                    <div className="p-3 rounded-full bg-primary/10 text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 shadow-sm border border-primary/20">
                                        <MapPin className="h-6 w-6" />
                                    </div>
                                    <div className="flex flex-col">
                                        <h4 className="font-semibold text-foreground mb-1">Location</h4>
                                        <span className="text-muted-foreground">Pokhara, Nepal</span>
                                    </div>
                                </motion.div>
                            </div>
                        </div>

                        <motion.div variants={itemVariants} className="pt-6 border-t border-border/50">
                            <h4 className="font-semibold mb-6 text-foreground tracking-tight">Connect With Me</h4>
                            <div className="flex space-x-5">
                                <a href="https://www.linkedin.com/in/samip-baral-9191b52bb" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-card shadow-sm border border-border/50 text-foreground/80 hover:text-primary hover:border-primary/50 hover:-translate-y-1 hover:shadow-md transition-all">
                                    <Linkedin size={20} />
                                </a>
                                <a href="https://www.facebook.com/Samip.Baralcr7/" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-card shadow-sm border border-border/50 text-foreground/80 hover:text-primary hover:border-primary/50 hover:-translate-y-1 hover:shadow-md transition-all">
                                    <Facebook size={20} />
                                </a>
                                <a href="https://www.instagram.com/saamip07/" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-card shadow-sm border border-border/50 text-foreground/80 hover:text-primary hover:border-primary/50 hover:-translate-y-1 hover:shadow-md transition-all">
                                    <Instagram size={20} />
                                </a>
                                <a href="#Twitter" className="p-3 rounded-full bg-card shadow-sm border border-border/50 text-foreground/80 hover:text-primary hover:border-primary/50 hover:-translate-y-1 hover:shadow-md transition-all">
                                    <Twitter size={20} />
                                </a>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Right Column: Form */}
                    <motion.div 
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="lg:col-span-7"
                    >
                        <div className="bg-card/60 backdrop-blur-xl border border-border/50 p-8 md:p-10 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow relative overflow-hidden">
                            <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/10 rounded-full blur-[60px] pointer-events-none" />
                            
                            <h3 className="text-2xl font-bold mb-8 tracking-tight">Send a Message</h3>
                            
                            <form className="space-y-6 relative z-10" onSubmit={handleSubmit}>
                                {error && (
                                    <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="p-4 rounded-lg bg-destructive/10 border border-destructive/20 text-destructive text-sm flex items-center gap-2">
                                        <AlertCircle size={16} />
                                        <span>{error}</span>
                                    </motion.div>
                                )}

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2 relative group">
                                        <label htmlFor="name" className="text-xs font-semibold text-muted-foreground uppercase tracking-wider ml-1">Your Name</label>
                                        <input 
                                            type="text" 
                                            id="name" 
                                            name="name" 
                                            className="w-full px-5 py-4 rounded-xl border border-border bg-background/50 focus:bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all shadow-sm placeholder:text-muted-foreground/50" 
                                            placeholder="John Doe" 
                                            required 
                                        />
                                    </div>

                                    <div className="space-y-2 relative group">
                                        <label htmlFor="email" className="text-xs font-semibold text-muted-foreground uppercase tracking-wider ml-1">Your Email</label>
                                        <input 
                                            type="email" 
                                            id="email" 
                                            name="email" 
                                            className="w-full px-5 py-4 rounded-xl border border-border bg-background/50 focus:bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all shadow-sm placeholder:text-muted-foreground/50" 
                                            placeholder="john@example.com" 
                                            required 
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2 relative group">
                                    <label htmlFor="message" className="text-xs font-semibold text-muted-foreground uppercase tracking-wider ml-1">Your Message</label>
                                    <textarea 
                                        id="message" 
                                        name="message" 
                                        rows="5"
                                        className="w-full px-5 py-4 rounded-xl border border-border bg-background/50 focus:bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all shadow-sm placeholder:text-muted-foreground/50 resize-y" 
                                        placeholder="Hello, I'd like to talk about..." 
                                        required 
                                    />
                                </div>

                                <motion.button 
                                    whileHover={{ scale: 1.01 }}
                                    whileTap={{ scale: 0.98 }}
                                    type="submit" 
                                    disabled={isSubmitting || isSuccess}
                                    className={cn(
                                        "w-full flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-semibold text-white transition-all duration-300 shadow-lg",
                                        isSuccess 
                                            ? "bg-green-500 hover:bg-green-600 shadow-green-500/20" 
                                            : "bg-primary hover:bg-primary/90 shadow-primary/20",
                                        (isSubmitting) && "opacity-80 cursor-not-allowed"
                                    )}
                                >
                                    {isSubmitting ? (
                                        <>
                                            <Loader2 size={20} className="animate-spin" />
                                            Sending...
                                        </>
                                    ) : isSuccess ? (
                                        <>
                                            <CheckCircle2 size={20} className="animate-bounce" />
                                            Message Sent!
                                        </>
                                    ) : (
                                        <>
                                            <Send size={20} className="group-hover:translate-x-1 transition-transform" />
                                            Send Message    
                                        </>
                                    )}
                                </motion.button>
                            </form>
                        </div>
                    </motion.div>
                </div>
            </div> 
        </section>
    );
};