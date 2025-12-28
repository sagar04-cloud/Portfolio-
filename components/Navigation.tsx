import React, { useState, useEffect } from 'react';
import { Home, User, Code, Folder, Mail } from 'lucide-react';
import Magnet from './ui/Magnet';

const Navigation: React.FC = () => {
    const navLinks = [
        { name: 'Home', href: '#', icon: <Home className="w-5 h-5" /> },
        { name: 'About', href: '#about', icon: <User className="w-5 h-5" /> },
        { name: 'Skills', href: '#skills', icon: <Code className="w-5 h-5" /> },
        { name: 'Projects', href: '#projects', icon: <Folder className="w-5 h-5" /> },
        { name: 'Contact', href: '#contact', icon: <Mail className="w-5 h-5" /> },
    ];

    return (
        <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
            <div className="flex items-center gap-2 p-3 rounded-2xl bg-zinc-900/80 backdrop-blur-xl border border-white/10 shadow-2xl shadow-black/50">
                {navLinks.map((link) => (
                    <Magnet key={link.name} padding={20} disabled={false} magnetStrength={10}>
                        <a
                            href={link.href}
                            className="p-3 text-slate-400 hover:text-white hover:bg-white/10 rounded-xl transition-all duration-300 relative group block"
                            aria-label={link.name}
                        >
                            {link.icon}
                            <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-zinc-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-white/10 pointer-events-none">
                                {link.name}
                            </span>
                        </a>
                    </Magnet>
                ))}
            </div>
        </nav>
    );
};

export default Navigation;
