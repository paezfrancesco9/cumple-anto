import { useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import confetti from 'canvas-confetti'
import { photos } from '../data/photos.js'
import FloatingDecor from './FloatingDecor.jsx'
import './Final.css'

const ORBIT_PHOTOS = photos.filter((_, i) => i % 4 === 0).slice(0, 6)

export function HeartsOrbit() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-20% 0px' })

  return (
    <section className="scene hearts-scene" id="hearts" ref={ref}>
      <FloatingDecor kind="hearts" count={26} />

      <motion.h2
        className="scene-title"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        Nuestra historia sigue ❤️
      </motion.h2>

      <div className="orbit-wrapper">
        <motion.div
          className="orbit"
          animate={inView ? { rotate: 360 } : {}}
          transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
        >
          {ORBIT_PHOTOS.map((photo, i) => {
            const angle = (360 / ORBIT_PHOTOS.length) * i
            return (
              <div
                className="orbit-photo"
                key={photo.filename}
                style={{ transform: `rotate(${angle}deg) translate(min(32vw, 200px)) rotate(-${angle}deg)` }}
              >
                <img src={photo.src} alt="" />
              </div>
            )
          })}
        </motion.div>
        <div className="orbit-center">💛</div>
      </div>
    </section>
  )
}

export function Finale() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-30% 0px' })

  useEffect(() => {
    if (!inView) return
    const colors = ['#f2a6bb', '#d8ab5b', '#f6c445', '#ffd6e0', '#ffffff']
    const end = Date.now() + 3200

    const frame = () => {
      confetti({ particleCount: 4, angle: 60, spread: 65, origin: { x: 0 }, colors })
      confetti({ particleCount: 4, angle: 120, spread: 65, origin: { x: 1 }, colors })
      if (Date.now() < end) requestAnimationFrame(frame)
    }
    frame()

    const burst = () =>
      confetti({ particleCount: 90, spread: 100, origin: { y: 0.5 }, colors, startVelocity: 45 })
    burst()
    const t1 = setTimeout(burst, 900)
    const t2 = setTimeout(burst, 1900)
    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
    }
  }, [inView])

  return (
    <section className="scene finale-scene" id="finale" ref={ref}>
      <FloatingDecor kind="sparkles" count={24} />
      <motion.div
        className="finale-text"
        initial={{ opacity: 0, scale: 0.85 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 1 }}
      >
        <p className="finale-line">❤️ Feliz Cumpleaños ❤️</p>
        <h2 className="finale-name">Antonella</h2>
      </motion.div>
    </section>
  )
}

export default function Final() {
  return (
    <>
      <HeartsOrbit />
      <Finale />
    </>
  )
}
