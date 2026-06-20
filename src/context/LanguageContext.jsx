import { createContext, useContext, useState } from 'react'
import { translations } from '../i18n/translations'

const LanguageContext = createContext(null)

function getInitialLang() {
  const saved = localStorage.getItem('lang')
  if (saved === 'en' || saved === 'es') return saved
  const browser = navigator.language || navigator.languages?.[0] || 'es'
  return browser.toLowerCase().startsWith('es') ? 'es' : 'en'
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(getInitialLang)

  const toggle = () => {
    const next = lang === 'es' ? 'en' : 'es'
    setLang(next)
    localStorage.setItem('lang', next)
  }

  const t = translations[lang]

  return (
    <LanguageContext.Provider value={{ lang, toggle, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}
