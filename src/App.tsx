import { motion } from 'framer-motion';
import { 
  Scale, 
  FileText, 
  CheckCircle2, 
  Clock, 
  ChevronDown, 
  ExternalLink, 
  Briefcase, 
  GraduationCap, 
  Gavel,
  Mail,
  Award,
  Code,
  User
} from 'lucide-react';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function App() {
  return (
    <div className="min-h-screen bg-[var(--color-beige-200)] text-[var(--color-charcoal-800)] selection:bg-[var(--color-orange-muted)] selection:text-white pb-20">
      
      {/* Decorative top border */}
      <div className="h-2 w-full bg-[var(--color-charcoal-900)]"></div>

      <div className="max-w-4xl mx-auto px-6 pt-16">
        
        {/* Navigation / Header */}
        <header className="flex justify-between items-center mb-24 border-b border-[var(--color-beige-300)] pb-6">
          <div className="flex items-center gap-3">
            <Scale className="w-8 h-8 text-[var(--color-orange-muted)]" />
            <span className="font-serif font-bold text-xl tracking-tight">Case File</span>
          </div>
          <div className="text-sm font-medium px-3 py-1 bg-[var(--color-beige-300)] rounded-full text-[var(--color-charcoal-800)] flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse"></span>
            Case Status: Under Review ⚖️
          </div>
        </header>

        <main>
          {/* 1. Landing Hero */}
          <motion.section 
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="mb-32 relative"
          >
            {/* Stamp decorative */}
            <div className="absolute -right-4 -top-8 rotate-12 opacity-20 pointer-events-none">
              <div className="border-4 border-[var(--color-orange-muted)] text-[var(--color-orange-muted)] rounded-full w-32 h-32 flex items-center justify-center font-serif font-bold text-xl uppercase tracking-wider">
                Filed
              </div>
            </div>

            <div className="inline-flex items-center gap-2 px-4 py-2 border border-[var(--color-charcoal-800)] rounded-full text-sm font-bold uppercase tracking-widest mb-8">
              <FileText className="w-4 h-4" />
              Petition for Consideration
            </div>
            
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight">
              Ramandeep Kaur <span className="block text-[var(--color-orange-muted)] italic font-light">vs.</span> Missing Internship Opportunity
            </h1>
            
            <p className="text-xl md:text-2xl text-[var(--color-charcoal-800)]/80 mb-10 max-w-2xl leading-relaxed">
              Inspired by LegalZoom’s mission of making complex systems accessible to everyone.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 p-6 bg-white border border-[var(--color-beige-300)] shadow-sm rounded-lg">
              <div>
                <p className="text-xs uppercase tracking-widest text-[var(--color-charcoal-800)]/50 mb-1">Case ID</p>
                <p className="font-mono font-bold">LZ-2026-RK</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-[var(--color-charcoal-800)]/50 mb-1">Petitioner</p>
                <p className="font-bold">Ramandeep Kaur</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-[var(--color-charcoal-800)]/50 mb-1">Filed For</p>
                <p className="font-bold">Software Engineering Intern</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-[var(--color-charcoal-800)]/50 mb-1">Status</p>
                <p className="font-bold flex items-center gap-1">Awaiting Review <Clock className="w-4 h-4 text-yellow-600" /></p>
              </div>
            </div>

            <a href="#evidence" className="inline-flex items-center gap-2 bg-[var(--color-charcoal-900)] text-white px-8 py-4 rounded-lg font-medium hover:bg-[var(--color-orange-muted)] transition-colors duration-300">
              Review Case File
              <ChevronDown className="w-5 h-5 animate-bounce" />
            </a>
          </motion.section>

          {/* 2. Evidence Section */}
          <motion.section 
            id="evidence"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="mb-32"
          >
            <motion.div variants={fadeIn} className="mb-12">
              <h2 className="text-3xl font-serif font-bold mb-4 flex items-center gap-3">
                <Gavel className="w-8 h-8 text-[var(--color-orange-muted)]" />
                Submitted Evidence
              </h2>
              <div className="h-px w-full bg-[var(--color-beige-300)]"></div>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {/* Exhibit A */}
              <motion.div variants={fadeIn} className="bg-white p-8 border border-[var(--color-beige-300)] rounded-lg shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-1 bg-[var(--color-orange-muted)] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                <div className="text-[var(--color-orange-muted)] font-serif italic text-sm mb-4">Exhibit A</div>
                <h3 className="text-xl font-bold mb-4">Backend Engineering</h3>
                <ul className="space-y-3">
                  {['Node.js', 'Django', 'REST APIs', 'MongoDB', 'Express'].map((skill) => (
                    <li key={skill} className="flex items-center gap-2 text-sm font-medium">
                      <CheckCircle2 className="w-4 h-4 text-green-600" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Exhibit B */}
              <motion.div variants={fadeIn} className="bg-white p-8 border border-[var(--color-beige-300)] rounded-lg shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-1 bg-[var(--color-charcoal-900)] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                <div className="text-[var(--color-charcoal-900)] font-serif italic text-sm mb-4">Exhibit B</div>
                <h3 className="text-xl font-bold mb-4">Problem Solving</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2 text-sm font-medium">
                    <Award className="w-4 h-4 text-yellow-600" />
                    LeetCode Knight
                  </li>
                  <li className="flex items-center gap-2 text-sm font-medium">
                    <CheckCircle2 className="w-4 h-4 text-green-600" />
                    1862 Rating
                  </li>
                  <li className="flex items-center gap-2 text-sm font-medium">
                    <CheckCircle2 className="w-4 h-4 text-green-600" />
                    Top 6% Globally
                  </li>
                </ul>
              </motion.div>

              {/* Exhibit C */}
              <motion.div variants={fadeIn} className="bg-white p-8 border border-[var(--color-beige-300)] rounded-lg shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-1 bg-[var(--color-orange-muted)] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                <div className="text-[var(--color-orange-muted)] font-serif italic text-sm mb-4">Exhibit C</div>
                <h3 className="text-xl font-bold mb-4">Projects</h3>
                <ul className="space-y-4">
                  <li>
                    <a href="https://github.com/raman-deep-kaur/Hospital-Management-System" target="_blank" rel="noopener noreferrer" className="font-bold flex items-center gap-1 hover:text-[var(--color-orange-muted)] transition-colors">
                      CURA <ExternalLink className="w-3 h-3" />
                    </a>
                    <p className="text-xs text-[var(--color-charcoal-800)]/70 mt-1">Healthcare platform backend</p>
                  </li>
                  <li>
                    <a href="https://github.com/raman-deep-kaur/SkyVoyage" target="_blank" rel="noopener noreferrer" className="font-bold flex items-center gap-1 hover:text-[var(--color-orange-muted)] transition-colors">
                      Flight Optimization Engine <ExternalLink className="w-3 h-3" />
                    </a>
                    <p className="text-xs text-[var(--color-charcoal-800)]/70 mt-1">Algorithm-heavy routing system</p>
                  </li>
                </ul>
              </motion.div>
            </div>
          </motion.section>

          {/* 3. Timeline / Case Proceedings */}
          <motion.section 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="mb-32"
          >
            <motion.div variants={fadeIn} className="mb-12">
              <h2 className="text-3xl font-serif font-bold mb-4">Case Proceedings</h2>
              <div className="h-px w-full bg-[var(--color-beige-300)]"></div>
            </motion.div>

            <div className="relative border-l-2 border-[var(--color-beige-300)] ml-4 md:ml-6 space-y-12">
              {[
                { year: '2022', text: 'Joined NIT Delhi', icon: GraduationCap },
                { year: '2023', text: 'Competitive Programming grind', icon: Clock },
                { year: '2024', text: 'Built complex MERN projects', icon: FileText },
                { year: '2025', text: 'Advanced Backend Engineering', icon: Code },
                { year: 'May 2026', text: 'Backend Contributor @ Deccan AI', icon: Briefcase },
                { year: '2026', text: 'Applying to LegalZoom 😄', icon: Scale, highlight: true },
              ].map((item) => (
                <motion.div key={item.year} variants={fadeIn} className="relative pl-8">
                  <span className={`absolute -left-[17px] top-1 rounded-full p-1.5 ${item.highlight ? 'bg-[var(--color-orange-muted)] text-white' : 'bg-white border-2 border-[var(--color-beige-300)]'}`}>
                    <item.icon className="w-4 h-4" />
                  </span>
                  <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                    <span className={`font-mono font-bold text-lg ${item.highlight ? 'text-[var(--color-orange-muted)]' : 'text-[var(--color-charcoal-800)]/50'}`}>
                      {item.year}
                    </span>
                    <span className="text-xl font-serif">
                      {item.text}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* 4. Why LegalZoom? */}
          <motion.section 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="mb-32 bg-[var(--color-charcoal-900)] text-[var(--color-beige-200)] p-10 md:p-16 rounded-xl shadow-xl relative overflow-hidden"
          >
            <Scale className="absolute -right-10 -top-10 w-64 h-64 text-white/5 pointer-events-none" />
            
            <div className="text-[var(--color-orange-muted)] font-serif italic text-lg mb-6">Testimony</div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-8 leading-tight">
              Why LegalZoom?
            </h2>
            
            <div className="space-y-6 text-lg md:text-xl leading-relaxed max-w-3xl relative z-10">
              <p>
                What stood out to me about LegalZoom wasn’t just the engineering scale, but the idea of using technology to simplify something traditionally complex and inaccessible.
              </p>
              <p>
                Making legal help accessible to everyone is a mission that resonates with me. That balance of meaningful impact and strong engineering is exactly the kind of environment I hope to grow in as an engineer.
              </p>
              <p className="font-serif italic text-white/80 mt-8">
                "I want to build scalable systems that solve real-world problems for millions."
              </p>
            </div>
          </motion.section>

          {/* 5. Final CTA */}
          <motion.section 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="text-center py-20 border-t-2 border-[var(--color-charcoal-800)] border-dashed"
          >
            <div className="inline-block border-2 border-[var(--color-charcoal-800)] px-6 py-2 rounded-full font-serif text-xl font-bold uppercase tracking-widest mb-12 transform -rotate-2">
              Verdict Pending ⚖️
            </div>

            <p className="text-2xl md:text-3xl font-serif max-w-2xl mx-auto mb-12">
              "If this petition deserves consideration, I’d love the opportunity to interview."
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-20">
              <a href="https://drive.google.com/file/d/1fEytihDcAUIxpr7UG60EGmL9Vjg7tlKW/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-[var(--color-charcoal-900)] text-white px-6 py-3 rounded-lg font-medium hover:bg-black transition-colors">
                <FileText className="w-5 h-5" /> Resume
              </a>
              <a href="https://github.com/raman-deep-kaur" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-white border border-[var(--color-beige-300)] px-6 py-3 rounded-lg font-medium hover:border-[var(--color-charcoal-800)] transition-colors shadow-sm">
                <Code className="w-5 h-5" /> GitHub
              </a>
              <a href="https://www.linkedin.com/in/ramandeep-kaur-ba36aa285" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-white border border-[var(--color-beige-300)] px-6 py-3 rounded-lg font-medium hover:border-[var(--color-charcoal-800)] transition-colors shadow-sm">
                <User className="w-5 h-5" /> LinkedIn
              </a>
              <a href="https://leetcode.com/u/ramandeep-kaur/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-white border border-[var(--color-beige-300)] px-6 py-3 rounded-lg font-medium hover:border-[var(--color-charcoal-800)] transition-colors shadow-sm">
                <Award className="w-5 h-5" /> LeetCode
              </a>
              <a href="mailto:ramandeepkaur002001@gmail.com" className="flex items-center gap-2 bg-white border border-[var(--color-beige-300)] px-6 py-3 rounded-lg font-medium hover:border-[var(--color-charcoal-800)] transition-colors shadow-sm">
                <Mail className="w-5 h-5" /> Email
              </a>
            </div>
          </motion.section>

        </main>

        <footer className="text-center text-sm font-medium text-[var(--color-charcoal-800)]/60 pt-8 border-t border-[var(--color-beige-300)]">
          <p>Attempting to make internship applications slightly more legal since 2026.</p>
          <p className="mt-2 text-xs opacity-70">Built with admiration for the team at LegalZoom.</p>
        </footer>
      </div>
    </div>
  );
}
