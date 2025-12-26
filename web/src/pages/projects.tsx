import { useState, useEffect } from 'react';
import { X, Github, ExternalLink, Code, Layout, Calendar, CheckCircle2 } from 'lucide-react';
import { projects, type Project } from "../data/PortfolioData";


export default function Projects() {
    // 2. useState에 'any' 대신 구체적인 'Project' 타입 지정
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    // ESC 키로 모달 닫기
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setSelectedProject(null);
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, []);

    return (
        <div>
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
        </div>
    )
}