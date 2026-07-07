import { motion } from 'framer-motion'

const VARIANTS = {
  'slide-left': {
    className: 'photo-card--plain',
    initial: { opacity: 0, x: -140, rotate: -4 },
    whileInView: { opacity: 1, x: 0, rotate: 0 },
    transition: { duration: 0.8, ease: 'easeOut' },
  },
  rotate: {
    className: 'photo-card--plain',
    initial: { opacity: 0, rotate: -160, scale: 0.6 },
    whileInView: { opacity: 1, rotate: 0, scale: 1 },
    transition: { duration: 0.9, ease: 'easeOut' },
  },
  blur: {
    className: 'photo-card--plain',
    initial: { opacity: 0, filter: 'blur(18px)', scale: 1.1 },
    whileInView: { opacity: 1, filter: 'blur(0px)', scale: 1 },
    transition: { duration: 1, ease: 'easeOut' },
  },
  zoom: {
    className: 'photo-card--plain',
    initial: { opacity: 0, scale: 0.35 },
    whileInView: { opacity: 1, scale: 1 },
    transition: { duration: 0.7, ease: 'backOut' },
  },
  polaroid: {
    className: 'photo-card--polaroid',
    initial: { opacity: 0, y: 70, rotate: -8 },
    whileInView: { opacity: 1, y: 0, rotate: -4 },
    transition: { duration: 0.85, ease: 'easeOut' },
  },
  tape: {
    className: 'photo-card--tape',
    initial: { opacity: 0, y: -60 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: 'easeOut' },
  },
  'gold-frame': {
    className: 'photo-card--gold',
    initial: { opacity: 0, scale: 0.85 },
    whileInView: { opacity: 1, scale: 1 },
    transition: { duration: 0.8, ease: 'easeOut' },
  },
  collage: {
    className: 'photo-card--collage',
    initial: { opacity: 0, y: 40, rotate: 6 },
    whileInView: { opacity: 1, y: 0, rotate: 3 },
    transition: { duration: 0.8, ease: 'easeOut' },
  },
}

export default function PhotoCard({ photo, variant = 'zoom' }) {
  const v = VARIANTS[variant] || VARIANTS.zoom

  return (
    <motion.figure
      className={`photo-card ${v.className}`}
      initial={v.initial}
      whileInView={v.whileInView}
      viewport={{ once: true, amount: 0.4 }}
      transition={v.transition}
      whileTap={{ scale: 0.94, rotate: 2 }}
      whileHover={{ scale: 1.04, rotate: -1 }}
    >
      <img src={photo.src} alt={photo.caption} loading="lazy" />
      {photo.caption && <figcaption>{photo.caption}</figcaption>}
    </motion.figure>
  )
}
