import { useState, useEffect, useRef } from 'react';
import { Menu, X, Github, Linkedin, Mail, ExternalLink, Code, ChevronDown, Monitor, Database, Layout } from 'lucide-react';

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) {
      return;
    }
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top >= -100 && rect.top < 300;
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
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Projects', id: 'projects' },
    { name: 'Contact', id: 'contact' },
  ];

  // 프로젝트 데이터 배열
  const projects = [
    {
      id: 1,
      title: "Melog",
      description: "이 프로젝트는 Rust와 axum으로 백엔드를 구성하고, TypeScript와 React.js로 프론트로 개발된 웹 애플리케이션입니다. 메이플스토리 open api를 활용하여 사용자의 메이플 캐릭터 정보를 보여줍니다.",
      techStack: ["Rust", "Axum", "TypeScirpt", "React.js"],
      githubLink: "https://github.com/lmsbin/melog",
      demoLink: "#"
    },
  ];

  // 경력 데이터 배열
  const experiences = [
    {
      id: 1,
      period: "2023.05 - 2025.06",
      role: "검색 엔진 개발자",
      company: "와이즈넛",
      descriptions: [
        "다양한 OS에서 활용가능한 검색 엔진 개발",
        "대용량 데이터 처리 및 인덱싱 성능 개선"
      ]
    },
    {
      id: 2,
      period: "2025.07 -",
      role: "게임 서버 개발자",
      company: "위메이드 넥스트",
      descriptions: [
        "미르 IP 게임 서버 개발"
      ]
    },
  ];

  return (
    <div ref={containerRef} className="h-screen bg-slate-900 text-slate-100 font-sans selection:bg-teal-500 selection:text-white overflow-scroll snap-y snap-mandatory">
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
        {/* Background Elements */}
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
            Java와 Rust, 최신 기술을 활용하여 빠르고 안전한 애플리케이션을 만듭니다 <br />
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
            <p className="text-slate-300 leading-relaxed text-lg break-keep">
              시간과 메모리의 효율성을 중요시하며, 빠르고 안전한 프로그램을 만드는데 깊은 관심을 가지고 있습니다.<br className="hidden md:block" />
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
                {['Java', 'Rust', 'Cpp'].map(skill => (
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
                {['Spring boot', 'Git', 'Mysql'].map(skill => (
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
              <div key={project.id} className="bg-slate-900 rounded-xl overflow-hidden border border-slate-700 group hover:border-teal-500 transition-all">
                {/* Project Image Placeholder */}
                <div className="h-48 bg-slate-800 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-teal-500/10 group-hover:bg-teal-500/20 transition-colors"></div>
                  <Code className="text-slate-600 group-hover:text-teal-400 transition-colors transform group-hover:scale-110 duration-500" size={48} />
                </div>

                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-white group-hover:text-teal-400 transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex gap-3">
                      <a href={project.githubLink} className="text-slate-400 hover:text-white transition-colors" title="GitHub Code">
                        <Github size={20} />
                      </a>
                      <a href={project.demoLink} className="text-slate-400 hover:text-white transition-colors" title="Live Demo">
                        <ExternalLink size={20} />
                      </a>
                    </div>
                  </div>
                  <p className="text-slate-400 mb-6 text-sm line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tag) => (
                      <span key={tag} className="text-xs px-2 py-1 bg-slate-800 text-teal-400 rounded border border-slate-700">
                        {tag}
                      </span>
                    ))}
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
            <div className="grid grid-cols-1 md:grid-cols-5 gap-x-8 gap-y-24">
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

          {/* <div className="bg-slate-900 p-8 rounded-2xl border border-slate-700 max-w-2xl mx-auto shadow-2xl">
            <form className="space-y-6 text-left" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-slate-400 text-sm mb-2">Name</label>
                  <input type="text" className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-colors" placeholder="홍길동" />
                </div>
                <div>
                  <label className="block text-slate-400 text-sm mb-2">Email</label>
                  <input type="email" className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-colors" placeholder="email@example.com" />
                </div>
              </div>
              <div>
                <label className="block text-slate-400 text-sm mb-2">Message</label>
                <textarea rows="4" className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-colors" placeholder="안녕하세요! 프로젝트 협업 문의드립니다..."></textarea>
              </div>
              <button className="w-full bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 text-white font-bold py-4 rounded-lg transition-all transform hover:-translate-y-1 shadow-lg">
                메시지 보내기
              </button>
            </form>
          </div> */}

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