import { useState, useMemo } from 'react';
import Fuse from 'fuse.js';
import PlaceCard from './PlaceCard';
import type { PlaceEntry } from './PlaceCard';

interface Props {
  places: PlaceEntry[];
}

export default function PlacesPageClient({ places }: Props) {
  const [query, setQuery] = useState('');

  const fuse = useMemo(
    () =>
      new Fuse(places, {
        keys: ['name', 'type', 'city', 'address', 'notes'],
        threshold: 0.35,
        ignoreLocation: true,
      }),
    [places]
  );

  const results = query.trim() ? fuse.search(query).map((r) => r.item) : places;

  return (
    <>
      <div className="relative mb-6">
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search…"
          className="w-full rounded-xl border border-pf-border bg-pf-surface px-4 py-2.5 font-sans text-sm text-pf-text placeholder:text-pf-muted outline-none focus:border-pf-accent transition-colors"
        />
      </div>

      {results.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {results.map((place) => (
            <PlaceCard key={place.id} entry={place} />
          ))}
        </div>
      ) : (
        <p className="text-pf-muted font-sans text-sm py-12 text-center">No results for "{query}"</p>
      )}
    </>
  );
}
