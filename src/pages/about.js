import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'

import about from '../assets/img/about_us_2.jpg'

const About = () => (
  <div className='about-section' id='about'>
    <div className='about-resume'>
      <div className='columns'>
        <div className='column is-1 container is-hidden-touch' align='center'>
          <div className='contact-text'>
            <p>Contáctanos</p>
          </div>
          <div className='contact-links'>
            <a href="mailto:contacto@phasecero.com" target='_blank' rel="noopener noreferrer">
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
          </div>
          <div className='contact-links'>
            <a href="https://www.facebook.com/Phase-Cero-Inmobiliaria-Y-Constructora-Sa-De-Cv-1410823498989622" target='_blank' rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
          </div>
          <div className='contact-links'>
            <a href="tel:+527229177796" target='_blank' rel="noopener noreferrer">
              <FontAwesomeIcon icon={faPhone} />
            </a>
          </div>
        </div>
        <div className='column is-4 is-hidden-touch'>
          <img src={about} alt=""/>
        </div>
        <div className='column'>
          <div className='section container is-fluid resume'>
            <p className='title'>SOBRE NOSOTROS</p>
            <p>
              Es una empresa joven integrada por un grupo de profesionales,
              con una amplia experiencia en el rubro de la <b>construcción, restauración,
              rehabilitación y mantenimiento,</b> logrando ofrecer  a sus usuarios,
              una solución eficaz y de calidad en  sus necesidades constructivas.
              <br /><br />
              Poseemos la capacidad de trabajar en espacios de gran altura, abiertos y cerrados.
              <br />
              Nuestro personal esta capacitado bajo las más altas Normas de Seguridad.
            </p>
          </div>
        </div>
        <div className='column is-2'>
          <div className='columns is-mobile is-hidden-tablet'>
            <div className='column' align='center'>
              <div className='contact-links'>
                <a href="mailto:contacto@phasecero.com" target='_blank' rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faEnvelope} />
                </a>
              </div>
            </div>
            <div className='column' align='center'>
              <div className='contact-links'>
                <a href="https://www.facebook.com/Phase-Cero-Inmobiliaria-Y-Constructora-Sa-De-Cv-1410823498989622" target='_blank' rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faFacebookF} />
                </a>
              </div>
            </div>
            <div className='column' align='center'>
              <div className='contact-links'>
                <a href="tel:+527229177796" target='_blank' rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faPhone} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)
export default About
