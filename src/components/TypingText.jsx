import { useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function TypingText({ text, speed = 45, as: Tag = 'p', className = '', startDelay = 0 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-10% 0px' })
  const [shown, setShown] = useState('')

  useEffect(() => {
    if (!inView) return
    let i = 0
    let timeoutId
    const startTimer = setTimeout(() => {
      const tick = () => {
        i += 1
        setShown(text.slice(0, i))
        if (i < text.length) {
          timeoutId = setTimeout(tick, speed)
        }
      }
      tick()
    }, startDelay)
    return () => {
      clearTimeout(startTimer)
      clearTimeout(timeoutId)
    }
  }, [inView, text, speed, startDelay])

  return (
    <Tag ref={ref} className={className}>
      {shown}
      {inView && shown.length < text.length && (
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ repeat: Infinity, duration: 0.7 }}
          style={{ marginLeft: 2 }}
        >
          |
        </motion.span>
      )}
    </Tag>
  )
}
