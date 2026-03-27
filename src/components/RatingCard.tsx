import { useState } from 'react';
import { Drawer } from 'vaul';
import ScoreDisplay from './ScoreDisplay';

export interface RatingEntry {
  id: string;
  name: string;
  subtitle: string;
  score: number;
  date: string;
  notesPreview: string;
  detailLines?: { label: string; value: string }[];
  accentColor: string;
}

interface Props {
  entry: RatingEntry;
}

export default function RatingCard({ entry }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="w-full text-left rounded-xl border border-pf-border bg-pf-surface p-4 transition-all hover:shadow-sm group"
        style={
          {
            '--accent': entry.accentColor,
          } as React.CSSProperties
        }
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.borderColor = entry.accentColor + '80';
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.borderColor = '';
        }}
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1 min-w-0">
            <h3 className="font-serif text-xl leading-tight text-pf-text truncate">
              {entry.name}
            </h3>
            <p className="text-pf-muted text-xs mt-0.5 font-sans">{entry.subtitle}</p>
            <p className="text-pf-text/70 text-sm mt-2 line-clamp-2 font-sans leading-relaxed">
              {entry.notesPreview}
            </p>
          </div>
          <div className="flex-shrink-0 flex flex-col items-end gap-1">
            <ScoreDisplay score={entry.score} />
            <span className="text-pf-muted text-xs font-sans">{entry.date}</span>
          </div>
        </div>
      </button>

      <Drawer.Root open={open} onOpenChange={setOpen}>
        <Drawer.Portal>
          <Drawer.Overlay className="fixed inset-0 bg-black/40 z-50" />
          <Drawer.Content className="fixed bottom-0 left-0 right-0 z-50 rounded-t-2xl bg-pf-bg border-t border-pf-border p-6 max-h-[90vh] overflow-y-auto">
            <div className="mx-auto w-12 h-1 rounded-full bg-pf-border mb-6" />
            <div className="flex items-start justify-between gap-4 mb-6">
              <div>
                <Drawer.Title className="font-serif text-3xl leading-display text-pf-text">
                  {entry.name}
                </Drawer.Title>
                <p className="text-pf-muted text-sm mt-1 font-sans">{entry.subtitle}</p>
              </div>
              <div className="flex-shrink-0">
                <ScoreDisplay score={entry.score} size="detail" />
              </div>
            </div>

            {entry.detailLines && entry.detailLines.length > 0 && (
              <dl className="grid grid-cols-2 gap-3 mb-6">
                {entry.detailLines.map((line) => (
                  <div key={line.label}>
                    <dt className="text-pf-muted text-xs uppercase tracking-widest font-sans mb-0.5">
                      {line.label}
                    </dt>
                    <dd className="text-pf-text text-sm font-sans">{line.value}</dd>
                  </div>
                ))}
              </dl>
            )}

            <p className="text-pf-text/80 font-sans leading-relaxed">{entry.notesPreview}</p>
            <p className="text-pf-muted text-xs mt-4 font-sans">{entry.date}</p>
          </Drawer.Content>
        </Drawer.Portal>
      </Drawer.Root>
    </>
  );
}
