import React from 'react'
import about from '../assets/img/about_us.jpeg'

const About = () => (
  <div className='about-section'>
    <div className='about-section-resume'>
      <div className='container is-fluid'>
        <p className='title'>Sobre nosotros</p>
        <p>
          Es una empresa joven integrada por un grupo de profesionales,
          con una amplia experiencia en el rubro de la construcción, restauración,
          rehabilitación y mantenimiento, logrando ofrecer  a sus usuarios,
          una solución eficaz y de calidad en  sus necesidades constructivas.
          <br />
          Contamos con presencia en todas las posibles áreas de actuación del sector.
          Preocupados en cada proyecto por su gestión interna, su planeación, desarrollo y ejecución.
          Teniendo como premisas, alcanzar la calidad en todas las obras contratadas y la sólida construcción
          de una imagen de garantía.
          <br />
          Nuestra actividad principal es la construcción, y el desarrollo de la calidad.
          <br />
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
