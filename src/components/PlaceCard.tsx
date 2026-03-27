import { useState } from 'react';
import { Drawer } from 'vaul';
import ScoreDisplay from './ScoreDisplay';

export interface PlaceEntry {
  id: string;
  name: string;
  type: string;
  city: string;
  address: string;
  lat: number;
  lng: number;
  score: number;
  notes: string;
  date: string;
  image: string | null;
}

interface Props {
  entry: PlaceEntry;
}

const TYPE_LABELS: Record<string, string> = {
  restaurant: 'Restaurant',
  bar: 'Bar',
  café: 'Café',
  cafe: 'Café',
};

export default function PlaceCard({ entry }: Props) {
  const [open, setOpen] = useState(false);
  const typeLabel = TYPE_LABELS[entry.type] ?? entry.type;

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="w-full text-left rounded-xl border border-pf-border bg-pf-surface p-4 transition-all hover:shadow-sm hover:border-places/50"
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-sans px-2 py-0.5 rounded-full border border-places/30 text-places bg-places/5">
                {typeLabel}
              </span>
              <span className="text-pf-muted text-xs font-sans">{entry.city}</span>
            </div>
            <h3 className="font-serif text-xl leading-tight text-pf-text">{entry.name}</h3>
            <p className="text-pf-text/70 text-sm mt-2 line-clamp-2 font-sans leading-relaxed">
              {entry.notes}
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
            <div className="flex items-start justify-between gap-4 mb-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-sans px-2 py-0.5 rounded-full border border-places/30 text-places bg-places/5">
                    {typeLabel}
                  </span>
                  <span className="text-pf-muted text-sm font-sans">{entry.city}</span>
                </div>
                <Drawer.Title className="font-serif text-3xl leading-display text-pf-text">
                  {entry.name}
                </Drawer.Title>
                <p className="text-pf-muted text-xs mt-1 font-sans">{entry.address}</p>
              </div>
              <div className="flex-shrink-0">
                <ScoreDisplay score={entry.score} size="detail" />
              </div>
            </div>

            <p className="text-pf-text/80 font-sans leading-relaxed mt-4">{entry.notes}</p>
            <p className="text-pf-muted text-xs mt-4 font-sans">{entry.date}</p>
          </Drawer.Content>
        </Drawer.Portal>
      </Drawer.Root>
    </>
  );
}
