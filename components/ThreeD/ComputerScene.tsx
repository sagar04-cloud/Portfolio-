import React, { useRef, useState, useMemo, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { ScrollControls, useScroll, Html, ContactShadows, Environment, RoundedBox, MeshReflectorMaterial, PresentationControls, Float } from '@react-three/drei';
import * as THREE from 'three';

interface ComputerSceneProps {
    onOpen: () => void;
}

// --- PROFESSIONAL VS CODE UI ---

const CodeLine = ({ num, children }: { num: number, children: React.ReactNode }) => (
    <div className="flex gap-4 hover:bg-[#2a2d2e] w-full px-2 leading-relaxed">
        <span className="text-slate-600 text-[10px] w-4 text-right select-none mt-0.5">{num}</span>
        <div className="font-mono text-xs">{children}</div>
    </div>
);

const VSCodeScreen = () => {
    return (
        <div className="w-[960px] h-[560px] bg-[#1e1e1e] flex flex-col relative overflow-hidden select-none rounded-none font-mono text-slate-300 antialiased shadow-2xl">
            {/* Title Bar */}
            <div className="h-8 bg-[#333333] flex items-center justify-between px-3 shrink-0 border-b border-black/20 z-20">
                <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
                </div>
                <div className="text-xs text-slate-400 font-sans tracking-wide">system_analysis.py — Visual Studio Code</div>
                <div className="w-10"></div>
            </div>

            <div className="flex flex-1 overflow-hidden">
                {/* Activity Bar */}
                <div className="w-12 bg-[#333333] flex flex-col items-center py-4 gap-6 text-slate-500 border-r border-black/20 shrink-0 z-20">
                    <div className="w-6 h-6 border-l-2 border-white text-white flex items-center justify-center">⚡</div>
                    <div className="w-6 h-6 hover:text-white transition-colors">🔍</div>
                    <div className="w-6 h-6 hover:text-white transition-colors">🏗️</div>
                    <div className="w-6 h-6 hover:text-white transition-colors">📦</div>
                    <div className="mt-auto w-6 h-6 hover:text-white transition-colors">⚙️</div>
                </div>

                {/* Sidebar */}
                <div className="w-56 bg-[#252526] flex flex-col text-slate-400 text-xs shrink-0 border-r border-black z-10">
                    <div className="p-3 text-[10px] font-bold tracking-widest uppercase flex justify-between items-center">
                        <span>EXPLORER</span>
                        <span className="opacity-50">...</span>
                    </div>
                    <div className="px-3 py-1 bg-[#37373d] text-white flex items-center gap-1 font-bold">⌄ PROJECT-TWIN</div>
                    <div className="flex flex-col mt-1">
                        <div className="px-5 py-1 hover:bg-[#2a2d2e] flex items-center gap-2 cursor-pointer"><span className="text-blue-400">📂</span> modules</div>
                        <div className="px-5 py-1 hover:bg-[#2a2d2e] flex items-center gap-2 cursor-pointer"><span className="text-green-400">📂</span> analysis</div>
                        <div className="px-5 py-1 bg-[#37373d]/50 text-white flex items-center gap-2 border-l-2 border-blue-500 cursor-pointer"><span className="text-yellow-400">PY</span> system.py</div>
                        <div className="px-5 py-1 hover:bg-[#2a2d2e] flex items-center gap-2 cursor-pointer"><span className="text-blue-300">TS</span> types.d.ts</div>
                        <div className="px-5 py-1 hover:bg-[#2a2d2e] flex items-center gap-2 cursor-pointer opacity-70"><span className="text-gray-400">{'{}'}</span> config.json</div>
                    </div>
                </div>

                {/* Editor & Terminal Area */}
                <div className="flex-1 bg-[#1e1e1e] flex flex-col relative w-full">
                    {/* Tabs */}
                    <div className="h-9 bg-[#252526] flex items-center shrink-0 border-b border-black/10">
                        <div className="h-full bg-[#1e1e1e] px-4 flex items-center gap-2 text-white border-t-2 border-blue-500 text-xs min-w-[120px]">
                            <span className="text-yellow-400">PY</span> system.py <span className="ml-auto text-slate-500 hover:text-white">×</span>
                        </div>
                        <div className="h-full px-4 flex items-center gap-2 text-slate-500 text-xs hover:bg-[#2d2d2d] min-w-[120px]">
                            <span className="text-blue-300">TS</span> types.d.ts
                        </div>
                    </div>

                    {/* Editor Content */}
                    <div className="flex-1 p-2 font-mono text-[13px] relative overflow-hidden">
                        <div className="absolute inset-0 p-4 animate-[scroll-up_25s_linear_infinite]">
                            <CodeLine num={1}><span className="text-purple-400">import</span> <span className="text-blue-300">torch</span></CodeLine>
                            <CodeLine num={2}><span className="text-purple-400">import</span> <span className="text-blue-300">numpy</span> <span className="text-purple-400">as</span> <span className="text-blue-300">np</span></CodeLine>
                            <CodeLine num={3}><span className="text-purple-400">from</span> <span className="text-green-400">digital_twin</span> <span className="text-purple-400">import</span> <span className="text-yellow-300">Analyzer</span></CodeLine>
                            <CodeLine num={4}> </CodeLine>
                            <CodeLine num={5}><span className="text-slate-500"># Initialize the AI System Analysis</span></CodeLine>
                            <CodeLine num={6}><span className="text-purple-400">class</span> <span className="text-yellow-300">SystemProfile</span>:</CodeLine>
                            <CodeLine num={7}><span className="pl-4"><span className="text-purple-400">def</span> <span className="text-blue-400">__init__</span>(<span className="text-orange-300">self</span>):</span></CodeLine>
                            <CodeLine num={8}><span className="pl-8"><span className="text-orange-300">self</span>.developer = <span className="text-green-300">"Sagar"</span></span></CodeLine>
                            <CodeLine num={9}><span className="pl-8"><span className="text-orange-300">self</span>.role = <span className="text-green-300">"Full Stack AI Engineer"</span></span></CodeLine>
                            <CodeLine num={10}><span className="pl-8"><span className="text-orange-300">self</span>.status = <span className="text-purple-400">True</span></span></CodeLine>
                            <CodeLine num={11}> </CodeLine>
                            <CodeLine num={12}><span className="pl-4"><span className="text-purple-400">def</span> <span className="text-blue-400">analyze_stack</span>(<span className="text-orange-300">self</span>):</span></CodeLine>
                            <CodeLine num={13}><span className="pl-8"><span className="text-purple-400">return</span> [</span></CodeLine>
                            <CodeLine num={14}><span className="pl-12 text-green-300">"React Three Fiber",</span></CodeLine>
                            <CodeLine num={15}><span className="pl-12 text-green-300">"Next.js 14",</span></CodeLine>
                            <CodeLine num={16}><span className="pl-12 text-green-300">"Python / TensorFlow",</span></CodeLine>
                            <CodeLine num={17}><span className="pl-12 text-green-300">"AWS Cloud Architecture"</span></CodeLine>
                            <CodeLine num={18}><span className="pl-8">]</span></CodeLine>
                            <CodeLine num={19}> </CodeLine>
                            <CodeLine num={20}><span className="text-slate-500"># Run Diagnostics</span></CodeLine>
                            <CodeLine num={21}><span className="text-blue-300">system</span> = <span className="text-yellow-300">SystemProfile</span>()</CodeLine>
                            <CodeLine num={22}><span className="text-blue-300">system</span>.<span className="text-blue-400">optimize_performance</span>(<span className="text-orange-300">mode</span>=<span className="text-green-300">"ultra"</span>)</CodeLine>

                            <div className="bg-[#2a2d2e] bg-opacity-50 border-l-2 border-green-500 p-2 mt-4 ml-8 text-xs text-slate-300">
                                <div><span className="text-green-400">✓</span> Analysis Complete</div>
                                <div><span className="text-green-400">✓</span> Render Engine: Active</div>
                                <div><span className="text-blue-400">➜</span> Ready for User Interaction... <span className="animate-pulse">_</span></div>
                            </div>
                        </div>
                    </div>

                    {/* Integrated Terminal Panel */}
                    <div className="h-32 bg-[#1e1e1e] border-t border-white/10 flex flex-col pt-1">
                        <div className="flex gap-4 px-4 text-[10px] uppercase tracking-wider text-slate-500 border-b border-white/5 pb-1 mb-1">
                            <span className="text-white border-b border-white">Terminal</span>
                            <span>Output</span>
                            <span>Problems</span>
                        </div>
                        <div className="flex-1 p-2 px-4 font-mono text-[11px] text-slate-400 overflow-hidden font-light space-y-1">
                            <div><span className="text-green-500">user@portfolio</span>:<span className="text-blue-500">~/workspace</span>$ npm run dev</div>
                            <div className="text-slate-500">   ready - started server on 0.0.0.0:3000, url: http://localhost:3000</div>
                            <div className="text-green-400">   event - compiled client and server successfully in 1241 ms (156 modules)</div>
                            <div><span className="text-green-500">user@portfolio</span>:<span className="text-blue-500">~/workspace</span>$ py analysis.py</div>
                            <div className="text-blue-300">   &gt; Neural Network initializing...</div>
                            <div className="text-blue-300">   &gt; Loading weights from 'professional_v2.pth'...</div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Status Bar */}
            <div className="h-6 bg-[#007acc] text-white flex items-center justify-between px-3 text-[10px] shrink-0 z-20 shadow-lg">
                <div className="flex gap-4">
                    <div className="flex items-center gap-1 font-bold"><span className="text-xs">⑂</span> main*</div>
                    <div className="flex items-center gap-1 opacity-80">ⓧ 0 ⚠ 0</div>
                </div>
                <div className="flex gap-4 items-center font-medium">
                    <span className="opacity-80">Ln 22, Col 46</span>
                    <span className="opacity-80">UTF-8</span>
                    <span>Python 3.11.0</span>
                    <span className="hover:animate-spin cursor-pointer">⚡</span>
                </div>
            </div>

            <style>{`
                @keyframes scroll-up {
                    0% { transform: translateY(0); }
                    100% { transform: translateY(-40%); }
                }
            `}</style>
        </div>
    );
};

