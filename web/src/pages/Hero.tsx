import { ChevronDown } from 'lucide-react';

export default function Hero({ scrollToSection }: { scrollToSection: (id: string) => void }) {

    return (
        <div>
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
        </div>
    )
}