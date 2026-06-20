import { Link } from 'react-router-dom'
import Beams from '../components/Beams'
import monitorIcon from '../assets/icons/monitor-app.png'
import { useLanguage } from '../context/LanguageContext'
import './SoftwarePage.css'

const appsMeta = [
  {
    slug: "petroxdev-monitor",
    icon: monitorIcon,
    platform: "macOS · Swift",
    title: "petroxdev monitor",
    tags: ["macOS 13+", "Apple Silicon", "Menu Bar", "Swift"],
    href: "https://github.com/petroxdevv/petroxdev-menubar",
  },
]

function SoftwareCard({ app, activeLabel }) {
  return (
    <div className="sw-card">
      <div className="sw-card__inner">

        {/* Header */}
        <div className="sw-card__header">
          <div className="sw-card__icon-wrap">
            {typeof app.icon === 'string' && app.icon.includes('.')
              ? <img src={app.icon} alt={app.title} style={{ width: '36px', height: '36px', objectFit: 'contain' }} />
              : app.icon}
          </div>
          <div className="sw-card__badges">
            <span className="sw-card__platform">{app.platform}</span>
            <span className="sw-card__badge">{app.badge}</span>
          </div>
        </div>

        {/* Title */}
        <h3 className="sw-card__title">{app.title}</h3>

        {/* Description */}
        <p className="sw-card__desc">{app.description}</p>

        {/* Tags */}
        <div className="sw-card__tags">
          {app.tags.map(tag => (
            <span key={tag} className="sw-card__tag">{tag}</span>
          ))}
        </div>

        <div className="sw-card__divider" />

        {/* Footer row */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div className="sw-card__status">
            <span className="sw-card__dot" />
            {activeLabel}
          </div>
          <a
            href={app.href}
            target="_blank"
            rel="noopener noreferrer"
            className="sw-card__link"
          >
            {app.linkLabel}
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>

      </div>
    </div>
  )
}

export default function SoftwarePage() {
  const { t } = useLanguage()
  const ts = t.software

  const apps = appsMeta.map((meta) => {
    const translated = ts.apps.find(a => a.slug === meta.slug) || {}
    return { ...meta, ...translated }
  })

  return (
    <div style={{
      minHeight: '100vh',
      background: '#0a0a0a',
      position: 'relative',
    }}>
      {/* Fondo animado */}
      <div style={{ position: 'fixed', inset: 0, zIndex: 0 }}>
        <Beams
          beamWidth={2}
          beamHeight={15}
          beamNumber={12}
          lightColor="#ffffff"
          speed={2}
          noiseIntensity={1.75}
          scale={0.2}
          rotation={0}
        />
      </div>
      <div style={{ position: 'relative', zIndex: 1 }}>

      {/* Botón volver */}
      <Link
        to="/"
        style={{
          position: 'fixed',
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
        {ts.back}
      </Link>

      {/* Logo */}
      <div style={{
        position: 'fixed',
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

      {/* Contenido */}
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '120px 32px 80px' }}>

        {/* Cabecera */}
        <div style={{ marginBottom: '64px', textAlign: 'center' }}>
          <span style={{
            display: 'block', marginBottom: '12px',
            fontSize: '11px', fontWeight: 600,
            letterSpacing: '0.3em', textTransform: 'uppercase',
            color: '#a855f7',
          }}>
            {ts.label}
          </span>
          <h1 style={{
            fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: 500,
            letterSpacing: '-0.02em', color: '#fff', marginBottom: '16px',
          }}>
            {ts.title}
          </h1>
          <p style={{
            fontSize: '17px', color: 'rgba(255,255,255,0.4)',
            maxWidth: '440px', margin: '0 auto', lineHeight: 1.6,
          }}>
            {ts.subtitle}
          </p>
        </div>

        {/* Grid */}
        <div className="sw-grid">
          {apps.map(app => (
            <SoftwareCard key={app.slug} app={app} activeLabel={ts.active} />
          ))}
        </div>
      </div>
      </div>
    </div>
  )
}
