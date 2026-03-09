import React, { useState } from 'react';
import Folder from './ui/Folder';
import {
  Atom,
  Database,
  Brain,
  Cloud,
  FileCode,
  Globe,
  Server,
  Cpu,
  Sparkles,
  Bot
} from 'lucide-react';

const Skills: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(prev => (prev === index ? null : index));
  };

  return (
    <section id="skills" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-heading font-bold mb-16 flex items-center gap-4">
          <span className="w-8 h-[2px] bg-indigo-500"></span>
          Technical Arsenal
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 place-items-center">

          {/* Frontend */}
          <div className="flex flex-col items-center gap-4 group">
            <div className="h-40 flex items-end justify-center">
              <Folder
                size={2}
                color="#1e293b"
                label="Frontend"
                isOpen={openIndex === 0}
                onToggle={() => handleToggle(0)}
                items={[
                  <div key="1" className="flex flex-col items-center gap-1">
                    <FileCode className="w-6 h-6 text-blue-500" />
                    <span className="text-[8px] font-bold text-slate-800 uppercase tracking-wider">React</span>
                  </div>,
                  <div key="2" className="flex flex-col items-center gap-1">
                    <Atom className="w-6 h-6 text-blue-400" />
                    <span className="text-[8px] font-bold text-slate-800 uppercase tracking-wider">Next.js</span>
                  </div>,
                  <div key="3" className="flex flex-col items-center gap-1">
                    <Globe className="w-6 h-6 text-cyan-400" />
                    <span className="text-[8px] font-bold text-slate-800 uppercase tracking-wider">Tailwind</span>
                  </div>
                ]}
              />
            </div>
          </div>

          {/* Backend */}
          <div className="flex flex-col items-center gap-4 group">
            <div className="h-40 flex items-end justify-center">
              <Folder
                size={2}
                color="#1e293b"
                label="Backend"
                isOpen={openIndex === 1}
                onToggle={() => handleToggle(1)}
                items={[
                  <div key="1" className="flex flex-col items-center gap-1">
                    <Server className="w-6 h-6 text-emerald-500" />
                    <span className="text-[8px] font-bold text-slate-800 uppercase tracking-wider">Node.js</span>
                  </div>,
                  <div key="2" className="flex flex-col items-center gap-1">
                    <Database className="w-6 h-6 text-emerald-400" />
                    <span className="text-[8px] font-bold text-slate-800 uppercase tracking-wider">Supabase</span>
                  </div>,
                  <div key="3" className="flex flex-col items-center gap-1">
                    <FileCode className="w-6 h-6 text-emerald-600" />
                    <span className="text-[8px] font-bold text-slate-800 uppercase tracking-wider">Python</span>
                  </div>
                ]}
              />
            </div>
          </div>

          {/* AI & Data */}
          <div className="flex flex-col items-center gap-4 group">
            <div className="h-40 flex items-end justify-center">
              <Folder
                size={2}
                color="#1e293b"
                label="AI / Data"
                isOpen={openIndex === 2}
                onToggle={() => handleToggle(2)}
                items={[
                  <div key="1" className="flex flex-col items-center gap-1">
                    <Sparkles className="w-6 h-6 text-violet-500" />
                    <span className="text-[8px] font-bold text-slate-800 uppercase tracking-wider">Gemini</span>
                  </div>,
                  <div key="2" className="flex flex-col items-center gap-1">
                    <Bot className="w-6 h-6 text-violet-600" />
                    <span className="text-[8px] font-bold text-slate-800 uppercase tracking-wider">AI Studio</span>
                  </div>,
                  <div key="3" className="flex flex-col items-center gap-1">
                    <Database className="w-6 h-6 text-violet-400" />
                    <span className="text-[8px] font-bold text-slate-800 uppercase tracking-wider">RAG</span>
                  </div>
                ]}
              />
            </div>
          </div>

          {/* Cloud */}
          <div className="flex flex-col items-center gap-4 group">
            <div className="h-40 flex items-end justify-center">
              <Folder
                size={2}
                color="#1e293b"
                label="Cloud"
                isOpen={openIndex === 3}
                onToggle={() => handleToggle(3)}
                items={[
                  <div key="1" className="flex flex-col items-center gap-1">
                    <Cloud className="w-6 h-6 text-orange-500" />
                    <span className="text-[8px] font-bold text-slate-800 uppercase tracking-wider">AWS</span>
                  </div>,
                  <div key="2" className="flex flex-col items-center gap-1">
                    <Server className="w-6 h-6 text-orange-400" />
                    <span className="text-[8px] font-bold text-slate-800 uppercase tracking-wider">Docker</span>
                  </div>,
                  <div key="3" className="flex flex-col items-center gap-1">
                    <Globe className="w-6 h-6 text-orange-600" />
                    <span className="text-[8px] font-bold text-slate-800 uppercase tracking-wider">Vercel</span>
                  </div>
                ]}
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;
