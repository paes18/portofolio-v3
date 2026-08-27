import React from 'react';
import { ArrowUpRight, Award, ShieldAlert, Users } from 'lucide-react';
import { siteData } from '../../../data/site';
import { Button } from '../../ui/Button';

export const LeadershipTeaser: React.FC = () => {
  const teaser = siteData.leadershipTeaser;

  const scrollToExperience = () => {
    const el = document.getElementById('experience');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.hash = 'experience';
    }
  };

  return (
    <div className="w-full glass-panel p-8 sm:p-12 rounded-3xl border border-emerald-500/30 bg-slate-950/80 relative overflow-hidden group">
      {/* Glow Accent */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
        {/* Left Information (8 cols) */}
        <div className="lg:col-span-8 flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5" />
              LEADERSHIP & OPERATIONS TEASER
            </span>
            <span className="text-caption font-mono text-text-muted">
              {teaser.period}
            </span>
          </div>

          <h3 className="text-2xl sm:text-4xl font-display font-bold text-white tracking-tight leading-tight">
            “{teaser.headline}”
          </h3>

          <div className="flex items-center gap-2 font-mono text-sm text-sky-400 font-semibold">
            <Award className="w-4 h-4 text-emerald-400" />
            <span>{teaser.role}</span>
            <span className="text-text-muted">—</span>
            <span className="text-slate-300">{teaser.company}</span>
          </div>

          <p className="text-body text-text-secondary leading-relaxed max-w-2xl">
            {teaser.summary}
          </p>
        </div>

        {/* Right CTA Action (4 cols) */}
        <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-center">
          <div className="p-6 rounded-2xl bg-slate-900/90 border border-emerald-500/20 w-full flex flex-col gap-4">
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
              <ShieldAlert className="w-4 h-4" />
              <span>QUALITY & HUMAN SYSTEMS</span>
            </div>
            <p className="text-caption text-text-muted">
              Discover how operational management built leadership skills beyond standard code syntax.
            </p>
            <Button
              variant="primary"
              size="lg"
              onClick={scrollToExperience}
              className="w-full justify-between bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold border-none"
              icon={<ArrowUpRight className="w-4 h-4" />}
            >
              SEE HOW I LEAD
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