const VerticalScreen = () => {
    return (
        <div className="w-[560px] h-[960px] bg-[#1e1e1e] flex flex-col font-mono text-base text-white p-0 select-none relative overflow-hidden rounded-lg shadow-2xl">
            {/* Title Bar */}
            <div className="h-10 bg-[#3c3c3c] flex items-center justify-between px-4 shrink-0 border-b border-black/20 z-20 rounded-t-lg">
                <div className="flex items-center gap-3">
                    <div className="w-3.5 h-3.5 rounded-full bg-[#ff5f56]"></div>
                    <div className="w-3.5 h-3.5 rounded-full bg-[#ffbd2e]"></div>
                    <div className="w-3.5 h-3.5 rounded-full bg-[#27c93f]"></div>
                </div>
                <div className="text-sm text-slate-300 font-sans tracking-wide">bash — 80x24</div>
                <div className="w-10"></div>
            </div>

            {/* Terminal Content */}
            <div className="flex-1 p-6 text-sm leading-relaxed overflow-hidden font-medium">
                <div className="flex items-center gap-2 mb-4">
                    <span className="text-green-400">sagar@portfolio</span>
                    <span className="text-blue-400">~</span>
                    <span className="text-white">$</span>
                    <span className="text-white animate-pulse">_</span>
                </div>
                <div className="space-y-2 text-slate-300">
                    <p>Last login: {new Date().toLocaleString()} on ttys001</p>
                    <p className="mt-6 text-white">Welcome to the interactive portfolio terminal.</p>
                    <p>Type <span className="text-yellow-400">help</span> for a list of commands.</p>

                    <div className="mt-6">
                        <p><span className="text-green-400">sagar@portfolio</span>:<span className="text-blue-400">~</span> <span className="text-white">$</span> ls -la</p>
                        <div className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-1 mt-2 text-slate-400 pl-4">
                            <span>drwxr-xr-x</span> <span>.</span>
                            <span>drwxr-xr-x</span> <span>..</span>
                            <span>-rw-r--r--</span> <span className="text-green-300">about.md</span>
                            <span>-rw-r--r--</span> <span className="text-green-300">projects.json</span>
                            <span>drwxr-xr-x</span> <span className="text-blue-300">src</span>
                        </div>
                    </div>

                    <div className="mt-6">
                        <p><span className="text-green-400">sagar@portfolio</span>:<span className="text-blue-400">~</span> <span className="text-white">$</span> cat about.md</p>
                        <div className="mt-2 pl-4 border-l-2 border-slate-700 text-slate-300 space-y-2">
                            <p className="font-bold text-white"># About Me</p>
                            <p>I'm a Full Stack AI Engineer crafting immersive digital experiences.</p>
                            <p>Expertise: React, Next.js, Python, TensorFlow.</p>
                        </div>
                    </div>
                    <p className="mt-4"><span className="text-green-400">sagar@portfolio</span>:<span className="text-blue-400">~</span> <span className="text-white animate-pulse">▋</span></p>
                </div>
            </div>
        </div>
    );
};


