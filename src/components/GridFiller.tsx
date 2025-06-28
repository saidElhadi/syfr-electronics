interface GridFillerProps {
  className?: string;
  variant?: 'pattern' | 'gradient' | 'minimal';
}

export default function GridFiller({
  className = "",
  variant = 'minimal'
}: GridFillerProps) {
  const getFillerContent = () => {
    switch (variant) {
      case 'pattern':
        return (
          <div className="relative w-full h-full bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 border border-slate-200/60 dark:border-slate-700/60 rounded-lg overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-slate-50/80 to-slate-100/60 dark:from-slate-800/90 dark:to-slate-700/80"></div>
            {/* Geometric Pattern */}
            <div className="absolute inset-0 opacity-20">
              <div className="w-full h-full" style={{
                backgroundImage: `radial-gradient(circle at 25% 25%, theme(colors.slate.300) 1px, transparent 1px),
                                  radial-gradient(circle at 75% 75%, theme(colors.slate.400) 1px, transparent 1px)`,
                backgroundSize: '20px 20px'
              }}></div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center opacity-25">
              <svg className="w-8 h-8 text-slate-400 dark:text-slate-500 rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
            </div>
          </div>
        );
      case 'gradient':
        return (
          <div className="relative w-full h-full bg-gradient-to-br from-blue-50/90 via-purple-50/80 to-cyan-50/90 dark:from-slate-800/95 dark:via-slate-750/85 dark:to-slate-700/95 border border-blue-100/70 dark:border-slate-600/50 rounded-lg overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/30 to-blue-100/20 dark:via-slate-600/20 dark:to-slate-700/30"></div>
            {/* Floating Elements */}
            <div className="absolute top-3 left-3 w-2 h-2 bg-gradient-to-br from-blue-300/60 to-purple-300/60 dark:from-blue-500/40 dark:to-purple-500/40 rounded-full"></div>
            <div className="absolute bottom-4 right-4 w-3 h-3 bg-gradient-to-br from-cyan-300/50 to-blue-300/50 dark:from-cyan-500/30 dark:to-blue-500/30 rounded-full"></div>
            <div className="absolute inset-0 flex items-center justify-center opacity-20">
              <div className="w-4 h-4 bg-gradient-to-br from-blue-400 to-purple-400 dark:from-blue-600 dark:to-purple-600 rounded-full animate-pulse"></div>
            </div>
          </div>
        );
      case 'minimal':
      default:
        return (
          <div className="relative w-full h-full bg-white/80 dark:bg-slate-800/90 border border-slate-200/80 dark:border-slate-700/60 rounded-lg overflow-hidden backdrop-blur-sm">
            <div className="absolute inset-0 bg-gradient-to-br from-slate-50/70 to-slate-100/50 dark:from-slate-800/60 dark:to-slate-750/40"></div>
            {/* Minimal dots pattern */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-30">
              <div className="w-1.5 h-1.5 bg-slate-400 dark:bg-slate-500 rounded-full"></div>
            </div>
            <div className="absolute top-3 right-3 w-1 h-1 bg-slate-300 dark:bg-slate-600 rounded-full opacity-40"></div>
            <div className="absolute bottom-3 left-3 w-1 h-1 bg-slate-300 dark:bg-slate-600 rounded-full opacity-40"></div>
          </div>
        );
    }
  };

  return (
    <div className={`group block relative overflow-hidden transition-all duration-300 hover:shadow-lg ${className}`}>
      {getFillerContent()}
    </div>
  );
}
