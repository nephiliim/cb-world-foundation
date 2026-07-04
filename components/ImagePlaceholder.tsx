export default function ImagePlaceholder({ label, path, className = '' }: { label: string; path: string; className?: string }) {
  return (
    <div className={`image-placeholder flex min-h-[260px] flex-col justify-end rounded-3xl p-6 shadow-soft ${className}`}>
      <p className="text-xs font-black uppercase tracking-[0.2em] text-royal">Asset needed</p>
      <h3 className="mt-2 text-xl font-black text-navy">{label}</h3>
      <p className="mt-2 rounded-2xl bg-white/80 px-3 py-2 font-mono text-xs text-muted">{path}</p>
    </div>
  );
}
