import React, { useState } from 'react';
import { motion } from 'motion/react';
import { BGILogo } from './components/BGILogo';
import { ProfileCard } from './components/ProfileCard';
import { ShareModal } from './components/ShareModal';
import { CommunityInfoModal } from './components/CommunityInfoModal';
import { Toast } from './components/Toast';
import { DEFAULT_PROFILE } from './data/defaultProfile';
import { ProfileData, ToastMessage } from './types';
import { QrCode } from 'lucide-react';

export default function App() {
  const [profile] = useState<ProfileData>(DEFAULT_PROFILE);
  const [toasts, setToasts] = useState<ToastMessage[]>([]);
  const [isShareOpen, setIsShareOpen] = useState(false);
  const [isCommunityInfoOpen, setIsCommunityInfoOpen] = useState(false);
  const [copiedShareLink, setCopiedShareLink] = useState(false);

  const addToast = (title: string, type: 'success' | 'info' = 'success') => {
    const id = Date.now().toString();
    setToasts((prev) => [...prev, { id, title, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3200);
  };

  const handleCopyShareLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedShareLink(true);
    addToast('Portfolio link copied to clipboard!');
    setTimeout(() => setCopiedShareLink(false), 2000);
  };

  return (
    <div className="relative min-h-screen w-full bg-[#050505] editorial-bg text-slate-100 flex flex-col justify-between overflow-x-hidden select-none py-12 px-4 sm:px-6">
      
      {/* Background Ambient Glowing Glass Orbs */}
      <div className="fixed top-1/4 left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none animate-pulse" />
      <div className="fixed bottom-1/4 right-10 w-96 h-96 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[160px] pointer-events-none" />

      {/* TOP LEFT CORNER: BGI Community Logo */}
      <BGILogo onOpenCommunityInfo={() => setIsCommunityInfoOpen(true)} />

      {/* TOP RIGHT CORNER: Action Buttons */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-5 right-5 z-40 flex items-center gap-2.5"
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsShareOpen(true)}
          className="flex items-center gap-2 px-3.5 py-2 rounded-2xl glass-card border border-white/10 hover:border-cyan-400/40 bg-slate-900/60 backdrop-blur-xl text-xs font-semibold text-slate-200 hover:text-cyan-300 shadow-lg cursor-pointer transition-all"
        >
          <QrCode className="w-4 h-4 text-cyan-400" />
          <span className="hidden sm:inline">Share</span>
        </motion.button>
      </motion.div>

      {/* MAIN CENTER PORTFOLIO CARD */}
      <main className="relative z-10 flex-1 flex flex-col items-center justify-center my-12">
        <ProfileCard
          profile={profile}
          onShare={() => setIsShareOpen(true)}
          onTriggerToast={addToast}
        />
      </main>

      {/* MINIMAL FOOTER */}
      <footer className="relative z-10 text-center text-xs text-slate-500 py-4">
        <p className="flex items-center justify-center gap-1.5 font-medium">
          Crafted for <span className="text-slate-300 font-semibold">BGI Community</span>
          <span className="text-slate-600">•</span>
          Editorial Dark Mode
        </p>
      </footer>

      {/* MODALS & TOAST */}
      <ShareModal
        isOpen={isShareOpen}
        onClose={() => setIsShareOpen(false)}
        onCopyLink={handleCopyShareLink}
        copied={copiedShareLink}
        profileName={profile.name}
      />

      <CommunityInfoModal
        isOpen={isCommunityInfoOpen}
        onClose={() => setIsCommunityInfoOpen(false)}
      />

      <Toast toasts={toasts} onDismiss={(id) => setToasts((prev) => prev.filter((t) => t.id !== id))} />
    </div>
  );
}
