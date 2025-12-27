import { useState, useEffect } from 'react';
import { ChevronRight, GraduationCap, Award, Users, Trophy, X } from 'lucide-react';
import { educations, certificates, awards, activities } from '../data/PortfolioData';

export default function About() {
    const [showDetail, setShowDetail] = useState(false);

    // ESC 키로 모달 닫기
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setShowDetail(false);
        };
        if (showDetail) {
            window.addEventListener('keydown', handleEsc);
            document.body.style.overflow = 'hidden';
        }
        return () => {
            window.removeEventListener('keydown', handleEsc);
            document.body.style.overflow = 'unset';
        };
    }, [showDetail]);

    return (
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
                        시간과 메모리의 효율성을 중요시하며, <br /> 빠르고 안전한 프로그램을 만드는데 깊은 관심을 가지고 있습니다.
                        <br /><br />
                        새로운 기술을 배우는 것을 두려워하지 않으며, <br />팀원들과의 소통을 통해 더 나은 결과를 만들어내는 것을 즐깁니다.
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

                    <button
                        onClick={() => setShowDetail(true)}
                        className="group flex items-center justify-center gap-2 mx-auto text-slate-400 hover:text-teal-400 transition-all mt-8 px-6 py-3 rounded-full border border-slate-700 hover:border-teal-500/50 hover:bg-slate-800"
                    >
                        <span>이력 자세히 보기</span>
                        <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>
            </div>

            {/* Detail Modal */}
            {showDetail && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
                    {/* Backdrop */}
                    <div
                        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
                        onClick={() => setShowDetail(false)}
                    ></div>

                    {/* Modal Content */}
                    <div className="relative w-full max-w-4xl max-h-[85vh] bg-slate-900 rounded-2xl border border-slate-700 shadow-2xl flex flex-col overflow-hidden animate-fade-in-up">
                        {/* Header */}
                        <div className="flex justify-between items-center p-6 border-b border-slate-800 bg-slate-900/95 backdrop-blur sticky top-0 z-10">
                            <h2 className="text-2xl font-bold text-white">Resume Detail</h2>
                            <button
                                onClick={() => setShowDetail(false)}
                                className="p-2 hover:bg-slate-800 rounded-full transition-colors text-slate-400 hover:text-white"
                            >
                                <X size={24} />
                            </button>
                        </div>

                        {/* Scrollable Body */}
                        <div className="p-6 md:p-8 overflow-y-auto custom-scrollbar space-y-10">

                            {/* 1. 학력 섹션 */}
                            <div className="space-y-6">
                                <h4 className="text-xl font-bold text-teal-400 flex items-center gap-3">
                                    <div className="p-2 bg-teal-500/10 rounded-lg">
                                        <GraduationCap className="text-teal-500" size={24} />
                                    </div>
                                    Education
                                </h4>
                                <div className="grid gap-4">
                                    {educations.map((edu) => (
                                        <div key={edu.id} className="bg-slate-800/50 p-5 rounded-xl border border-slate-700/50 hover:border-teal-500/30 transition-colors">
                                            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                                                <div>
                                                    <div className="text-slate-200 font-bold text-lg">{edu.institution}</div>
                                                    <div className="text-slate-400">{edu.major} <span className="text-slate-600 text-sm">| {edu.degree}</span></div>
                                                </div>
                                                <div className="text-teal-500 text-sm font-medium bg-teal-500/10 px-3 py-1 rounded-full w-fit">
                                                    {edu.period}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-8">
                                {/* 2. 자격증 섹션 */}
                                <div className="space-y-6">
                                    <h4 className="text-xl font-bold text-blue-400 flex items-center gap-3">
                                        <div className="p-2 bg-blue-500/10 rounded-lg">
                                            <Award className="text-blue-500" size={24} />
                                        </div>
                                        Certificates
                                    </h4>
                                    <div className="space-y-3">
                                        {certificates.map((cert) => (
                                            <div key={cert.id} className="bg-slate-800/50 p-4 rounded-xl border border-slate-700/50 hover:border-blue-500/30 transition-colors flex justify-between items-center">
                                                <div>
                                                    <div className="text-slate-200 font-bold">{cert.name}</div>
                                                    <div className="text-slate-500 text-xs mt-1">{cert.issuer}</div>
                                                </div>
                                                <span className="text-blue-400 text-xs font-medium bg-blue-500/10 px-2 py-1 rounded">
                                                    {cert.date}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* 3. 수상 내역 섹션 (수정됨: Grade 강조) */}
                                <div className="space-y-6">
                                    <h4 className="text-xl font-bold text-yellow-400 flex items-center gap-3">
                                        <div className="p-2 bg-yellow-500/10 rounded-lg">
                                            <Trophy className="text-yellow-500" size={24} />
                                        </div>
                                        Awards
                                    </h4>
                                    <div className="space-y-3">
                                        {awards.map((award) => (
                                            <div key={award.id} className="bg-slate-800/50 p-4 rounded-xl border border-slate-700/50 hover:border-yellow-500/30 transition-colors">
                                                <div className="flex justify-between items-start mb-2">
                                                    <div className="text-slate-200 font-bold leading-tight">{award.name}</div>
                                                    <span className="text-slate-500 text-xs font-medium whitespace-nowrap ml-2">{award.date}</span>
                                                </div>
                                                <div className="flex justify-between items-center">
                                                    <div className="text-slate-500 text-xs">{award.organizer}</div>
                                                    <span className="text-yellow-400 text-sm font-bold bg-yellow-400/10 px-2 py-0.5 rounded border border-yellow-400/20">
                                                        {award.grade}
                                                    </span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* 4. 외부 활동 섹션 */}
                            <div className="space-y-6">
                                <h4 className="text-xl font-bold text-purple-400 flex items-center gap-3">
                                    <div className="p-2 bg-purple-500/10 rounded-lg">
                                        <Users className="text-purple-500" size={24} />
                                    </div>
                                    Activities
                                </h4>
                                <div className="space-y-3">
                                    {activities.map((act) => (
                                        <div key={act.id} className="bg-slate-800/50 p-4 rounded-xl border border-slate-700/50 hover:border-purple-500/30 transition-colors">
                                            <div className="flex justify-between items-start mb-2">
                                                <div className="text-slate-200 font-bold">{act.name}</div>
                                                <span className="text-purple-400 text-xs font-medium whitespace-nowrap ml-2">{act.period}</span>
                                            </div>
                                            <div className="text-slate-400 text-sm mb-1">{act.role}</div>
                                            {act.description && (
                                                <div className="text-slate-500 text-xs mt-2 pt-2 border-t border-slate-700/50">
                                                    {act.description}
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}