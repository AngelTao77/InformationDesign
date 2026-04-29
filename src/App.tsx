import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring, AnimatePresence } from 'motion/react';
import { 
  Heart, Activity, Watch, Home, Hospital, AlertCircle, Tablet, Info, MapPin, 
  Brain, Bluetooth, ShieldCheck, Users, DollarSign, Signal, GraduationCap, 
  Lock, MessageSquare, ChevronDown, CheckCircle2, Database, ExternalLink 
} from 'lucide-react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  Cell, Legend, PieChart, Pie, LineChart, Line, ScatterChart, Scatter, ZAxis 
} from 'recharts';
import { DATA } from './data';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const ChartContainer = ({ title, caption, children, height = 400 }: { title: string; caption: string; children: React.ReactNode; height?: number }) => (
  <div className="bg-white/5 backdrop-blur-xl p-8 rounded-[32px] border border-white/10 shadow-2xl flex flex-col mb-12">
    <h4 className="text-data-label mb-2 flex items-center gap-3">
      <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></span>
      {title}
    </h4>
    <div style={{ height }} className="w-full relative">
      {children}
    </div>
    <p className="mt-6 text-[9px] font-mono text-slate-500 uppercase tracking-wider text-center border-t border-white/5 pt-4">
      {caption}
    </p>
  </div>
);

