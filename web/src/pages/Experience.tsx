export default function Experience() {
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
        <div>
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
        </div>
    )
}