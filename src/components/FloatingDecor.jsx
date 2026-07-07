import { useMemo } from 'react'

const EMOJI = {
  hearts: ['💗', '💕', '❤️', '💓'],
  petals: ['🌸', '🌷', '🌼'],
  sparkles: ['✨', '⭐'],
  sunflowers: ['🌻'],
}

export default function FloatingDecor({ kind = 'hearts', count = 14 }) {
  const items = useMemo(() => {
    const pool = EMOJI[kind] || EMOJI.hearts
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      emoji: pool[i % pool.length],
      left: Math.round(Math.random() * 100),
      duration: 10 + Math.random() * 10,
      delay: Math.random() * 12,
      size: 0.9 + Math.random() * 1.4,
      drift: Math.round((Math.random() - 0.5) * 160),
      spin: Math.round((Math.random() - 0.5) * 240),
    }))
  }, [kind, count])

  return (
    <div className="decor-layer" aria-hidden="true">
      {items.map((it) => (
        <span
          key={it.id}
          className="floating-heart"
          style={{
            left: `${it.left}%`,
            fontSize: `${it.size}rem`,
            animation: `float-up ${it.duration}s linear ${it.delay}s infinite`,
            '--drift': `${it.drift}px`,
            '--spin': `${it.spin}deg`,
          }}
        >
          {it.emoji}
        </span>
      ))}
    </div>
  )
}
