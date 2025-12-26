import { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Contact from './pages/Contact';
import Skills from './pages/Skills';
import About from './pages/About';
import Hero from "./pages/Hero";
import { navLinks, type Project } from "./data/PortfolioData"

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  // 2. useState에 'any' 대신 구체적인 'Project' 타입 지정
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);

  // 스크롤 감지 로직
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      setScrolled(container.scrollTop > 50);

      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top >= -window.innerHeight / 2 && rect.top < window.innerHeight / 2;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);
    // 상세 페이지가 열려있다면 닫고 이동
    setSelectedProject(null);

    // 약간의 지연을 주어 모달이 닫힌 후 스크롤되도록 함
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div
      ref={containerRef}
      className={`h-screen bg-slate-900 text-slate-100 font-sans selection:bg-teal-500 selection:text-white overflow-y-scroll overflow-x-hidden snap-y snap-mandatory scroll-smooth ${selectedProject ? 'overflow-hidden' : ''}`}
    >
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900/90 backdrop-blur-md shadow-lg py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div
            className="text-2xl font-bold bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent cursor-pointer"
            onClick={() => scrollToSection('home')}
          >
            Dev.Portfolio
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.id)}
                className={`text-sm font-medium transition-colors hover:text-teal-400 ${activeSection === link.id ? 'text-teal-400' : 'text-slate-300'}`}
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-slate-300 hover:text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-slate-800 border-b border-slate-700">
            <div className="flex flex-col px-6 py-4 space-y-4">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.id)}
                  className="text-left text-slate-300 hover:text-teal-400 py-2"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      <Hero scrollToSection={scrollToSection} />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />

      {/* Footer */}
      <footer className="py-8 bg-slate-950 border-t border-slate-900 text-center snap-start">
        <p className="text-slate-500 text-sm">
          © 2024 Dev.Portfolio. Built with React & Tailwind CSS.
        </p>
      </footer>
    </div>
  );
}