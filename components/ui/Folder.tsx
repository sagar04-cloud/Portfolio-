import React, { useState, MouseEvent, useEffect, useRef } from 'react';

import './Folder.css';

const darkenColor = (hex: string, percent: number): string => {
    let color = hex.startsWith('#') ? hex.slice(1) : hex;
    if (color.length === 3) {
        color = color
            .split('')
            .map(c => c + c)
            .join('');
    }
    const num = parseInt(color, 16);
    let r = (num >> 16) & 0xff;
    let g = (num >> 8) & 0xff;
    let b = num & 0xff;
    r = Math.max(0, Math.min(255, Math.floor(r * (1 - percent))));
    g = Math.max(0, Math.min(255, Math.floor(g * (1 - percent))));
    b = Math.max(0, Math.min(255, Math.floor(b * (1 - percent))));
    return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase();
};

interface FolderProps {
    color?: string;
    size?: number;
    items?: React.ReactNode[];
    className?: string;
    label?: string;      // Name on the card
    isOpen?: boolean;    // Controlled state
    onToggle?: () => void; // Controlled toggle
}

const Folder: React.FC<FolderProps> = ({
    color = '#5227FF',
    size = 1,
    items = [],
    className = '',
    label,
    isOpen,
    onToggle
}) => {
    const maxItems = 3;
    const papers = [...items.slice(0, maxItems)];
    while (papers.length < maxItems) {
        papers.push(null);
    }

    const folderRef = useRef<HTMLDivElement>(null);
    const [internalOpen, setInternalOpen] = useState(false);
    const [paperOffsets, setPaperOffsets] = useState<{ x: number; y: number }[]>(
        Array.from({ length: maxItems }, () => ({ x: 0, y: 0 }))
    );

    const isControlled = isOpen !== undefined;
    const open = isControlled ? isOpen : internalOpen;

    const folderBackColor = darkenColor(color, 0.08);
    const paper1 = darkenColor('#ffffff', 0.1);
    const paper2 = darkenColor('#ffffff', 0.05);
    const paper3 = '#ffffff';

    const handleClick = () => {
        if (isControlled && onToggle) {
            onToggle();
        } else {
            setInternalOpen(prev => !prev);
        }
    };

    const handleMouseLeave = () => {
        if (open) {
            if (isControlled && onToggle) {
                onToggle();
            } else {
                setInternalOpen(false);
            }
        }
    };

    useEffect(() => {
        const handleOutsideClick = (e: globalThis.MouseEvent | globalThis.TouchEvent) => {
            if (folderRef.current && !folderRef.current.contains(e.target as Node)) {
                if (open) {
                    if (isControlled && onToggle) {
                        onToggle();
                    } else {
                        setInternalOpen(false);
                    }
                }
            }
        };

        document.addEventListener('mousedown', handleOutsideClick);
        document.addEventListener('touchstart', handleOutsideClick);

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
            document.removeEventListener('touchstart', handleOutsideClick);
        };
    }, [open, isControlled, onToggle]);

    // Reset offsets when closing
    useEffect(() => {
        if (!open) {
            setPaperOffsets(Array.from({ length: maxItems }, () => ({ x: 0, y: 0 })));
        }
    }, [open]);

    const handlePaperMouseMove = (e: MouseEvent<HTMLDivElement>, index: number) => {
        if (!open) return;
        const rect = e.currentTarget.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const offsetX = (e.clientX - centerX) * 0.15;
        const offsetY = (e.clientY - centerY) * 0.15;
        setPaperOffsets(prev => {
            const newOffsets = [...prev];
            newOffsets[index] = { x: offsetX, y: offsetY };
            return newOffsets;
        });
    };

    const handlePaperMouseLeave = (e: MouseEvent<HTMLDivElement>, index: number) => {
        setPaperOffsets(prev => {
            const newOffsets = [...prev];
            newOffsets[index] = { x: 0, y: 0 };
            return newOffsets;
        });
    };

    const folderStyle = {
        '--folder-color': color,
        '--folder-back-color': folderBackColor,
        '--paper-1': paper1,
        '--paper-2': paper2,
        '--paper-3': paper3
    } as React.CSSProperties;

    const folderClassName = `folder ${open ? 'open' : ''}`.trim();
    const scaleStyle = { transform: `scale(${size})`, display: 'inline-block' };

    return (
        <div style={scaleStyle} className={className} ref={folderRef} onMouseLeave={handleMouseLeave}>
            <div className={folderClassName} style={folderStyle} onClick={handleClick}>
                <div className="folder__back">
                    {papers.map((item, i) => (
                        <div
                            key={i}
                            className={`paper paper-${i + 1}`}
                            onMouseMove={e => handlePaperMouseMove(e, i)}
                            onMouseLeave={e => handlePaperMouseLeave(e, i)}
                            style={
                                open
                                    ? ({
                                        '--magnet-x': `${paperOffsets[i]?.x || 0}px`,
                                        '--magnet-y': `${paperOffsets[i]?.y || 0}px`,
                                        transform: `translate(calc(${i === 0 ? '-120%' : i === 1 ? '10%' : '-50%'} + var(--magnet-x)), calc(${i === 0 ? '-70%' : i === 1 ? '-70%' : '-100%'} + var(--magnet-y))) rotateZ(${i === 0 ? '-15deg' : i === 1 ? '15deg' : '5deg'})`
                                    } as React.CSSProperties)
                                    : {}
                            }
                        >
                            {item}
                        </div>
                    ))}
                    <div className="folder__front flex items-center justify-center overflow-hidden">
                        {label && (
                            <div className="text-white/50 font-bold text-[10px] uppercase tracking-[0.2em] transform -skew-x-12 select-none">
                                {label}
                            </div>
                        )}
                    </div>
                    <div className="folder__front right"></div>
                </div>
            </div>
        </div>
    );
};

export default Folder;
