import React, { Component } from 'react'
import {Timeline, TimelineEvent} from 'react-event-timeline'
import FontAwesome from 'react-fontawesome'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import Slider from "react-slick"

const initialState = {
  currentPortfolio: null
}

var settings = {
  dots: true,
  infinite: true,
  speed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1
}

const portfolioOne = [
  { id: 'cf', title: 'Chief Executive Alchemist', imageTop: '/public/img/foto1.png', imageBottom: '/public/img/cecilia-deporte.png', content: `Estudié una Maestría en Comunicación Empresarial en
   Barcelona y soy licenciada en Comunicación de la Ibero. Me certifiqué como Coach en Nutrición Integral y Life & Spiritual Coaching.
   Co-creadora y Maestra del Diplomado en Bienestar Integral del Colegio de Imagen Pública. Doy conferencias y talleres de bienestar.
   Conductora de cápsulas “Mindfulness” para Canal U de Televisa. Me apasiona hacer chikung, spinning y salir a lugares naturales con mis hijos.`},
  { id: 'cf-1', title: 'Finance & Management Counselor', imageTop: '/public/img/andres-bici.png', imageBottom: '/public/img/foto5.png', content: `Estudié un MBA en Negocios. Soy licenciado en Administración Financiera;
   empresario y profesionista en el ramo inmobiliario,
   gastronómico, bienes de consumo y bienestar. Mi principal motor es mi esposa y mis 2 hijos preciosos. Disfruto viajar y hacer deporte al aire libre.`},
  { id: 'cf-2', title: 'Science Counselor', imageTop: '/public/img/foto3.png', imageBottom: '/public/img/foto3.png', content: `Director del Instituto Nacional de Medicina Genómica (INMEGEN). Soy Doctor en Investigación
   Biomédica. Investigador de la UNAM por más de 30 años, especializado en el estudio del ADN, microorganismos y sus aplicaciones. También he dirigido el Instituto de Biotecnología (IBT) por varios años.  Mi pasión es formar científicos y
  comunicadores de la ciencia , así como, asesorar a empresas enfocadas a mejorar la calidad de vida de las personas. Me encantan mis fines de semana conviviendo con mi nieta y jugando tenis.`}

]

class Portfolio extends Component {
  constructor (props) {
    super(props)
    this.state = {
      className: '',
      currentPortfolio: portfolioOne[0]
    }
  }

  showDetailPortfolio (data) {
    this.setState({
      className: 'is-active',
      currentPortfolio: data
    })
    console.log('hola')
  }

  render () {
    return (<div className='section'>
      <div className='columns'>
        <div className='column is-2'>
          <Timeline lineColor='grey' >
            {portfolioOne.map((item, index) => {
              return (
                <TimelineEvent
                  onClick={() => this.showDetailPortfolio(item)}
                  title={item.title}
                  createdAt='2001'
                  titleStyle={{ fontWeight: 'bold', fontSize: '1rem' }}
                  icon={<FontAwesomeIcon icon={faCheck} />}
                  iconColor='#cc342d'
                  style={{ color: '#cc342d' }}
                />
              )
            })
            }
          </Timeline>
        </div>
        {this.state.currentPortfolio && (<div className='column'>
          <strong>{this.state.currentPortfolio.title}</strong>
          <p>{this.state.currentPortfolio.content}</p>
          <div className='section'>
            <Slider {...settings}>
              <div>
                <h3>es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno
                  estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta)
                  desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición
                  ,como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.</h3>
              </div>
              <div>
                <h3>2</h3>
              </div>
              <div>
                <h3>3</h3>
              </div>
              <div>
                <h3>4</h3>
              </div>
              <div>
                <h3>5</h3>
              </div>
              <div>
                <h3>6</h3>
              </div>
            </Slider>
          </div>
        </div>)}
        <div className='column'>
          <strong>Proyecto Lorem ipsum</strong>
        </div>
      </div>
    </div>)
  }
}

export default Portfolio
