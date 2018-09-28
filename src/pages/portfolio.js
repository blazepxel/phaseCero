import React, { Component } from 'react'
import {Timeline, TimelineEvent} from 'react-event-timeline'
import FontAwesome from 'react-fontawesome'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import Slider from "react-slick"
import img3 from '../assets/img/image3.jpeg'
import img4 from '../assets/img/image4.jpeg'
import img6 from '../assets/img/image6.jpeg'
import img7 from '../assets/img/image7.jpeg'

const initialState = {
  currentPortfolio: null
}

var settings = {
  dots: false,
  infinite: true,
  autoplay: true,
  pauseOnHover: false,
  speed: 2000,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: false
}

const portfolioOne = [
  {
    title: 'Mantenimiento integral y decoración de la Parroquia del señor del perdón en Cuetzalá Guerrero.',
    imageTop: '/public/img/foto1.png', 
    imageBottom: '/public/img/cecilia-deporte.png', 
    content: `Propietario: Cuetzalá del Progreso,
  Guerrero, México.` },
  {
    title: 'Diseño y construcción de Capilla en Loma de Lienzo',
    imageTop: '/public/img/foto1.png', 
    imageBottom: '/public/img/cecilia-deporte.png', 
    content: `Villa Victoria, Estado de México` },
  {
    title: 'Mantenimiento integral y decoración de la Parroquia del señor del perdón en Cuetzalá Guerrero.',
    imageTop: '/public/img/foto1.png', 
    imageBottom: '/public/img/cecilia-deporte.png', 
    content: `Propietario: Cuetzalá del Progreso,
  Guerrero, México.` }

]

class Portfolio extends Component {
  constructor (props) {
    super(props)
    this.state = {
      className: '',
      currentPortfolio: portfolioOne[0],
      currentImage: img4
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
        <div className='column is-2 timeline-overflow'>
          <Timeline lineColor='grey' >
            {portfolioOne.map((item, index) => {
              return (
                <TimelineEvent
                  onClick={() => this.showDetailPortfolio(item)}
                  title={item.title}
                  createdAt='2009'
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
        {this.state.currentPortfolio && (<div className='column is-3'>
          <strong>{this.state.currentPortfolio.title}</strong>
          <p>{this.state.currentPortfolio.content}</p>
          <div className='columns'>
            <div className='column'>
              <div className='slider-portfolio'>
                <Slider {...settings}>
                  <div onClick={() => this.setState({ currentImage: img3 })}>
                    <img className='slider-mini' src={img3} />
                  </div>
                  <div onClick={() => this.setState({ currentImage: img4 })}>
                    <img className='slider-mini' src={img4} />
                  </div>
                  <div onClick={() => this.setState({ currentImage: img6 })}>
                    <img className='slider-mini' src={img6} />
                  </div>
                  <div onClick={() => this.setState({ currentImage: img7 })}>
                    <img className='slider-mini' src={img7} />
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>)}
        <div className='column has-flex-end'>
          <img className='slider-full' src={this.state.currentImage} />
        </div>
      </div>
    </div>)
  }
}

export default Portfolio
