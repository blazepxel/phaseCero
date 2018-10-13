import React, { Component } from 'react'
import projects from './projects'
import ScrollAnimation from 'react-animate-on-scroll'

class Portfolio extends Component {
  constructor (props) {
    super(props)
    this.state = {
      className: '',
      currentPortfolio: projects[0]
    }
  }

  showDetailPortfolio (data) {
    this.setState({
      className: 'is-active',
      currentPortfolio: data
    })
  }

  render () {
    return (<div className='section section-timeline'>
    <section className='timeline'>
      <div className='container'>

        {
          projects.map((item, index) => {
            return (
              <div className='timeline-item'>
                <ScrollAnimation animateIn='fadeIn'>
                <div className='timeline-img'></div>

                  <div className='timeline-content timeline-card js--fadeInRight'>
                    <div className='timeline-img-header'>
                      <img src={item.images[0].src} alt="" style={{height: 200, width: '100%'}}/>
                      <div>
                        <h2>{item.title}</h2>
                      </div>

                    </div>
                    <div className='date'>{item.year}</div>
                    <p>{item.content}</p>
                    <a className='bnt-more' href='#hola'>More</a>
                  </div>
                  </ScrollAnimation>
                </div>
              )
          })
        }
      </div>
    </section>
  </div>)
  }
}

export default Portfolio
