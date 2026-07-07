import { motion } from 'framer-motion'
import PhotoCard from './PhotoCard.jsx'
import { photos } from '../data/photos.js'
import './Gallery.css'

const VARIANT_CYCLE = ['slide-left', 'rotate', 'blur', 'zoom', 'polaroid', 'tape', 'gold-frame', 'collage']

export default function Gallery() {
  return (
    <section className="scene gallery-scene" id="gallery">
      <motion.h2
        className="scene-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        📸 Nuestros momentos
      </motion.h2>
      <div className="gold-divider" />

      <div className="gallery-grid">
        {photos.map((photo, i) => (
          <PhotoCard key={photo.filename} photo={photo} variant={VARIANT_CYCLE[i % VARIANT_CYCLE.length]} />
        ))}
      </div>
    </section>
  )
}
