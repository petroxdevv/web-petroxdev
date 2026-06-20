import BorderGlow from './BorderGlow'
import { useLanguage } from '@/context/LanguageContext'

const projectMeta = [
  {
    slug: "danper",
    image: "/danper.png",
    tag: "Construcción",
    title: "Danper Construcciones",
    description:
      "Web corporativa para empresa de construcción y reformas. Landing profesional con galería de proyectos, formulario de contacto y optimización SEO local.",
    url: "danperconstrucciones.es",
    href: "https://danperconstrucciones.es",
  },
  {
    slug: "kuma",
    image: "/kuma.png",
    tag: "Branding & Web",
    title: "Kuma Brand",
    description:
      "Identidad de marca y desarrollo web para estudio creativo. Diseño minimalista con animaciones fluidas y experiencia visual impactante.",
    url: "kumabrand.com",
    href: "https://kumabrand.com",
  },
  {
    slug: "sarang",
    image: "/saranglovers.png",
    tag: "Fotografía",
    title: "Sarang Lovers",
    description:
      "Portfolio fotográfico para pareja de fotógrafos de bodas. Galería con lightbox, diseño romántico y formulario de reserva integrado.",
    url: "saranglovers.es",
    href: "https://saranglovers.es",
  },
  {
    slug: "dicor",
    image: "/logo-dicor.png",
    tag: "Cristalería",
    title: "Cristalería Dicor",
    description:
      "Web corporativa para empresa de cristalería y mamparas. Catálogo de servicios, galería de trabajos y formulario de presupuesto.",
    url: "cristaleriadicor.es",
    href: "https://cristaleriadicor.es",
    image: "/logo-dicor.png",
  },
]

function GlassCard({ project, viewLabel }) {
  return (
    <a
      href={project.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group block"
      style={{ textDecoration: 'none' }}
    >
      <div style={{ position: 'relative' }}>

        {/* Imagen */}
        <div style={{ position: 'relative', width: '100%', aspectRatio: '16/9', overflow: 'hidden' }}>
          <img
            src={project.image}
            alt={project.title}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block',
              transition: 'transform 0.6s cubic-bezier(0.23,1,0.32,1)',
            }}
            className="group-hover:[transform:scale(1.04)]"
          />
          {/* Overlay gradiente en imagen */}
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to bottom, transparent 40%, rgba(0,0,0,0.7) 100%)',
          }} />
          {/* Tag */}
          <span style={{
            position: 'absolute',
            top: '14px',
            left: '14px',
            background: 'rgba(0,0,0,0.55)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: '999px',
            padding: '4px 12px',
            fontSize: '11px',
            fontWeight: 600,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.7)',
          }}>
            {project.tag}
          </span>
        </div>

        {/* Contenido */}
        <div style={{ padding: '24px 24px 20px' }}>
          <h3 style={{
            fontSize: '18px',
            fontWeight: 600,
            color: '#fff',
            marginBottom: '10px',
            letterSpacing: '-0.01em',
          }}>
            {project.title}
          </h3>
          <p style={{
            fontSize: '14px',
            lineHeight: 1.65,
            color: 'rgba(255,255,255,0.45)',
            marginBottom: '20px',
          }}>
            {project.description}
          </p>

          {/* Footer */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingTop: '16px',
            borderTop: '1px solid rgba(255,255,255,0.06)',
          }}>
            <span style={{
              fontSize: '13px',
              color: 'rgba(255,255,255,0.3)',
              fontWeight: 400,
            }}>
              {project.url}
            </span>
            <span style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '13px',
              fontWeight: 500,
              color: '#a855f7',
              transition: 'gap 0.2s ease',
            }}>
              {viewLabel}
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ opacity: 0.8 }}>
                <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </div>
        </div>
      </div>
    </a>
  )
}

export default function Proyectos() {
  const { t } = useLanguage()
  const tp = t.projects

  const projects = projectMeta.map((meta) => {
    const translated = tp.items.find(i => i.slug === meta.slug) || {}
    return { ...meta, ...translated }
  })

  return (
    <section id="proyectos" style={{ padding: '120px 0' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 32px' }}>
        {/* Cabecera */}
        <div style={{ marginBottom: '64px', textAlign: 'center' }}>
          <span style={{
            display: 'block',
            marginBottom: '12px',
            fontSize: '11px',
            fontWeight: 600,
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            color: '#a855f7',
          }}>
            {tp.tag}
          </span>
          <h2 style={{
            fontSize: 'clamp(32px, 5vw, 52px)',
            fontWeight: 500,
            letterSpacing: '-0.02em',
            color: '#fff',
            marginBottom: '16px',
          }}>
            {tp.title}
          </h2>
          <p style={{
            fontSize: '17px',
            color: 'rgba(255,255,255,0.4)',
            maxWidth: '440px',
            margin: '0 auto',
            lineHeight: 1.6,
          }}>
            {tp.subtitle}
          </p>
        </div>

        {/* Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '20px',
        }}>
          {projects.map(p => (
            <BorderGlow
              key={p.slug}
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
              <GlassCard project={p} viewLabel={tp.viewProject} />
            </BorderGlow>
          ))}
        </div>
      </div>
    </section>
  )
}
