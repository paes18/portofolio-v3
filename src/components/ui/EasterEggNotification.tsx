import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Terminal } from 'lucide-react';

interface EasterEggNotificationProps {
  message: string | null;
}

export const EasterEggNotification: React.FC<EasterEggNotificationProps> = ({ message }) => {
  return (
    <AnimatePresence>
      {message && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          className="fixed bottom-8 right-6 z-50 glass-panel px-5 py-3.5 rounded-2xl border border-sky-400/50 bg-slate-950/95 font-mono text-xs text-sky-200 shadow-2xl flex items-center gap-3 max-w-sm pointer-events-none select-none backdrop-blur-md"
        >
          <div className="p-2 rounded-xl bg-sky-500/20 text-sky-400 border border-sky-400/30 flex-shrink-0 animate-bounce">
            <Sparkles className="w-4 h-4" />
          </div>
          <div className="flex flex-col gap-0.5">
            <span className="text-[10px] text-sky-400 font-bold uppercase tracking-wider flex items-center gap-1">
              <Terminal className="w-3 h-3" /> EASTER EGG DISCOVERED
            </span>
            <span className="text-xs font-semibold text-white leading-tight">
              {message}
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
