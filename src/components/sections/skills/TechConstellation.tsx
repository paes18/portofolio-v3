import type { TechnologyItem } from '../../../data/skills';

interface TechConstellationProps {
  technologies: TechnologyItem[];
  selectedTechId: string | null;
  hoveredTechId: string | null;
  onSelectTech: (tech: TechnologyItem) => void;
  onHoverTech: (id: string | null) => void;
}

export const TechConstellation: React.FC<TechConstellationProps> = ({
  technologies,
  selectedTechId,
  hoveredTechId,
  onSelectTech,
  onHoverTech,
}) => {
  const activeId = hoveredTechId || selectedTechId;
  const activeTech = technologies.find((t) => t.id === activeId);
  const connectedIds = activeTech ? activeTech.connections : [];

  return (
    <div className="w-full glass-panel p-6 sm:p-10 rounded-3xl border border-sky-500/30 bg-slate-950/90 relative overflow-hidden flex flex-col gap-6">
      {/* Top Bar Label */}
      <div className="flex items-center justify-between font-mono text-xs text-text-muted border-b border-white/10 pb-4">
        <span className="text-sky-400 font-bold tracking-wider uppercase flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-sky-400 animate-pulse" />
          INTERACTIVE TECH CONSTELLATION NODE NETWORK
        </span>
        <span className="text-caption text-text-muted hidden sm:inline">SELECT OR HOVER NODE TO INSPECT</span>
      </div>

      {/* Grid of Interactive Tech Nodes */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4 relative z-10 py-2">
        {technologies.map((tech) => {
          const isSelected = selectedTechId === tech.id;
          const isHovered = hoveredTechId === tech.id;
          const isConnected = activeId ? connectedIds.includes(tech.id) || activeId === tech.id : false;
          const isDimmed = activeId ? !isConnected : false;

          return (
            <button
              key={tech.id}
              onClick={() => onSelectTech(tech)}
              onMouseEnter={() => onHoverTech(tech.id)}
              onMouseLeave={() => onHoverTech(null)}
              className={`p-4 rounded-2xl border font-mono text-xs text-left transition-all duration-300 cursor-pointer flex flex-col justify-between gap-3 relative ${
                isSelected || isHovered
                  ? 'bg-sky-500/20 border-sky-400 text-white shadow-xl shadow-sky-500/20 scale-[1.03] z-20'
                  : isConnected
                  ? 'bg-indigo-500/15 border-indigo-400/80 text-sky-200 z-10'
                  : isDimmed
                  ? 'bg-slate-950/40 border-white/5 text-text-muted opacity-40 hover:opacity-100'
                  : 'bg-slate-900/60 border-white/10 text-slate-200 hover:border-sky-500/40 hover:text-white'
              }`}
            >
              <div className="flex items-center justify-between text-[10px]">
                <span className="text-text-muted uppercase tracking-wider">{tech.categoryLabel}</span>
                <span className={`w-2 h-2 rounded-full ${isSelected || isHovered ? 'bg-sky-400 animate-ping' : isConnected ? 'bg-indigo-400' : 'bg-slate-700'}`} />
              </div>

              <span className="text-sm sm:text-base font-bold font-display tracking-tight text-white">
                {tech.name}
              </span>

              <div className="flex items-center justify-between text-[10px] text-text-muted pt-2 border-t border-white/5">
                <span className="truncate max-w-[100px]">{tech.status}</span>
                <span className="text-sky-400 font-bold">→</span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Footnote */}
      <div className="pt-4 border-t border-white/10 flex items-center justify-between text-caption font-mono text-text-muted">
        <span>NODES: {technologies.length} ACTIVE TOOLS</span>
        <span className="text-sky-400 font-medium">EVIDENCE-BASED TECH MATRIX</span>
      </div>
    </div>
  );
};
