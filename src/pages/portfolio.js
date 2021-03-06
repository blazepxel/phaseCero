import React, { Component } from 'react'
import projects from './projects'
import ScrollAnimation from 'react-animate-on-scroll'
import Slider from 'react-slick'
import AOS from 'aos'
import 'aos/dist/aos.css'

class Portfolio extends Component {
  constructor (props) {
    super(props)
    this.state = {
      className: '',
      currentPortfolio: projects[0],
      currentProject: null,
      classNameModal: ''
    }
  }

  componentDidMount () {
     AOS.init({
       duration: 1000
     })
   }

  showDetailPortfolio (data) {
    this.setState({
      className: 'is-active',
      currentPortfolio: data
    })
  }

  handleClickSeeMore (item) {
    this.setState({
      currentProject: item,
      classNameModal: 'is-active'
    })
  }

  render () {
    const settings = {
      dots: false,
      infinite: true,
      autoplay: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      pauseOnHover: false
    }
    return (
      <div>
        <div class={'modal ' + this.state.classNameModal}>
          <div class='modal-background'></div>
          <div class='modal-content'>
            <div className='card'>
              <div className='card-content' >
                { this.state.currentProject && (<div>
                  <h1 class='title title-modal'>{this.state.currentProject.title}</h1>
                  <h2 class='subtitle title-modal'>{this.state.currentProject.content}</h2>

                  <Slider {...settings}>
                    {
                      this.state.currentProject.images.map((item, index) => {
                        return (<div className='slides-detail-project'>
                          <img src={item.src} alt='Phasecero' />
                        </div>)
                      })
                    }
                  </Slider>
                </div>)}
              </div>
            </div>
          </div>
          <button class='modal-close is-large' aria-label='close' onClick={() => this.setState({classNameModal: ''})}></button>
        </div>

        <div className='section section-timeline' id='portfolio'>
          <p className='title' align='center'>Portafolio</p>
          <section className='timeline'>
            <div className='container'>

              {
                projects.map((item, index) => {
                  return (
                    <div className='timeline-item' data-aos="fade-up">
                        <div className='timeline-img'></div>
                        <div className='timeline-content timeline-card js--fadeInRight'>
                          <div className='timeline-img-header'>
                            <img src={item.images[0].src} alt='' style={{ height: 200, width: '100%' }} />
                            <div>
                              <h2>{item.title}</h2>
                            </div>
                          </div>
                          <a className='bnt-more' onClick={() => this.handleClickSeeMore(item)}>Ver más</a>
                        </div>
                    </div>
                  )
                })
              }
            </div>
          </section>
          <div align='center'>
            <a href='https://www.facebook.com/Phase-Cero-Inmobiliaria-Y-Constructora-Sa-De-Cv-1410823498989622' target='_blank' rel='noopener noreferrer'>
              ¿Quieres conocer más de nuestro trabajo? <br />
              Haz clic aquí.
            </a>
          </div>
        </div>
      </div>)
  }
}

export default Portfolio
