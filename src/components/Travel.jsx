import { motion } from 'framer-motion'
import { FaPlane } from 'react-icons/fa'
import { photos } from '../data/photos.js'
import './Travel.css'

// Editá estos destinos con los lugares y fechas reales de sus viajes.
// Se van a usar, en orden, algunas de las fotos de la carpeta src/assets/photos.
const DESTINATIONS = [
  { place: 'Nuestro primer viaje', note: 'El primero de muchos ✈️' },
  { place: 'Ese fin de semana inolvidable', note: 'Riéndonos todo el camino' },
  { place: 'Nuestro rincón favorito', note: 'Siempre quiero volver ahí' },
  { place: 'La próxima aventura', note: 'Con vos, a cualquier lado' },
]

export default function Travel() {
  const stops = DESTINATIONS.map((d, i) => ({
    ...d,
    photo: photos[(i * 3 + 1) % photos.length],
  }))

  return (
    <section className="scene travel-scene" id="travel">
      <div className="travel-clouds" aria-hidden="true">
        <FaPlane className="plane plane-1" />
        <FaPlane className="plane plane-2" />
        <span className="cloud cloud-1">☁️</span>
        <span className="cloud cloud-2">☁️</span>
        <span className="cloud cloud-3">☁️</span>
      </div>

      <motion.h2
        className="scene-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        ✈️ Nuestros viajes
      </motion.h2>
      <p className="scene-quote">Cada lugar fue más hermoso porque estabas conmigo.</p>

      <div className="travel-route">
        {stops.map((stop, i) => (
          <motion.div
            className="travel-stop"
            key={stop.place}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, delay: i * 0.1 }}
          >
            <div className="travel-photo">
              <img src={stop.photo.src} alt={stop.place} loading="lazy" />
            </div>
            <h3>{stop.place}</h3>
            <p>{stop.note}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
