export interface SocialLinks {
  linkedin?: string;
  github?: string;
  facebook?: string;
  instagram?: string;
  twitter?: string;
  whatsapp?: string;
}

export interface ProfileData {
  name: string;
  dept: string;
  role: string;
  email: string;
  phone: string;
  bloodGroup: string;
  avatarUrl: string;
  bio?: string;
  batch?: string;
  location?: string;
  socials: SocialLinks;
}

export interface ToastMessage {
  id: string;
  title: string;
  type?: 'success' | 'info';
}
