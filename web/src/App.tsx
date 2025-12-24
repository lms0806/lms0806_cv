import { useState, useEffect, useRef } from 'react';
import { Menu, X, Github, Linkedin, Mail, ExternalLink, Code, ChevronDown, Monitor, Database, Layout, Calendar, CheckCircle2 } from 'lucide-react';
import melogImage from "./images/melog.jpg";

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

  // 프로젝트 데이터 배열 (타입 안정성 확보)
  const projects: Project[] = [
    {
      id: 1,
      title: "Melog",
      period: "2024.01 - 2024.03",
      description: "Rust와 Axum으로 구축된 백엔드와 React 기반의 메이플스토리 정보 검색 서비스입니다.",
      detailedDescription: `
        Melog는 메이플스토리 유저들을 위한 전적 검색 및 캐릭터 정보 조회 서비스입니다. 
        기존 서비스들의 느린 응답 속도를 개선하기 위해 Rust(Axum)를 도입하여 백엔드 성능을 최적화했습니다.
        단순한 정보 조회를 넘어, 사용자의 성장을 시각화하여 보여주는 그래프 기능과 
        유저 간 커뮤니티 기능을 제공하는 것을 목표로 개발되었습니다.
      `,
      techStack: ["Rust", "Axum", "TypeScript", "React.js", "Tailwind CSS"],
      features: [
        "Nexon Open API 연동을 통한 실시간 캐릭터 정보 조회",
        "Rust의 비동기 런타임(Tokio)을 활용한 고성능 API 서버 구축",
        "React Query를 이용한 서버 상태 관리 및 캐싱 전략 수립",
        "반응형 디자인을 적용하여 모바일 및 데스크탑 환경 지원"
      ],
      githubLink: "https://github.com/lmsbin/melog",
      demoLink: "#",
      image: melogImage,
    }
  ];

  const experiences = [
    {
      id: 1,
      period: "2023.05 ~ 2025.06",
      role: "검색 엔진 개발자",
      company: "와이즈넛",
      descriptions: [
        "다양한 OS에서 활용가능한 검색 엔진 개발",
        "대용량 데이터 처리 및 인덱싱 성능 개선"
      ]
    },
    {
      id: 2,
      period: "2025.07 ~",
      role: "게임 서버 개발자",
      company: "위메이드 넥스트",
      descriptions: [
        "미르 IP 게임 서버 개발"
      ]
    },
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

      {/* --- Project Detail Modal --- */}
      {selectedProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
            onClick={() => setSelectedProject(null)}
          ></div>

          {/* Modal Content */}
          <div className="relative w-full max-w-4xl max-h-[90vh] bg-slate-900 rounded-2xl border border-slate-700 shadow-2xl flex flex-col overflow-hidden animate-fade-in-up">
            {/* Header */}
            <div className="flex justify-between items-start p-6 border-b border-slate-800 bg-slate-900/50">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">{selectedProject.title}</h2>
                <div className="flex items-center text-slate-400 text-sm gap-2">
                  <Calendar size={16} />
                  <span>{selectedProject.period}</span>
                </div>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="p-2 hover:bg-slate-800 rounded-full transition-colors text-slate-400 hover:text-white"
              >
                <X size={24} />
              </button>
            </div>

            {/* Scrollable Body */}
            <div className="p-6 overflow-y-auto custom-scrollbar">
              {/* Image Area */}
              <div className="w-full h-64 md:h-80 bg-slate-800 rounded-xl mb-8 flex items-center justify-center border border-slate-700 relative overflow-hidden group">
                {selectedProject.image ? (
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <>
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
                    <Code className="text-slate-600 w-20 h-20" />
                    <span className="absolute bottom-4 right-4 text-xs text-slate-500 bg-slate-900/80 px-2 py-1 rounded">No Image Available</span>
                  </>
                )}
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {/* Left Column: Description */}
                <div className="md:col-span-2 space-y-8">
                  <div>
                    <h3 className="text-xl font-bold text-teal-400 mb-4 flex items-center gap-2">
                      <Layout size={20} />
                      Project Overview
                    </h3>
                    <p className="text-slate-300 leading-relaxed whitespace-pre-line">
                      {selectedProject.detailedDescription}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-teal-400 mb-4 flex items-center gap-2">
                      <CheckCircle2 size={20} />
                      Key Features
                    </h3>
                    <ul className="space-y-3">
                      {selectedProject.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-slate-300">
                          <span className="mt-1.5 w-1.5 h-1.5 bg-teal-500 rounded-full flex-shrink-0"></span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Right Column: Meta Info */}
                <div className="space-y-8">
                  <div className="bg-slate-800/50 p-5 rounded-xl border border-slate-700">
                    <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.techStack.map((tech) => (
                        <span key={tech} className="px-3 py-1 bg-slate-800 text-teal-400 text-sm rounded-full border border-slate-600">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col gap-3">
                    <a
                      href={selectedProject.githubLink}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-center gap-2 w-full py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-lg transition-colors border border-slate-600"
                    >
                      <Github size={20} />
                      GitHub Repo
                    </a>
                    {/* demoLink가 '#'이 아닐 때만 렌더링 */}
                    {selectedProject.demoLink && selectedProject.demoLink !== "#" && (
                      <a
                        href={selectedProject.demoLink}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center justify-center gap-2 w-full py-3 bg-teal-600 hover:bg-teal-700 text-white rounded-lg transition-colors shadow-lg shadow-teal-900/20"
                      >
                        <ExternalLink size={20} />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

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

      {/* About Section */}
      <section id="about" className="min-h-screen flex flex-col justify-center py-20 bg-slate-800/50 snap-start">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-16 text-center">
            <span className="border-b-4 border-teal-500 pb-2">About Me</span>
          </h2>

          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h3 className="text-2xl md:text-3xl font-bold text-teal-400">
              끊임없이 성장하는 개발자입니다.
            </h3>
            <p className="text-slate-300 leading-relaxed text-base md:text-lg break-keep px-4">
              시간과 메모리의 효율성을 중요시하며, 빠르고 안전한 프로그램을 만드는데 깊은 관심을 가지고 있습니다.
              <br />
              새로운 기술을 배우는 것을 두려워하지 않으며, 팀원들과의 소통을 통해 더 나은 결과를 만들어내는 것을 즐깁니다.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-4 max-w-lg mx-auto">
              <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-teal-500/50 transition-colors">
                <div className="text-teal-400 text-4xl font-bold mb-2">2+</div>
                <div className="text-slate-400 font-medium">Years Experience</div>
              </div>
              <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-blue-500/50 transition-colors">
                <div className="text-blue-400 text-4xl font-bold mb-2">1</div>
                <div className="text-slate-400 font-medium">Projects Completed</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="min-h-screen flex flex-col justify-center py-20 snap-start">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-16 text-center">
            <span className="border-b-4 border-teal-500 pb-2">Tech Stack</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Frontend */}
            <div className="bg-slate-800 p-8 rounded-2xl hover:-translate-y-2 transition-transform duration-300 border border-slate-700 hover:border-teal-500/50">
              <div className="w-12 h-12 bg-teal-500/20 rounded-lg flex items-center justify-center mb-6">
                <Layout className="text-teal-400" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-4">Language</h3>
              <div className="flex flex-wrap gap-2">
                {['Java', 'Rust'].map(skill => (
                  <span key={skill} className="px-3 py-1 bg-slate-700 text-slate-300 text-sm rounded-full">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Backend & Tools */}
            <div className="bg-slate-800 p-8 rounded-2xl hover:-translate-y-2 transition-transform duration-300 border border-slate-700 hover:border-blue-500/50">
              <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-6">
                <Database className="text-blue-400" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-4">Backend & Tools</h3>
              <div className="flex flex-wrap gap-2">
                {['Spring boot', 'Axum', 'Mysql', "wasm-pack"].map(skill => (
                  <span key={skill} className="px-3 py-1 bg-slate-700 text-slate-300 text-sm rounded-full">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Design & Others */}
            <div className="bg-slate-800 p-8 rounded-2xl hover:-translate-y-2 transition-transform duration-300 border border-slate-700 hover:border-purple-500/50">
              <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-6">
                <Monitor className="text-purple-400" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-4">Design & Collaboration</h3>
              <div className="flex flex-wrap gap-2">
                {['Slack', 'Notion'].map(skill => (
                  <span key={skill} className="px-3 py-1 bg-slate-700 text-slate-300 text-sm rounded-full">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen flex flex-col justify-center py-20 bg-slate-800/30 snap-start">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-16 text-center">
            <span className="border-b-4 border-teal-500 pb-2">Featured Projects</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="bg-slate-900 rounded-xl overflow-hidden border border-slate-700 group hover:border-teal-500 transition-all flex flex-col h-full">
                {/* Project Image Placeholder - 카드 목록에서는 이미지 대신 아이콘 또는 썸네일 표시 */}
                <div className="h-48 bg-slate-800 flex items-center justify-center relative overflow-hidden flex-shrink-0">
                  {project.image ? (
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  ) : (
                    <>
                      <div className="absolute inset-0 bg-teal-500/10 group-hover:bg-teal-500/20 transition-colors"></div>
                      <Code className="text-slate-600 group-hover:text-teal-400 transition-colors transform group-hover:scale-110 duration-500" size={48} />
                    </>
                  )}
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-white group-hover:text-teal-400 transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex gap-3">
                      <a href={project.githubLink} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors" title="GitHub Code">
                        <Github size={20} />
                      </a>
                      {/* demoLink가 '#'이 아닐 때만 렌더링 */}
                      {project.demoLink && project.demoLink !== "#" && (
                        <a href={project.demoLink} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors" title="Live Demo">
                          <ExternalLink size={20} />
                        </a>
                      )}
                    </div>
                  </div>
                  <p className="text-slate-400 mb-6 text-sm line-clamp-3">
                    {project.description}
                  </p>

                  {/* 하단 영역: 태그 및 상세보기 버튼 */}
                  <div className="mt-auto">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.techStack.slice(0, 3).map((tag) => (
                        <span key={tag} className="text-xs px-2 py-1 bg-slate-800 text-teal-400 rounded border border-slate-700">
                          {tag}
                        </span>
                      ))}
                      {project.techStack.length > 3 && (
                        <span className="text-xs px-2 py-1 bg-slate-800 text-slate-400 rounded border border-slate-700">+{project.techStack.length - 3}</span>
                      )}
                    </div>

                    <button
                      onClick={() => setSelectedProject(project)}
                      className="w-full py-2 bg-slate-800 hover:bg-teal-500/20 text-teal-400 border border-teal-500/30 rounded-lg transition-all text-sm font-medium flex items-center justify-center gap-2 group-hover:border-teal-500"
                    >
                      자세히 보기
                      <ExternalLink size={14} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="min-h-screen flex flex-col justify-center py-20 snap-start">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <h2 className="text-3xl font-bold mb-24 text-center">
            <span className="border-b-4 border-teal-500 pb-2">Work Experience</span>
          </h2>

          <div className="relative">
            {/* 그리드 컨테이너: 기본 1열, md 이상에서 2열 배치 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
              {experiences.map((item) => (
                <div key={item.id} className="relative group">
                  {/* 가로 타임라인 선 (Desktop only) - 각 아이템마다 상단에 표시 */}
                  <div className="hidden md:block absolute top-0 left-0 w-full h-0.5 bg-slate-700"></div>

                  {/* Timeline Dot (Desktop) - 선 위에 위치 */}
                  <div className="hidden md:block absolute top-0 left-1/2 w-4 h-4 bg-slate-900 border-2 border-teal-500 rounded-full transform -translate-x-1/2 -translate-y-1/2 group-hover:bg-teal-500 group-hover:scale-125 transition-all z-10"></div>

                  {/* Period Label (Desktop) - 선 위에 띄움 */}
                  <div className="hidden md:block absolute -top-12 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                    <span className="text-teal-400 font-bold bg-slate-900 px-3 py-1 rounded-full border border-slate-700">
                      {item.period}
                    </span>
                  </div>

                  {/* 세로 타임라인 선 (Mobile only) - 왼쪽 정렬 */}
                  <div className="md:hidden absolute left-0 top-0 bottom-0 w-px bg-slate-700 ml-4"></div>

                  {/* Timeline Dot (Mobile) */}
                  <div className="md:hidden absolute left-0 top-0 w-4 h-4 bg-slate-900 border-2 border-teal-500 rounded-full ml-[10px] mt-6 z-10"></div>

                  {/* Content Card */}
                  <div className="md:mt-12 ml-12 md:ml-0 bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-teal-500/50 transition-all hover:-translate-y-1 relative">
                    {/* 모바일용 기간 표시 (카드 내부) */}
                    <span className="md:hidden text-teal-400 text-sm font-bold mb-2 block">{item.period}</span>

                    {/* 데스크탑용 연결 화살표 (삼각형) */}
                    <div className="hidden md:block absolute -top-2 left-1/2 w-4 h-4 bg-slate-800 border-l border-t border-slate-700 transform -translate-x-1/2 rotate-45"></div>

                    <h3 className="text-xl font-bold mb-1 text-white">{item.role}</h3>
                    <h4 className="text-slate-400 mb-4 text-sm font-medium">{item.company}</h4>
                    <ul className="list-disc list-inside text-slate-300 text-sm space-y-2 marker:text-teal-500">
                      {item.descriptions.map((desc, i) => (
                        <li key={i}>{desc}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex flex-col justify-center py-20 bg-slate-800/50 snap-start">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-8">
            <span className="border-b-4 border-teal-500 pb-2">Get In Touch</span>
          </h2>
          <p className="text-slate-300 mb-12 text-lg">
            새로운 프로젝트 기회나 기술적인 대화는 언제나 환영합니다.<br />
            편하게 연락주세요!
          </p>

          <div className="flex justify-center space-x-8 mt-16">
            <a
              href="https://github.com/lms0806"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center group"
            >
              <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center group-hover:bg-teal-500 transition-colors mb-2">
                <Github size={24} className="text-slate-300 group-hover:text-white" />
              </div>
              <span className="text-sm text-slate-400 group-hover:text-teal-400">GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/minsu-lim-8b798b268/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center group"
            >
              <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center group-hover:bg-blue-600 transition-colors mb-2">
                <Linkedin size={24} className="text-slate-300 group-hover:text-white" />
              </div>
              <span className="text-sm text-slate-400 group-hover:text-blue-400">LinkedIn</span>
            </a>
            <a
              href="mailto:godmlzkf1@naver.com"
              className="flex flex-col items-center group"
            >
              <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center group-hover:bg-purple-500 transition-colors mb-2">
                <Mail size={24} className="text-slate-300 group-hover:text-white" />
              </div>
              <span className="text-sm text-slate-400 group-hover:text-purple-400">Email</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-slate-950 border-t border-slate-900 text-center snap-start">
        <p className="text-slate-500 text-sm">
          © 2024 Dev.Portfolio. Built with React & Tailwind CSS.
        </p>
      </footer>
    </div>
  );
}