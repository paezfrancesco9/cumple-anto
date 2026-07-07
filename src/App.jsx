import { useRef } from 'react'
import Hero from './components/Hero.jsx'
import Letter from './components/Letter.jsx'
import Gallery from './components/Gallery.jsx'
import Travel from './components/Travel.jsx'
import Sunflowers from './components/Sunflowers.jsx'
import { HeartsOrbit, Finale } from './components/Final.jsx'
import MusicPlayer from './components/MusicPlayer.jsx'
import ScrollProgress from './components/ScrollProgress.jsx'
import SectionNav from './components/SectionNav.jsx'

const OPENING_LETTER = [
  'Feliz cumpleaños mi amor ❤️',
  '',
  'Hoy quiero recordarte lo especial',
  'que sos para mí.',
  '',
  'Gracias por cada sonrisa,',
  'por cada abrazo,',
  'por cada momento.',
  '',
  'Te amo muchísimo.',
]

const FINAL_LETTER = [
  'Feliz cumpleaños.',
  '',
  'Gracias por existir.',
  'Gracias por elegirme.',
  '',
  'Sos la mujer más maravillosa',
  'que conocí.',
  '',
  'Espero seguir viviendo miles',
  'de aventuras contigo.',
  '',
  'Te amo muchísimo.',
  'Con todo mi corazón.',
]

function App() {
  const musicRef = useRef(null)

  const handleStart = () => {
    musicRef.current?.start()
    document.getElementById('letter-intro')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="app">
      <ScrollProgress />
      <SectionNav />
      <MusicPlayer ref={musicRef} />
      <Hero onStart={handleStart} />
      <Letter id="letter-intro" paragraphs={OPENING_LETTER} />
      <Gallery />
      <Travel />
      <Sunflowers />
      <HeartsOrbit />
      <Letter id="letter-final" heading="Antonella" paragraphs={FINAL_LETTER} signature="Francesco ❤️" />
      <Finale />
    </div>
  )
}

export default App
