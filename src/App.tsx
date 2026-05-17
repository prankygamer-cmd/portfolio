/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from "motion/react";
import { 
  Github, 
  Linkedin, 
  Mail, 
  Download, 
  ExternalLink, 
  MapPin, 
  Code2, 
  Terminal, 
  Database, 
  Wrench, 
  Cpu, 
  Users, 
  Trophy, 
  Award, 
  Camera, 
  GraduationCap,
  Send,
  Menu,
  X
} from "lucide-react";
import React, { useState, useEffect } from "react";

// Types
interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  github?: string;
  demo?: string;
}

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: string[];
}

interface Experience {
  role: string;
  organization: string;
  period: string;
  description: string;
  icon: React.ReactNode;
}

interface Achievement {
  title: string;
  description: string;
  icon: React.ReactNode;
}

// Data
const PROJECTS: Project[] = [
  {
    title: "Auto Mob-Mechanic",
    description: "Modern automobile service booking web application with online booking system and customer-focused UI. Built with responsive frontend design.",
    image: "/src/assets/images/auto_mechanic_project_1779042488535.png",
    tags: ["React", "JavaScript", "CSS", "Responsive Design"],
    github: "https://github.com"
  },
  {
    title: "Food Munch Website",
    description: "Food discovery and ordering style website with modern UI implementation and fully responsive design for optimal user experience.",
    image: "/src/assets/images/food_munch_project_1779042506720.png",
    tags: ["HTML", "CSS", "Bootstrap", "JavaScript"],
    demo: "https://demo.com"
  },
  {
    title: "Optimal Ambulance Positioning System",
    description: "Road accident response optimization system using deep embedded clustering for data-driven emergency response improvement.",
    image: "/src/assets/images/ambulance_positioning_project_1779042524291.png",
    tags: ["Python", "Machine Learning", "Data Science", "Clustering"]
  }
];

const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Frontend",
    icon: <Code2 className="w-5 h-5 text-blue-500" />,
    skills: ["HTML5", "CSS3", "JavaScript", "React", "Bootstrap", "Tailwind CSS"]
  },
  {
    title: "Programming",
    icon: <Terminal className="w-5 h-5 text-blue-500" />,
    skills: ["Python", "Java", "JavaScript", "SQL"]
  },
  {
    title: "Database",
    icon: <Database className="w-5 h-5 text-blue-500" />,
    skills: ["SQL", "MongoDB", "MySQL"]
  },
  {
    title: "Tools",
    icon: <Wrench className="w-5 h-5 text-blue-500" />,
    skills: ["Git", "GitHub", "VS Code", "Figma"]
  },
  {
    title: "Backend Basics",
    icon: <Cpu className="w-5 h-5 text-blue-500" />,
    skills: ["Node.js", "Express", "REST APIs"]
  },
  {
    title: "Soft Skills",
    icon: <Users className="w-5 h-5 text-blue-500" />,
    skills: ["Team Collaboration", "Problem Solving", "Communication", "Leadership"]
  }
];

const EXPERIENCES: Experience[] = [
  {
    role: "Student Coordinator",
    organization: "College Technical Club",
    period: "2022 - 2023",
    description: "Led technical events and workshops, coordinating with team members and managing project timelines.",
    icon: <Users className="w-4 h-4" />
  },
  {
    role: "Digital Head",
    organization: "Student Organization",
    period: "2021 - 2022",
    description: "Managed digital presence and social media strategy, creating engaging content and increasing online reach.",
    icon: <Terminal className="w-4 h-4" />
  },
  {
    role: "Workshop Facilitator",
    organization: "Various Technical Events",
    period: "2021 - Present",
    description: "Organized and facilitated technical workshops on web development, programming, and emerging technologies.",
    icon: <Cpu className="w-4 h-4" />
  },
  {
    role: "Ethical Hacking Workshop",
    organization: "IIT Hyderabad",
    period: "2022",
    description: "Participated in intensive ethical hacking workshop covering cybersecurity principles and penetration testing.",
    icon: <Award className="w-4 h-4" />
  }
];

const ACHIEVEMENTS: Achievement[] = [
  {
    title: "Karate Black Belt",
    description: "Achieved Black Belt in Karate with national and state level medals in competitions.",
    icon: <Trophy className="w-6 h-6 text-blue-500" />
  },
  {
    title: "National & State Medals",
    description: "Multiple medals in national and state level karate championships.",
    icon: <Award className="w-6 h-6 text-blue-500" />
  },
  {
    title: "Photography & Photo Editing",
    description: "Passionate about photography and skilled in photo editing to create compelling visual stories.",
    icon: <Camera className="w-6 h-6 text-blue-500" />
  },
  {
    title: "Academic Excellence",
    description: "Consistent academic performance throughout Computer Science program with focus on practical applications.",
    icon: <GraduationCap className="w-6 h-6 text-blue-500" />
  }
];

