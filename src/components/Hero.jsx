import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import FloatingDecor from './FloatingDecor.jsx'
import './Hero.css'

export default function Hero({ onStart }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -60])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])
  const skyY = useTransform(scrollYProgress, [0, 1], [0, 40])

  return (
    <section className="scene hero-scene" id="hero" ref={ref}>
      <motion.div className="hero-sky" style={{ y: skyY }} aria-hidden="true" />
      <FloatingDecor kind="petals" count={16} />
      <FloatingDecor kind="sparkles" count={20} />

      <motion.div style={{ y: contentY, opacity: contentOpacity }} className="hero-content">
      <motion.h1
        className="hero-title"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, ease: 'easeOut' }}
      >
        ✨ Feliz Cumpleaños Antonella ✨
      </motion.h1>

      <motion.p
        className="hero-quote"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 1.2 }}
      >
        "Hay personas que llegan a tu vida...
        <br />
        y la convierten en el lugar más bonito."
      </motion.p>

      <motion.button
        className="hero-button"
        onClick={onStart}
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.95 }}
      >
        ❤️ Presioná para comenzar ❤️
      </motion.button>

      <motion.div
        className="hero-hint"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7, y: [0, 8, 0] }}
        transition={{ delay: 2.4, duration: 2, repeat: Infinity }}
      >
        ⌄
      </motion.div>
      </motion.div>
    </section>
  )
}
