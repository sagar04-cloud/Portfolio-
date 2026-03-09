
import React from 'react';
import { User, Cpu, Code, Zap } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 flex items-center gap-3">
              <User className="w-8 h-8 text-blue-500" />
              About Me
            </h2>
            <div className="space-y-4 text-slate-400 leading-relaxed text-lg">
              <p>
                I'm a software engineer passionate about bridging the gap between human creativity and machine intelligence. With a background in Full Stack development, I found my true calling in AI-driven interfaces.
              </p>
              <p>
                Over the past few years, I've worked on high-scale web applications while constantly experimenting with LLMs, diffusion models, and neural networks to create software that doesn't just work—it thinks.
              </p>
              <p>
                When I'm not coding, I'm usually exploring the latest AI research or contributing to open-source developer tools.
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
          <div className="order-1 md:order-2 relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative glass aspect-square rounded-3xl overflow-hidden flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-slate-900/50 to-transparent"></div>
              <div className="z-10 text-center p-8">
                <div className="w-32 h-32 bg-slate-900 rounded-full mx-auto mb-6 flex items-center justify-center border border-slate-800 shadow-2xl relative">
                  <Cpu className="w-16 h-16 text-blue-500 animate-pulse" />
                  <div className="absolute inset-0 rounded-full border border-blue-500/30 scale-125 animate-ping"></div>
                </div>
                <h3 className="text-xl font-heading font-bold text-white mb-2 italic">"The best way to predict the future is to build it."</h3>
                <p className="text-slate-500 text-sm">- Sagar</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
