import React from 'react'
import about from '../assets/img/about_us.jpeg'

const About = () => (
  <div className='about-section section'>
    <div className='about-section-resume'>
      <div className='container is-fluid'>
        <p className='title'>Sobre nosotros</p>
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
    <div className='about-section-resume-img'>
      <img src={about} alt='Sobre nosotros' />
    </div>
  </div>
)
export default About
