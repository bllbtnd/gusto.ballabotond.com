import { motion } from 'motion/react';

const CATEGORIES = [
  { id: 'whisky',   label: 'Whisky',   href: '/whisky',   color: '#C9A96B' },
  { id: 'cigars',   label: 'Cigar',    href: '/cigars',   color: '#8B6347' },
  { id: 'espresso', label: 'Espresso', href: '/espresso', color: '#6B4226' },
  { id: 'places',   label: 'Places',   href: '/places',   color: '#7A6C5D' },
] as const;

interface Props {
  currentCategory?: string;
}

export default function CategoryNav({ currentCategory }: Props) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-pf-bg/90 backdrop-blur-sm border-b border-pf-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center gap-1 h-14">
          <div className="mr-auto flex items-baseline gap-2">
            <a
              href="/"
              className="font-serif text-lg tracking-tight-brutal text-pf-text/70 hover:text-pf-text transition-colors"
            >
              gusto
            </a>
            <a
              href="https://ballabotond.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-xs text-pf-muted/50 hover:text-pf-muted transition-colors"
            >
              ballabotond.com
            </a>
          </div>
          <div className="flex items-center gap-1">
            {CATEGORIES.map((cat) => {
              const isActive = currentCategory === cat.id;
              return (
                <a
                  key={cat.id}
                  href={cat.href}
                  data-astro-prefetch
                  className="relative px-3 py-1.5 text-sm font-sans transition-colors"
                  style={{ color: isActive ? cat.color : undefined }}
                >
                  <span
                    className={`transition-colors ${
                      isActive ? '' : 'text-pf-muted hover:text-pf-text'
                    }`}
                  >
                    {cat.label}
                  </span>
                  {isActive && (
                    <motion.span
                      layoutId="underline"
                      className="absolute bottom-0 left-3 right-3 h-px"
                      style={{ backgroundColor: cat.color }}
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}
