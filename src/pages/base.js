import React from 'react'

import Contact from './contact'
import About from './about'
import Main from './main'
import Services from './services'
import Portfolio from './portfolio'

const Home = () => (
  <div className='container'>
    <Main />
    <About />
    <Services />
    <Portfolio />
    <Contact />
  </div>
)

export default Home
