import React, { useEffect, useRef } from 'react';

const Background: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let w = (canvas.width = window.innerWidth);
        let h = (canvas.height = window.innerHeight);

        // Grid Config
        const gridSize = 40;
        const gridColor = 'rgba(255, 255, 255, 0.03)';

        // Beam Config
        interface Beam {
            x: number;
            y: number;
            isHorizontal: boolean;
            speed: number;
            head: number; // Position along the line
            length: number;
        }

        const beams: Beam[] = [];
        const maxBeams = 10;

        const resize = () => {
            w = canvas.width = window.innerWidth;
            h = canvas.height = window.innerHeight;
        };

        const createBeam = () => {
            if (beams.length >= maxBeams) return;

            const isHorizontal = Math.random() > 0.5;
            // Snap to grid
            const x = Math.floor(Math.random() * (w / gridSize)) * gridSize;
            const y = Math.floor(Math.random() * (h / gridSize)) * gridSize;

            beams.push({
                x,
                y,
                isHorizontal,
                speed: 2 + Math.random() * 2,
                head: 0,
                length: 100 + Math.random() * 150
            });
        };

        const animate = () => {
            ctx.clearRect(0, 0, w, h);

            // Draw Background Mesh/Gradients (Static)
            // We'll do this in CSS for performance, canvas just for beams/grid

            // Draw Static Grid
            ctx.beginPath();
            ctx.strokeStyle = gridColor;
            ctx.lineWidth = 1;

            for (let x = 0; x <= w; x += gridSize) {
                ctx.moveTo(x, 0);
                ctx.lineTo(x, h);
            }
            for (let y = 0; y <= h; y += gridSize) {
                ctx.moveTo(0, y);
                ctx.lineTo(w, y);
            }
            ctx.stroke();

            // Update and Draw Beams
            if (Math.random() < 0.05) createBeam();

            ctx.lineWidth = 2;

            for (let i = beams.length - 1; i >= 0; i--) {
                const b = beams[i];
                b.head += b.speed;

                const maxDist = b.isHorizontal ? w : h;
                if (b.head - b.length > maxDist) {
                    beams.splice(i, 1);
                    continue;
                }

                // Gradient for the beam
                const gradient = ctx.createLinearGradient(
                    b.isHorizontal ? b.head - b.length : 0,
                    b.isHorizontal ? 0 : b.head - b.length,
                    b.isHorizontal ? b.head : 0,
                    b.isHorizontal ? 0 : b.head
                );
                gradient.addColorStop(0, 'transparent');
                gradient.addColorStop(1, 'rgba(99, 102, 241, 0.5)'); // Indigo-500

                ctx.strokeStyle = gradient;
                ctx.beginPath();

                if (b.isHorizontal) {
                    ctx.moveTo(b.head - b.length, b.y);
                    ctx.lineTo(b.head, b.y);
                } else {
                    ctx.moveTo(b.x, b.head - b.length);
                    ctx.lineTo(b.x, b.head);
                }
                ctx.stroke();
            }

            requestAnimationFrame(animate);
        };

        window.addEventListener('resize', resize);
        resize();
        animate();

        return () => window.removeEventListener('resize', resize);
    }, []);

    // Outer div handles the radial mesh gradients
    return (
        <div className="fixed inset-0 -z-10 bg-[#09090b]">
            {/* Mesh Gradients */}
            <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-indigo-500/10 blur-[120px]" />
            <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-purple-500/10 blur-[120px]" />

            {/* The Grid Canvas */}
            <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
        </div>
    );
};

export default Background;
