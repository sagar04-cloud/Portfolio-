
import React from 'react';
import { User, Cpu, Code, Zap } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Text Content */}
          <div className="order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-8 flex items-center gap-3">
              <User className="w-8 h-8 text-blue-500" />
              About Me
            </h2>
            <div className="space-y-6 text-slate-400 leading-relaxed text-lg">
              <p>
                I am a Full-Stack Engineer specializing in AI integrations. I build scalable, high-performance web applications that translate complex AI capabilities—like LLMs and neural networks—into intuitive, human-centric experiences.
              </p>
              <p>
                My background includes a solid foundation in modern web technologies, generative AI, and infrastructure. During my 5-month DevOps internship, I gained hands-on experience with cloud environments, CI/CD pipelines, and system automation, ensuring the code I write is robust and deployment-ready.
              </p>
              <p>
                Whether I'm architecting a new application or exploring the bleeding edge of AI research, my ultimate goal is to build intelligent systems that drive real business value.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="glass p-4 rounded-2xl flex items-center gap-3">
                <div className="bg-purple-500/20 p-2 rounded-lg text-purple-400">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-white font-bold">3+ Years</div>
                  <div className="text-xs text-slate-500 uppercase tracking-wider">Experience</div>
                </div>
              </div>
              <div className="glass p-4 rounded-2xl flex items-center gap-3">
                <div className="bg-blue-500/20 p-2 rounded-lg text-blue-400">
                  <Code className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-white font-bold">10+ Projects</div>
                  <div className="text-xs text-slate-500 uppercase tracking-wider">Completed</div>
                </div>
              </div>
            </div>
          </div>

          {/* Visual Content */}
          <div className="order-1 md:order-2 relative group w-full max-w-md mx-auto mt-8 md:mt-0">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative glass min-h-[480px] sm:min-h-[500px] sm:aspect-square rounded-3xl overflow-hidden flex flex-col items-center justify-center border border-white/10 bg-slate-900/50 p-8">
              <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 to-slate-900/20"></div>
              
              {/* Custom Animations */}
              <style>{`
                @keyframes scanline {
                  0% { transform: translateY(-100px); opacity: 0; }
                  10% { opacity: 1; }
                  90% { opacity: 1; }
                  100% { transform: translateY(600px); opacity: 0; }
                }
                .animate-scan {
                  animation: scanline 4s linear infinite;
                }
              `}</style>

              {/* Background Grid */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px]"></div>

              {/* Scan Line Effect */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-3xl">
                <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-blue-400/50 to-transparent shadow-[0_0_15px_rgba(59,130,246,0.6)] animate-scan opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              </div>

              {/* Connecting Lines (SVG) */}
              <svg viewBox="0 0 500 500" className="absolute inset-0 w-full h-full pointer-events-none opacity-10 sm:opacity-20 group-hover:opacity-60 transition-opacity duration-500">
                <path d="M 100 100 Q 250 150 250 200" fill="none" stroke="currentColor" className="text-blue-500" strokeWidth="2" strokeDasharray="4 4" />
                <path d="M 400 100 Q 250 150 250 200" fill="none" stroke="currentColor" className="text-purple-500" strokeWidth="2" strokeDasharray="4 4" />
                <path d="M 70 400 Q 250 350 250 250" fill="none" stroke="currentColor" className="text-emerald-500" strokeWidth="2" strokeDasharray="4 4" />
                <path d="M 430 400 Q 250 350 250 250" fill="none" stroke="currentColor" className="text-pink-500" strokeWidth="2" strokeDasharray="4 4" />
              </svg>

              {/* Floating Badges */}
              <div className="absolute top-[8%] left-[5%] sm:top-[10%] sm:left-[8%] animate-bounce scale-90 sm:scale-100" style={{ animationDuration: '3.2s' }}>
                <div className="glass px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full text-[9px] sm:text-[10px] font-bold text-blue-400 border border-blue-500/30 shadow-[0_0_20px_rgba(59,130,246,0.2)] backdrop-blur-md flex items-center gap-1.5 group-hover:scale-110 group-hover:shadow-[0_0_25px_rgba(59,130,246,0.4)] transition-all">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse"></span> React
                </div>
              </div>
              <div className="absolute top-[10%] right-[5%] sm:top-[12%] sm:right-[8%] animate-bounce scale-90 sm:scale-100" style={{ animationDuration: '4.1s' }}>
                <div className="glass px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full text-[9px] sm:text-[10px] font-bold text-purple-400 border border-purple-500/30 shadow-[0_0_20px_rgba(168,85,247,0.2)] backdrop-blur-md flex items-center gap-1.5 group-hover:scale-110 group-hover:shadow-[0_0_25px_rgba(168,85,247,0.4)] transition-all">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse"></span> DevOps
                </div>
              </div>
              <div className="absolute bottom-[10%] left-[4%] sm:bottom-[12%] sm:left-[6%] animate-bounce scale-90 sm:scale-100" style={{ animationDuration: '3.7s' }}>
                <div className="glass px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full text-[9px] sm:text-[10px] font-bold text-emerald-400 border border-emerald-500/30 shadow-[0_0_20px_rgba(16,185,129,0.2)] backdrop-blur-md flex items-center gap-1.5 group-hover:scale-110 group-hover:shadow-[0_0_25px_rgba(16,185,129,0.4)] transition-all">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span> Node.js
                </div>
              </div>
              <div className="absolute bottom-[8%] right-[4%] sm:bottom-[10%] sm:right-[6%] animate-bounce scale-90 sm:scale-100" style={{ animationDuration: '4.6s' }}>
                <div className="glass px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full text-[9px] sm:text-[10px] font-bold text-pink-400 border border-pink-500/30 shadow-[0_0_20px_rgba(236,72,153,0.2)] backdrop-blur-md flex items-center gap-1.5 group-hover:scale-110 group-hover:shadow-[0_0_25px_rgba(236,72,153,0.4)] transition-all">
                  <span className="w-1.5 h-1.5 rounded-full bg-pink-400 animate-pulse"></span> Gemini AI
                </div>
              </div>

              {/* Center Content */}
              <div className="z-10 flex flex-col items-center justify-center w-full relative h-full pt-4">
                <div className="w-20 h-20 sm:w-24 sm:h-24 bg-slate-900 rounded-full mb-10 sm:mb-12 flex items-center justify-center border border-slate-700 shadow-[0_0_50px_rgba(59,130,246,0.15)] relative group-hover:scale-110 transition-transform duration-500">
                  <Cpu className="w-8 h-8 sm:w-10 sm:h-10 text-blue-500 group-hover:text-purple-400 transition-colors duration-500 relative z-10" />
                  
                  {/* Glowing Core */}
                  <div className="absolute inset-0 bg-blue-500/10 rounded-full blur-xl group-hover:bg-purple-500/30 transition-colors duration-500"></div>

                  {/* Orbiting Rings */}
                  <div className="absolute inset-0 rounded-full border border-blue-500/30 animate-[spin_4s_linear_infinite]"></div>
                  <div className="absolute -inset-3 rounded-full border border-purple-500/20 animate-[spin_6s_linear_infinite_reverse]" style={{ borderTopColor: 'transparent', borderBottomColor: 'transparent' }}></div>
                  <div className="absolute -inset-6 rounded-full border border-indigo-500/10 animate-[spin_8s_linear_infinite]" style={{ borderLeftColor: 'transparent', borderRightColor: 'transparent' }}></div>
                  
                  {/* Outer Pulsing Ring */}
                  <div className="absolute -inset-8 sm:-inset-10 rounded-full border border-blue-500/5 animate-ping" style={{ animationDuration: '3s' }}></div>
                </div>

                <div className="bg-[#0A0D14]/90 p-3 sm:p-4 rounded-xl border border-white/10 backdrop-blur-md relative overflow-hidden text-left shadow-2xl transition-all duration-300 w-[90%] sm:w-full max-w-[240px] sm:max-w-[260px] group-hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] group-hover:border-blue-500/30 font-mono group-hover:-translate-y-1">
                  {/* Terminal Header */}
                  <div className="flex items-center justify-between mb-2 border-b border-white/10 pb-2">
                    <div className="flex gap-1.5">
                      <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-red-500/80"></div>
                      <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-yellow-500/80"></div>
                      <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-green-500/80"></div>
                    </div>
                    <div className="text-[8px] sm:text-[9px] text-slate-500 uppercase tracking-widest">sagar@portfolio:~</div>
                  </div>
                  
                  {/* Terminal Content */}
                  <div className="text-[10px] sm:text-[11px] space-y-1.5">
                    <div className="flex gap-2">
                      <span className="text-emerald-400">➜</span>
                      <span className="text-blue-400 font-bold">~</span>
                      <span className="text-white">node init.js</span>
                    </div>
                    <div className="text-slate-400 flex items-center gap-2">
                      <span className="animate-spin text-blue-500">⟳</span> Loading neural logic...
                    </div>
                    <div className="text-green-400 flex items-center gap-1.5">
                      <span>✓</span> Creativity modules active
                    </div>
                    <div className="text-slate-300 mt-2 border-l-2 border-indigo-500/50 pl-2 italic text-[9px] sm:text-[10px] leading-relaxed">
                      "Building software that doesn't just work, but thinks."
                    </div>
                    <div className="flex items-center gap-2 mt-2 pt-1 text-[8px] sm:text-[9px] text-slate-500">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                      SYSTEM READY
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
