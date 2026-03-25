import { useEffect, useState } from "react";
import { ArrowRight, ExternalLink, Github, ImageIcon, X, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
    {
        id: 1,
        title: "Proforma Insights Website",
        description: "A dynamic company website for Proforma Insights using Django (Python) and React.js, ensuring high performance, scalability, and a seamless user experience for an IT service platform.",
        image: "/projects/proforma.png",
        tags: ["Django", "Python", "React"],
        demoUrl: "https://proformainsights.com/",
        githubUrl: "#"
    },
    {
        id: 2,
        title: "ABC Tutoring Website",
        description: "Online tutoring marketplace connecting students and teachers. Built with Next.js, Django, and TypeScript.",
        image: "/projects/abc-tutoring.png",
        tags: ["Django", "Typescript", "NextJS", "Tailwind CSS"],
        demoUrl: "https://abc-tution.vercel.app/",
        githubUrl: "#"
    },
    {
        id: 3,
        title: "Aastra: E-commerce Store",
        description: "A full-stack eCommerce site using Java Servlets, JSP, and MySQL with DAO and MVC architecture.",
        image: "/projects/project2.png",
        tags: ["Java", "MySQL", "JSP", "Servlets"],
        demoUrl: "#",
        githubUrl: "https://github.com/SaamipBaral07/Aastra"
    },
    {
        id: 4,
        title: "DJ Portfolio website",
        description: "Portfolio website for a DJ client built with Next.js and Tailwind CSS with a contact enquiry form for booking.",
        image: "/projects/dj.png",
        tags: ["NextJS", "Tailwind CSS"],
        demoUrl: "https://djbugati-au.vercel.app",
        githubUrl: "https://github.com/SaamipBaral07"
    },
    {
        id: 5,
        title: "Hostel Finder Platform",
        description: "A Nepal hostel platform where guests book stays and hosts manage listings built with Next.js, Django, and Tailwind CSS.",
        image: "/projects/hostel.png",
        tags: ["NextJS", "Django", "Tailwind CSS"],
        demoUrl: "#",
        githubUrl: "#",
        gallery: [
            "/hostel-finder/hostel-1.png",
            "/hostel-finder/hostel-2.png",
            "/hostel-finder/hostel-3.png",
            "/hostel-finder/hostel-4.png",
            "/hostel-finder/hostel-5.png"
        ]
    },
    {
        id: 6,
        title: "Firebase Social Media",
        description: "A social media app built with Firebase for backend services, React and TypeScript for the frontend.",
        image: "/projects/project-1.png",
        tags: ["React", "Firebase", "TypeScript"],
        demoUrl: "https://firebasemedia.vercel.app",
        githubUrl: "#"
    }
];

