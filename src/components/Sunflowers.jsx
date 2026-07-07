import { useMemo } from 'react'
import { motion } from 'framer-motion'
import './Sunflowers.css'

export default function Sunflowers() {
  const sunflowers = useMemo(
    () =>
      Array.from({ length: 22 }, (_, i) => ({
        id: i,
        left: Math.round(Math.random() * 100),
        bottom: Math.round(Math.random() * 40) - 10,
        size: 1.4 + Math.random() * 2.2,
        delay: Math.random() * 3,
        sway: 4 + Math.random() * 4,
      })),
    []
  )

  const petals = useMemo(
    () =>
      Array.from({ length: 16 }, (_, i) => ({
        id: i,
        left: Math.round(Math.random() * 100),
        duration: 8 + Math.random() * 8,
        delay: Math.random() * 10,
        size: 0.9 + Math.random() * 1,
      })),
    []
  )

  return (
    <section className="scene sunflower-scene" id="sunflowers">
      <div className="sunflower-field" aria-hidden="true">
        {sunflowers.map((f) => (
          <span
            key={f.id}
            className="sunflower"
            style={{
              left: `${f.left}%`,
              bottom: `${f.bottom}px`,
              fontSize: `${f.size}rem`,
              animation: `sway ${f.sway}s ease-in-out ${f.delay}s infinite`,
            }}
          >
            🌻
          </span>
        ))}
      </div>

      <div className="decor-layer" aria-hidden="true">
        {petals.map((p) => (
          <span
            key={p.id}
            className="floating-heart"
            style={{
              left: `${p.left}%`,
              fontSize: `${p.size}rem`,
              animation: `float-up ${p.duration}s linear ${p.delay}s infinite`,
            }}
          >
            🌼
          </span>
        ))}
      </div>

      <motion.p
        className="sunflower-quote"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        Siempre vas a ser mi lugar favorito.
      </motion.p>
    </section>
  )
}
