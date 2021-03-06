import React, {Component} from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import Base from './pages/base.js'

import logoBP from './assets/img/logoBlazePixel.png'
import logo from './assets/img/phase_cero_logo-01.png'

import $ from 'jquery'

class RouterSpark extends Component {
  constructor () {
    super()
    this.state = {
      classHeader: 'is-transparent',
      showImg: false,
      showMenu: false
    }
    this.handleScroll = this.handleScroll.bind(this)
  }
  componentDidMount () {
    window.addEventListener('scroll', this.handleScroll)
  }

  handleScroll (e) {
    if ($(window).scrollTop() > 100) {
      this.setState({classHeader: 'header-black', showImg: true})
    } else {
      this.setState({classHeader: 'is-transparent', showImg: false})
    }
  }

  handleClickMenuBurguer () {
    this.setState((prevState) => {
      return {
        showMenu: !prevState.showMenu
      }
    })
  }

  render () {
    var {showImg} = this.state
    var navbar = ''
    if (showImg) {
      navbar = (<img src={logo} alt='Phase Cero' width='60' height='60' />)
    } else {
      navbar = (
        <img src={logo} alt='Phase Cero' width='80' height='80' />)
    }

    let classNameHeader = this.state.classHeader

    if (this.state.showMenu) {
      classNameHeader = ' header-black'
    }

    return (
      <Router>
        <div>
          <nav className={'navbar ' + classNameHeader}>
            <div className='navbar-brand'>
              <a className='navbar-item' href='#main'>
                {navbar}
              </a>
              <div className={'navbar-burger burger ' + (this.state.showMenu ? 'is-active' : '')}
                onClick={() => this.handleClickMenuBurguer()}
                data-target='navbarExampleTransparentExample'>
                <span />
                <span />
                <span />
              </div>
            </div>

            <div id='navbarExampleTransparentExample' className={'navbar-menu' + (this.state.showMenu ? 'is-active' : '')} >
              <div className='navbar-end'>
                <a className='navbar-item' href='#main' onClick={() => this.setState({showMenu: false})}>
                  Inicio
                </a>
                <a className='navbar-item' href='#services' onClick={() => this.setState({showMenu: false})}>
                  Servicios
                </a>
                <a className='navbar-item' href='#about' onClick={() => this.setState({showMenu: false})}>
                  Nosotros
                </a>
                <a className='navbar-item' href='#portfolio' onClick={() => this.setState({showMenu: false})}>
                  Portafolio
                </a>
                <a className='navbar-item' href='#contact' onClick={() => this.setState({showMenu: false})}>
                  Contáctanos
                </a>
                <div className='navbar-item'>
                  <div className='field is-grouped' />
                </div>
              </div>
            </div>
          </nav>
          <Route exact path='/' component={Base} />
          <footer className='footer is-black'>
            <div className='container'>
              <div className='content has-text-centered'>
                <p className='is-font-white'>
                  <strong>Copyright © 2018 Phase Cero Inmobiliaria y Constructora, S.A DE C.V. Todos los derechos reservados.</strong>
                  <br />

                  <strong>Powered by</strong> <a href='http://blazepxel.com/' target='_blanck'>
                  Blaze Pixel.
                    <img src={logoBP} alt='Blaze Pixel' style={{width: 50, height: 50}} />
                  </a>
                </p>
              </div>
            </div>
          </footer>
        </div>
      </Router>
    )
  }
}

export default RouterSpark
