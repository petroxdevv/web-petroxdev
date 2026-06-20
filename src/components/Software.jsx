import BorderGlow from './BorderGlow'

const apps = [
  {
    slug: "petroxdev-monitor",
    icon: "⚡",
    platform: "macOS · Swift",
    badge: "Open Source",
    title: "petroxdev monitor",
    description:
      "App de barra de menú para macOS que muestra en tiempo real el consumo de CPU en vatios y el porcentaje de uso del procesador. Cambia de color según el estado térmico del chip: blanco, amarillo, naranja o rojo.",
    tags: ["macOS 13+", "Apple Silicon", "Menu Bar", "Swift"],
    linkLabel: "Ver en GitHub",
    href: "https://github.com/petroxdevv/petroxdev-menubar",
  },
]

function SoftwareCard({ app }) {
  return (
    <div style={{ padding: '28px', display: 'flex', flexDirection: 'column', gap: '20px' }}>

      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
        <span style={{ fontSize: '2.2rem', lineHeight: 1 }}>{app.icon}</span>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '6px' }}>
          <span style={{
            fontSize: '10px', fontWeight: 600, letterSpacing: '0.12em',
            textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)',
          }}>
            {app.platform}
          </span>
          <span style={{
            fontSize: '10px', fontWeight: 600, letterSpacing: '0.08em',
            textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)',
            background: 'rgba(255,255,255,0.07)',
            border: '1px solid rgba(255,255,255,0.12)',
            borderRadius: '999px', padding: '3px 10px',
          }}>
            {app.badge}
          </span>
        </div>
      </div>

      {/* Title */}
      <h3 style={{
        fontSize: '20px', fontWeight: 600, letterSpacing: '-0.01em',
        color: '#fff', lineHeight: 1.2,
      }}>
        {app.title}
      </h3>

      {/* Description */}
      <p style={{
        fontSize: '14px', lineHeight: 1.7,
        color: 'rgba(255,255,255,0.45)', flex: 1,
      }}>
        {app.description}
      </p>

      {/* Tags */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
        {app.tags.map(tag => (
          <span key={tag} style={{
            fontSize: '10px', fontWeight: 600, letterSpacing: '0.08em',
            textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: '4px', padding: '3px 8px',
          }}>
            {tag}
          </span>
        ))}
      </div>

      {/* Link */}
      <a
        href={app.href}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: 'inline-flex', alignItems: 'center', gap: '6px',
          fontSize: '13px', fontWeight: 500, color: '#a855f7',
          textDecoration: 'none', marginTop: '4px',
          transition: 'opacity 0.2s',
        }}
        onMouseEnter={e => e.currentTarget.style.opacity = '0.75'}
        onMouseLeave={e => e.currentTarget.style.opacity = '1'}
      >
        {app.linkLabel}
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </a>
    </div>
  )
}

export default function Software() {
  return (
    <section id="software" style={{ padding: '120px 0' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 32px' }}>

        {/* Cabecera */}
        <div style={{ marginBottom: '64px', textAlign: 'center' }}>
          <span style={{
            display: 'block', marginBottom: '12px',
            fontSize: '11px', fontWeight: 600,
            letterSpacing: '0.3em', textTransform: 'uppercase',
            color: '#a855f7',
          }}>
            Software
          </span>
          <h2 style={{
            fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: 500,
            letterSpacing: '-0.02em', color: '#fff', marginBottom: '16px',
          }}>
            Proyectos de software
          </h2>
          <p style={{
            fontSize: '17px', color: 'rgba(255,255,255,0.4)',
            maxWidth: '440px', margin: '0 auto', lineHeight: 1.6,
          }}>
            Apps nativas y herramientas open source que desarrollo en mi tiempo libre.
          </p>
        </div>

        {/* Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 380px))',
          gap: '20px',
        }}>
          {apps.map(app => (
            <BorderGlow
              key={app.slug}
              backgroundColor="rgba(10,10,10,0.7)"
              borderRadius={24}
              glowColor="270 70 65"
              glowRadius={36}
              glowIntensity={1.2}
              coneSpread={20}
              edgeSensitivity={25}
              fillOpacity={0.3}
              animated
              colors={['#a855f7', '#7e22ce', '#c084fc']}
            >
              <SoftwareCard app={app} />
            </BorderGlow>
          ))}
        </div>
      </div>
    </section>
  )
}
