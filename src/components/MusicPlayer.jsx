import { forwardRef, useImperativeHandle, useRef, useState } from 'react'
import { FaMusic, FaVolumeMute } from 'react-icons/fa'
import './MusicPlayer.css'

const MusicPlayer = forwardRef(function MusicPlayer(_, ref) {
  const audioRef = useRef(null)
  const [playing, setPlaying] = useState(false)

  useImperativeHandle(ref, () => ({
    start() {
      const audio = audioRef.current
      if (!audio) return
      audio.volume = 0.5
      audio.play().then(() => setPlaying(true)).catch(() => setPlaying(false))
    },
  }))

  const toggle = () => {
    const audio = audioRef.current
    if (!audio) return
    if (playing) {
      audio.pause()
      setPlaying(false)
    } else {
      audio.play().then(() => setPlaying(true)).catch(() => {})
    }
  }

  return (
    <>
      <audio ref={audioRef} loop preload="auto">
        <source src="/music/song.mp3" type="audio/mpeg" />
      </audio>
      <div className="music-widget">
        {playing && (
          <div className="music-notes" aria-hidden="true">
            <span>♪</span>
            <span>♫</span>
            <span>♪</span>
          </div>
        )}
        <button className="music-toggle" onClick={toggle} aria-label={playing ? 'Pausar música' : 'Reproducir música'}>
          {playing ? <FaMusic className="spin" /> : <FaVolumeMute />}
        </button>
      </div>
    </>
  )
})

export default MusicPlayer
