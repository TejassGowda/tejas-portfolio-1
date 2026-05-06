/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, ReactNode } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin, 
  Download, 
  ExternalLink,
  Brain,
  Code,
  Laptop,
  Database,
  ArrowRight,
  Menu,
  X,
  ChevronRight
} from "lucide-react";
import { PORTFOLIO_DATA } from "./constants";
import AIChat from "./components/AIChat";

const icons = {
  Brain: Brain,
  Code: Code,
  LaptopCode: Laptop,
  Database: Database
};

export default function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "skills", "projects", "certificates", "contact"];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top >= 0 && rect.top <= 300;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#020617] text-gray-100 font-sans selection:bg-blue-500/30">
      <Navbar activeSection={activeSection} setIsMobileMenuOpen={setIsMobileMenuOpen} isMobileMenuOpen={isMobileMenuOpen} />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section id="home" className="min-height-[90vh] pt-32 pb-20 flex flex-col lg:flex-row items-center justify-between gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center lg:text-left"
          >
            <span className="inline-block px-4 py-1.5 mb-6 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium tracking-wide">
              Software Engineer & ML Enthusiast
            </span>
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black tracking-tight leading-none mb-6">
              Tejas
            </h1>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent animate-gradient-x">
              Turning Data into <br />
              Intelligent Applications.
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto lg:mx-0 mb-10 leading-relaxed">
              {PORTFOLIO_DATA.summary}
            </p>
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <a 
                href="#contact" 
                className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold transition-all transform hover:-translate-y-1 shadow-lg shadow-blue-600/20"
              >
                Let's Talk
              </a>
              <div className="flex items-center gap-3 px-2">
                <SocialLink href={PORTFOLIO_DATA.contact.github} icon={<Github className="w-5 h-5" />} />
                <SocialLink href={PORTFOLIO_DATA.contact.linkedin} icon={<Linkedin className="w-5 h-5" />} />
              </div>
            </div>
          </motion.div>

          {/* Profile Representation */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, type: "spring" }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-[3rem] blur-2xl opacity-20 animate-pulse" />
            <div className="relative w-64 h-80 sm:w-80 sm:h-96 bg-gray-800 rounded-[2.5rem] border border-gray-700 overflow-hidden shadow-2xl">
               <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/80" />
               <div className="absolute bottom-6 left-6 right-6">
                 <p className="text-blue-400 font-mono text-sm mb-1">class Engineer {'{'}</p>
                 <p className="text-gray-300 ml-4 font-mono text-xs">specialization: 'ML',</p>
                 <p className="text-gray-300 ml-4 font-mono text-xs">status: 'Building',</p>
                 <p className="text-blue-400 font-mono text-sm">{'}'}</p>
               </div>
               {/* Note: In a real app we'd use the scanned profile.png here */}
               <div className="w-full h-full bg-gray-700 flex items-center justify-center">
                 <Brain className="w-16 h-16 text-gray-600" />
               </div>
            </div>
          </motion.div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-24 border-t border-gray-800/50">
          <SectionHeader title="Expertise" subtitle="My Technical Skillset" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PORTFOLIO_DATA.skills.map((skill, i) => {
              const Icon = icons[skill.icon as keyof typeof icons] || Brain;
              return (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="group bg-gray-900/50 p-8 rounded-3xl border border-gray-800 hover:border-blue-500/50 hover:bg-gray-800/50 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-blue-500/20 transition-transform">
                    <Icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{skill.name}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{skill.description}</p>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-24 border-t border-gray-800/50">
          <SectionHeader title="Portfolio" subtitle="Featured Projects" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {PORTFOLIO_DATA.projects.map((project, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                viewport={{ once: true }}
                className="group relative bg-gray-900/50 rounded-[2.5rem] border border-gray-800 overflow-hidden hover:border-gray-700 transition-colors"
                id={`project-card-${i}`}
              >
                <div className="aspect-video bg-gray-800 flex items-center justify-center">
                  <div className="text-gray-600 opacity-20 uppercase font-black text-4xl -rotate-12 select-none">
                    {project.title.split(' ')[0]}
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex gap-2 mb-4">
                    {project.tech.map((t, idx) => (
                      <span key={idx} className="text-[10px] uppercase tracking-widest px-3 py-1 rounded-full bg-gray-800 text-gray-400 border border-gray-700">
                        {t}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 flex items-center justify-between">
                    {project.title}
                    <ArrowRight className="w-5 h-5 text-blue-500 transform -translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all" />
                  </h3>
                  <p className="text-gray-400 mb-8 max-w-md">{project.description}</p>
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    View Project <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
                {/* Decorative glow */}
                <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-100 transition-opacity">
                   <div className="w-24 h-24 bg-blue-500/10 rounded-full blur-2xl" />
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Certifications & Recognition */}
        <section id="certificates" className="py-24 border-t border-gray-800/50">
          <SectionHeader title="Credentials" subtitle="Certifications" />
          <div className="flex overflow-x-auto pb-8 gap-6 snap-x no-scrollbar">
            {PORTFOLIO_DATA.certifications.map((cert, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="flex-shrink-0 w-80 snap-start bg-gray-900 border border-gray-800 p-8 rounded-3xl flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 bg-purple-500/10 rounded-xl flex items-center justify-center mb-6">
                    <ChevronRight className="w-5 h-5 text-purple-400" />
                  </div>
                  <h4 className="text-lg font-bold mb-2">{cert.title}</h4>
                  <p className="text-sm text-gray-500 uppercase tracking-widest">{cert.provider}</p>
                </div>
                <a href={cert.link} target="_blank" rel="noreferrer" className="mt-8 text-xs font-bold text-gray-400 hover:text-white flex items-center gap-2">
                  VIEW CREDENTIAL <ArrowRight className="w-3 h-3" />
                </a>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 border-t border-gray-800/50 mb-20">
          <div className="bg-gradient-to-b from-blue-600 to-purple-800 rounded-[3rem] p-8 sm:p-16 relative overflow-hidden">
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">Let's build something <br /> intelligent together.</h2>
                <p className="text-blue-100 text-lg mb-10 max-w-md">Currently open to new opportunities in ML, AI, and Software Development.</p>
                <div className="space-y-4">
                   <ContactItem icon={<Mail className="w-5 h-5" />} text={PORTFOLIO_DATA.contact.email} />
                   <ContactItem icon={<Phone className="w-5 h-5" />} text={PORTFOLIO_DATA.contact.phone} />
                   <ContactItem icon={<MapPin className="w-5 h-5" />} text={PORTFOLIO_DATA.contact.location} />
                </div>
              </div>
              <div className="flex flex-col items-center lg:items-end gap-6 text-white text-center lg:text-right">
                <a 
                  href={`mailto:${PORTFOLIO_DATA.contact.email}`}
                  className="w-full sm:w-auto px-10 py-5 bg-white text-blue-900 rounded-2xl font-bold text-lg hover:bg-gray-100 transition-all transform hover:-translate-y-1 shadow-2xl"
                >
                  Message Me
                </a>
                <div className="flex items-center gap-4">
                  <a href={PORTFOLIO_DATA.contact.linkedin} className="text-white hover:text-blue-200 transition-colors underline underline-offset-8">LinkedIn</a>
                  <a href={PORTFOLIO_DATA.contact.github} className="text-white hover:text-blue-200 transition-colors underline underline-offset-8">GitHub</a>
                </div>
              </div>
            </div>
            {/* Background patterns */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
          </div>
        </section>
      </main>

      <Footer />
      <AIChat />

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-gray-900/95 backdrop-blur-lg flex flex-col items-center justify-center"
          >
            <button onClick={() => setIsMobileMenuOpen(false)} className="absolute top-8 right-8 text-white">
              <X className="w-8 h-8" />
            </button>
            <div className="flex flex-col gap-8 text-center">
              {["home", "skills", "projects", "certificates", "contact"].map((nav) => (
                <a 
                  key={nav} 
                  href={`#${nav}`} 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-4xl font-black capitalize hover:text-blue-500 transition-colors"
                >
                  {nav}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function Navbar({ activeSection, setIsMobileMenuOpen }: any) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-[#020617]/80 backdrop-blur-md border-b border-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <a href="#home" className="text-2xl font-black tracking-tighter hover:text-blue-500 transition-colors">
          TEJAS<span className="text-blue-500">.</span>
        </a>
        
        <div className="hidden md:flex items-center gap-10">
          {["home", "skills", "projects", "certificates", "contact"].map((nav) => (
            <a 
              key={nav} 
              href={`#${nav}`} 
              className={`text-xs uppercase tracking-[0.2em] font-bold transition-all ${
                activeSection === nav ? "text-blue-500" : "text-gray-400 hover:text-white"
              }`}
            >
              {nav}
            </a>
          ))}
          <a href="/resume.pdf" className="px-5 py-2 bg-blue-600/10 border border-blue-500/30 text-blue-400 rounded-lg text-xs font-bold hover:bg-blue-600 hover:text-white transition-all flex items-center gap-2">
            RESUME <Download className="w-3 h-3" />
          </a>
        </div>

        <button onClick={() => setIsMobileMenuOpen(true)} className="md:hidden text-white">
          <Menu className="w-6 h-6" />
        </button>
      </div>
    </nav>
  );
}

function SectionHeader({ title, subtitle }: { title: string, subtitle: string }) {
  return (
    <div className="mb-16">
      <span className="text-xs font-bold text-blue-500 uppercase tracking-widest block mb-3">
        {title}
      </span>
      <h2 className="text-4xl sm:text-5xl font-black tracking-tight">{subtitle}</h2>
    </div>
  );
}

function SocialLink({ href, icon }: { href: string, icon: ReactNode }) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noreferrer"
      className="w-12 h-12 rounded-xl bg-gray-800 border border-gray-700 flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-700 transition-all hover:-translate-y-1"
    >
      {icon}
    </a>
  );
}

function ContactItem({ icon, text }: { icon: ReactNode, text: string }) {
  return (
    <div className="flex items-center gap-4 text-blue-100">
      <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm">
        {icon}
      </div>
      <span className="font-medium">{text}</span>
    </div>
  );
}

function Footer() {
  return (
    <footer className="py-12 border-t border-gray-900 text-center">
      <p className="text-gray-500 text-xs tracking-widest uppercase mb-4">
        © {new Date().getFullYear()} Tejas • Designed for Excellence
      </p>
      <div className="flex items-center justify-center gap-6">
        <a href={PORTFOLIO_DATA.contact.github} className="text-gray-600 hover:text-white transition-colors"><Github className="w-5 h-5" /></a>
        <a href={PORTFOLIO_DATA.contact.linkedin} className="text-gray-600 hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
      </div>
    </footer>
  );
}
