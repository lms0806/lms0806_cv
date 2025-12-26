import { useState, useEffect, useRef } from 'react';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Contact from './pages/Contact';
import Skills from './pages/Skills';
import About from './pages/About';
import Hero from "./pages/Hero";
import { type Project } from "./data/PortfolioData"
import Navigation from './pages/Navigation';
import Footer from './pages/Footer';

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
      <Navigation
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        activeSection={activeSection}
        scrolled={scrolled}
        scrollToSection={scrollToSection}
      />

      <Hero scrollToSection={scrollToSection} />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}