// Components
const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a 
    href={href} 
    className="text-gray-400 hover:text-white transition-colors text-sm font-medium"
  >
    {children}
  </a>
);

const Section = ({ id, children, className = "" }: { id?: string; children: React.ReactNode; className?: string }) => (
  <section id={id} className={`py-20 px-6 max-w-7xl mx-auto ${className}`}>
    {children}
  </section>
);

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-brand-dark/80 backdrop-blur-md py-4 border-b border-brand-border" : "bg-transparent py-6"}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-xl font-black tracking-tighter text-white"
          >
            RC
          </motion.div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink href="#about">About</NavLink>
            <NavLink href="#skills">Skills</NavLink>
            <NavLink href="#projects">Projects</NavLink>
            <NavLink href="#experience">Experience</NavLink>
            <NavLink href="#contact">Contact</NavLink>
            <motion.a 
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-brand-blue hover:bg-blue-600 text-white px-6 py-2 rounded-lg text-sm font-bold transition-colors"
            >
              Let's Talk
            </motion.a>
          </div>

          {/* Mobile Nav Toggle */}
          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-0 right-0 bg-brand-dark border-b border-brand-border p-6 flex flex-col space-y-4 md:hidden"
            >
              <a href="#about" onClick={() => setIsMenuOpen(false)} className="text-gray-400 hover:text-white">About</a>
              <a href="#skills" onClick={() => setIsMenuOpen(false)} className="text-gray-400 hover:text-white">Skills</a>
              <a href="#projects" onClick={() => setIsMenuOpen(false)} className="text-gray-400 hover:text-white">Projects</a>
              <a href="#experience" onClick={() => setIsMenuOpen(false)} className="text-gray-400 hover:text-white">Experience</a>
              <a href="#contact" onClick={() => setIsMenuOpen(false)} className="text-gray-400 hover:text-white">Contact</a>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 min-h-screen flex items-center justify-center overflow-hidden">
        {/* Subtle background element */}
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-blue/20 blur-[120px] rounded-full" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-blue/10 blur-[120px] rounded-full" />
        </div>

        {/* Decorative Sun/Star in top right */}
        <div className="absolute top-40 right-10 md:right-20 opacity-40 animate-pulse">
           <div className="relative w-12 h-12">
             <div className="absolute inset-0 bg-yellow-500/20 blur-xl" />
             <svg viewBox="0 0 24 24" className="w-full h-full text-yellow-500 fill-yellow-500">
               <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 5.106a.75.75 0 011.06 0l1.591 1.591a.75.75 0 11-1.06 1.06l-1.591-1.591a.75.75 0 010-1.06zM21.75 12a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V12a.75.75 0 01.75-.75zM18.894 18.894a.75.75 0 011.06 1.06l-1.591 1.591a.75.75 0 11-1.061-1.06l1.592-1.591zM12 21.75a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V22.5a.75.75 0 01.75-.75zM5.106 18.894l-1.591 1.591a.75.75 0 11-1.061-1.06l1.591-1.592a.75.75 0 011.06 1.06zM2.25 12a.75.75 0 01.75-.75h2.25a.75.75 0 010 1.5H3a.75.75 0 01-.75-.75zM5.106 5.106a.75.75 0 010 1.06l-1.591 1.591a.75.75 0 01-1.06-1.06l1.591-1.591a.75.75 0 011.06 0z" />
             </svg>
           </div>
        </div>

        <div className="max-w-4xl w-full text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2 bg-brand-blue/10 border border-brand-blue/20 px-4 py-1.5 rounded-full text-brand-blue text-xs font-semibold mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            <span>Available for new opportunities</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-black mb-6 tracking-tight"
          >
            Ruthvik Chandran Adepu
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-400 mb-6 font-medium"
          >
            Frontend Developer | Computer Science Graduate
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg text-gray-500 max-w-2xl mx-auto mb-8 leading-relaxed"
          >
            Focused on building scalable and user-friendly digital experiences. Passionate about modern web technologies and creating impactful solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex items-center justify-center space-x-2 text-gray-400 mb-10 text-sm"
          >
            <MapPin className="w-4 h-4 text-blue-500" />
            <span>Hyderabad, India</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <button className="w-full sm:w-auto bg-brand-blue hover:bg-blue-600 text-white px-10 py-4 rounded-xl font-bold transition-all shadow-lg shadow-blue-500/20 active:scale-95">
              View Work
            </button>
            <button className="w-full sm:w-auto bg-brand-card hover:bg-brand-border text-white border border-brand-border px-10 py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-2 active:scale-95">
              <Download className="w-4 h-4" />
              Download Resume
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex items-center justify-center space-x-6"
          >
            <a href="https://github.com" className="text-gray-500 hover:text-white transition-colors"><Github className="w-6 h-6" /></a>
            <a href="https://linkedin.com" className="text-gray-500 hover:text-white transition-colors"><Linkedin className="w-6 h-6" /></a>
            <a href="mailto:email@example.com" className="text-gray-500 hover:text-white transition-colors"><Mail className="w-6 h-6" /></a>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <Section id="about">
        <span className="section-title">About Me</span>
        <h2 className="section-heading">Building Digital Experiences</h2>
        
        <div className="grid md:grid-cols-1 gap-12 items-center max-w-3xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-brand-card border border-brand-border p-8 rounded-3xl"
          >
            <div className="space-y-6 text-gray-400 leading-relaxed text-lg">
              <p>
                Computer Science graduate passionate about frontend development and creating scalable, user-friendly digital experiences. My journey in technology is driven by continuous learning and a deep interest in modern web technologies.
              </p>
              <p>
                With a strong foundation in programming and web development, I specialize in building responsive, performant applications that solve real-world problems. I believe in writing clean, maintainable code and following best practices.
              </p>
              <p>
                Beyond coding, I'm interested in UI/UX design principles, ensuring that every project not only works flawlessly but also provides an exceptional user experience. My goal is to bridge the gap between design and functionality.
              </p>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Skills Section */}
      <Section id="skills" className="bg-brand-dark/50">
        <span className="section-title">Skills & Technologies</span>
        <h2 className="section-heading">Technical Expertise</h2>

        <div className="flex flex-wrap justify-center gap-4 mb-16 max-w-4xl mx-auto">
          {["React", "JavaScript", "Python", "HTML5", "CSS3", "Node.js", "Git", "MongoDB", "Tailwind CSS"].map((skill) => (
            <motion.div
              key={skill}
              whileHover={{ y: -5 }}
              className="px-8 py-4 bg-brand-card border border-brand-border rounded-2xl text-gray-400 hover:text-white hover:border-brand-blue/50 transition-all font-medium"
            >
              {skill}
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-brand-card border border-brand-border p-8 rounded-3xl hover:border-brand-blue/30 transition-colors group"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-3 bg-brand-blue/10 rounded-2xl group-hover:bg-brand-blue group-hover:text-white transition-colors">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map(skill => (
                  <span key={skill} className="px-4 py-2 bg-brand-dark border border-brand-border rounded-xl text-sm text-gray-400 group-hover:text-white transition-colors">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Projects Section */}
      <Section id="projects">
        <span className="section-title">Featured Work</span>
        <h2 className="section-heading">Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-brand-card border border-brand-border rounded-3xl overflow-hidden group hover:border-brand-blue/30 transition-all flex flex-col h-full"
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
                  <div className="flex gap-4">
                    {project.github && (
                      <a href={project.github} className="bg-white text-black p-3 rounded-full hover:scale-110 transition-transform">
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                    {project.demo && (
                      <a href={project.demo} className="bg-brand-blue text-white p-3 rounded-full hover:scale-110 transition-transform">
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                <p className="text-gray-500 mb-6 flex-grow">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-brand-dark border border-brand-border rounded-lg text-xs text-gray-400">
                      {tag}
                    </span>
                  ))}
                </div>
                {project.github && (
                  <a href={project.github} className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors">
                    <Github className="w-4 h-4" />
                    GitHub
                  </a>
                )}
                {project.demo && !project.github && (
                  <a href={project.demo} className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors">
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Experience Section */}
      <Section id="experience" className="bg-brand-dark/50">
        <span className="section-title">Experience & Leadership</span>
        <h2 className="section-heading">Professional Journey</h2>

        <div className="max-w-4xl mx-auto">
          <div className="relative space-y-12 before:absolute before:left-8 before:top-2 before:bottom-2 before:w-[2px] before:bg-brand-border">
            {EXPERIENCES.map((exp, idx) => (
              <motion.div
                key={exp.role + exp.organization}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative pl-16 group"
              >
                <div className="absolute left-0 top-0 w-16 h-16 flex items-center justify-center">
                  <div className="w-4 h-4 rounded-full bg-brand-border group-hover:bg-brand-blue group-hover:scale-150 transition-all z-10" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-brand-blue/10 border border-brand-blue/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
                <div className="bg-brand-card border border-brand-border p-8 rounded-3xl group-hover:border-brand-blue/30 transition-colors">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <div>
                      <div className="flex items-center space-x-2 text-blue-500 mb-1">
                        {exp.icon}
                        <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                      </div>
                      <p className="text-gray-400 font-medium">{exp.organization}</p>
                    </div>
                    <span className="text-sm font-mono text-gray-600 mt-2 md:mt-0">{exp.period}</span>
                  </div>
                  <p className="text-gray-500 leading-relaxed">{exp.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Achievements Section */}
      <Section id="achievements">
        <span className="section-title">Achievements</span>
        <h2 className="section-heading">Beyond Coding</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {ACHIEVEMENTS.map((achievement, idx) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-brand-card border border-brand-border p-8 rounded-3xl flex items-start space-x-6 group hover:border-brand-blue/30 transition-colors"
            >
              <div className="p-4 bg-brand-blue/10 rounded-2xl group-hover:bg-brand-blue group-hover:text-white transition-all transform group-hover:rotate-6">
                {achievement.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">{achievement.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{achievement.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Contact Section */}
      <Section id="contact">
        <span className="section-title">Get In Touch</span>
        <h2 className="section-heading">Let's Connect</h2>
        <p className="text-center text-gray-500 max-w-2xl mx-auto mb-16">
          Have a project in mind or want to collaborate? Feel free to reach out. I'm always open to discussing new opportunities.
        </p>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-8">
            <h3 className="text-2xl font-bold mb-8">Contact Information</h3>
            
            <motion.div whileHover={{ x: 10 }} className="flex items-center space-x-4 group">
              <div className="p-4 bg-brand-card border border-brand-border rounded-2xl group-hover:bg-brand-blue/10 group-hover:border-brand-blue transition-all">
                <Mail className="w-6 h-6 text-blue-500" />
              </div>
              <div>
                <p className="text-xs text-gray-600 uppercase font-bold tracking-widest mb-1">Email</p>
                <a href="mailto:adepuruthvikchandran@gmail.com" className="text-gray-300 hover:text-white transition-colors">adepuruthvikchandran@gmail.com</a>
              </div>
          </motion.div>

            <motion.div whileHover={{ x: 10 }} className="flex items-center space-x-4 group">
              <div className="p-4 bg-brand-card border border-brand-border rounded-2xl group-hover:bg-brand-blue/10 group-hover:border-brand-blue transition-all">
                <Github className="w-6 h-6 text-blue-500" />
              </div>
              <div>
                <p className="text-xs text-gray-600 uppercase font-bold tracking-widest mb-1">GitHub</p>
                <a href="https://github.com/RuthvikChandran123" className="text-gray-300 hover:text-white transition-colors">@RuthvikChandran123</a>
              </div>
            </motion.div>

            <motion.div whileHover={{ x: 10 }} className="flex items-center space-x-4 group">
              <div className="p-4 bg-brand-card border border-brand-border rounded-2xl group-hover:bg-brand-blue/10 group-hover:border-brand-blue transition-all">
                <Linkedin className="w-6 h-6 text-blue-500" />
              </div>
              <div>
                <p className="text-xs text-gray-600 uppercase font-bold tracking-widest mb-1">LinkedIn</p>
                <a href="https://linkedin.com/in/ruthvik-chandran" className="text-gray-300 hover:text-white transition-colors">Ruthvik Chandran</a>
              </div>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.form 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 bg-brand-card border border-brand-border p-10 rounded-[2.5rem] space-y-6"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400">Name</label>
                <input 
                  type="text" 
                  placeholder="Your name"
                  className="w-full bg-brand-dark border border-brand-border rounded-xl px-5 py-3 focus:outline-none focus:border-brand-blue transition-colors text-white"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400">Email</label>
                <input 
                  type="email" 
                  placeholder="your.email@example.com"
                  className="w-full bg-brand-dark border border-brand-border rounded-xl px-5 py-3 focus:outline-none focus:border-brand-blue transition-colors text-white"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-400">Message</label>
              <textarea 
                rows={5} 
                placeholder="Your message"
                className="w-full bg-brand-dark border border-brand-border rounded-xl px-5 py-3 focus:outline-none focus:border-brand-blue transition-colors text-white resize-none"
              ></textarea>
            </div>
            <button className="w-full bg-brand-blue hover:bg-blue-600 text-white font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-500/20 active:scale-[0.98]">
              <Send className="w-4 h-4" />
              Send Message
            </button>
          </motion.form>
        </div>
      </Section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-brand-border bg-brand-card/30">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-gray-500 text-sm">
            <p>© 2026 Ruthvik Chandran Adepu. All rights reserved.</p>
            <p className="mt-1 flex items-center gap-1.5 justify-center md:justify-start">
              Built with <span className="text-blue-500 text-lg">🩵</span> using React & Tailwind CSS
            </p>
          </div>
          
          <div className="flex items-center space-x-6">
            <a href="https://github.com" className="text-gray-500 hover:text-white transition-colors"><Github className="w-5 h-5" /></a>
            <a href="https://linkedin.com" className="text-gray-500 hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
            <a href="mailto:email@example.com" className="text-gray-500 hover:text-white transition-colors"><Mail className="w-5 h-5" /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}
