import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import TypingText from './TypingText.jsx'
import FloatingDecor from './FloatingDecor.jsx'
import './Letter.css'

export default function Letter({ heading, paragraphs, signature, id }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-15% 0px' })
  const [opened, setOpened] = useState(false)

  return (
    <section className="scene letter-scene" id={id} ref={ref}>
      <FloatingDecor kind="sparkles" count={10} />

      {!opened && (
        <motion.button
          className="envelope"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8 }}
          onClick={() => setOpened(true)}
          aria-label="Abrir la carta"
        >
          <span className="envelope-flap" />
          <span className="envelope-body" />
          <span className="envelope-seal">❤️</span>
        </motion.button>
      )}

      {!opened && inView && (
        <motion.p
          className="envelope-hint"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.75 }}
          transition={{ delay: 1 }}
        >
          Tocá la carta para abrirla
        </motion.p>
      )}

      {opened && (
        <motion.div
          className="letter-card"
          initial={{ opacity: 0, y: 40, scale: 0.92 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
        >
          {heading && <h2 className="letter-heading">{heading}</h2>}
          <div className="gold-divider" />
          {paragraphs.map((line, i) => {
            const speed = 32
            const priorDelay = paragraphs
              .slice(0, i)
              .reduce((sum, t) => sum + t.length * speed + 500, 300)
            return (
              <TypingText
                key={i}
                text={line}
                as="p"
                className={`letter-line ${line === '' ? 'letter-line--blank' : ''}`}
                startDelay={priorDelay}
                speed={speed}
              />
            )
          })}
          {signature && <p className="letter-signature">{signature}</p>}
        </motion.div>
      )}
    </section>
  )
}
