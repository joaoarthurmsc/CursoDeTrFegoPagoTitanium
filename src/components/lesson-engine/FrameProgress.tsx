export default function FrameProgress({
  current,
  total,
}: {
  current: number
  total: number
}) {
  if (total <= 1) return null

  return (
    <div
      className="flex items-center gap-1.5"
      aria-label={`Página ${current + 1} de ${total}`}
    >
      {Array.from({ length: total }, (_, index) => (
        <span
          key={index}
          className={`h-1.5 rounded-full transition-all ${
            index === current
              ? "w-6 bg-gold"
              : index < current
                ? "w-3 bg-silver/60"
                : "w-3 bg-charcoal"
          }`}
        />
      ))}
    </div>
  )
}
