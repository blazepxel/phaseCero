import React from 'react'
import rehabilitacion from '../assets/img/rehabilitar.png'
import instalaciones from '../assets/img/instalaciones_especiales.png'
import obra from '../assets/img/obra_publica.png'
import planeacion from '../assets/img/planeacion.png'
import estructura from '../assets/img/estructuras_acero.png'
import diseño from '../assets/img/diseño.png'
import equipo from '../assets/img/equipo_propio.png'
import supervision from '../assets/img/supervision.png'

const Sevices = () => (
  <div className='section services' id='services'>
    <div className='container is-fluid'>
      <p className='title' align='center'>Nuestros Servicios</p>
      <br />
      <div className='tile is-ancestor'>
        <div className='tile is-parent is-vertical'>
          <div className='tile is-child' align='center'>
            <img className='service-img' src={rehabilitacion} alt='Rehabilitación integral de edificios.' />
            <p className='title-service'>Rehabilitación integral de edificios.</p>
            <p className='subtitle subtitle-service'>
              Somos especialistas en técnicas de construcción, rehabilitación, restauración y mantenimiento
              de edificios en general, respetando en todo momento la normatividad vigente.
            </p>
          </div>
          <div className='tile is-child' align='center'>
            <img className='service-img' src={instalaciones} alt='Instalaciones especiales.' />
            <p className='title-service'>Instalaciones especiales.</p>
            <p className='subtitle subtitle-service'>
              La intervención y especialización de nuestro personal técnico nos permite llevar a cabo
              instalaciones específicas de cualquie tipo, con apego a las normas nacionales e internacionales 
              que rigen para cada tipo de inmueble.
            </p>
          </div>
        </div>
        <div className='tile is-parent is-vertical'>
          <div className='tile is-child' align='center'>
            <img className='service-img' src={obra} alt='Obra Pública.' />
            <p className='title-service'>Obra Pública.</p>
            <p className='subtitle subtitle-service'>
              Nuestro equipo de trabajo cuenta con la experiencia en cualquier rubro de obra
              pública. Responsabilizandose de la gestión interna, planeación, desarrollo y ejecución de cada
              compromiso adquirido con los gobiernos Municipales y Estatales.
            </p>
          </div>
          <div className='tile is-child' align='center'>
            <img className='service-img' src={planeacion} alt='Planeación.' />
            <p className='title-service'>Planeación.</p>
            <p className='subtitle subtitle-service'>
              <ul>
                <li>Estudios socioeconómicos.</li>
                <li>Proyectos de Inversión económica.</li>
                <li>Presupuestos y/o concursos.</li>
              </ul>
            </p>
          </div>
        </div>
        <div className='tile is-parent is-vertical'>
          <div className='tile is-child' align='center'>
            <img className='service-img' src={estructura} alt='Estructuras de Acero.' />
            <p className='title-service'>Estructuras de Acero.</p>
            <p className='subtitle subtitle-service'>
              Poseemos los medios necesarios para el diseño y construcción de estructuras metálicas, permitiéndonos reducir tiempos de ejecución de obra, con una gran calidad en nuestros trabajos.
            </p>
          </div>
          <div className='tile is-child' align='center'>
            <img className='service-img' src={diseño} alt='Diseño.' />
            <p className='title-service'>Diseño.</p>
            <p className='subtitle subtitle-service'>
              <ul>
                <li>Proyectos Arquitectónicos.</li>
                <li>Ingenierías básicas y espaciales.</li>
                <li>Estudios de imagen urbana.</li>
                <li>Cálculo de estructuras.</li>
              </ul>
            </p>
          </div>
        </div>
        <div className='tile is-parent is-vertical'>
          <div className='tile is-child' align='center'>
            <img className='service-img' src={equipo} alt='Equipo propio del inmueble.' />
            <p className='title-service'>Equipo propio del inmueble.</p>
            <p className='subtitle subtitle-service'>
            Realizamos la obra civil necesaria, así como el suministro y colocación de equipos especiales,
            tales como plantas tratadoras de aguas residuales, cárcamos de bombeo y tanques de almacenamiento
            de agua.
            </p>
          </div>
          <div className='tile is-child' align='center'>
            <img className='service-img' src={supervision} alt='Supervisión.' />
            <p className='title-service'>Supervisión.</p>
            <p className='subtitle subtitle-service'>
              <ul>
                <li>Control y seguimiento de obra.</li>
                <li>Instalaciones especiales.</li>
                <li>Guías mecánicas.</li>
                <li>Control de calidad.</li>
                <li>Control financiero.</li>
                <li>Control de programas y tiempos de ejecución.</li>
              </ul>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
)
export default Sevices