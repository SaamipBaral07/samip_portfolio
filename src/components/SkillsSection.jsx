import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { 
    Layout, Combine, Triangle, FileCode2, FileJson2, Palette, Layers,
    ServerCog, FastForward, Terminal, MonitorSmartphone, Coffee, Code2, Database, Flame,
    GitBranch, Wrench, TerminalSquare, Container, Share2, Figma
} from "lucide-react";

// The grouped skills architecture
const skillsCategories = [
    {
        title: "Frontend Architecture",
        icon: <Layout className="w-6 h-6 text-primary" />,
        colorClass: "from-primary/20 to-purple-500/5",
        borderClass: "hover:border-primary/40",
        skills: [
            { name: "ReactJS", level: "Advanced", icon: <Combine className="w-4 h-4" /> },
            { name: "Next.js", level: "Intermediate", icon: <Triangle className="w-4 h-4" /> },
            { name: "JavaScript", level: "Advanced", icon: <FileCode2 className="w-4 h-4" /> },
            { name: "TypeScript", level: "Intermediate", icon: <FileJson2 className="w-4 h-4" /> },
            { name: "HTML/CSS", level: "Advanced", icon: <Layout className="w-4 h-4" /> },
            { name: "Tailwind CSS", level: "Intermediate", icon: <Palette className="w-4 h-4" /> },
            { name: "Redux Toolkit", level: "Intermediate", icon: <Layers className="w-4 h-4" /> },
        ]
    },
    {
        title: "Backend Engineering",
        icon: <ServerCog className="w-6 h-6 text-emerald-400" />,
        colorClass: "from-emerald-500/20 to-teal-500/5",
        borderClass: "hover:border-emerald-500/40",
        skills: [
            { name: "Node.js", level: "Intermediate", icon: <ServerCog className="w-4 h-4" /> },
            { name: "Express.js", level: "Intermediate", icon: <FastForward className="w-4 h-4" /> },
            { name: "Python", level: "Intermediate", icon: <Terminal className="w-4 h-4" /> },
            { name: "Django", level: "Intermediate", icon: <MonitorSmartphone className="w-4 h-4" /> },
            { name: "Java", level: "Intermediate", icon: <Coffee className="w-4 h-4" /> },
            { name: "C# / .NET", level: "Intermediate", icon: <Code2 className="w-4 h-4" /> },
            { name: "PostgreSQL", level: "Advanced", icon: <Database className="w-4 h-4" /> },
            { name: "MySQL", level: "Advanced", icon: <Database className="w-4 h-4" /> },
            { name: "Firebase", level: "Advanced", icon: <Flame className="w-4 h-4" /> },
        ]
    },
    {
        title: "Tools & Ecosystems",
        icon: <Wrench className="w-6 h-6 text-amber-400" />,
        colorClass: "from-amber-500/20 to-orange-500/5",
        borderClass: "hover:border-amber-500/40",
        skills: [
            { name: "Git/GitHub", level: "Advanced", icon: <GitBranch className="w-4 h-4" /> },
            { name: "Postman", level: "Advanced", icon: <Wrench className="w-4 h-4" /> },
            { name: "Visual Studio", level: "Advanced", icon: <TerminalSquare className="w-4 h-4" /> },
            { name: "Docker", level: "Beginner", icon: <Container className="w-4 h-4" /> },
            { name: "GraphQL", level: "Beginner", icon: <Share2 className="w-4 h-4" /> },
            { name: "Figma", level: "Intermediate", icon: <Figma className="w-4 h-4" /> },
        ]
    }
];

const ProficiencyDots = ({ level }) => {
    let dots;
    let activeClass;
    switch(level) {
        case "Advanced":
            dots = 3;
            activeClass = "bg-primary shadow-[0_0_6px_rgba(255,255,255,0.2)]";
            break;
        case "Intermediate":
            dots = 2;
            activeClass = "bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.4)]";
            break;
        case "Beginner":
            dots = 1;
            activeClass = "bg-amber-400 shadow-[0_0_6px_rgba(251,191,36,0.4)]";
            break;
        default:
            dots = 0;
            activeClass = "bg-gray-500";
    }
    return (
        <div className="flex gap-1.5 items-center" title={`${level} Proficiency`}>
            {[1, 2, 3].map((i) => (
                <div 
                    key={i} 
                    className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${i <= dots ? activeClass : 'bg-gray-300 dark:bg-white/10'}`} 
                />
            ))}
        </div>
    );
};

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } }
};

export const SkillsSection = () => {
    return (
        <section id="skills" className="py-14 md:py-16 px-4 relative flex items-center justify-center bg-transparent">
            {/* Ambient Background Glows */}
            <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-1/4 left-1/4 w-[300px] h-[300px] bg-emerald-500/5 rounded-full blur-[80px] pointer-events-none" />

            <div className="container mx-auto max-w-7xl relative z-10 w-full">
                <motion.div 
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-7 md:mb-8"
                >
                    <h2 className="text-3xl sm:text-4xl md:text-4xl font-bold tracking-tight text-gray-900 dark:text-white transition-colors">
                        My <span className="text-primary">Skills</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6 items-start">
                    {skillsCategories.map((category, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className={cn(
                                "rounded-[1.5rem] border border-gray-200/60 dark:border-white/5 bg-white/70 dark:bg-[#0A0A0A]/80 backdrop-blur-xl relative overflow-hidden group shadow-md dark:shadow-xl transition-all duration-500 flex flex-col h-full",
                                category.borderClass
                            )}
                        >
                            {/* Inner Header Glow */}
                            <div className={cn("absolute top-0 left-0 right-0 h-24 bg-gradient-to-b opacity-40 -z-10", category.colorClass)} />
                            
                            {/* Card Header */}
                            <div className="p-4 sm:p-5 md:p-6 flex items-center gap-3 border-b border-gray-200/50 dark:border-white/5 transition-colors">
                                <div className="p-2.5 rounded-xl bg-gray-100 dark:bg-white/5 shadow-inner ring-1 ring-black/5 dark:ring-white/10 group-hover:scale-110 transition-transform duration-500">
                                    {category.icon}
                                </div>
                                <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 dark:text-white tracking-wide transition-colors">
                                    {category.title}
                                </h3>
                            </div>

                            {/* Skills List */}
                            <motion.ul 
                                variants={containerVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                className="p-4 sm:p-5 md:p-6 flex flex-col gap-2.5 sm:gap-3 flex-1"
                            >
                                {category.skills.map((skill, skillIdx) => (
                                    <motion.li 
                                        variants={itemVariants}
                                        key={skillIdx} 
                                        className="flex items-center justify-between group/item"
                                    >
                                        <div className="flex items-center gap-3 py-1">
                                            <div className="text-gray-400 dark:text-gray-500 w-4 h-4 group-hover/item:text-primary dark:group-hover/item:text-white transition-colors duration-300">
                                                {skill.icon}
                                            </div>
                                            <span className="text-gray-700 dark:text-gray-300 group-hover/item:text-gray-900 dark:group-hover/item:text-white font-medium text-sm transition-colors duration-300">
                                                {skill.name}
                                            </span>
                                        </div>
                                        <ProficiencyDots level={skill.level} />
                                    </motion.li>
                                ))}
                            </motion.ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};