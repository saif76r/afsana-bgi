import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ShieldCheck, Users, Code, Globe, Award, Sparkles } from 'lucide-react';
import { BGI_LOGO_PATH } from '../data/defaultProfile';

interface CommunityInfoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CommunityInfoModal: React.FC<CommunityInfoModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 15 }}
          className="relative w-full max-w-md rounded-3xl glass-card border border-cyan-500/30 bg-slate-900/95 backdrop-blur-2xl p-6 sm:p-7 shadow-2xl text-slate-100"
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-xl hover:bg-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-3.5 mb-5">
            <div className="w-14 h-14 rounded-2xl overflow-hidden border border-cyan-400/50 shadow-lg shadow-cyan-950/50">
              <img
                src={BGI_LOGO_PATH}
                alt="BGI Community Logo"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <h3 className="text-lg font-extrabold text-white">BGI COMMUNITY</h3>
                <ShieldCheck className="w-4 h-4 text-cyan-400" />
              </div>
              <p className="text-xs text-cyan-300 font-medium">Campus & Technology Developer Network</p>
            </div>
          </div>

          <p className="text-xs text-slate-300 leading-relaxed mb-5">
            BGI Community connects passionate students, developers, engineers, and tech innovators across campus. We empower members through open-source projects, technical workshops, hackathons, and collaborative growth.
          </p>

          <div className="grid grid-cols-2 gap-3 mb-6">
            <div className="p-3 rounded-2xl glass-card border border-white/10 bg-slate-950/50 flex flex-col">
              <Users className="w-4 h-4 text-cyan-400 mb-1" />
              <span className="text-base font-bold text-white">500+</span>
              <span className="text-[10px] text-slate-400">Active Campus Members</span>
            </div>

            <div className="p-3 rounded-2xl glass-card border border-white/10 bg-slate-950/50 flex flex-col">
              <Code className="w-4 h-4 text-emerald-400 mb-1" />
              <span className="text-base font-bold text-white">40+</span>
              <span className="text-[10px] text-slate-400">Collaborative Projects</span>
            </div>
          </div>

          <div className="flex items-center justify-between pt-4 border-t border-white/10 text-xs">
            <span className="text-slate-400 flex items-center gap-1">
              <Award className="w-3.5 h-3.5 text-cyan-400" />
              Verified Portfolio ID
            </span>
            <span className="text-cyan-300 font-semibold">#BGI-MEMBER-2026</span>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
