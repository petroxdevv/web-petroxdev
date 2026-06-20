import { Link } from 'react-router-dom'
import Beams from '../components/Beams'
import GlassSurface from '../components/GlassSurface'
import whatsappIcon from '../assets/icons/whatsapp.png'
import { useLanguage } from '../context/LanguageContext'
import './ServiciosPage.css'

const gradients = [
  'linear-gradient(135deg, #3b0a6e 0%, #1a0533 60%, #0a0a0a 100%)',
  'linear-gradient(135deg, #003d1a 0%, #001a0d 60%, #0a0a0a 100%)',
  'linear-gradient(135deg, #002a4d 0%, #001533 60%, #0a0a0a 100%)',
  'linear-gradient(135deg, #002233 0%, #001020 60%, #0a0a0a 100%)',
]

function ServiceCard({ service, gradient, waMessage }) {
  return (
    <GlassSurface
      width="100%"
      height="auto"
      borderRadius={24}
      borderWidth={0.08}
      brightness={65}
      opacity={0.95}
      blur={8}
      backgroundOpacity={0}
      saturation={1.2}
      distortionScale={-200}
      redOffset={0}
      greenOffset={12}
      blueOffset={24}
      className="svc-glass"
    >
      <div className="svc-card">
        {/* Header con gradiente */}
        <div className="svc-card__header" style={{ background: gradient }}>
          <span className="svc-card__emoji">{service.emoji}</span>
          <span className="svc-card__tag">{service.tag}</span>
        </div>

        {/* Contenido */}
        <div className="svc-card__body">
          <h3 className="svc-card__title">
            {service.title.split('\n').map((line, i) => (
              <span key={i}>{line}{i === 0 && <br />}</span>
            ))}
          </h3>

          <p className="svc-card__desc">{service.desc}</p>

          <ul className="svc-card__features">
            {service.features.map(f => (
              <li key={f} className="svc-card__feature">
                <span className="svc-card__check">
                  <svg width="9" height="9" viewBox="0 0 9 9" fill="none">
                    <path d="M1.5 4.5l2 2 4-4" stroke="#c084fc" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                {f}
              </li>
            ))}
          </ul>

          <div className="svc-card__footer">
            <span className="svc-card__price">{service.price}</span>
            <a
              href={`https://wa.me/34722145849?text=${waMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="svc-card__cta"
            >
              <img src={whatsappIcon} alt="WhatsApp" className="svc-card__wa-icon" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </GlassSurface>
  )
}

export default function ServiciosPage() {
  const { t } = useLanguage()
  const ts = t.serviciosPage

  return (
    <div className="svc-page">
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
        <Link to="/" className="svc-back">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          {ts.back}
        </Link>

        {/* Logo */}
        <div className="svc-logo">
          petrox<span>dev</span>
        </div>

        {/* Contenido */}
        <div className="svc-content">

          {/* Cabecera */}
          <div className="svc-header">
            <span className="svc-header__label">{ts.label}</span>
            <h1 className="svc-header__title">{ts.title}</h1>
            <p className="svc-header__subtitle">{ts.subtitle}</p>
          </div>

          {/* Grid de tarjetas */}
          <div className="svc-grid">
            {ts.services.map((service, i) => (
              <ServiceCard
                key={service.tag}
                service={service}
                gradient={gradients[i]}
                waMessage={ts.waMessage}
              />
            ))}
          </div>

          {/* CTA global */}
          <div className="svc-bottom-cta">
            <a
              href={`https://wa.me/34722145849?text=${ts.waMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="svc-bottom-cta__btn"
            >
              <img src={whatsappIcon} alt="WhatsApp" style={{ width: 22, height: 22, objectFit: 'contain' }} />
              {ts.cta}
            </a>
          </div>

        </div>
      </div>
    </div>
  )
}
