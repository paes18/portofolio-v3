import React from 'react';
import { ArrowUp, Globe } from 'lucide-react';
import { siteData } from '../../data/site';
import { Container } from './Container';

const SocialIcon = ({ name }: { name: string }) => {
  switch (name) {
    case 'Github':
      return (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
        </svg>
      );
    case 'Instagram':
      return (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
        </svg>
      );
    case 'TikTok':
      return (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
        </svg>
      );
    default:
      return <Globe className="w-4 h-4" />;
  }
};

export interface FooterProps {
  onFooterClick?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onFooterClick }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-slate-950 border-t border-white/5 py-12 lg:py-16 relative z-10 select-none">
      <Container size="wide" className="flex flex-col gap-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-10 border-b border-white/5">
          {/* Identity & Status */}
          <div className="flex flex-col gap-2">
            <h3 className="text-h3 font-bold font-display text-white">
              {siteData.name} <span className="text-text-muted font-normal">/ {siteData.nickname}</span>
            </h3>
            <p className="text-body text-text-secondary max-w-md">
              {siteData.tagline}
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3 flex-wrap">
            {siteData.socials.map((social) => (
              <a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3.5 py-2 rounded-md bg-surface border border-border-subtle hover:border-sky-500/40 hover:text-sky-400 text-caption font-mono text-text-secondary transition-colors"
              >
                <SocialIcon name={social.iconName} />
                <span>{social.label}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Copyright, Version Badge Clicker & Back To Top */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-caption font-mono text-text-muted">
          <div className="flex items-center gap-3 flex-wrap">
            <p>
              © {new Date().getFullYear()} {siteData.name} ({siteData.nickname}). Crafted with React, TypeScript & Three.js.
            </p>
            <button
              onClick={onFooterClick}
              className="px-2 py-0.5 rounded bg-slate-900 border border-white/10 hover:border-sky-400 text-sky-400 font-mono text-[10px] cursor-pointer transition-colors"
              title="Click 5 times for Dev Mode"
            >
              v3.0.0 // FAIZ PAES
            </button>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-text-secondary hover:text-sky-400 transition-colors font-mono text-xs cursor-pointer group"
          >
            <span>Back to top</span>
            <div className="p-1 rounded bg-surface border border-border-subtle group-hover:border-sky-400">
              <ArrowUp className="w-3.5 h-3.5" />
            </div>
          </button>
        </div>

        {/* Final Hidden Philosophy Note */}
        <div className="pt-6 border-t border-white/5 text-center font-mono text-xs text-slate-500 hover:text-sky-300 transition-colors italic cursor-default">
          “I'm still learning. That's kinda the point.”
        </div>
      </Container>
    </footer>
  );
};