// --- 3D SCENE ASSETS ---

const Setup = ({ onOpen }: { onOpen: () => void }) => {
    const scroll = useScroll();
    const { width: screenWidth } = useThree((state) => state.size);
    const isMobile = screenWidth < 768;

    const groupRef = useRef<THREE.Group>(null);

    useFrame((state) => {
        const r1 = scroll.range(0, 1);
        const startPos = new THREE.Vector3(0, 1.5, isMobile ? 8 : 5);
        const endPos = new THREE.Vector3(0, isMobile ? 0.2 : 0.45, isMobile ? 3.5 : 1.4);

        state.camera.position.lerpVectors(startPos, endPos, r1);
        state.camera.lookAt(0, 0.4, 0);

        if (r1 > 0.6) onOpen();
    });

    const keys = useMemo(() => {
        const k = [];
        for (let row = 0; row < 5; row++) {
            for (let col = 0; col < 14; col++) {
                if (row === 4 && (col > 3 && col < 10)) continue;
                k.push(
                    <mesh key={`${row}-${col}`} position={[(col * 0.08) - 0.52, 0.02, (row * 0.08) - 0.15]} castShadow receiveShadow>
                        <boxGeometry args={[0.065, 0.03, 0.065]} />
                        <meshStandardMaterial color="#222" roughness={0.7} metalness={0.2} />
                    </mesh>
                )
            }
        }
        k.push(
            <mesh key="space" position={[0, 0.02, 0.17]} castShadow receiveShadow>
                <boxGeometry args={[0.4, 0.03, 0.065]} />
                <meshStandardMaterial color="#222" roughness={0.7} metalness={0.2} />
            </mesh>
        );
        return k;
    }, []);

    const LEDFan = ({ position, color }: { position: [number, number, number], color: string }) => (
        <group position={position}>
            <pointLight distance={0.5} intensity={3} color={color} />
            <mesh rotation={[Math.PI / 2, 0, 0]}>
                <cylinderGeometry args={[0.07, 0.07, 0.01, 32]} />
                <meshStandardMaterial color="#111" />
            </mesh>
            <mesh rotation={[Math.PI / 2, 0, 0]}>
                <ringGeometry args={[0.072, 0.08, 32]} />
                <meshBasicMaterial color={color} toneMapped={false} />
            </mesh>
        </group>
    );

    return (
        <group ref={groupRef}>
            <PresentationControls
                global
                zoom={isMobile ? 0.5 : 0.7}
                polar={[-0.1, 0.1]}
                azimuth={[-0.2, 0.2]}
            >
                <group rotation={[0, -0.1, 0]}>
                    {/* --- DESK --- */}
                    <group position={[0, -0.85, 0]}>
                        <RoundedBox args={[14, 0.2, 6]} radius={0.05} receiveShadow>
                            <meshStandardMaterial color="#111" roughness={0.4} metalness={0.6} />
                        </RoundedBox>

                        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.101, 0]}>
                            <planeGeometry args={[14, 6]} />
                            <MeshReflectorMaterial
                                blur={[400, 100]}
                                resolution={1024}
                                mixBlur={1}
                                mixStrength={15}
                                roughness={0.6}
                                depthScale={1.2}
                                minDepthThreshold={0.4}
                                maxDepthThreshold={1.4}
                                color="#1a1a1a"
                                metalness={0.6}
                                mirror={0.4}
                            />
                        </mesh>
                    </group>

                    {/* --- MAIN MONITOR (VS Code - Right Side) --- */}
                    <group position={[1.2, 0, 0]} rotation={[0, -0.1, 0]}>
                        <Float speed={1.5} rotationIntensity={0.05} floatIntensity={0.1}>
                            {/* Pro Stand */}
                            <mesh position={[0, -0.4, -0.2]} castShadow receiveShadow>
                                <cylinderGeometry args={[0.08, 0.12, 0.8, 32]} />
                                <meshStandardMaterial color="#1f1f1f" metalness={0.8} roughness={0.2} />
                            </mesh>
                            <RoundedBox args={[0.7, 0.05, 0.5]} position={[0, -0.78, -0.2]} radius={0.05} castShadow>
                                <meshStandardMaterial color="#1f1f1f" metalness={0.8} roughness={0.2} />
                            </RoundedBox>

                            {/* Monitor Head (Scaled Down) */}
                            <group position={[0, 0.3, 0]}>
                                <RoundedBox args={[2.2, 1.35, 0.05]} radius={0.015} castShadow>
                                    <meshStandardMaterial color="#0a0a0a" roughness={0.2} metalness={0.8} />
                                </RoundedBox>

                                {/* Screen Content */}
                                <mesh position={[0, 0, 0.026]}>
                                    <planeGeometry args={[2.15, 1.3]} />
                                    <meshStandardMaterial color="#000" />
                                    <Html transform position={[0, 0, 0.001]} style={{ width: '960px', height: '560px' }} scale={0.2}>
                                        <VSCodeScreen />
                                    </Html>
                                </mesh>

                                {/* Activity LED */}
                                <mesh position={[1.05, -0.65, 0.03]}>
                                    <circleGeometry args={[0.005]} />
                                    <meshBasicMaterial color="#00ff00" toneMapped={false} />
                                </mesh>
                            </group>
                        </Float>
                    </group>

                    {/* --- VERTICAL MONITOR (Terminal - Left Side) --- */}
                    <group position={[-1.2, 0.1, 0.3]} rotation={[0, 0.4, 0]}>
                        <Float speed={1.5} rotationIntensity={0.02} floatIntensity={0.1}>
                            {/* Vertical Stand */}
                            <mesh position={[0, -0.5, -0.2]} castShadow receiveShadow>
                                <cylinderGeometry args={[0.06, 0.1, 0.8, 32]} />
                                <meshStandardMaterial color="#1f1f1f" metalness={0.8} roughness={0.2} />
                            </mesh>
                            <RoundedBox args={[0.6, 0.05, 0.5]} position={[0, -0.88, -0.2]} radius={0.05} castShadow>
                                <meshStandardMaterial color="#1f1f1f" metalness={0.8} roughness={0.2} />
                            </RoundedBox>

                            {/* Monitor Head (Scaled Down Further) */}
                            <group position={[0, 0.15, 0]}>
                                <RoundedBox args={[0.8, 1.4, 0.05]} radius={0.015} castShadow>
                                    <meshStandardMaterial color="#0a0a0a" roughness={0.2} metalness={0.8} />
                                </RoundedBox>
                                <mesh position={[0, 0, 0.026]}>
                                    <planeGeometry args={[0.75, 1.35]} />
                                    <meshStandardMaterial color="#000" />
                                    <Html transform position={[0, 0, 0.001]} style={{ width: '560px', height: '960px' }} scale={0.18}>
                                        <VerticalScreen />
                                    </Html>
                                </mesh>
                            </group>
                        </Float>
                    </group>

                    {/* --- PC CASE (Matte Black Pro Workstation) --- */}
                    <group position={[2.6, -0.15, 0.3]} rotation={[0, -0.3, 0]}>
                        {/* Main Chassis: Dark Matte Black Metal */}
                        <RoundedBox args={[0.7, 1.8, 1.9]} radius={0.02} castShadow receiveShadow>
                            <meshStandardMaterial color="#111" roughness={0.3} metalness={0.8} />
                        </RoundedBox>

                        {/* Front Panel: Geometric Intake */}
                        <mesh position={[0, 0, 0.96]}>
                            <RoundedBox args={[0.68, 1.78, 0.02]} radius={0.01} />
                            <meshStandardMaterial color="#080808" roughness={0.9} />
                            {/* Subtle Vertical RGB Line */}
                            <mesh position={[0, 0, 0.011]}>
                                <boxGeometry args={[0.01, 1.6, 0.01]} />
                                <meshBasicMaterial color="#3b82f6" toneMapped={false} />
                            </mesh>
                        </mesh>

                        {/* Tinted Tempered Glass Side Panel */}
                        <mesh position={[-0.36, 0, 0]}>
                            <boxGeometry args={[0.01, 1.6, 1.7]} />
                            <meshPhysicalMaterial
                                color="#000"
                                transmission={0.8}
                                opacity={1}
                                metalness={0}
                                roughness={0.1}
                                ior={1.5}
                                thickness={0.05}
                            />
                        </mesh>

                        {/* Internal Components Refined */}
                        <group position={[0, 0, 0]}>
                            {/* Motherboard Tray */}
                            <mesh position={[0.3, 0, 0]}>
                                <boxGeometry args={[0.02, 1.6, 1.6]} />
                                <meshStandardMaterial color="#1a1a1a" metalness={0.5} roughness={0.8} />
                            </mesh>

                            {/* High-End GPU */}
                            <RoundedBox args={[0.4, 0.08, 1.0]} radius={0.02} position={[0, -0.2, 0.1]}>
                                <meshStandardMaterial color="#2d2d2d" metalness={0.7} roughness={0.4} />
                            </RoundedBox>
                            {/* GPU RGB Accent */}
                            <mesh position={[-0.21, -0.2, 0.1]}>
                                <boxGeometry args={[0.01, 0.01, 0.9]} />
                                <meshBasicMaterial color="#22d3ee" toneMapped={false} />
                            </mesh>

                            {/* RGB RAM Sticks */}
                            <group position={[0.2, 0.2, -0.2]}>
                                <mesh position={[-0.011, 0, 0]}>
                                    <boxGeometry args={[0.005, 0.2, 0.01]} />
                                    <meshBasicMaterial color="#e11d48" toneMapped={false} />
                                </mesh>
                                <mesh position={[0.039, 0, 0]}>
                                    <boxGeometry args={[0.005, 0.2, 0.01]} />
                                    <meshBasicMaterial color="#e11d48" toneMapped={false} />
                                </mesh>
                            </group>

                            {/* AIO Cooler Pump (CPU Block) */}
                            <mesh position={[0.2, 0.2, 0.3]} rotation={[0, 0, Math.PI / 2]}>
                                <cylinderGeometry args={[0.06, 0.06, 0.05, 32]} />
                                <meshStandardMaterial color="#111" />
                            </mesh>
                            <pointLight position={[0.15, 0.2, 0.3]} color="#ffffff" intensity={1} distance={0.3} />

                            {/* Fans */}
                            <LEDFan position={[0.1, 0.5, 0.8]} color="#6366f1" />
                            <LEDFan position={[0.1, 0, 0.8]} color="#8b5cf6" />
                            <LEDFan position={[0.1, -0.5, 0.8]} color="#ec4899" />
                        </group>
                    </group>

                    {/* --- KEYBOARD (Pro Mech) --- */}
                    <group position={[0, -0.73, 1.1]} rotation={[-0.05, 0, 0]}>
                        <RoundedBox args={[1.4, 0.06, 0.5]} radius={0.02} castShadow receiveShadow>
                            <meshStandardMaterial color="#121212" roughness={0.5} metalness={0.5} />
                        </RoundedBox>
                        <group position={[0.02, 0.04, 0.02]}>{keys}</group>
                    </group>

                    {/* --- SCROLL INDICATOR --- */}
                    <Html position={[0, -1.0, 1.5]} center>
                        <div className="flex flex-col items-center gap-2 opacity-80 animate-bounce">
                            <div className="text-white text-xs tracking-[0.2em] font-medium text-shadow">SCROLL TO ENTER</div>
                            <div className="w-0.5 h-10 bg-gradient-to-b from-blue-500 to-transparent"></div>
                        </div>
                    </Html>

                    {/* --- MOUSE (Pro Wireless) --- */}
                    <group position={[0.9, -0.73, 1.1]} rotation={[0, -0.3, 0]}>
                        <RoundedBox args={[0.16, 0.07, 0.3]} radius={0.04} castShadow receiveShadow>
                            <meshStandardMaterial color="#121212" roughness={0.5} metalness={0.2} />
                        </RoundedBox>
                        <mesh position={[0, 0.036, -0.05]}>
                            <boxGeometry args={[0.005, 0.01, 0.08]} />
                            <meshBasicMaterial color="#3b82f6" toneMapped={false} />
                        </mesh>
                    </group>
                </group>
            </PresentationControls>
        </group>
    );
};

const ComputerScene: React.FC<ComputerSceneProps> = ({ onOpen }) => {
    return (
        <Canvas shadows camera={{ position: [0, 1.5, 5], fov: 45 }} gl={{ antialias: true, toneMapping: THREE.ACESFilmicToneMapping, toneMappingExposure: 1.0 }}>
            <color attach="background" args={['#050505']} />

            <React.Suspense fallback={<Html center><div className="text-white/50 text-xs font-mono tracking-widest">LOADING WORKSTATION...</div></Html>}>
                <ambientLight intensity={0.4} />
                <spotLight position={[5, 10, 5]} angle={0.4} penumbra={1} intensity={2.5} castShadow shadow-bias={-0.0001} />
                <pointLight position={[-3, 4, 3]} intensity={2} color="#4f46e5" />
                <pointLight position={[3, 4, 3]} intensity={1.5} color="#db2777" />

                <Environment preset="city" environmentIntensity={0.6} />
                <ContactShadows position={[0, -0.85, 0]} opacity={0.4} scale={20} blur={2.5} far={4} />

                <ScrollControls pages={2} damping={0.2}>
                    <Setup onOpen={onOpen} />
                </ScrollControls>
            </React.Suspense>
        </Canvas>
    );
};

export default ComputerScene;
