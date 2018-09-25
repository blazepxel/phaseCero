import React, {Component} from 'react'
import GoogleMapReact from 'google-map-react'
import axios from 'axios'

const AnyReactComponent = ({ text }) => <div>{ text }</div>

class Contact extends Component {
  constructor () {
    super()
    this.state = {
      form: {
        name: '',
        email: '',
        subject: '',
        message: ''
      }
    }
  }

  handleChangeForm (e) {
    var {form} = this.state
    form[e.target.name] = e.target.value
    this.setState({form})
  }

  async handleSubmit (e) {
    var {form} = this.state
    e.preventDefault()
    try {
      await axios.post('http://services.blazepxel.com/api/contact', form)
      this.setState({form: {name: '', email: '', subject: '', message: ''}})
    } catch (e) {
      console.log(e)
    }
  }

  render () {
    var {form} = this.state

    let defaultProps = {
      center: { lat: 19.20742852680121, lng: -99.5361328125 },
      zoom: 11
    }

    return (<div className='hero form-contact'>
      <div className='columns'>
        <div className='column section'>
          Constactanos
        </div>
      </div>
      <div className='columns'>
        <div className='column section'>
          <form onSubmit={(e) => this.handleSubmit(e)}>
            <div className='field is-horizontal'>
              <div className='field-body'>
                <div className='field'>
                  <label className='label'>Nombre</label>
                  <div className='control'>
                    <input
                      required
                      className='input'
                      name='name'
                      type='text'
                      placeholder={'Nombre'}
                      value={form.name}
                      onChange={(e) => this.handleChangeForm(e)} />
                  </div>
                </div>
              </div>
            </div>

            <div className='field is-horizontal'>
              <div className='field-body'>
                <div className='field'>
                  <label className='label'>Correo electronico</label>
                  <div className='control'>
                    <input
                      className='input'
                      required
                      name='email'
                      type='email'
                      placeholder={'Email'}
                      value={form.email}
                      onChange={(e) => this.handleChangeForm(e)} />
                  </div>
                </div>
              </div>
            </div>

            <div className='field is-horizontal'>
              <div className='field-body'>
                <div className='field'>
                  <label className='label'>Asunto</label>
                  <div className='control'>
                    <input
                      required
                      className='input '
                      name='subject'
                      type='text'
                      placeholder='Asunto'
                      value={form.subject}
                      onChange={(e) => this.handleChangeForm(e)} />
                  </div>
                </div>
              </div>
            </div>

            <div className='field is-horizontal'>
              <div className='field-body'>
                <div className='field'>
                  <label className='label'>Mensaje</label>
                  <div className='control'>
                    <textarea
                      required
                      className='input textarea'
                      placeholder='Mensaje'
                      value={form.message}
                      name='message'
                      onChange={(e) => this.handleChangeForm(e)} />
                  </div>
                </div>
              </div>
            </div>

            <div className='control'>
              <button className='button is-fullwidth is-red'>
                <label>Enviar</label>
              </button>
            </div>
          </form>
        </div>
        <div className='column' style={{height: 415}}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: 'AIzaSyB8tMMBHC0qAwO9DiJpFQZX3-wFeLnE1bM' }}
            defaultCenter={defaultProps.center}
            defaultZoom={defaultProps.zoom}>
            <AnyReactComponent
              lat={19.20742852680121}
              lng={-99.5361328125}
              text={'Wheres Waldo?'}
            />
          </GoogleMapReact>
        </div>
      </div>
    </div>)
  }
}

export default Contact
