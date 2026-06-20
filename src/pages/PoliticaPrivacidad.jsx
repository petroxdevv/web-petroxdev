import { Link } from 'react-router-dom'
import './LegalPage.css'

export default function PoliticaPrivacidad() {
  return (
    <div className="legal-page">
      <div className="legal-page__inner">
        <Link to="/" className="legal-page__back">← Volver al inicio</Link>

        <h1>Política de Privacidad</h1>
        <p className="legal-page__updated">Última actualización: junio de 2026</p>

        <p>En cumplimiento del Reglamento (UE) 2016/679 del Parlamento Europeo (RGPD) y la Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y garantía de los derechos digitales (LOPD-GDD), se informa de la política de privacidad aplicable al sitio web <strong>petroxdev.com</strong>.</p>

        <h2>1. Responsable del tratamiento</h2>
        <ul>
          <li><strong>Titular:</strong> Pedro Gambero Molina</li>
          <li><strong>DNI:</strong> 79026329P</li>
          <li><strong>Domicilio:</strong> Fuengirola, Málaga, España</li>
          <li><strong>Email:</strong> pedrojavier1000@gmail.com</li>
          <li><strong>Teléfono:</strong> +34 722 145 849</li>
        </ul>

        <h2>2. Datos que se recaban</h2>
        <p>Este sitio web es un portfolio personal de presentación profesional. <strong>No dispone de formularios de contacto ni sistemas de registro</strong>, por lo que no se recaban datos personales directamente a través del sitio web.</p>
        <p>Si el usuario contacta a través de WhatsApp o correo electrónico, los datos facilitados (nombre, teléfono, mensaje) serán tratados únicamente para atender su consulta o solicitud de presupuesto.</p>

        <h2>3. Finalidad y base legitimadora del tratamiento</h2>
        <ul>
          <li><strong>Finalidad:</strong> Gestionar consultas, solicitudes de presupuesto y comunicaciones comerciales.</li>
          <li><strong>Base legitimadora:</strong> Consentimiento del interesado (art. 6.1.a RGPD) e interés legítimo del responsable (art. 6.1.f RGPD).</li>
        </ul>

        <h2>4. Conservación de los datos</h2>
        <p>Los datos se conservarán durante el tiempo necesario para atender la solicitud y, en su caso, durante los plazos legalmente exigidos. Una vez finalizada la relación, se suprimirán conforme a la normativa vigente.</p>

        <h2>5. Destinatarios</h2>
        <p>Los datos no se cederán a terceros, salvo obligación legal. Las comunicaciones se realizan a través de WhatsApp (Meta Platforms Ireland Ltd.), sujeto a su propia política de privacidad.</p>

        <h2>6. Derechos del interesado</h2>
        <p>El interesado puede ejercer en cualquier momento los siguientes derechos:</p>
        <ul>
          <li><strong>Acceso:</strong> conocer qué datos se tratan.</li>
          <li><strong>Rectificación:</strong> corregir datos inexactos.</li>
          <li><strong>Supresión:</strong> solicitar la eliminación de sus datos.</li>
          <li><strong>Oposición:</strong> oponerse al tratamiento.</li>
          <li><strong>Portabilidad:</strong> recibir sus datos en formato estructurado.</li>
          <li><strong>Limitación:</strong> solicitar la limitación del tratamiento.</li>
        </ul>
        <p>Para ejercer estos derechos, contacta en: <strong>pedrojavier1000@gmail.com</strong>. Tienes también derecho a presentar una reclamación ante la Agencia Española de Protección de Datos (<a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer">www.aepd.es</a>).</p>

        <h2>7. Seguridad</h2>
        <p>El titular adopta las medidas técnicas y organizativas necesarias para garantizar la seguridad de los datos personales y evitar su alteración, pérdida, tratamiento o acceso no autorizado.</p>

        <div className="legal-page__links">
          <Link to="/aviso-legal">Aviso legal</Link>
          <Link to="/cookies">Política de cookies</Link>
        </div>
      </div>
    </div>
  )
}