const Section = ({ 
  children, 
  id, 
  className, 
  title, 
  subtitle,
  darkMode = false
}: { 
  children: React.ReactNode; 
  id: string; 
  className?: string; 
  title?: string;
  subtitle?: string;
  darkMode?: boolean;
}) => (
  <section 
    id={id} 
    className={cn(
      "min-h-screen flex flex-col items-center justify-center px-6 py-24 relative overflow-hidden",
      darkMode ? "bg-slate-900 text-white" : "bg-transparent text-slate-900",
      className
    )}
  >
    <div className="max-w-6xl w-full mx-auto relative z-10">
      {title && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-6xl font-light italic tracking-tight text-white font-serif mb-4 leading-tight">{title}</h2>
          {subtitle && <p className={cn("text-lg max-w-2xl mx-auto leading-relaxed", darkMode ? "text-slate-400" : "text-slate-500")}>{subtitle}</p>}
        </motion.div>
      )}
      {children}
    </div>
  </section>
);

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="scrolling-container">
      {/* Atmospheric Background Glows */}
      <div className="fixed top-[-10%] left-[-10%] w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="fixed bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[150px] pointer-events-none"></div>
      
      {/* Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-cyan-400 z-50 origin-left shadow-[0_0_10px_rgba(34,211,238,0.5)]" 
        style={{ scaleX }}
      />

      {/* 1. HERO */}
      <Section id="opening" className="gradient-bg !min-h-[90vh]">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center mb-8"
          >
            <div className="bg-cyan-500/10 p-4 rounded-3xl border border-cyan-500/20 backdrop-blur-sm">
              <Activity className="w-16 h-16 text-cyan-400" />
            </div>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[10px] uppercase tracking-[0.4em] text-cyan-400 font-bold mb-4"
          >
            aging, monitoring, and care
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-6xl md:text-8xl font-light tracking-tighter text-white italic font-serif mb-6 leading-tight"
          >
            {DATA.title}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl text-slate-400 font-medium mb-12 max-w-3xl mx-auto"
          >
            {DATA.subtitle}
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="flex flex-col items-center gap-4"
          >
            <span className="text-[10px] font-mono font-bold uppercase tracking-[0.3em] text-cyan-400/70">By Angel Tao</span>
            <ChevronDown className="w-6 h-6 text-cyan-400 animate-bounce opacity-30" />
          </motion.div>
        </div>
      </Section>

      {/* 2. RESEARCH QUESTIONS */}
      <Section id="research" title="Inquiry Framework" subtitle="This project addresses five critical dimensions of geriatric technology adoption across global health systems.">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {DATA.researchQuestions.map((q, idx) => (
            <motion.div
              key={q.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="card-medical group relative overflow-hidden"
            >
               <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity">
                <q.icon className="w-12 h-12 text-cyan-400" />
              </div>
              <div className="flex items-start gap-4">
                <span className="text-2xl font-mono font-black text-cyan-400/50">0{q.id}</span>
                <div className="pt-1">
                  <p className="font-medium text-slate-200 leading-snug">{q.text}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto mb-16">
          <p className="text-lg text-slate-400 font-serif italic leading-relaxed text-center">
            "By mapping the distribution of these technologies, we bridge the gap between clinical necessity and infrastructural readiness."
          </p>
        </div>

        <ChartContainer 
          title="Global Aging Trajectory" 
          caption="Figure 1. Population aged 65+ trend (1960–2023). Source: World Bank."
        >
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={DATA.populationAging} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
              <XAxis dataKey="year" stroke="#475569" fontSize={10} fontStyle="italic" />
              <YAxis stroke="#475569" fontSize={10} label={{ value: '% of Population', angle: -90, position: 'insideLeft', fill: '#475569', fontSize: 10 }} />
              <Tooltip contentStyle={{ backgroundColor: '#05070A', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px' }} />
              <Legend verticalAlign="top" height={36} wrapperStyle={{ fontSize: '10px', textTransform: 'uppercase' }} />
              <Line type="monotone" dataKey="JPN" stroke="#22d3ee" strokeWidth={3} dot={false} />
              <Line type="monotone" dataKey="KOR" stroke="#f97316" strokeWidth={2} dot={false} />
              <Line type="monotone" dataKey="CHN" stroke="#ef4444" strokeWidth={2} dot={false} />
              <Line type="monotone" dataKey="USA" stroke="#a855f7" strokeWidth={2} dot={false} />
              <Line type="monotone" dataKey="GBR" stroke="#3282b8" strokeWidth={2} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </ChartContainer>
      </Section>

      {/* 3. INTRODUCTION / MAP */}
      <Section id="intro" title="Geopolitical Context" subtitle="Mapping the distribution of vital signals across geopolitical boundaries.">
        <div className="bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 p-8 md:p-12 mb-16 shadow-2xl relative overflow-hidden text-center lg:text-left">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-transparent opacity-30"></div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start mb-16">
            <div className="lg:col-span-2">
              <p className="text-3xl text-slate-300 leading-tight font-serif italic mb-8">
                Population aging is increasing demand for health technologies that support older adults outside traditional hospital settings.
              </p>
              <p className="text-lg text-slate-400 leading-relaxed max-w-2xl">
                Wearable and home-monitoring devices are now used to detect falls, monitor chronic disease, support medication routines, connect patients to clinicians, and help older adults remain independent for longer. This project compares five distinct digital health ecosystems.
              </p>
            </div>
            <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
              <h5 className="text-[10px] font-mono font-bold text-cyan-400 uppercase tracking-widest mb-4">Core Dimensions</h5>
              <ul className="space-y-3">
                {['Device Categories', 'Health Problems Targeted', 'Care Settings & Adoption'].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-xs text-slate-300">
                    <CheckCircle2 className="w-3 h-3 text-cyan-400" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-16">
            {DATA.countries.map((c, idx) => (
              <motion.div
                key={c.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col gap-2 p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-cyan-500/30 transition-all"
              >
                <div className="flex justify-between items-start mb-2">
                  <div className={cn("h-1 w-8 rounded-full", c.color.replace('bg-', 'bg-'))}></div>
                  <span className="text-[8px] font-mono text-slate-500">ID: {idx+1}</span>
                </div>
                <h4 className="font-bold text-white text-lg tracking-tight mb-2">{c.name}</h4>
                <p className="text-data-label mb-1">Strategic Emphasis</p>
                <p className="text-sm text-slate-400 leading-relaxed">{c.emphasis}</p>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <ChartContainer title="Old-Age Dependency Ratio" caption="Figure 2. Old-age dependency ratio (% of working-age population). Source: World Bank.">
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={DATA.dependencyRatio} layout="vertical" margin={{ left: 20 }}>
                  <XAxis type="number" hide />
                  <YAxis type="category" dataKey="name" axisLine={false} tickLine={false} style={{ fontSize: '10px', fill: '#94a3b8' }} />
                  <Bar dataKey="value" radius={[0, 4, 4, 0]}>
                    {DATA.dependencyRatio.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </ChartContainer>

            <div className="flex flex-col justify-center p-8 bg-white/5 rounded-3xl border border-white/5">
              <h5 className="text-sm font-bold uppercase tracking-widest text-cyan-400 mb-4 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4" /> Why these five?
              </h5>
              <p className="text-sm text-slate-400 leading-relaxed font-serif italic">
                These nations provide a spectrum of aging pressures: from Japan's extreme demographic shift (52.4% ratio) to China's rapid market expansion (18%). Each represents a unique policy response to the "Silver Tsunami," ranging from robotics-first (JP) to virtual-ward-first (UK).
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* 4. DEVICE FRAMEWORK */}
      <Section id="framework" title="Synthesis Pipeline" subtitle="Taxonomy of hardware interfaces for the interconnected aging experience." className="bg-transparent">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <p className="text-xl text-slate-400 leading-relaxed italic font-serif">
            "Wearable and home-monitoring devices can be grouped into six practical categories. Some are consumer-facing, while others function as high-precision clinical gateways."
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {DATA.deviceCategories.map((cat, idx) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/10 hover:border-cyan-400 transition-all group"
            >
              <div className="bg-cyan-400/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <cat.icon className="w-8 h-8 text-cyan-400" />
              </div>
              <h4 className="text-xl font-light text-white mb-2 italic font-serif">{cat.name}</h4>
              <p className="text-slate-500 text-sm mb-6 font-mono tracking-tight">{cat.examples}</p>
              <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                <span className="text-data-label">Signal Target</span>
                <span className="text-xs text-cyan-400 font-bold">{cat.target}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Clinical Flux (Health Burdens) */}
        <div className="max-w-3xl mx-auto mb-16">
          <p className="text-lg text-slate-400 leading-relaxed text-center">
            Most elder-care devices are designed around a set of high-risk clinical problems: falls, diabetes, cardiovascular disease, and dementia. These categories often overlap, requiring multi-sensor integration for holistic monitoring.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <ChartContainer title="Diabetes Prevalence (%)" caption="Figure 3. Adult diabetes burden. Source: WHO GHO.">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={DATA.diabetesPrevalence}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                <XAxis dataKey="name" fontSize={10} stroke="#475569" />
                <YAxis fontSize={10} stroke="#475569" />
                <Bar dataKey="value" radius={[4, 4, 0, 0]}>
                  {DATA.diabetesPrevalence.map((entry, i) => <Cell key={i} fill={entry.color} />)}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </ChartContainer>

          <ChartContainer title="Cardiovascular Death Rate" caption="Figure 4. CVD mortality per 100k. Source: IHME.">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={DATA.cardioDeathRate}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                <XAxis dataKey="name" fontSize={10} stroke="#475569" />
                <YAxis fontSize={10} stroke="#475569" />
                <Bar dataKey="value" radius={[4, 4, 0, 0]}>
                  {DATA.cardioDeathRate.map((entry, i) => <Cell key={i} fill={entry.color} />)}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </ChartContainer>

          <ChartContainer title="Dementia Prevalence (%)" caption="Figure 5. Memory disorder density. Source: OWID.">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={DATA.dementiaPrevalence}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                <XAxis dataKey="name" fontSize={10} stroke="#475569" />
                <YAxis fontSize={10} stroke="#475569" />
                <Bar dataKey="value" radius={[4, 4, 0, 0]}>
                  {DATA.dementiaPrevalence.map((entry, i) => <Cell key={i} fill={entry.color} />)}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </ChartContainer>
        </div>

        <div className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-md mb-16">
          <h4 className="text-data-label mb-6">Long-Term-Care Capacity (OECD)</h4>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {DATA.ltcCapacity.filter(c => c.beds > 0).map(c => (
              <div key={c.name} className="flex flex-col gap-2">
                <span className="text-xs font-mono text-slate-500">{c.name}</span>
                <div className="flex items-center gap-4">
                  <div>
                    <p className="text-2xl font-bold text-white">{c.beds}</p>
                    <p className="text-[8px] text-cyan-400 uppercase">Beds / 1k</p>
                  </div>
                  <div className="w-[1px] h-8 bg-white/10"></div>
                  <div>
                    <p className="text-2xl font-bold text-slate-400">{c.workers}</p>
                    <p className="text-[8px] text-slate-500 uppercase">Workers / 1k</p>
                  </div>
                </div>
              </div>
            ))}
            <div className="flex items-center justify-center border-l border-white/10 pl-8 italic text-slate-600 text-xs text-center">
              *China capacity metrics not present in comparable OECD datasets.
            </div>
          </div>
        </div>
      </Section>

      {/* 5. WEARABLE FEATURE MATRIX */}
      <Section id="features" title="Feature Saturation" subtitle="Standardization and availability of high-impact medical sensors across regions.">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <p className="text-xl text-slate-400 leading-relaxed italic font-serif">
            "The five countries target similar health needs, but their device ecosystems differ significantly in regulatory maturity and sensor availability."
          </p>
        </div>
        
        <div className="bg-white/5 backdrop-blur-2xl rounded-[40px] border border-white/10 p-12 mb-12">
          <div className="grid grid-cols-6 gap-8 mb-8 font-mono text-[9px] uppercase tracking-[0.3em] text-slate-500 text-center">
            <div></div>
            <div>ECG App</div>
            <div>Irregular Rhythm</div>
            <div>Fall Detect</div>
            <div>Emergency SOS</div>
            <div>Blood Oxygen</div>
          </div>
          <div className="space-y-6">
            {DATA.featureMatrix.map((row, i) => (
              <div key={row.country} className="grid grid-cols-6 gap-8 items-center">
                <div className="text-sm font-bold text-white border-l-2 border-cyan-400 pl-4">{row.country}</div>
                {Object.values(row.features).map((val, j) => (
                  <div key={j} className="flex justify-center">
                    <motion.div 
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      className={cn(
                        "w-8 h-8 rounded-full flex items-center justify-center",
                        val === 1 ? "bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.5)]" :
                        val > 0 ? "bg-cyan-400/20 border border-cyan-400/30" : 
                        "bg-white/5 border border-white/5"
                      )}
                    >
                      {val === 1 && <CheckCircle2 className="w-4 h-4 text-black" />}
                      {val > 0 && val < 1 && <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></div>}
                    </motion.div>
                  </div>
                ))}
              </div>
            ))}
          </div>
          <p className="mt-12 text-[9px] font-mono text-slate-500 text-center uppercase tracking-widest leading-loose">
            Figure 7. Availability of consumer wearable health features. <br />
            Author-coded from official manufacturer and regulator pages.
          </p>
        </div>
      </Section>

      {/* 5. DATASET & METHOD */}
      <Section id="dataset" title="Dataset Integrity">
        <div className="bg-white/5 backdrop-blur-2xl rounded-3xl border border-white/10 shadow-2xl overflow-hidden">
          <div className="bg-white/5 p-8 flex items-center justify-between border-b border-white/10">
            <div className="flex items-center gap-4">
              <div className="p-2 bg-cyan-400/20 rounded-lg">
                <Database className="w-6 h-6 text-cyan-400" />
              </div>
              <div>
                <h3 className="font-light text-2xl text-white italic font-serif tracking-tight">Relational Matrix</h3>
                <p className="text-[9px] font-mono text-slate-500 uppercase tracking-[0.2em]">N=50+ Core Observational Units</p>
              </div>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-white/5 text-slate-500 text-[10px] font-mono uppercase tracking-[0.3em]">
                  <th className="px-8 py-6">Origin</th>
                  <th className="px-8 py-6">Domain</th>
                  <th className="px-8 py-6">Interface</th>
                  <th className="px-8 py-6">Vulnerability</th>
                  <th className="px-8 py-6">Environment</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {[
                  { country: "USA", category: "Glucose", device: "Dexcom G6", target: "Diabetes", setting: "Home/Clinic" },
                  { country: "UK", category: "Monitoring", device: "Social Sensors", target: "Falls/Frailty", setting: "Social Care" },
                  { country: "Japan", category: "Robotics", device: "Transfer Assist", target: "Frailty", setting: "LTC" },
                  { country: "Korea", category: "Remote", device: "Connected Monitor", target: "Chronic Dis.", setting: "Home" },
                  { country: "China", category: "Cardiac", device: "Connected BP", target: "CVD", setting: "Home/Hosp." },
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-white/5 transition-colors">
                    <td className="px-8 py-6 font-mono text-cyan-400 text-xs">{row.country}</td>
                    <td className="px-8 py-6 text-sm text-slate-300 italic font-serif">{row.category}</td>
                    <td className="px-8 py-6 text-sm font-light text-slate-400">{row.device}</td>
                    <td className="px-8 py-6 text-sm text-slate-300">{row.target}</td>
                    <td className="px-8 py-6 text-[10px] text-slate-500 font-mono uppercase">{row.setting}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="p-6 bg-cyan-400/5 text-[9px] text-cyan-400 font-mono text-center tracking-[0.2em] uppercase">
            Data Stream Synchronized: ISO-8601 Verification Passed
          </div>
        </div>
      </Section>

      {/* 7. HEATMAP COMPARISON */}
      <Section id="heatmap" title="Spectral Saturation" subtitle="Comparing relative document prevalence and policy commitment.">
        <div className="bg-white/5 backdrop-blur-2xl p-10 rounded-[40px] border border-white/10 shadow-2xl">
          <div className="grid grid-cols-7 gap-6 mb-8 font-mono text-[9px] uppercase tracking-[0.3em] text-slate-500">
            <div></div>
            {DATA.deviceCategories.map(c => <div key={c.name} className="flex justify-center text-center px-1 h-12 items-end">{c.name.split(' ')[0]}</div>)}
          </div>
          <div className="space-y-6">
            {DATA.heatmapData.map((row, idx) => (
              <div key={row.country} className="grid grid-cols-7 gap-6 items-center">
                <div className="font-bold text-white text-sm border-l border-cyan-400 pl-4">{row.country}</div>
                {row.categories.map((val, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 + idx * 0.1 }}
                    className={cn(
                      "h-16 rounded-2xl flex items-center justify-center text-[9px] font-mono font-black uppercase text-center p-2 relative overflow-hidden group/cell",
                      val === 'High' ? "bg-cyan-400 text-slate-950 shadow-[0_0_20px_rgba(34,211,238,0.3)]" :
                      val === 'Moderate' ? "bg-cyan-400/20 text-cyan-400 border border-cyan-500/20" :
                      "bg-white/5 text-slate-600 border border-white/5"
                    )}
                  >
                    <span className="relative z-10">{val}</span>
                    {val === 'High' && <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent opacity-0 group-hover/cell:opacity-100 transition-opacity"></div>}
                  </motion.div>
                ))}
              </div>
            ))}
          </div>
          <div className="mt-12 flex items-center justify-center gap-12 text-[10px] font-mono font-bold tracking-[0.2em] uppercase text-slate-400">
            <div className="flex items-center gap-3"><div className="w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_8px_rgb(34,211,238)]"></div> High Intensity</div>
            <div className="flex items-center gap-3"><div className="w-3 h-3 rounded-full bg-cyan-400/20 border border-cyan-400/30"></div> Moderate</div>
            <div className="flex items-center gap-3"><div className="w-3 h-3 rounded-full bg-white/10"></div> Residual</div>
          </div>
        </div>
      </Section>

      {/* 8/9. UK CASE STUDY */}
      <Section id="uk-data" title="Vector: United Kingdom" subtitle="Scaling distributed care through the virtual ward infrastructure.">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <p className="text-xl text-slate-400 leading-relaxed italic font-serif">
            "The United Kingdom provides a detailed example of care technology adoption. Among surveyed adult social care providers, 73% reported using at least one type of care technology."
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <ChartContainer title="Virtual Ward Scaling" caption="Figure 8. NHS England monthly capacity index. Source: NHS Statistics.">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={DATA.virtualWardStats}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                <XAxis dataKey="month" fontSize={10} stroke="#475569" />
                <YAxis fontSize={10} stroke="#475569" />
                <Tooltip contentStyle={{ backgroundColor: '#05070A', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px' }} />
                <Line type="monotone" dataKey="capacity" stroke="#22d3ee" strokeWidth={3} dot={{ fill: '#22d3ee' }} />
                <Line type="monotone" dataKey="occupancy" stroke="#a855f7" strokeWidth={2} strokeDasharray="5 5" />
                <Legend verticalAlign="top" height={36} wrapperStyle={{ fontSize: '10px' }} />
              </LineChart>
            </ResponsiveContainer>
          </ChartContainer>

          <div className="p-8 bg-white/5 border border-white/10 rounded-3xl flex flex-col justify-center">
             <h4 className="text-data-label mb-6">Service Delivery adoption (%)</h4>
             <div className="space-y-6">
                {DATA.ukAdoption.slice(0, 4).map((tech, i) => (
                  <div key={i} className="flex flex-col gap-2">
                    <div className="flex justify-between items-end">
                      <span className="text-sm font-light text-slate-300 italic font-serif">{tech.name}</span>
                      <span className="text-xs font-mono text-cyan-400">{tech.value}%</span>
                    </div>
                    <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${tech.value}%` }}
                        className="h-full bg-cyan-400"
                      />
                    </div>
                  </div>
                ))}
             </div>
          </div>
        </div>
      </Section>

      {/* 10. UNITED STATES FALLS */}
      <Section id="us-data" title="Vector: United States" subtitle="Monitoring unintentional kinetic events in the 65+ demographic.">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <ChartContainer title="Old-Age Fall Mortality (USA)" caption="Figure 9. Deaths per 100k due to unintentional falls. Source: CDC WISQARS/CDC WONDER.">
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={DATA.usFallsTrend}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                  <XAxis dataKey="year" stroke="#475569" fontSize={10} />
                  <YAxis stroke="#475569" fontSize={10} />
                  <Tooltip contentStyle={{ backgroundColor: '#05070A', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px' }} />
                  <Line type="stepAfter" dataKey="rate" stroke="#ef4444" strokeWidth={3} dot={{ fill: '#ef4444' }} />
                </LineChart>
              </ResponsiveContainer>
            </ChartContainer>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 flex flex-col justify-center gap-6">
            <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest text-center leading-loose border-b border-white/5 pb-6">
              Critical Metric: Falls are the leading cause of accidental fatality for US adults aged 65+. The upward trend underscores the demand for accelerated haptic sensor and fall-detect expansion.
            </p>
            <div className="text-center">
              <p className="text-4xl font-black text-white italic font-serif">78.1</p>
              <p className="text-[8px] text-cyan-400 uppercase tracking-widest mt-2">Rate Projection 2023</p>
            </div>
          </div>
        </div>
      </Section>

      {/* 11. DIGITAL READINESS & SPENDING */}
      <Section id="readiness" title="Infrastructural Readiness" subtitle="Analyzing the correlation between digital penetration and health investment.">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="lg:col-span-2 max-w-3xl mx-auto text-center mb-12">
            <p className="text-xl text-slate-400 leading-relaxed font-serif italic">
               Adoption is shaped by infrastructure, workforce capacity, and trust. While digital penetration is high, barriers like cost, cybersecurity, and digital skills remain persistent.
            </p>
          </div>
          <ChartContainer title="Internet & Mobile Readiness" caption="Figure 10. Percentage of population with active access. Source: World Bank.">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={DATA.digitalReadiness}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                <XAxis dataKey="name" fontSize={10} stroke="#475569" />
                <YAxis fontSize={10} stroke="#475569" />
                <Tooltip contentStyle={{ backgroundColor: '#05070A', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px' }} />
                <Bar dataKey="internet" fill="#22d3ee" radius={[4, 4, 0, 0]} />
                <Bar dataKey="mobile" fill="#a855f7" radius={[4, 4, 0, 0]} />
                <Legend verticalAlign="top" height={36} wrapperStyle={{ fontSize: '10px' }} />
              </BarChart>
            </ResponsiveContainer>
          </ChartContainer>

          <ChartContainer title="Spending vs. Aging" caption="Figure 11. Health Exp. (% GDP) vs. Pop 65+ (%). Source: World Bank.">
            <ResponsiveContainer width="100%" height="100%">
              <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                <XAxis type="number" dataKey="spending" name="Spending" unit="%" fontSize={10} stroke="#475569" />
                <YAxis type="number" dataKey="aging" name="Aging" unit="%" fontSize={10} stroke="#475569" />
                <ZAxis type="number" dataKey="z" range={[100, 1000]} />
                <Tooltip cursor={{ strokeDasharray: '3 3' }} contentStyle={{ backgroundColor: '#05070A', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px' }} />
                <Scatter name="Countries" data={DATA.spendingScatter} fill="#22d3ee">
                  {DATA.spendingScatter.map((entry, index) => (
                    <Cell key={index} fill={entry.color} />
                  ))}
                </Scatter>
              </ScatterChart>
            </ResponsiveContainer>
          </ChartContainer>
        </div>
      </Section>

      {/* 12. POLICY TIMELINE */}
      <Section id="policy" title="Policy Flux" subtitle="Archival milestones in the regulation and deployment of geriatric technology.">
        <div className="relative pl-8 border-l border-white/10 space-y-12 max-w-4xl mx-auto py-12">
          {DATA.policyTimeline.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className="relative"
            >
              <div className="absolute -left-10 top-0 w-4 h-4 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.5)] border-2 border-slate-900"></div>
              <div className="flex flex-col md:flex-row gap-4 items-baseline">
                <span className="text-xl font-mono font-black text-cyan-400 min-w-[80px]">{item.year}</span>
                <div className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-md grow">
                  <h5 className="text-sm font-bold text-white uppercase tracking-wider mb-2">{item.event}</h5>
                  <p className="text-xs text-slate-500 font-mono tracking-tight">{item.impact}</p>
                </div>
              </div>
            </motion.div>
          ))}
          <div className="text-center pt-12">
             <div className="inline-flex items-center gap-2 px-6 py-2 bg-cyan-400/10 border border-cyan-400/20 rounded-full text-[9px] font-mono text-cyan-400 uppercase tracking-widest italic">
               Archival Sequence Finalized
             </div>
          </div>
        </div>
      </Section>
      <Section id="bodymap" title="Nodal Topology" subtitle="Spatial mapping of sensor interfaces across the human volume.">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <p className="text-xl text-slate-400 leading-relaxed italic font-serif">
            The body and home environment increasingly function as monitoring sites. This "Nodal Topology" shows how elder care is becoming more continuous, distributed, and connected.
          </p>
        </div>
        
        <div className="relative max-w-2xl mx-auto h-[600px] bg-white/5 rounded-[60px] border border-white/10 shadow-2xl flex items-center justify-center p-8 backdrop-blur-md">
          {/* Decorative Grid Overlay */}
          <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)', backgroundSize: '30px 30px' }}></div>
          
          <div className="absolute inset-0 opacity-20 flex items-center justify-center p-20 pointer-events-none">
            <Users className="w-full h-full text-cyan-400/20" />
          </div>
          
          <AnimatePresence>
            {DATA.bodyMap.map((node, i) => (
              <motion.div
                key={node.part}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                style={{ top: node.top, left: node.left }}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 group z-20"
              >
                <div className="relative group/pin">
                  <motion.button
                    whileHover={{ scale: 1.2 }}
                    className="w-10 h-10 rounded-full bg-[#05070A] border-2 border-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.5)] flex items-center justify-center relative z-20"
                  >
                    <div className="w-2 h-2 bg-cyan-400 rounded-full animate-ping absolute"></div>
                    <div className="w-2 h-2 bg-cyan-400 rounded-full relative"></div>
                  </motion.button>
                  
                  <div className="absolute top-1/2 left-full ml-6 w-56 transform -translate-y-1/2 opacity-0 group-hover/pin:opacity-100 transition-all scale-95 group-hover/pin:scale-100 pointer-events-none z-30">
                    <div className="bg-[#05070A]/95 backdrop-blur-xl p-5 rounded-2xl border border-white/20 shadow-2xl">
                      <p className="text-data-label mb-2 text-cyan-300">{node.part}</p>
                      <h5 className="text-lg font-light text-white italic font-serif leading-tight mb-2">{node.device}</h5>
                      <div className="pt-3 border-t border-white/10 flex items-center gap-2 text-[9px] font-mono text-slate-400">
                        <Activity className="w-3 h-3 text-cyan-400" />
                        Target: {node.target}
                      </div>
                    </div>
                    {/* Floating line back to pin */}
                    <div className="absolute top-1/2 right-full w-6 h-[1px] bg-cyan-400/50"></div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
          
          <div className="absolute bottom-10 left-0 right-0 text-center">
            <div className="inline-flex items-center gap-3 px-8 py-3 bg-black/40 backdrop-blur-md rounded-full border border-white/10 text-[9px] font-mono font-black uppercase tracking-[0.3em] text-cyan-400/60 italic">
              Probe Nodal Points To View Metrics
            </div>
          </div>

          <div className="absolute bottom-6 right-6 text-[8px] font-mono text-slate-600 uppercase">
            Viewport: Human_Scan_07-G
          </div>
        </div>
      </Section>

      {/* 13. CONCLUSION */}
      <Section id="conclusion" title="Distributed Care" subtitle="Final Synthesis" className="!min-h-[90vh] text-white relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-purple-500/5 pointer-events-none"></div>
        <div className="text-center max-w-4xl mx-auto py-20 relative z-10">
          <div className="space-y-12 max-w-3xl mx-auto mb-20 text-center">
            <p className="text-lg text-slate-400 leading-relaxed">
              Wearable and home-monitoring health devices are becoming important tools for supporting adults aged 65 and older. Across Japan, South Korea, China, the United States, and the United Kingdom, these devices most often target falls, diabetes, cardiovascular disease, dementia, and frailty.
            </p>
            <p className="text-lg text-slate-400 leading-relaxed">
              The comparison shows that countries face similar aging-related health challenges but use different device strategies. Japan emphasizes long-term care technologies, while the UK leverages virtual ward models.
            </p>
          </div>

          <motion.h2 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="text-6xl md:text-8xl font-light italic font-serif mb-16 leading-tight text-white"
          >
            Connectivity & Decay
          </motion.h2>
          <div className="space-y-12 max-w-3xl mx-auto">
            <p className="text-2xl md:text-3xl font-serif italic text-slate-300 leading-relaxed opacity-80">
              "Health devices do not replace care. They extend it into homes, bodies, and environments. Their impact depends on affordability, clinical appropriateness, and trust."
            </p>
            <div className="h-[1px] w-48 bg-gradient-to-r from-transparent via-cyan-400 to-transparent mx-auto"></div>
            <p className="text-[10px] font-mono text-cyan-400 uppercase tracking-[0.5em] mb-12">
              Final Takeaway
            </p>
            <p className="text-sm font-light text-slate-400 uppercase tracking-widest leading-loose">
              The future of elder-care technology will be shaped not only by smarter devices,<br />but by safer, more equitable, and better-connected systems of care.
            </p>
          </div>
        </div>
      </Section>

      {/* 14. SOURCES */}
      <footer className="bg-black/40 backdrop-blur-3xl py-32 px-10 border-t border-white/5 relative z-20">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start gap-20">
            <div className="max-w-3xl">
               <div className="flex items-center gap-3 mb-8 text-cyan-400">
                <Info className="w-5 h-5" />
                <h3 className="text-xs font-black uppercase tracking-[0.4em]">Archival Data</h3>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed font-medium mb-12">
                This project synthesizes {DATA.sources.length} primary archival sources from 5 global regions. Data verification conducted via cross-referential policy analysis.
              </p>

              <div className="space-y-4 mb-20">
                {DATA.sources.map((source, i) => (
                  <motion.div 
                    key={i} 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: i * 0.05 }}
                    className="flex gap-4 group cursor-help"
                  >
                    <span className="text-[10px] font-mono font-bold text-slate-700 group-hover:text-cyan-400 transition-colors">{(i + 1).toString().padStart(2, '0')}</span>
                    <p className="text-[10px] text-slate-500 leading-relaxed font-medium group-hover:text-slate-300 transition-all uppercase tracking-tight">
                      {source}
                    </p>
                  </motion.div>
                ))}
              </div>

              <div className="flex items-center gap-4">
                <button className="px-6 py-3 bg-white text-black text-[9px] font-black uppercase tracking-widest rounded-full hover:bg-cyan-400 transition-all shadow-xl shadow-white/5 group flex items-center gap-2">
                  <ExternalLink className="w-3 h-3" />
                  Full Database
                </button>
              </div>
            </div>
          </div>

          <div className="mt-32 pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between text-[8px] font-mono font-bold uppercase tracking-[0.4em] text-slate-600 gap-8">
            <div className="flex items-center gap-4">
              <span>(C) 2026 Spatial Intelligence Lab</span>
              <span className="text-white/20">|</span>
              <span>Classification: Open Distribution</span>
            </div>
            <div className="flex gap-12 text-slate-500">
               <span className="hover:text-cyan-400 transition-colors">Simulation Parameters</span>
               <span className="hover:text-cyan-400 transition-colors">Privacy Protocals</span>
               <span className="hover:text-cyan-400 transition-colors">Lab Terminal</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
