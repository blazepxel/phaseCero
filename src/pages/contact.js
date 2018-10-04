import React, {Component} from 'react'
import GoogleMapReact from 'google-map-react'
import axios from 'axios'
import Spinner from 'react-spinkit'

const AnyReactComponent = ({ text }) => <div>{ text }</div>

class Contact extends Component {
  constructor () {
    super()
    this.state = {
      loading: false,
      form: {
        name: '',
        email: '',
        subject: '',
        message: '',
        to: 'contacto@phasecero.com'
      }
    }
  }

  handleChangeForm (e) {
    var { form } = this.state
    form[e.target.name] = e.target.value
    this.setState({ form })
  }

  async handleSubmit (e) {
    var { form } = this.state
    this.setState({ loading: true })
    e.preventDefault()
    try {
      await axios.post('http://services.blazepxel.com/api/contact', form)
      this.setState({ loading: false, form: { name: '', email: '', subject: '', message: '' } })
    } catch (e) {
      console.log(e)
    }
  }

  render () {
    var { form, loading } = this.state

    let defaultProps = {
      center: { lat: 19.20742852680121, lng: -99.5361328125 },
      zoom: 11
    }

    return (<div className='hero form-contact' id='contact'>
      <div className='columns' style={{padding: 0, margin: 0}}>
        <div className='column section'>
          <form onSubmit={(e) => this.handleSubmit(e)} autocomplete='off'>
            <p className='title has-text-white'>
              Contáctanos
            </p>
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
                      value={form.email}
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
                      rows={2}
                      className='input textarea'
                      value={form.message}
                      name='message'
                      onChange={(e) => this.handleChangeForm(e)} />
                  </div>
                </div>
              </div>
            </div>

            <div className='control is-flex-end'>
              {
                loading ? (<Spinner name='chasing-dots' color='white' />) : (
                  <button className='button is-red is-rounded'>
                    <label>Enviar</label>
                  </button>
                )
              }
            </div>
          </form>
        </div>
        <div className='column' style={{height: '70vh', padding: 0, margin: 0}}>
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