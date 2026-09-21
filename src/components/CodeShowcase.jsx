
const CodeShowcase = () => {
  return (
    <section id="workflow" className="py-24 px-6 bg-[#0a0f24] relative overflow-hidden border-t border-indigo-500/40">
        <div className="absolute inset-0 bg-[radial-gradient(#312e81_1px,transparent_1px)] [background-size:24px_24px] "></div>
        <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                <div className="lg:col-span-5">
                    <span className="text-xs font-bold uppercase tracking-widest text-indigo-400 bg-indigo-950/80 border border-indigo-800/50 px-3 py-1 rounded-full">
                        Developer First Experience
                    </span>
                    <h2 className="text-2xl sm:text-4xl font-extrabold text-white mt-6 mb-6 tracking-tight leading-tight">
                        Simple REST & Async API integration
                    </h2>
                    <p className="text-gray-300 text-sm leading-relaxed mb-8">
                        Intialize non-blocking execution pipelines with minimal boilerplate. 
                        Native integration for Pydantic schemes, JWT authentication token,
                        and automatic OpenAi generation.
                    </p>
                </div>
            </div>
        </div>
    </section>
  );
};

export default CodeShowcase