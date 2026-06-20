import { Link } from 'react-router-dom'
import './LegalPage.css'

export default function AvisoLegal() {
  return (
    <div className="legal-page">
      <div className="legal-page__inner">
        <Link to="/" className="legal-page__back">← Volver al inicio</Link>

        <h1>Aviso Legal</h1>
        <p className="legal-page__updated">Última actualización: junio de 2026</p>

        <h2>1. Datos identificativos del titular</h2>
        <p>En cumplimiento de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE), se facilitan los siguientes datos:</p>
        <ul>
          <li><strong>Titular:</strong> Pedro Gambero Molina</li>
          <li><strong>DNI:</strong> 79026329P</li>
          <li><strong>Domicilio:</strong> Fuengirola, Málaga, España</li>
          <li><strong>Teléfono:</strong> +34 722 145 849</li>
          <li><strong>Email:</strong> pedrojavier1000@gmail.com</li>
          <li><strong>Sitio web:</strong> petroxdev.com</li>
          <li><strong>Actividad:</strong> Desarrollo web freelance</li>
        </ul>

        <h2>2. Objeto y ámbito de aplicación</h2>
        <p>El presente aviso legal regula el uso del sitio web <strong>petroxdev.com</strong> (en adelante, «el sitio web»), cuyo titular es Pedro Gambero Molina. El acceso y uso del sitio web implica la aceptación plena y sin reservas de todas las disposiciones incluidas en este aviso legal.</p>

        <h2>3. Propiedad intelectual e industrial</h2>
        <p>Todos los contenidos del sitio web — incluyendo, sin limitación, textos, fotografías, gráficos, imágenes, diseños, logotipos, marcas, código fuente y software — son propiedad de Pedro Gambero Molina o de terceros que han autorizado su uso, y están protegidos por la normativa española e internacional sobre propiedad intelectual e industrial.</p>
        <p>Queda expresamente prohibida la reproducción total o parcial, distribución, comunicación pública, transformación o cualquier otro uso de los contenidos del sitio web sin autorización escrita previa del titular.</p>

        <h2>4. Condiciones de uso</h2>
        <p>El usuario se compromete a utilizar el sitio web de conformidad con la ley, la moral y el orden público, y a abstenerse de utilizarlo con fines ilícitos o que puedan dañar los derechos e intereses del titular o de terceros.</p>

        <h2>5. Exclusión de garantías y responsabilidad</h2>
        <p>El titular no garantiza la disponibilidad continua del sitio web ni se responsabiliza de los daños derivados de su uso, de errores en los contenidos o de la presencia de virus u otros elementos dañinos. El usuario asume la responsabilidad del uso que haga del sitio web.</p>
        <p>El sitio web puede contener enlaces a sitios web de terceros. El titular no controla ni se responsabiliza del contenido, políticas o prácticas de dichos sitios.</p>

        <h2>6. Legislación aplicable y jurisdicción</h2>
        <p>Este aviso legal se rige por la legislación española. Para cualquier controversia derivada del uso del sitio web, las partes se someten a los juzgados y tribunales de Málaga, salvo que la normativa aplicable establezca otro fuero.</p>

        <h2>7. Modificaciones</h2>
        <p>El titular se reserva el derecho de modificar el presente aviso legal en cualquier momento. Las modificaciones entrarán en vigor desde su publicación en el sitio web.</p>

        <div className="legal-page__links">
          <Link to="/privacidad">Política de privacidad</Link>
          <Link to="/cookies">Política de cookies</Link>
        </div>
      </div>
    </div>
  )
}
