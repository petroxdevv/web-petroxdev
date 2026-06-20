import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '@/context/LanguageContext'
import './CookieBanner.css'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)
  const { t } = useLanguage()
  const tc = t.cookie

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) setVisible(true)
  }, [])

  const accept = () => {
    localStorage.setItem('cookie-consent', 'accepted')
    setVisible(false)
  }

  const reject = () => {
    localStorage.setItem('cookie-consent', 'rejected')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="cookie-banner">
      <div className="cookie-banner__content">
        <span className="cookie-banner__icon">🍪</span>
        <p className="cookie-banner__text">
          {tc.text}{' '}
          <Link to="/cookies" className="cookie-banner__link">
            {tc.more}
          </Link>
        </p>
      </div>
      <div className="cookie-banner__actions">
        <button className="cookie-banner__reject" onClick={reject}>
          {tc.reject}
        </button>
        <button className="cookie-banner__accept" onClick={accept}>
          {tc.accept}
        </button>
      </div>
    </div>
  )
}
