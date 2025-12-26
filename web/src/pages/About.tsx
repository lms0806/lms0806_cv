export default function About() {
    return (
        <div>
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
                    </div>
                </div>
            </section>
        </div>
    )
}