export const ProjectsSection = () => {
    const [selectedProject, setSelectedProject] = useState(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(false);
    const [showAllMobileProjects, setShowAllMobileProjects] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 767px)");
        const updateMobileState = () => {
            setIsMobile(mediaQuery.matches);
        };

        updateMobileState();
        mediaQuery.addEventListener("change", updateMobileState);

        return () => {
            mediaQuery.removeEventListener("change", updateMobileState);
        };
    }, []);

    const visibleProjects = isMobile && !showAllMobileProjects ? projects.slice(0, 3) : projects;

    const openGallery = (project) => {
        if (project.gallery && project.gallery.length > 0) {
            setSelectedProject(project);
            setCurrentImageIndex(0);
            document.body.style.overflow = "hidden";
        }
    };

    const closeGallery = () => {
        setSelectedProject(null);
        document.body.style.overflow = "auto";
    };

    const nextImage = (e) => {
        e.stopPropagation();
        if (selectedProject) {
            setCurrentImageIndex((prev) => (prev + 1) % selectedProject.gallery.length);
        }
    };

    const prevImage = (e) => {
        e.stopPropagation();
        if (selectedProject) {
            setCurrentImageIndex((prev) => (prev - 1 + selectedProject.gallery.length) % selectedProject.gallery.length);
        }
    };

    return (
        <section id="projects" className="py-16 md:py-24 px-4 relative w-full overflow-hidden">
            <div className="container mx-auto max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-10 md:mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 tracking-tight">
                        Featured <span className="text-primary">Projects</span>
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
                        Here are some of my recent projects that showcase my skills and creativity. Each project is a testament to my dedication to building functional and visually appealing applications.
                    </p>
                </motion.div>

                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8"
                >
                    {visibleProjects.map((project, key) => (
                        <motion.div
                            initial={{ opacity: 0, y: 26, scale: 0.985 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ duration: 0.45, ease: "easeOut", delay: (key % 3) * 0.06 }}
                            key={project.id || key} 
                            className={`group relative bg-card/40 backdrop-blur-sm border border-border/50 rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 flex flex-col h-full ${project.gallery ? "cursor-pointer" : ""}`}
                            onClick={() => project.gallery && openGallery(project)}
                        >
                            <div className="aspect-[16/9] w-full relative overflow-hidden bg-muted">
                                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                                <img 
                                    src={project.image} 
                                    alt={project.title} 
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                                />
                                
                                <div className="absolute top-3 right-3 md:top-4 md:right-4 z-20 flex gap-2 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-300 translate-y-0 md:translate-y-2 md:group-hover:translate-y-0">
                                    {project.gallery && (
                                        <button 
                                            onClick={(e) => { e.stopPropagation(); openGallery(project); }} 
                                            className="p-2 bg-background/80 backdrop-blur-md rounded-full text-foreground hover:bg-primary hover:text-primary-foreground transition-colors shadow-sm"
                                            aria-label="View Gallery"
                                        >
                                            <ImageIcon size={18} />
                                        </button>
                                    )}
                                    {project.githubUrl && project.githubUrl !== "#" && (
                                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="p-2 bg-background/80 backdrop-blur-md rounded-full text-foreground hover:bg-primary hover:text-primary-foreground transition-colors shadow-sm" aria-label="Github Repository">
                                            <Github size={18} />
                                        </a>
                                    )}
                                    {project.demoUrl && project.demoUrl !== "#" && (
                                        <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="p-2 bg-background/80 backdrop-blur-md rounded-full text-foreground hover:bg-primary hover:text-primary-foreground transition-colors shadow-sm" aria-label="Live Demo">
                                            <ExternalLink size={18} />
                                        </a>
                                    )}
                                </div>
                            </div>
                            
                            <div className="p-5 md:p-6 flex flex-col flex-grow relative z-20">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag, idx) => (
                                        <span key={idx} className="text-[11px] uppercase tracking-wider px-3 py-1 font-semibold rounded-full bg-primary/10 text-primary border border-primary/20 shadow-sm" >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">{project.title}</h3>
                                <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">
                                    {project.description}
                                </p>
                                
                                <div className="mt-auto pt-4 border-t border-border/50 flex justify-between items-center gap-3">
                                    {project.demoUrl && project.demoUrl !== "#" ? (
                                        <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="inline-flex items-center gap-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
                                            <span>Live Demo</span> <ExternalLink size={16} />
                                        </a>
                                    ) : project.gallery ? (
                                        <button 
                                            onClick={(e) => { e.stopPropagation(); openGallery(project); }} 
                                            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                                        >
                                            <span>View Gallery</span> <ImageIcon size={16} />
                                        </button>
                                    ) : (
                                        <span className="text-sm font-medium text-muted-foreground/50">Details Available</span>
                                    )}
                                    
                                    {project.githubUrl && project.githubUrl !== "#" && (
                                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="text-foreground/60 hover:text-foreground transition-colors">
                                            <Github size={20} />
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {isMobile && (
                    <div className="mt-6 flex justify-center md:hidden">
                        <button
                            type="button"
                            onClick={() => setShowAllMobileProjects((prev) => !prev)}
                            className="inline-flex items-center justify-center rounded-full border border-primary/35 bg-background/75 px-5 py-2.5 text-sm font-semibold text-primary backdrop-blur-md transition-all hover:bg-primary hover:text-primary-foreground"
                        >
                            {showAllMobileProjects ? "Show Fewer Projects" : "Show All Projects"}
                        </button>
                    </div>
                )}

                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    className="mt-12 md:mt-16 text-center flex justify-center"
                >
                    <a 
                        className="group relative inline-flex items-center gap-2 px-6 md:px-8 py-3.5 md:py-4 bg-primary text-primary-foreground rounded-full font-semibold overflow-hidden transition-all hover:scale-105 hover:shadow-lg hover:shadow-primary/30"
                        target="_blank" 
                        rel="noopener noreferrer" 
                        href="https://github.com/SaamipBaral07"
                    >
                        <span className="relative z-10 flex items-center gap-2">
                            View More on GitHub <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </span>
                        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                    </a>
                </motion.div>
            </div>

            <AnimatePresence>
                {selectedProject && (
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center bg-background/95 backdrop-blur-xl p-3 sm:p-8"
                        onClick={closeGallery}
                    >
                        <button 
                            onClick={closeGallery} 
                            className="absolute top-4 right-4 sm:top-6 sm:right-6 z-50 p-2.5 sm:p-3 bg-secondary/50 hover:bg-secondary rounded-full text-foreground transition-colors cursor-pointer"
                        >
                            <X size={24} />
                        </button>

                        <div 
                            className="relative w-full max-w-6xl h-[72vh] sm:h-auto sm:aspect-[16/9] flex items-center justify-center rounded-2xl overflow-hidden shadow-2xl border border-border/50 bg-card/10"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <AnimatePresence mode="wait">
                                <motion.img
                                    key={currentImageIndex}
                                    src={selectedProject.gallery[currentImageIndex]}
                                    alt={`${selectedProject.title} screenshot ${currentImageIndex + 1}`}
                                    initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                                    animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                                    exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
                                    transition={{ duration: 0.4, ease: "easeInOut" }}
                                    className="w-full h-full object-contain"
                                />
                            </AnimatePresence>

                            {selectedProject.gallery.length > 1 && (
                                <>
                                    <button 
                                        onClick={prevImage}
                                        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 p-2 sm:p-3 bg-background/60 hover:bg-background/90 backdrop-blur-md rounded-full text-foreground transition-all hover:scale-110 shadow-lg group cursor-pointer"
                                    >
                                        <ChevronLeft size={24} className="group-hover:-translate-x-1 transition-transform" />
                                    </button>
                                    <button 
                                        onClick={nextImage}
                                        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 p-2 sm:p-3 bg-background/60 hover:bg-background/90 backdrop-blur-md rounded-full text-foreground transition-all hover:scale-110 shadow-lg group cursor-pointer"
                                    >
                                        <ChevronRight size={24} className="group-hover:translate-x-1 transition-transform" />
                                    </button>
                                </>
                            )}

                            <div className="absolute bottom-3 sm:bottom-6 left-1/2 -translate-x-1/2 flex gap-2 sm:gap-3 p-2.5 sm:p-3 bg-background/60 backdrop-blur-md rounded-full border border-border/50">
                                {selectedProject.gallery.map((_, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => setCurrentImageIndex(idx)}
                                        className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${idx === currentImageIndex ? "bg-primary w-8" : "bg-primary/40 hover:bg-primary/70 w-2.5"}`}
                                        aria-label={`Go to image ${idx + 1}`}
                                    />
                                ))}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};