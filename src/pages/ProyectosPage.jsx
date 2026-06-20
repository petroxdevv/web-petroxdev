import { Link } from 'react-router-dom'
import InfiniteMenu from '../components/InfiniteMenu'

const items = [
  {
    image: '/danper.png',
    link: 'https://danperconstrucciones.es',
    title: 'Danper Construcciones',
    description: 'Landing profesional para empresa de construcción y reformas.',
  },
  {
    image: '/kuma.png',
    link: 'https://kumabrand.com',
    title: 'Kuma Brand',
    description: 'Identidad de marca y desarrollo web para estudio creativo.',
  },
  {
    image: '/saranglovers.png',
    link: 'https://saranglovers.es',
    title: 'Sarang Lovers',
    description: 'Portfolio fotográfico para fotógrafos de bodas.',
  },
  {
    image: '/logo-dicor.png',
    link: 'https://cristaleriadicor.es',
    title: 'Cristalería Dicor',
    description: 'Web corporativa para empresa de cristalería y mamparas.',
  },
]

export default function ProyectosPage() {
  return (
    <div style={{
      width: '100vw',
      height: '100vh',
      position: 'relative',
      overflow: 'hidden',
      background: '#000',
    }}>

{/* InfiniteMenu con luna WebGL integrada */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 1 }}>
        <InfiniteMenu items={items} scale={1.0} />
      </div>

      {/* Botón volver */}
      <Link
        to="/"
        style={{
          position: 'absolute',
          top: '28px',
          left: '32px',
          zIndex: 10,
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          color: 'rgba(255,255,255,0.5)',
          fontSize: '13px',
          fontWeight: 500,
          letterSpacing: '0.06em',
          textTransform: 'uppercase',
          textDecoration: 'none',
          transition: 'color 0.2s',
        }}
        onMouseEnter={e => e.currentTarget.style.color = '#fff'}
        onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.5)'}
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        Volver
      </Link>

      {/* Logo */}
      <div style={{
        position: 'absolute',
        top: '28px',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 10,
        fontSize: '13px',
        fontWeight: 700,
        letterSpacing: '0.2em',
        textTransform: 'uppercase',
        color: '#fff',
      }}>
        petrox<span style={{ color: '#a855f7' }}>dev</span>
      </div>

    </div>
  )
}
