import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Copy, QrCode, Check, ExternalLink } from 'lucide-react';

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCopyLink: () => void;
  copied: boolean;
  profileName: string;
}

export const ShareModal: React.FC<ShareModalProps> = ({
  isOpen,
  onClose,
  onCopyLink,
  copied,
  profileName,
}) => {
  if (!isOpen) return null;

  const currentUrl = window.location.href;
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(
    currentUrl
  )}&color=06b6d4&bgcolor=0f172a`;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 15 }}
          className="relative w-full max-w-sm rounded-3xl glass-card border border-white/15 bg-slate-900/95 backdrop-blur-2xl p-6 shadow-2xl text-center text-slate-100"
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-xl hover:bg-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="w-12 h-12 mx-auto rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-3 shadow-inner">
            <QrCode className="w-6 h-6" />
          </div>

          <h3 className="text-lg font-bold text-white mb-1">Share Member Card</h3>
          <p className="text-xs text-slate-400 mb-5">
            Scan QR code or copy URL to view {profileName}&apos;s BGI profile
          </p>

          {/* QR Code */}
          <div className="relative w-44 h-44 mx-auto p-3 rounded-2xl bg-slate-950 border border-cyan-500/20 shadow-lg shadow-cyan-950/50 mb-5 group">
            <img
              src={qrCodeUrl}
              alt="Profile QR Code"
              className="w-full h-full object-contain rounded-lg"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-slate-950/80 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-2 text-[11px] text-cyan-300 font-medium">
              Scan with Mobile Camera
            </div>
          </div>

          {/* Link Copy Box */}
          <div className="flex items-center gap-2 p-2 rounded-xl bg-slate-950/80 border border-white/10">
            <input
              type="text"
              readOnly
              value={currentUrl}
              className="w-full bg-transparent px-2 text-xs text-slate-300 outline-none truncate"
            />
            <button
              onClick={onCopyLink}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs font-semibold shrink-0 transition-colors cursor-pointer"
            >
              {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              {copied ? 'Copied' : 'Copy'}
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
