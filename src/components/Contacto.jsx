import whatsappIcon from '@/assets/icons/whatsapp.png'
import { useLanguage } from '@/context/LanguageContext'
import './Contacto.css'

export default function Contacto() {
  const { t } = useLanguage()
  const tc = t.contact

  const open = (text) =>
    window.open(
      `https://wa.me/34722145849?text=${encodeURIComponent(text)}`,
      '_blank',
      'noopener,noreferrer'
    )

  return (
    <section id="contacto" className="contacto">
      <div className="contacto__inner">

        <p className="contacto__tag">{tc.tag}</p>
        <h2 className="contacto__title">
          {tc.title} <span>WhatsApp</span>
        </h2>
        <p className="contacto__subtitle">{tc.subtitle}</p>

        {/* Botón principal */}
        <button
          className="contacto__main-btn"
          onClick={() => open(tc.waMessage)}
        >
          <img src={whatsappIcon} alt="WhatsApp" className="contacto__wa-icon" />
          {tc.mainBtn}
        </button>

        {/* Accesos rápidos */}
        <div className="contacto__quick">
          <p className="contacto__quick-label">{tc.quickLabel}</p>
          <div className="contacto__chips">
            {tc.messages.map(({ text, label }) => (
              <button
                key={label}
                className="contacto__chip"
                onClick={() => open(text)}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Info de disponibilidad */}
        <div className="contacto__info">
          <div className="contacto__info-item">
            <span className="contacto__dot" />
            {tc.available}
          </div>
          <div className="contacto__info-item">{tc.response}</div>
          <div className="contacto__info-item">{tc.location}</div>
        </div>

      </div>
    </section>
  )
}
