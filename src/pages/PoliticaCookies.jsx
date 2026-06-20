import { Link } from 'react-router-dom'
import './LegalPage.css'

export default function PoliticaCookies() {
  const clearConsent = () => {
    localStorage.removeItem('cookie-consent')
    window.location.reload()
  }

  return (
    <div className="legal-page">
      <div className="legal-page__inner">
        <Link to="/" className="legal-page__back">← Volver al inicio</Link>

        <h1>Política de Cookies</h1>
        <p className="legal-page__updated">Última actualización: junio de 2026</p>

        <p>En cumplimiento del artículo 22.2 de la Ley 34/2002, de Servicios de la Sociedad de la Información (LSSI-CE), y la normativa europea aplicable, se informa sobre el uso de cookies en <strong>petroxdev.com</strong>.</p>

        <h2>1. ¿Qué son las cookies?</h2>
        <p>Las cookies son pequeños archivos de texto que se almacenan en el dispositivo del usuario cuando visita un sitio web. Permiten al sitio recordar información sobre la visita para mejorar la experiencia de navegación.</p>

        <h2>2. Tipos de cookies que utilizamos</h2>
        <p>Este sitio web utiliza únicamente <strong>cookies técnicas propias</strong>, imprescindibles para el funcionamiento básico de la web:</p>

        <div className="legal-page__table-wrap">
          <table className="legal-page__table">
            <thead>
              <tr>
                <th>Cookie</th>
                <th>Tipo</th>
                <th>Duración</th>
                <th>Finalidad</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>cookie-consent</code></td>
                <td>Técnica propia</td>
                <td>Persistente (1 año)</td>
                <td>Almacena la preferencia del usuario sobre el uso de cookies.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p><strong>No se utilizan cookies de análisis, publicidad, rastreo ni redes sociales.</strong></p>

        <h2>3. Gestión y revocación del consentimiento</h2>
        <p>Puedes aceptar o rechazar el uso de cookies a través del aviso que aparece al acceder al sitio web por primera vez. También puedes retirar tu consentimiento en cualquier momento:</p>

        <button className="legal-page__revoke" onClick={clearConsent}>
          Restablecer preferencias de cookies
        </button>

        <p>Además, puedes configurar tu navegador para bloquear o eliminar cookies:</p>
        <ul>
          <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer">Google Chrome</a></li>
          <li><a href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-que-los-sitios-we" target="_blank" rel="noopener noreferrer">Mozilla Firefox</a></li>
          <li><a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer">Safari</a></li>
          <li><a href="https://support.microsoft.com/es-es/microsoft-edge/eliminar-las-cookies-en-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer">Microsoft Edge</a></li>
        </ul>

        <h2>4. Transferencias internacionales</h2>
        <p>Este sitio web no realiza transferencias internacionales de datos derivadas de cookies.</p>

        <h2>5. Actualizaciones</h2>
        <p>Esta política puede actualizarse para adaptarse a cambios normativos o técnicos. Se recomienda revisarla periódicamente.</p>

        <h2>6. Contacto</h2>
        <p>Para cualquier consulta sobre el uso de cookies: <strong>pedrojavier1000@gmail.com</strong></p>

        <div className="legal-page__links">
          <Link to="/aviso-legal">Aviso legal</Link>
          <Link to="/privacidad">Política de privacidad</Link>
        </div>
      </div>
    </div>
  )
}
