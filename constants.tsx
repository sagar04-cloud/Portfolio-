
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
    title: 'NeuralVision AI',
    description: 'A real-time object detection and classification dashboard using TensorFlow.js and React.',
    image: 'https://picsum.photos/seed/nv/800/600',
    tech: ['React', 'TensorFlow.js', 'Tailwind', 'Python'],
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    id: '2',
    title: 'SentientFlow CRM',
    description: 'An AI-powered CRM that predicts customer churn and automates follow-up emails.',
    image: 'https://picsum.photos/seed/crm/800/600',
    tech: ['Next.js', 'Node.js', 'OpenAI', 'Supabase'],
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    id: '3',
    title: 'VibeCode Editor',
    description: 'A minimalist collaborative code editor with integrated Gemini-based auto-completion.',
    image: 'https://picsum.photos/seed/vibe/800/600',
    tech: ['TypeScript', 'WebSocket', 'Firebase', 'Gemini API'],
    liveUrl: '#',
    githubUrl: '#'
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
