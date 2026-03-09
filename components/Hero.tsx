import React from 'react';
import {
  MapPin,
  Github,
  Twitter,
  Linkedin,
  Mail,
  ArrowUpRight,
} from 'lucide-react';
import { motion, Variants } from 'framer-motion';
import TiltCard from './ui/TiltCard';
import Magnet from './ui/Magnet';





interface HeroProps {
  startPopup?: boolean;
}

const Hero: React.FC<HeroProps> = ({ startPopup = false }) => {
  const [showPopup, setShowPopup] = React.useState(false);

  React.useEffect(() => {
    if (startPopup) {
      setShowPopup(true);

      // Close on any scroll interaction
      const handleScroll = () => {
        setShowPopup(false);
      };

      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, [startPopup]);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  return (
    <section className="min-h-screen pt-32 pb-20 px-6 relative">
      {/* System Access Popup Overlay */}
      <style>
        {`@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@500;700&family=Rajdhani:wght@500;700&display=swap');`}
      </style>
      {showPopup && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 backdrop-blur-md"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
            className="bg-[#0f1115] border border-indigo-500/50 rounded-lg p-1 shadow-[0_0_100px_rgba(99,102,241,0.4)]"
          >
            <div className="bg-black/40 border border-white/5 rounded p-8 w-[90vw] max-w-[500px] flex flex-col items-center text-center gap-6 relative overflow-hidden">
              {/* Scanning Line */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-indigo-500 to-transparent animate-[shimmer_2s_infinite]"></div>

              {/* Icon */}
              <div className="w-16 h-16 rounded-full bg-indigo-500/10 flex items-center justify-center border border-indigo-500/20 mb-2">
                <div className="w-10 h-10 rounded-full bg-indigo-500 animate-pulse"></div>
              </div>

              <div className="space-y-2">
                <h2 className="text-3xl text-white font-bold tracking-widest uppercase" style={{ fontFamily: '"Orbitron", sans-serif' }}>
                  Access Granted
                </h2>
                <p className="text-indigo-400 text-sm tracking-[0.2em] font-sans">
                  INITIALIZING SECURE SESSION
                </p>
              </div>

              <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent my-2"></div>

              <h1 className="text-4xl text-white font-medium" style={{ fontFamily: '"Rajdhani", sans-serif' }}>
                Welcome to <span className="text-indigo-400 font-bold">Sagar's Portfolio</span>
              </h1>

              {/* Scroll Interaction Cue */}
              <div className="flex flex-col items-center gap-2 mt-4 animate-bounce">
                <span className="text-[10px] uppercase tracking-[0.3em] text-slate-500 font-sans">Scroll to Enter</span>
                <ArrowUpRight className="w-5 h-5 text-indigo-400 rotate-180" />
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-7xl mx-auto"
      >

        {/* 1. Main Profile Card (2x2) */}
        <motion.div
          variants={itemVariants}
          className="col-span-1 md:col-span-2 row-span-2 relative group"
        >
          <TiltCard className="h-full">
            <div className="bento-card p-8 flex flex-col justify-between relative overflow-hidden h-full border-white/5 hover:border-indigo-500/30">
              <div className="z-10">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-500 mb-6 shadow-lg shadow-indigo-500/20 flex items-center justify-center text-white font-bold text-2xl animate-pulse">
                  AI
                </div>
                <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4 tracking-tight">
                  Full Stack <br />
                  <span className="text-slate-400">AI Engineer</span>
                </h1>
                <p className="text-slate-400 text-lg max-w-sm leading-relaxed">
                  Crafting intelligent digital experiences with React, Node.js, and Generative Models.
                </p>
              </div>
              <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl group-hover:bg-indigo-500/20 transition-all duration-500"></div>
            </div>
          </TiltCard>
        </motion.div>

        {/* 2. Status Card (1x1) */}
        <motion.div variants={itemVariants} className="col-span-1 bento-card p-6 flex flex-col justify-between bg-zinc-900/80 hover:bg-zinc-900/90 hover:border-green-500/30">
          <div className="flex justify-between items-start">
            <span className="text-slate-500 font-medium text-xs uppercase tracking-wider">Status</span>
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
          </div>
          <div>
            <div className="text-2xl font-bold text-white mb-1">Available</div>
            <div className="text-sm text-slate-400">for freelance & contracts</div>
          </div>
        </motion.div>

        {/* 3. Location / Globe Card (1x1) */}
        <motion.div variants={itemVariants} className="col-span-1 bento-card p-6 flex flex-col justify-between group cursor-default hover:border-blue-500/30">
          <MapPin className="w-8 h-8 text-indigo-400 group-hover:scale-110 transition-transform duration-300" />
          <div>
            <div className="text-xl font-bold text-white mb-1">Bangalore</div>
            <div className="text-sm text-slate-400">Remote Compatible</div>
          </div>
        </motion.div>

        {/* 4. Tech Stack (2x1) */}
        <motion.div variants={itemVariants} className="col-span-1 md:col-span-2 bento-card p-6 flex flex-col justify-center hover:border-purple-500/30">
          <h3 className="text-slate-500 font-medium text-xs uppercase tracking-wider mb-4">Core Technologies</h3>
          <div className="flex flex-wrap gap-3">
            {['React', 'TypeScript', 'Python', 'UI/UX', 'Supabase', 'Firebase', 'AWS'].map((tech) => (
              <span key={tech} className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/5 text-slate-300 text-sm font-medium hover:bg-white/10 hover:border-indigo-500/30 hover:text-white transition-all cursor-default">
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="col-span-1 md:col-span-2 bento-card p-6 flex flex-col md:flex-row justify-around items-center gap-4 hover:border-pink-500/30">
          <SocialRow icon={<Github className="w-6 h-6" />} label="Github" href="https://github.com/sagar04-cloud" />
          <SocialRow icon={<Linkedin className="w-6 h-6" />} label="LinkedIn" href="https://www.linkedin.com/in/sagar-u/" />
          <SocialRow icon={<Mail className="w-6 h-6" />} label="Email" href="https://mail.google.com/mail/?view=cm&fs=1&to=sagaru.works@gmail.com" />
        </motion.div>

        {/* 6. Contact CTA (2x1) */}
        <motion.div variants={itemVariants} className="col-span-1 md:col-span-2 relative group">
          <TiltCard className="h-full">
            <div className="bento-card p-8 flex flex-row justify-between items-center bg-gradient-to-r from-indigo-900/50 to-purple-900/50 border-indigo-500/20 cursor-pointer relative overflow-hidden hover:border-indigo-500/50 transition-colors h-full">
              <div className="relative z-10 text-left">
                <div className="font-bold text-2xl text-white mb-1">Let's build something epic.</div>
                <p className="text-indigo-200/80 text-sm">Open for freelance and collaborations.</p>
              </div>

              <div className="relative z-10 bg-white/10 p-4 rounded-full group-hover:bg-white/20 transition-all group-hover:scale-110">
                <ArrowUpRight className="w-6 h-6 text-white" />
              </div>

              {/* Subtle shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-shine" style={{ animationDuration: '1.5s' }}></div>
            </div>
          </TiltCard>
        </motion.div>

      </motion.div>
    </section>
  );
};

const SocialRow = ({ icon, label, href }: { icon: React.ReactNode, label: string, href: string }) => {
  return (
    <Magnet magnetStrength={15}>
      <a href={href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors group">
        <div className="p-2 rounded-lg bg-white/5 group-hover:bg-white/10 transition-colors">
          {icon}
        </div>
        <span className="font-medium text-sm">{label}</span>
      </a>
    </Magnet>
  );
};

export default Hero;
