import { motion } from "framer-motion";

export const CertificationsSection = () => {
    const certifications = [
        "/certifications/certification-1.png",
        "/certifications/certification-2.png",
        "/certifications/certification-3.png",
        "/certifications/certification-4.png",
    ];

    return (
        <section id="certifications" className="py-24 px-4 relative z-10">
            <div className="container mx-auto max-w-6xl">
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16 space-y-4"
                >
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
                        My <span className="text-primary">Certifications</span>
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        A showcase of my professional qualifications, technical achievements, and ongoing learning journey.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    {certifications.map((imgSrc, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="group relative rounded-2xl overflow-hidden border border-border/40 bg-card/20 backdrop-blur-md p-4 lg:p-6 transition-all duration-500 hover:border-primary/50 shadow-lg hover:shadow-[0_20px_40px_-15px_rgba(139,92,246,0.2)]"
                        >
                            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-background/50 flex items-center justify-center">
                                {/* Glimmer effect on hover */}
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-20">
                                    <div className="absolute top-0 left-[-100%] w-1/2 h-full bg-linear-to-r from-transparent via-white/10 to-transparent skew-x-[-20deg] group-hover:animate-[shimmer_1.5s_infinite]" />
                                </div>
                                
                                <img 
                                    src={imgSrc} 
                                    alt={`Certification ${index + 1}`} 
                                    className="object-contain w-full h-full p-2 transition-transform duration-700 ease-out group-hover:scale-105 z-10"
                                />
                                
                                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-end justify-center pb-6">
                                    <span className="text-white font-medium tracking-wide translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                        View Credential
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
