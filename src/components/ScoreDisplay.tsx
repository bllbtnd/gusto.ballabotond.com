interface Props {
  score: number;
  size?: 'card' | 'detail';
}

export default function ScoreDisplay({ score, size = 'card' }: Props) {
  return (
    <div className="flex items-baseline gap-1">
      <span
        className={`font-serif tracking-brutal leading-brutal text-pf-text ${
          size === 'detail' ? 'text-7xl' : 'text-4xl'
        }`}
      >
        {score}
      </span>
      <span className="font-sans text-pf-muted text-xs">/100</span>
    </div>
  );
}
