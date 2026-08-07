import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Sparkles, Users } from 'lucide-react';
import { BGI_LOGO_PATH } from '../data/defaultProfile';

interface BGILogoProps {
  onOpenCommunityInfo?: () => void;
}

export const BGILogo: React.FC<BGILogoProps> = ({ onOpenCommunityInfo }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-5 left-5 z-40"
    >
      <motion.button
        onClick={onOpenCommunityInfo}
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.96 }}
        className="group relative flex items-center gap-3 px-3.5 py-2 rounded-2xl glass-card border border-white/10 hover:border-cyan-500/40 bg-slate-900/60 backdrop-blur-xl shadow-lg shadow-cyan-950/20 cursor-pointer transition-all duration-300"
      >
        {/* Glow halo */}
        <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-500 group-hover:duration-200" />

        {/* Logo Image / Emblem */}
        <div className="relative flex items-center justify-center w-9 h-9 rounded-xl overflow-hidden border border-cyan-400/30 bg-slate-950/80 shadow-inner group-hover:border-cyan-400/80 transition-colors">
          <img
            src={BGI_LOGO_PATH}
            alt="BGI Community Logo"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Brand Text */}
        <div className="relative flex flex-col text-left">
          <div className="flex items-center gap-1.5">
            <span className="text-sm font-extrabold tracking-wider bg-gradient-to-r from-cyan-300 via-white to-cyan-100 bg-clip-text text-transparent uppercase">
              BGI COMMUNITY
            </span>
            <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
          </div>
          <span className="text-[10px] font-medium text-slate-400 group-hover:text-cyan-300 transition-colors flex items-center gap-1">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Official Member Badge
          </span>
        </div>

        {/* Hover Sparkle */}
        <Sparkles className="w-3.5 h-3.5 text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity ml-1" />
      </motion.button>
    </motion.div>
  );
};
