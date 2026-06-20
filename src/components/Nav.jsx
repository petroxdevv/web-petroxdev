import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { cn } from "@/lib/utils"
import GlassSurface from "@/components/GlassSurface"
import Dock from "@/components/Dock"
import whatsappIcon from "@/assets/icons/whatsapp.png"
import homeIcon from "@/assets/icons/home.png"
import proyectosIcon from "@/assets/icons/proyectos.png"
import conocimientosIcon from "@/assets/icons/conocimientos.png"
import perfilIcon from "@/assets/icons/perfil.png"
import logoUrl from "@/assets/logo.png"
import { useLanguage } from "@/context/LanguageContext"
import "./Nav.css"

function LangSlider() {
  const { lang, toggle } = useLanguage()
  const isEn = lang === 'en'
  return (
    <button
      onClick={toggle}
      className="nav-lang-slider"
      aria-label={isEn ? 'Cambiar a español' : 'Switch to English'}
      title={isEn ? 'Cambiar a español' : 'Switch to English'}
    >
      <span className={cn("nav-lang-opt", !isEn && "nav-lang-opt--active")}>🇪🇸</span>
      <span className="nav-lang-track">
        <span className={cn("nav-lang-thumb", isEn && "nav-lang-thumb--right")} />
      </span>
      <span className={cn("nav-lang-opt", isEn && "nav-lang-opt--active")}>🇬🇧</span>
    </button>
  )
}

export default function Nav() {
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()
  const { t } = useLanguage()
  const links = t.nav.links

  const handleLink = (href) => {
    setOpen(false)
    if (href.startsWith('/')) {
      navigate(href)
    } else {
      const id = href.replace('#', '')
      if (id === 'hero') window.scrollTo({ top: 0, behavior: 'smooth' })
      else document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const dockItems = [
    {
      icon: <img src={homeIcon} alt={t.nav.dock.home} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />,
      label: t.nav.dock.home,
      onClick: () => { window.scrollTo({ top: 0, behavior: 'smooth' }); setOpen(false) },
      className: 'dock-cta-img',
    },
    {
      icon: <img src={proyectosIcon} alt={t.nav.dock.projects} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />,
      label: t.nav.dock.projects,
      onClick: () => { navigate('/proyectos'); setOpen(false) },
      className: 'dock-cta-img',
    },
    {
      icon: <img src={conocimientosIcon} alt={t.nav.dock.skills} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />,
      label: t.nav.dock.skills,
      onClick: () => { document.getElementById('conocimientos')?.scrollIntoView({ behavior: 'smooth' }); setOpen(false) },
      className: 'dock-cta-img',
    },
    {
      icon: <img src={perfilIcon} alt={t.nav.dock.about} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />,
      label: t.nav.dock.about,
      onClick: () => { document.getElementById('sobre-mi')?.scrollIntoView({ behavior: 'smooth' }); setOpen(false) },
      className: 'dock-cta-img',
    },
    {
      icon: <img src={whatsappIcon} alt="WhatsApp" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />,
      label: t.nav.dock.budget,
      onClick: () => window.open(`https://wa.me/34722145849?text=${t.nav.waMessage}`, '_blank'),
      className: 'dock-cta-img',
    },
  ]

  return (
    <>
      {/* ── DESKTOP NAVBAR (lg+) ── */}
      <div className="nav-desktop">
        <GlassSurface
          width="auto"
          height={68}
          borderRadius={999}
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
          className="nav-glass"
        >
          <div className="nav-glass__inner">
            {/* Logo */}
            <a href="#hero" className="nav-glass__logo" onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}>
              <img src={logoUrl} alt="petroxdev" className="nav-logo" />
            </a>

            <div className="nav-glass__divider" />

            {/* Links */}
            <nav className="nav-glass__links">
              {links.map((l) =>
                l.href.startsWith('/') ? (
                  <Link key={l.href} to={l.href} className="nav-glass__link">
                    {l.label}
                  </Link>
                ) : (
                  <a
                    key={l.href}
                    href={l.href}
                    className="nav-glass__link"
                    onClick={e => { e.preventDefault(); handleLink(l.href) }}
                  >
                    {l.label}
                  </a>
                )
              )}
            </nav>

            <div className="nav-glass__divider" />

            {/* Language slider */}
            <LangSlider />

            <div className="nav-glass__divider" />

            {/* WhatsApp CTA */}
            <a
              href={`https://wa.me/34722145849?text=${t.nav.waMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="nav-glass__cta"
            >
              <img src={whatsappIcon} alt="WhatsApp" className="nav-glass__wa-icon" />
              <span>{t.nav.cta}</span>
            </a>
          </div>
        </GlassSurface>
      </div>

      {/* ── MOBILE/TABLET HEADER (< lg) ── */}
      <header className="nav-mobile-header">
        <div className="nav-mobile-header__inner">
          <a href="#hero" onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}>
            <img src={logoUrl} alt="petroxdev" className="nav-logo" />
          </a>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <LangSlider />
            <button
              onClick={() => setOpen(!open)}
              className="nav-hamburger"
              aria-label="Menú"
            >
              <span className={cn("nav-hamburger__line", open && "rotate-45 translate-y-2")} />
              <span className={cn("nav-hamburger__line", open && "opacity-0")} />
              <span className={cn("nav-hamburger__line", open && "-rotate-45 -translate-y-2")} />
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        <div className={cn("nav-mobile-menu", open ? "nav-mobile-menu--open" : "")}>
          <nav className="nav-mobile-menu__nav">
            {links.map((l) =>
              l.href.startsWith('/') ? (
                <Link key={l.href} to={l.href} onClick={() => setOpen(false)} className="nav-mobile-menu__link">
                  {l.label}
                </Link>
              ) : (
                <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="nav-mobile-menu__link">
                  {l.label}
                </a>
              )
            )}
            <a
              href={`https://wa.me/34722145849?text=${t.nav.waMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="nav-mobile-menu__wa"
              onClick={() => setOpen(false)}
            >
              <img src={whatsappIcon} alt="WhatsApp" style={{ width: 20, height: 20, objectFit: 'contain' }} />
              {t.nav.mobileWa}
            </a>
          </nav>
        </div>
      </header>

      {/* ── DOCK móvil/tablet ── */}
      <div className="fixed bottom-0 left-0 right-0 z-50 flex justify-center pb-2 lg:hidden">
        <Dock
          items={dockItems}
          panelHeight={64}
          baseItemSize={46}
          magnification={62}
          distance={120}
          spring={{ mass: 0.1, stiffness: 180, damping: 14 }}
        />
      </div>
    </>
  )
}
