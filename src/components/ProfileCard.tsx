import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Mail,
  Phone,
  Droplet,
  Copy,
  Check,
  ExternalLink,
  Github,
  Linkedin,
  Facebook,
  Instagram,
  Twitter,
  MessageCircle,
  GraduationCap,
  Briefcase,
  Share2,
  ShieldCheck,
  Sparkles
} from 'lucide-react';
import { ProfileData } from '../types';

interface ProfileCardProps {
  profile: ProfileData;
  onShare: () => void;
  onTriggerToast: (msg: string) => void;
}

export const ProfileCard: React.FC<ProfileCardProps> = ({
  profile,
  onShare,
  onTriggerToast,
}) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [copiedBlood, setCopiedBlood] = useState(false);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(profile.email);
    setCopiedEmail(true);
    onTriggerToast(`Copied Gmail: ${profile.email}`);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(profile.phone);
    setCopiedPhone(true);
    onTriggerToast(`Copied Phone: ${profile.phone}`);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleCopyBlood = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(profile.bloodGroup);
    setCopiedBlood(true);
    onTriggerToast(`Copied Blood Type: ${profile.bloodGroup}`);
    setTimeout(() => setCopiedBlood(false), 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="relative w-full max-w-4xl mx-auto px-2 sm:px-4"
    >
      {/* Editorial Grid Container */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
        
        {/* Left Column: Portrait Frame */}
        <div className="md:col-span-5 relative flex flex-col items-center">
          <div className="relative w-full max-w-sm aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-b from-neutral-900 via-neutral-950 to-black shadow-2xl group">
            {/* Dark vignette gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 z-10 pointer-events-none" />
            
            <img
              src={profile.avatarUrl}
              alt={profile.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter saturate-105"
              referrerPolicy="no-referrer"
            />

            {/* Blood Type Badge on Image Bottom */}
            <div
              onClick={handleCopyBlood}
              className="absolute bottom-4 left-4 z-20 blood-tag px-3 py-1.5 rounded-full backdrop-blur-md flex items-center gap-1.5 cursor-pointer hover:scale-105 transition-transform"
            >
              <Droplet className="w-3.5 h-3.5 fill-red-500/30" />
              <span className="text-[11px] font-bold uppercase tracking-widest">
                BLOOD TYPE: {profile.bloodGroup}
              </span>
            </div>

            {/* Verified Badge Top Left */}
            <div className="absolute top-4 left-4 z-20 px-3 py-1 rounded-full glass-pill text-[10px] uppercase tracking-widest text-emerald-400 font-semibold border border-emerald-500/30 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Verified Member
            </div>
          </div>
        </div>

        {/* Right Column: Editorial Details Glass Card */}
        <div className="md:col-span-7 flex flex-col justify-between rounded-2xl glass-card p-6 sm:p-8 border border-white/10 bg-neutral-950/40 backdrop-blur-2xl shadow-2xl relative overflow-hidden">
          
          {/* Subtle top reflection line */}
          <div className="absolute top-0 left-8 right-8 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />

          {/* Action Header */}
          <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-neutral-400">
                BGI COMMUNITY PORTFOLIO
              </span>
              <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={onShare}
                className="p-2 rounded-xl glass-pill hover:bg-white/10 text-neutral-300 hover:text-cyan-400 transition-colors cursor-pointer"
                title="Share Portfolio"
              >
                <Share2 className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Main Name & Role */}
          <div className="mb-8">
            <h1 className="text-3xl sm:text-5xl font-extralight tracking-tight uppercase text-white leading-none mb-3">
              {profile.name}
            </h1>
            <p className="text-xs sm:text-sm tracking-[0.3em] uppercase text-cyan-400 font-medium">
              {profile.role}
            </p>
          </div>

          {/* Info Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 py-5 border-t border-b border-white/10 my-auto">
            
            {/* Department */}
            <div className="space-y-1">
              <span className="text-[10px] text-neutral-500 uppercase tracking-[0.2em] font-semibold block">
                DEPARTMENT
              </span>
              <div className="flex items-center gap-2 text-sm font-normal text-neutral-200">
                <GraduationCap className="w-4 h-4 text-cyan-400 shrink-0" />
                <span className="truncate">{profile.dept}</span>
              </div>
            </div>

            {/* Phone Number */}
            <div className="space-y-1">
              <span className="text-[10px] text-neutral-500 uppercase tracking-[0.2em] font-semibold block">
                CONTACT NUMBER
              </span>
              <div className="flex items-center justify-between group">
                <a
                  href={`tel:${profile.phone.replace(/\s+/g, '')}`}
                  className="flex items-center gap-2 text-sm font-normal text-neutral-200 hover:text-emerald-300 transition-colors truncate"
                >
                  <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{profile.phone}</span>
                </a>
                <button
                  onClick={handleCopyPhone}
                  className="p-1 rounded text-neutral-500 hover:text-emerald-400 cursor-pointer transition-colors"
                >
                  {copiedPhone ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>
            </div>

            {/* Official Gmail */}
            <div className="space-y-1 sm:col-span-2">
              <span className="text-[10px] text-neutral-500 uppercase tracking-[0.2em] font-semibold block">
                OFFICIAL GMAIL
              </span>
              <div className="flex items-center justify-between group">
                <a
                  href={`mailto:${profile.email}`}
                  className="flex items-center gap-2 text-sm font-normal text-neutral-200 hover:text-cyan-300 transition-colors truncate"
                >
                  <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span className="truncate">{profile.email}</span>
                </a>
                <div className="flex items-center gap-1">
                  <button
                    onClick={handleCopyEmail}
                    className="p-1 rounded text-neutral-500 hover:text-cyan-400 cursor-pointer transition-colors"
                  >
                    {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                  <a
                    href={`mailto:${profile.email}`}
                    className="p-1 rounded text-neutral-500 hover:text-cyan-400 transition-colors"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* Minimal Editorial Social Links Bar */}
          <div className="mt-6 pt-4 flex items-center justify-between flex-wrap gap-4">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-500">
              CONNECT
            </span>

            <div className="flex items-center gap-4 flex-wrap">
              {profile.socials.linkedin && (
                <a
                  href={profile.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs uppercase tracking-[0.15em] text-neutral-400 hover:text-cyan-400 transition-colors flex items-center gap-1"
                >
                  <Linkedin className="w-3.5 h-3.5" />
                  <span>LinkedIn</span>
                </a>
              )}

              {profile.socials.github && (
                <a
                  href={profile.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs uppercase tracking-[0.15em] text-neutral-400 hover:text-white transition-colors flex items-center gap-1"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                </a>
              )}

              {profile.socials.facebook && (
                <a
                  href={profile.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs uppercase tracking-[0.15em] text-neutral-400 hover:text-blue-400 transition-colors flex items-center gap-1"
                >
                  <Facebook className="w-3.5 h-3.5" />
                  <span>Facebook</span>
                </a>
              )}

              {profile.socials.instagram && (
                <a
                  href={profile.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs uppercase tracking-[0.15em] text-neutral-400 hover:text-pink-400 transition-colors flex items-center gap-1"
                >
                  <Instagram className="w-3.5 h-3.5" />
                  <span>Instagram</span>
                </a>
              )}

              {profile.socials.twitter && (
                <a
                  href={profile.socials.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs uppercase tracking-[0.15em] text-neutral-400 hover:text-sky-400 transition-colors flex items-center gap-1"
                >
                  <Twitter className="w-3.5 h-3.5" />
                  <span>X / Twitter</span>
                </a>
              )}

              {profile.socials.whatsapp && (
                <a
                  href={profile.socials.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs uppercase tracking-[0.15em] text-neutral-400 hover:text-emerald-400 transition-colors flex items-center gap-1"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>
              )}
            </div>
          </div>

        </div>

      </div>
    </motion.div>
  );
};

