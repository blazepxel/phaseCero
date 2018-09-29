import React, { Component } from 'react'
import {Timeline, TimelineEvent} from 'react-event-timeline'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import Slider from "react-slick"
import { Scrollbars } from 'react-custom-scrollbars';

import projects from './projects'
var settings = {
  dots: false,
  infinite: true,
  autoplay: true,
  pauseOnHover: false,
  speed: 4000,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false
}

class Portfolio extends Component {
  constructor (props) {
    super(props)
    this.state = {
      className: '',
      currentPortfolio: projects[1]
    }
  }

  showDetailPortfolio (data) {
    this.setState({
      className: 'is-active',
      currentPortfolio: data
    })
  }

  render () {
    let {currentPortfolio} = this.state
    console.log('currentPortfolio', currentPortfolio);
    return (<div className='section'>
      <div className='columns'>
        <div className='column'>
          <Scrollbars
              style={{ height: 300 }}>
              <Timeline lineColor='grey' >
                {
                  projects.map((item, index) => {
                  return (
                    <TimelineEvent
                      onClick={() => this.showDetailPortfolio(item)}
                      title={item.title}
                      createdAt='2009'
                      titleStyle={{ fontWeight: 'bold', fontSize: '1rem' }}
                      icon={<FontAwesomeIcon icon={faCheck} />}
                      iconColor={currentPortfolio.index === item.index ? '#df3e3e' : '#141720'}
                      style={{ color: currentPortfolio.index === item.index ? '#df3e3e' : '#141720' }}
                    />
                  )
                })
                }
              </Timeline>
          </Scrollbars>
        </div>
        <div className='column'>
          <div className='columns'>
            <div className='column content-slide'>
              <Slider {...settings} className='slider-portfolio'>
                {
                  currentPortfolio.images.map((item, index) => {
                    console.log(item)
                    return (
                      <div key={index}>
                        <img className='slider-mini' src={item.src} alt='BlazePixel' />
                      </div>
                    )
                  })
                }
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>)
  }
}


export default Portfolio
