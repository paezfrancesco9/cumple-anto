import { useEffect, useState } from 'react'
import './SectionNav.css'

const SECTIONS = [
  { id: 'hero', label: 'Inicio' },
  { id: 'letter-intro', label: 'Carta' },
  { id: 'gallery', label: 'Fotos' },
  { id: 'travel', label: 'Viajes' },
  { id: 'sunflowers', label: 'Girasoles' },
  { id: 'hearts', label: 'Corazones' },
  { id: 'letter-final', label: 'Carta final' },
  { id: 'finale', label: 'Final' },
]

export default function SectionNav() {
  const [active, setActive] = useState('hero')

  useEffect(() => {
    const els = SECTIONS.map((s) => document.getElementById(s.id)).filter(Boolean)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { threshold: 0.5 }
    )
    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <nav className="section-nav" aria-label="Navegación de escenas">
      {SECTIONS.map((s) => (
        <button
          key={s.id}
          className={`section-dot ${active === s.id ? 'section-dot--active' : ''}`}
          aria-label={s.label}
          onClick={() => document.getElementById(s.id)?.scrollIntoView({ behavior: 'smooth' })}
        />
      ))}
    </nav>
  )
}
