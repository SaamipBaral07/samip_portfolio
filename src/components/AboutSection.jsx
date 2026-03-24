import { Database, Layout, Server, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export const AboutSection = () => {
    return (
        <section id="about" className="py-24 px-4 relative z-10 overflow-hidden">
            {/* Ambient Background Glow */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
            
            <div className="container mx-auto max-w-6xl">
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
                        About <span className="text-primary">Me</span>
                    </h2>
                    <p className="text-muted-foreground mt-4 text-lg">
                        Bridging the gap between stunning design and robust engineering.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 items-stretch">
                    
                    {/* Main Bio Card */}
                    <motion.div 
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="lg:col-span-7 relative group rounded-3xl overflow-hidden border border-border/40 bg-card/20 backdrop-blur-md p-8 md:p-10 shadow-xl"
                    >
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px] -z-10 group-hover:bg-primary/10 transition-colors duration-700" />
                        
                        <h3 className="text-2xl md:text-3xl font-semibold mb-6 flex items-center gap-3">
                            <Sparkles className="text-primary w-6 h-6 animate-pulse" />
                            Driven IT Student & Full-Stack Developer
                        </h3>
                        
                        <div className="space-y-5 text-muted-foreground/90 text-lg leading-relaxed">
                            <p>
                                I am an IT student and an enthusiastic full-stack web developer with a profound passion for front-end architecture, particularly within the <strong className="text-foreground">React and Next.js</strong> ecosystems. 
                            </p>
                            <p>
                                My journey involves creating stellar, dynamic websites and scalable real-world projects for clients. I don't just write code; I craft immersive digital experiences that perfectly balance eye-catching aesthetics with meticulous back-end engineering.
                            </p>
                        </div>
                        
                        <div className="flex flex-col sm:flex-row gap-4 mt-10">
                            <a href="#contact" className="cosmic-button inline-flex justify-center items-center">
                                Get in Touch
                            </a>
                            <a href="/projects/Samip_Baral_CV.pdf" className="px-6 py-3 rounded-full border border-border/50 text-foreground hover:bg-primary/10 hover:border-primary/50 transition-all duration-300 flex justify-center items-center font-medium bg-background/30 backdrop-blur-sm">
                                Download CV 
                            </a>
                        </div>
                    </motion.div>

                    {/* Bento Grid layout for Stack / Skills */}
                    <div className="lg:col-span-5 grid gap-6">
                        
                        {/* PERN Stack Card */}
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="rounded-3xl border border-border/40 bg-card/20 backdrop-blur-sm p-6 lg:p-8 relative overflow-hidden group hover:border-primary/40 transition-colors shadow-lg"
                        >
                            <div className="flex items-start gap-4 z-10 relative">
                                <div className="p-3 md:p-4 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 text-blue-400 group-hover:scale-110 transition-transform duration-500">
                                    <Database className="w-7 h-7 md:w-8 md:h-8" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold mb-2 text-foreground/90 group-hover:text-primary transition-colors">PERN Stack</h4>
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        PostgreSQL, Express, React, and Node.js form the robust backbone of my scalable full-stack applications.
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Django & NextJS Card */}
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="rounded-3xl border border-border/40 bg-card/20 backdrop-blur-sm p-6 lg:p-8 relative overflow-hidden group hover:border-primary/40 transition-colors shadow-lg"
                        >
                            <div className="flex items-start gap-4 z-10 relative">
                                <div className="p-3 md:p-4 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-teal-500/20 text-emerald-400 group-hover:scale-110 transition-transform duration-500">
                                    <Server className="w-7 h-7 md:w-8 md:h-8" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold mb-2 text-foreground/90 group-hover:text-emerald-400 transition-colors">Django + Next.js</h4>
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        Delivering blazing-fast, SEO-friendly frontends powered by reliable and secure Python backend architectures.
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Real World Projects Card */}
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="rounded-3xl border border-border/40 bg-gradient-to-br from-card/30 to-primary/5 backdrop-blur-sm p-6 lg:p-8 relative overflow-hidden group hover:border-primary/50 transition-colors shadow-xl"
                        >
                            <div className="absolute -right-6 -bottom-6 w-32 h-32 bg-primary/20 rounded-full blur-[50px] group-hover:bg-primary/30 transition-all duration-500" />
                            <div className="flex items-start gap-4 z-10 relative">
                                <div className="p-3 md:p-4 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 text-purple-400 group-hover:scale-110 transition-transform duration-500">
                                    <Layout className="w-7 h-7 md:w-8 md:h-8" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold mb-2 text-foreground/90 group-hover:text-purple-400 transition-colors">Real-World Client Solutions</h4>
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        Proven track record of deploying dynamic applications and solving complex business problems end-to-end.
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                    </div>

                </div>
            </div>
        </section>
    );
};