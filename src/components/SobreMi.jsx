import ChromaGrid from './ChromaGrid'
import avatarUrl from '@/assets/icons/avatar.png'
import { useLanguage } from '@/context/LanguageContext'
import './SobreMi.css'

const profileItem = (subtitle) => [
  {
    image: avatarUrl,
    title: 'Pedro Gambero',
    subtitle,
    handle: '@petroxdev',
    borderColor: '#a855f7',
    gradient: 'linear-gradient(145deg, #3b1d6e 0%, #1a0a35 50%, #0a0a0a 100%)',
  }
]

export default function SobreMi() {
  const { t } = useLanguage()
  const { tag, title, bio1, bio2, highlights, ctaText, ctaLink, subtitle } = t.about

  return (
    <section id="sobre-mi" className="sobre-mi">
      <div className="sobre-mi__inner">

        {/* Texto */}
        <div className="sobre-mi__text">
          <p className="sobre-mi__tag">{tag}</p>
          <h2 className="sobre-mi__title">
            {title} <span>Pedro</span>
          </h2>

          <p className="sobre-mi__bio" dangerouslySetInnerHTML={{ __html: bio1 }} />
          <p className="sobre-mi__bio" dangerouslySetInnerHTML={{ __html: bio2 }} />

          <div className="sobre-mi__highlights">
            {highlights.map(({ icon, label, value }) => (
              <div key={label} className="sobre-mi__highlight">
                <span className="sobre-mi__highlight-icon">{icon}</span>
                <div>
                  <span className="sobre-mi__highlight-label">{label}</span>
                  <span className="sobre-mi__highlight-value">{value}</span>
                </div>
              </div>
            ))}
          </div>

          <p className="sobre-mi__cta-text">{ctaText}</p>
          <a
            href="#conocimientos"
            className="sobre-mi__cta"
            onClick={e => {
              e.preventDefault()
              document.getElementById('conocimientos')?.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            {ctaLink}
          </a>
        </div>

        {/* ChromaGrid card */}
        <div className="sobre-mi__card">
          <ChromaGrid
            items={profileItem(subtitle)}
            columns={1}
            rows={1}
            radius={280}
            damping={0.45}
            fadeOut={0.6}
          />
        </div>

      </div>
    </section>
  )
}
