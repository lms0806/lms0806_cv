import { Github, Linkedin, Mail } from 'lucide-react';

export default function Contact() {
    return (
        <div>
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
        </div>
    )
}