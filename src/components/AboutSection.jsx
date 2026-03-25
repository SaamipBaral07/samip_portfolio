import { Database, Layout, Server, TerminalSquare } from "lucide-react";
import { motion } from "framer-motion";

export const AboutSection = () => {
    return (
        <section id="about" className="py-10 md:py-12 relative z-10 overflow-hidden flex items-center min-h-[calc(100vh-4rem)]">
            {/* Ambient Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[800px] h-[300px] md:h-[400px] bg-primary/10 rounded-full blur-[150px] pointer-events-none" />

            <div className="container mx-auto max-w-6xl px-4 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-6 md:mb-8"
                >
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white drop-shadow-lg">
                        About <span className="text-primary">Me</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-5 items-stretch">

                    {/* Main Premium Bio Card (Left Part) */}
                    <div className="lg:col-span-7 relative group">
                        {/* Gradient Border Wrapper */}
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/50 via-purple-500/10 to-transparent rounded-[2rem] -m-[1px]" />

                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="relative h-full rounded-[2rem] overflow-hidden bg-[#0A0A0A]/90 backdrop-blur-2xl border border-white/5 p-5 lg:p-6 shadow-[0_8px_30px_rgb(0,0,0,0.6)] flex flex-col justify-between text-left"
                        >
                            {/* Decorative internal glows & noise */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[80px] -z-10 group-hover:bg-primary/30 transition-colors duration-700" />
                            <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-500/10 rounded-full blur-[60px] -z-10" />
                            <div className="absolute inset-0 opacity-[0.04] mix-blend-overlay bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MDAiIGhlaWdodD0iNDAwIj48ZmlsdGVyIGlkPSJuIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iMC45IiBudW1PY3RhdmVzPSIzIiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsdGVyPSJ1cmwoI24pIiBvcGFjaXR5PSIwLjM1Ii8+PC9zdmc+')]" />

                            <div className="relative z-10">
                                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-primary mb-3 backdrop-blur-md shadow-sm">
                                    <TerminalSquare className="w-3.5 h-3.5" />
                                    <span>Who am I?</span>
                                </div>

                                <h3 className="text-2xl lg:text-[1.7rem] font-bold mb-3 md:mb-4 leading-tight text-white drop-shadow-md">
                                    Driven IT Student <br className="hidden md:block" /> & Full-Stack Developer
                                </h3>

                                <div className="space-y-3 text-gray-300/90 text-[14px] md:text-base leading-relaxed font-light">
                                    <p>
                                        I am an IT student and an enthusiastic full-stack web developer with a profound passion for front-end architecture, particularly navigating the modern <strong className="text-white font-medium bg-white/10 px-1.5 py-0.5 rounded shadow-sm">React & Next.js</strong> ecosystems.
                                    </p>
                                    <p>
                                        My journey involves creating stellar, dynamic websites and scalable real-world projects for clients. I don't just write code; I craft immersive digital experiences that perfectly balance eye-catching aesthetics with meticulous back-end engineering.
                                    </p>
                                </div>
                            </div>

                            <div className="relative z-10 flex flex-col sm:flex-row gap-3 mt-4 pt-4 border-t border-white/10">
                                <a href="#contact" className="px-5 py-2 rounded-xl bg-primary text-white hover:bg-primary/90 transition-all font-medium text-xs md:text-sm flex items-center justify-center shadow-[0_0_20px_rgba(139,92,246,0.3)] min-w-[120px]">
                                    Get in Touch
                                </a>
                                <a href="/projects/Samip_Baral_CV.pdf" className="px-5 py-2 rounded-xl border border-white/10 bg-white/5 text-gray-200 hover:text-white hover:bg-white/10 transition-all text-xs md:text-sm flex items-center justify-center font-medium backdrop-blur-sm min-w-[120px]">
                                    Download CV
                                </a>
                            </div>
                        </motion.div>
                    </div>

                    {/* Bento Grid layout for Stack / Skills (Right Part) */}
                    <div className="lg:col-span-5 grid grid-rows-3 gap-3 md:gap-4">

                        {/* PERN Stack Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="rounded-[1.5rem] border border-white/5 bg-[#0A0A0A]/60 backdrop-blur-lg p-4 lg:p-5 relative overflow-hidden group hover:border-primary/30 transition-colors flex flex-col justify-center shadow-lg text-left"
                        >
                            <div className="flex items-center gap-3 md:gap-4 z-10 relative">
                                <div className="p-2.5 rounded-xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 text-blue-400 group-hover:scale-110 transition-transform duration-500 ring-1 ring-white/5 shadow-inner">
                                    <Database className="w-5 h-5 md:w-6 md:h-6" />
                                </div>
                                <div className="flex-1">
                                    <h4 className="text-base md:text-lg font-semibold mb-0.5 text-white group-hover:text-primary transition-colors">PERN Stack</h4>
                                    <p className="text-[10px] md:text-xs text-gray-400 leading-relaxed font-light">
                                        PostgreSQL, Express, React, and Node.js core backbone.
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Django & NextJS Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="rounded-[1.5rem] border border-white/5 bg-[#0A0A0A]/60 backdrop-blur-lg p-4 lg:p-5 relative overflow-hidden group hover:border-emerald-500/30 transition-colors flex flex-col justify-center shadow-lg text-left"
                        >
                            <div className="flex items-center gap-3 md:gap-4 z-10 relative">
                                <div className="p-2.5 rounded-xl bg-gradient-to-br from-emerald-500/10 to-teal-500/10 text-emerald-400 group-hover:scale-110 transition-transform duration-500 ring-1 ring-white/5 shadow-inner">
                                    <Server className="w-5 h-5 md:w-6 md:h-6" />
                                </div>
                                <div className="flex-1">
                                    <h4 className="text-base md:text-lg font-semibold mb-0.5 text-white group-hover:text-emerald-400 transition-colors">Django + Next.js</h4>
                                    <p className="text-[10px] md:text-xs text-gray-400 leading-relaxed font-light">
                                        Blazing-fast, SEO-friendly frontends with Python backend.
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Real World Projects Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="rounded-[1.5rem] border border-white/5 bg-gradient-to-br from-[#0A0A0A]/80 to-primary/5 backdrop-blur-lg p-4 lg:p-5 relative overflow-hidden group hover:border-primary/50 transition-colors flex flex-col justify-center shadow-xl text-left"
                        >
                            <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-primary/20 rounded-full blur-[40px] group-hover:bg-primary/30 transition-all duration-500" />
                            <div className="flex items-center gap-3 md:gap-4 z-10 relative">
                                <div className="p-2.5 rounded-xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 text-purple-400 group-hover:scale-110 transition-transform duration-500 ring-1 ring-white/5 shadow-inner">
                                    <Layout className="w-5 h-5 md:w-6 md:h-6" />
                                </div>
                                <div className="flex-1">
                                    <h4 className="text-base md:text-lg font-semibold mb-0.5 text-white group-hover:text-purple-400 transition-colors">Real-World Solutions</h4>
                                    <p className="text-[10px] md:text-xs text-gray-400 leading-relaxed font-light">
                                        Deploying dynamic apps solving complex business problems end-to-end.
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