import { useCallback, useMemo, useRef, useState } from 'react'
import './App.css'
import Particles from '@tsparticles/react'
import type { ISourceOptions } from '@tsparticles/engine'
import { motion, useScroll, useTransform } from 'framer-motion'
import Confetti from 'react-confetti'
import { useNavigate, Link } from 'react-router-dom'

function useParticlesOptions(): ISourceOptions {
  return useMemo(() => ({
    background: { color: { value: 'transparent' } },
    fullScreen: { enable: false },
    particles: {
      number: { value: 60, density: { enable: true, area: 900 } },
      color: { value: ['#ff6ec7', '#6ecbff', '#ffd166'] },
      opacity: { value: 0.35 },
      size: { value: { min: 1, max: 3 } },
      move: { enable: true, speed: 0.6 },
      links: { enable: true, distance: 120, color: '#ffffff', opacity: 0.15 },
    },
    detectRetina: true,
  }), [])
}

function Hero() {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 400], [0, -60])

  return (
    <section className="hero section" id="hero">
      <div className="glow" />
      <motion.div className="container heroInner" style={{ y }}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="nameScript">For my favorite person</div>
        <h1 className="headline title">Happy Birthday, Chuuty</h1>
        <p className="subtitle">A little journey through memories and reasons I adore you.</p>
        <div className="ctaRow">
          <Link to="/surprise" className="btn">Memories</Link>
          <a href="#reasons" className="btn">Why I love you</a>
        </div>
      </motion.div>
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <Particles id="tsparticles" options={useParticlesOptions()} />
      </div>
    </section>
  )
}

// Memories section removed per request

function Reasons() {
  const reasons = [
    'Your laugh brightens any room',
    'You care deeply and love fiercely',
    'You make ordinary moments feel magical',
    'You believe in me, always',
    'You are beautifully, authentically you',
  ]
  return (
    <section className="section" id="reasons">
      <div className="container">
        <motion.h2 className="title" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>Reasons I love you</motion.h2>
        <div className="cardGrid">
          {reasons.map((r, i) => (
            <motion.div key={i} className="card" initial={{ opacity: 0, y: 20, scale: 0.98 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.4, delay: i * 0.06 }}>
              <p style={{ margin: 0 }}>{r}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Timeline section removed per request

function Celebrate() {
  const [show, setShow] = useState(false)
  const confettiRef = useRef<HTMLDivElement | null>(null)
  const navigate = useNavigate()

  const onCelebrate = useCallback(() => {
    setShow(true)
    setTimeout(() => setShow(false), 3500)
    setTimeout(() => navigate('/surprise'), 1000)
  }, [])

  return (
    <section className="section celebrate" id="celebrate">
      <div className="container">
        <motion.h2 className="title" initial={{ opacity: 0, scale: 0.98 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>A trip down memory lane ✨</motion.h2>
        <div style={{ marginTop: 16 }}>
          <button className="btn" onClick={onCelebrate} style={{ fontSize: '200%', padding: '24px 40px', borderRadius: 18 }}>Memories</button>
        </div>
        <div ref={confettiRef} style={{ position: 'relative', width: '100%', height: 0 }} />
        {show && (
          <Confetti recycle={false} numberOfPieces={320} gravity={0.3} tweenDuration={5500} />
        )}
      </div>
    </section>
  )
}

function App() {
  return (
    <>
      <Hero />
      <Reasons />
      <Celebrate />
    </>
  )
}

export default App
