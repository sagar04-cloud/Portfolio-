import React from 'react';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { PROJECTS } from '../constants';

const Projects: React.FC = () => {


  return (
    <section id="projects" className="py-24 px-6 md:px-0 max-w-6xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="text-3xl font-heading font-bold mb-12 flex items-center gap-4"
      >
        <span className="w-8 h-[2px] bg-indigo-500"></span>
        Selected Projects
      </motion.h2>

      <div className="grid grid-cols-1 gap-6">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bento-card group flex flex-col md:flex-row gap-8 p-6 md:items-center"
          >
            {/* Image / Preview */}
            <div className="w-full md:w-1/3 aspect-video rounded-xl overflow-hidden relative">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>

            {/* Content */}
            <div className="flex-1 flex flex-col justify-center">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-2xl font-bold font-heading text-white">{project.title}</h3>
                <div className="flex gap-2">
                  <a href={project.liveUrl} className="p-2 rounded-full hover:bg-white/10 text-slate-400 hover:text-indigo-400 transition-colors">
                    <ExternalLink className="w-5 h-5" />
                  </a>
                  <a href={project.githubUrl} className="p-2 rounded-full hover:bg-white/10 text-slate-400 hover:text-white transition-colors">
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>

              <p className="text-slate-400 mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map(t => (
                  <span key={t} className="px-3 py-1 bg-white/5 border border-white/5 rounded-full text-xs font-medium text-slate-300">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="hidden md:flex items-center justify-center pr-4 text-slate-600 group-hover:text-indigo-500 transition-colors">
              <ArrowUpRight className="w-8 h-8 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
