
import React from 'react';
import { Mail, Github, Twitter, Linkedin, Send } from 'lucide-react';
import TiltCard from './ui/TiltCard';
import Magnet from './ui/Magnet';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-32 px-6 relative overflow-hidden perspective-1000">
      {/* Background Decor - Floating 3D Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-10 w-24 h-24 bg-blue-500/20 rounded-full blur-xl animate-float-slow"></div>
        <div className="absolute bottom-1/4 right-10 w-32 h-32 bg-purple-500/20 rounded-full blur-xl animate-float-delayed"></div>
      </div>

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-64 bg-blue-600 bg-glow rounded-full opacity-10 blur-3xl"></div>

      <TiltCard className="max-w-4xl mx-auto">
        <div className="glass p-12 md:p-20 rounded-[40px] text-center relative border-slate-800/50 overflow-hidden group">

          {/* Internal Shine Effect */}
          <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

          <h2 className="text-4xl md:text-6xl font-heading font-bold mb-6 text-white transform transition-transform duration-500 group-hover:scale-105">
            Let's build something <br /> <span className="text-gradient">incredible.</span>
          </h2>
          <p className="text-slate-400 text-lg mb-12 max-w-xl mx-auto transform transition-transform duration-500 group-hover:translate-z-10">
            Currently seeking new opportunities to lead AI innovation and build world-class products.
          </p>

          <div className="flex flex-col items-center gap-8 relative z-10">
            <Magnet magnetStrength={30}>
              <a
                href="mailto:hello@aidev.io"
                className="px-10 py-5 bg-white text-slate-950 font-black rounded-full text-xl hover:scale-105 transition-transform flex items-center gap-3 shadow-2xl shadow-white/10"
              >
                Say Hello <Send className="w-6 h-6" />
              </a>
            </Magnet>

            <div className="flex gap-6 mt-4">
              <Magnet magnetStrength={15}>
                <a href="#" className="flex p-4 bg-slate-900 rounded-2xl hover:bg-slate-800 hover:text-blue-400 transition-all border border-slate-800">
                  <Github className="w-6 h-6" />
                </a>
              </Magnet>
              <Magnet magnetStrength={15}>
                <a href="#" className="flex p-4 bg-slate-900 rounded-2xl hover:bg-slate-800 hover:text-blue-400 transition-all border border-slate-800">
                  <Linkedin className="w-6 h-6" />
                </a>
              </Magnet>
              <Magnet magnetStrength={15}>
                <a href="#" className="flex p-4 bg-slate-900 rounded-2xl hover:bg-slate-800 hover:text-blue-400 transition-all border border-slate-800">
                  <Mail className="w-6 h-6" />
                </a>
              </Magnet>
            </div>
          </div>

          <div className="mt-20 pt-8 border-t border-slate-800 text-slate-500 text-sm transform transition-all duration-500 group-hover:text-slate-400">
            &copy; {new Date().getFullYear()} AI.DEV Portfolio. Crafted with passion & AI.
          </div>
        </div>
      </TiltCard>
    </section>
  );
};

export default Contact;
