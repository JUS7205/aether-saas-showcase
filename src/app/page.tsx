"use client";

import { motion } from "framer-motion";
import { Shield, Zap, Globe, Cpu } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#020617] text-slate-200 selection:bg-cyan-500/30 overflow-x-hidden">
      {/* Background Decor */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-cyan-500/10 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-500/10 blur-[120px] rounded-full animate-pulse delay-700" />
      </div>

      {/* Navigation */}
      <nav className="relative z-10 flex items-center justify-between px-8 py-6 max-w-7xl mx-auto border-b border-white/5 bg-slate-950/50 backdrop-blur-md sticky top-0">
        <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
          AETHER.
        </div>
        <div className="hidden md:flex gap-8 text-sm font-medium text-slate-400">
          <a href="#" className="hover:text-cyan-400 transition-colors">Features</a>
          <a href="#" className="hover:text-cyan-400 transition-colors">Security</a>
          <a href="#" className="hover:text-cyan-400 transition-colors">Pricing</a>
        </div>
        <button className="px-5 py-2 bg-cyan-500 text-slate-950 rounded-full font-semibold hover:bg-cyan-400 transition-all shadow-lg shadow-cyan-500/20 active:scale-95">
          Get Started
        </button>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 pt-32 pb-20 px-6 max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs font-bold uppercase tracking-wider mb-6 inline-block">
            V2.0 Now Live
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-8 tracking-tight">
            Secure Your SaaS with <br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Quantum Intelligence.
            </span>
          </h1>
          <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            The next generation of infrastructure monitoring and threat detection. 
            Built for scale, hardened for the modern web.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-slate-950 rounded-xl font-bold hover:bg-slate-200 transition-all flex items-center justify-center gap-2">
              Start Building <Zap size={18} />
            </button>
            <button className="px-8 py-4 bg-slate-800/50 border border-white/10 rounded-xl font-bold hover:bg-slate-800 transition-all backdrop-blur-sm">
              Book a Demo
            </button>
          </div>
        </motion.div>

        {/* Hero Visual */}
        <motion.div 
          className="mt-20 relative"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 1 }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent z-10" />
          <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-2xl shadow-2xl relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="aspect-video rounded-xl bg-slate-900 border border-white/5 flex items-center justify-center relative">
               <Cpu className="w-20 h-20 text-cyan-500/20 animate-pulse" />
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-cyan-500/20 blur-[80px] rounded-full" />
            </div>
          </div>
        </motion.div>
      </section>

      {/* Features Grid */}
      <section className="relative z-10 py-32 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: "Military Grade", desc: "Hardened encryption and zero-trust architecture.", icon: Shield },
            { title: "Global Scale", desc: "Distributed edge network with sub-10ms latency.", icon: Globe },
            { title: "AI Driven", desc: "Proactive threat detection using neural heuristics.", icon: Zap },
          ].map((feature, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-500/50 transition-all backdrop-blur-sm"
            >
              <feature.icon className="text-cyan-400 mb-6 w-10 h-10" />
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-slate-400 leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/5 py-12 text-center text-slate-500 text-sm">
        <p>&copy; 2026 Aether Systems. All rights reserved.</p>
        <div className="flex justify-center gap-6 mt-4">
          <a href="#" className="hover:text-white transition-colors">Privacy</a>
          <a href="#" className="hover:text-white transition-colors">Terms</a>
          <a href="#" className="hover:text-white transition-colors">GitHub</a>
        </div>
      </footer>
    </main>
  );
}
