import { Monitor, Database, Layout } from 'lucide-react';

export default function Skills() {
    return (
        <div>
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
        </div>
    )
}