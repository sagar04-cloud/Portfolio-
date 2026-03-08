
import React from 'react';
import {
  Code2,
  Cpu,
  Database,
  Globe,
  Layers,
  Layout,
  MessageSquare,
  Cloud,
  Server,
  Sparkles,
  Terminal,
  Bot
} from 'lucide-react';
import { Project, SkillCategory } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'AI Interview Prep',
    description: 'A state-of-the-art platform designed to help candidates ace job interviews using Gemini 2.5 Flash. features real-time mock interviews with voice interaction and structured feedback.',
    image: './assets/ai-interviewer.png',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Gemini AI'],
    liveUrl: 'https://ai-interviewer1.vercel.app/',
    githubUrl: 'https://github.com/sagar04-cloud/ai-interview'
  },
  {
    id: '2',
    title: 'SkillBridge AI',
    description: 'An AI-driven platform designed to bridge the gap between skills and career opportunities. It leverages Gemini AI to provide intelligent recommendations and path-finding for skill development.',
    image: './assets/skill-bridge.png',
    tech: ['React', 'TypeScript', 'Node.js', 'Gemini AI'],
    liveUrl: 'https://skillbridge-ai-iota.vercel.app/',
    githubUrl: 'https://github.com/sagar04-cloud/SkillBridge-AI'
  },
  {
    id: '3',
    title: 'Smart Campus Assistant',
    description: 'An intelligent campus assistant featuring an AI chatbot for general inquiries, campus navigation assistance, and real-time event information for students and faculty.',
    image: './assets/smart-campus.png',
    tech: ['React', 'TypeScript', 'Node.js', 'Gemini AI'],
    liveUrl: 'https://smart-campus-ai-assistant.vercel.app/',
    githubUrl: 'https://github.com/sagar04-cloud/smart-campus-ai-assistant'
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Frontend',
    skills: [
      { name: 'React', icon: <Layout className="w-5 h-5" /> },
      { name: 'TypeScript', icon: <Code2 className="w-5 h-5" /> },
      { name: 'Tailwind CSS', icon: <Layers className="w-5 h-5" /> },
      { name: 'Framer Motion', icon: <Sparkles className="w-5 h-5" /> }
    ]
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', icon: <Server className="w-5 h-5" /> },
      { name: 'Supabase', icon: <Database className="w-5 h-5" /> },
      { name: 'Python', icon: <Terminal className="w-5 h-5" /> },
      { name: 'GraphQL', icon: <Globe className="w-5 h-5" /> }
    ]
  },
  {
    title: 'AI & Data',
    skills: [
      { name: 'Gemini API', icon: <Bot className="w-5 h-5" /> },
      { name: 'TensorFlow', icon: <Cpu className="w-5 h-5" /> },
      { name: 'PyTorch', icon: <Cpu className="w-5 h-5" /> },
      { name: 'NLP', icon: <MessageSquare className="w-5 h-5" /> }
    ]
  },
  {
    title: 'Cloud',
    skills: [
      { name: 'AWS', icon: <Cloud className="w-5 h-5" /> },
      { name: 'Docker', icon: <Layers className="w-5 h-5" /> },
      { name: 'Vercel', icon: <Globe className="w-5 h-5" /> },
      { name: 'Firebase', icon: <Database className="w-5 h-5" /> }
    ]
  }
];
