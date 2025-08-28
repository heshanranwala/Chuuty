import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import photo1 from '../PXL_20250325_072105237.MP~4.jpg'
import photo2 from '../PXL_20250403_055017695.jpg'
import photo3 from '../PXL_20250326_095200143.PORTRAIT~2.jpg'
import photo4 from '../IMG-20250816-WA0001.jpg'
import photo5 from '../IMG-20250828-WA0147.jpg'
import { useState } from 'react'

export default function Surprise() {
  const photos = [photo1, photo2, photo3, photo4, photo5]
  const positions = ['center', 'center 35%', 'top center', 'center', 'center']
  const [selected, setSelected] = useState<string | null>(null)

  return (
    <div style={{ minHeight: '100svh', display: 'grid', placeItems: 'center', padding: '48px 0' }}>
      <div className="container" style={{ width: 'min(1100px, 92%)' }}>
        <motion.h1 className="title" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          For You, With Love
        </motion.h1>
        <p className="subtitle">Some of my favorite smiles and moments.</p>

        {/* Desktop Layout */}
        <div
          className="desktop-gallery"
          style={{
            marginTop: 24,
            display: 'grid',
            gap: 16,
            gridTemplateColumns: '1fr 1fr 1fr',
            gridTemplateRows: 'auto auto auto',
            gridTemplateAreas:
              `'tl . tr'\n'. center .'\n'bl . br'`,
            alignItems: 'stretch',
          }}
        >
          {/* Top-left (photo 1) */}
          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.4, delay: 0.02 }}
            className="photoTile"
            onClick={() => setSelected(photos[0])}
            style={{ gridArea: 'tl', overflow: 'hidden', borderRadius: 16, border: '1px solid rgba(255,255,255,0.1)', height: 260, alignSelf: 'end', cursor: 'zoom-in' }}>
            <img src={photos[0]} alt="Memory 1" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: positions[0] as any, display: 'block', transition: 'transform 250ms ease' }} />
          </motion.div>

          {/* Top-right (photo 2) */}
          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.4, delay: 0.08 }}
            className="photoTile"
            onClick={() => setSelected(photos[1])}
            style={{ gridArea: 'tr', overflow: 'hidden', borderRadius: 16, border: '1px solid rgba(255,255,255,0.1)', height: 260, cursor: 'zoom-in' }}>
            <img src={photos[1]} alt="Memory 2" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: positions[1] as any, display: 'block', transition: 'transform 250ms ease' }} />
          </motion.div>

          {/* Center (photo 5) - natural height, centered */}
          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.4, delay: 0.14 }}
            className="photoTile"
            onClick={() => setSelected(photos[4])}
            style={{ gridArea: 'center', overflow: 'hidden', borderRadius: 16, border: '1px solid rgba(255,255,255,0.1)', justifySelf: 'center', alignSelf: 'center', maxWidth: 'min(100%, 680px)', cursor: 'zoom-in' }}>
            <img src={photos[4]} alt="Memory 5" style={{ width: '100%', height: 'auto', objectFit: 'contain', objectPosition: positions[4] as any, display: 'block', transition: 'transform 250ms ease' }} />
          </motion.div>

          {/* Bottom-left (photo 3) */}
          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.4, delay: 0.2 }}
            className="photoTile"
            onClick={() => setSelected(photos[2])}
            style={{ gridArea: 'bl', overflow: 'hidden', borderRadius: 16, border: '1px solid rgba(255,255,255,0.1)', height: 260, cursor: 'zoom-in' }}>
            <img src={photos[2]} alt="Memory 3" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: positions[3] as any, display: 'block', transition: 'transform 250ms ease' }} />
          </motion.div>

          {/* Bottom-right (photo 4) */}
          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.4, delay: 0.26 }}
            className="photoTile"
            onClick={() => setSelected(photos[3])}
            style={{ gridArea: 'br', overflow: 'hidden', borderRadius: 16, border: '1px solid rgba(255,255,255,0.1)', height: 260, cursor: 'zoom-in' }}>
            <img src={photos[3]} alt="Memory 4" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: positions[4] as any, display: 'block', transition: 'transform 250ms ease' }} />
          </motion.div>
        </div>

        {/* Mobile Layout */}
        <div
          className="mobile-gallery"
          style={{
            marginTop: 24,
            display: 'none',
            flexDirection: 'column',
            gap: 16,
          }}
        >
          {photos.map((src, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: i * 0.1 }}
              className="photoTile"
              onClick={() => setSelected(src)}
              style={{ overflow: 'hidden', borderRadius: 16, border: '1px solid rgba(255,255,255,0.1)', cursor: 'zoom-in', height: 240 }}>
              <img src={src} alt={`Memory ${i + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: positions[i] as any, display: 'block', transition: 'transform 250ms ease' }} />
            </motion.div>
          ))}
        </div>

        <div style={{ marginTop: 24 }}>
          <Link to="/" className="btn">Back to Home</Link>
        </div>

        {/* Lightbox modal */}
        <AnimatePresence>
          {selected && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelected(null)}
              style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.7)', display: 'grid', placeItems: 'center', zIndex: 50, cursor: 'zoom-out' }}
            >
              <motion.img
                key={selected}
                src={selected}
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ duration: 0.2 }}
                alt="Expanded"
                style={{ maxWidth: '90vw', maxHeight: '90vh', objectFit: 'contain', borderRadius: 16, boxShadow: '0 20px 60px rgba(0,0,0,0.5)' }}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}


