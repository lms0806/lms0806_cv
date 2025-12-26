import { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import Projects from './pages/projects';
import Experience from './pages/Experience';
import Contact from './pages/Contact';
import Skills from './pages/Skills';
import About from './pages/About';

// 1. 프로젝트 데이터의 구조를 정의하는 인터페이스 생성
interface Project {
  id: number;
  title: string;
  period: string;
  description: string;
  detailedDescription: string;
  techStack: string[];
  features: string[];
  githubLink: string;
  demoLink: string;
  image?: string; // 프로젝트 이미지 URL (선택적)
}

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

  // ESC 키로 모달 닫기
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedProject(null);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
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

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Projects', id: 'projects' },
    { name: 'Contact', id: 'contact' },
  ];

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

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden snap-start">
        <div className="absolute top-20 right-0 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl -z-10 animate-pulse"></div>
        <div className="absolute bottom-20 left-0 w-72 h-72 bg-teal-600/20 rounded-full blur-3xl -z-10"></div>

        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-teal-400 font-medium mb-4 tracking-wider animate-fade-in-up">안녕하세요, 저는</p>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            사용자 경험을 중요시하는 <br />
            <span className="bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">
              백엔드 개발자
            </span>
          </h1>
          <p className="text-slate-400 text-lg md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed break-keep">
            Java와 Rust, 최신 기술을 활용하여 빠르고 안전한 애플리케이션을 만듭니다.<br />
            코드 한 줄 한 줄에 사용자를 생각하는 마음을 담습니다.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <button
              onClick={() => scrollToSection('projects')}
              className="px-8 py-3 bg-teal-500 hover:bg-teal-600 text-white rounded-full font-medium transition-all shadow-lg shadow-teal-500/30"
            >
              프로젝트 보기
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-3 border border-slate-600 hover:border-teal-500 hover:text-teal-400 text-slate-300 rounded-full font-medium transition-all"
            >
              연락하기
            </button>
          </div>

          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="text-slate-500" size={32} />
          </div>
        </div>
      </section>

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