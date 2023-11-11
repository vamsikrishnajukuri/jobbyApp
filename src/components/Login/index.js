import {Component} from 'react'

import {Cookies} from 'js-cookie'

import './index.css'

class Login extends Component {
  state = {name: '', pass: '', errMsg: '', isFailed: false}

  onUsername = event => {
    this.setState({name: event.target.value})
  }

  renderUsername = () => {
    const {name} = this.state
    return (
      <div>
        <label className="label-password" htmlFor="username">
          USERNAME
        </label>
        <br />
        <input
          id="username"
          type="text"
          className="password-input"
          value={name}
          placeholder="Username"
          onChange={this.onUsername}
        />
      </div>
    )
  }

  onPassword = event => {
    this.setState({pass: event.target.value})
  }

  renderPassword = () => {
    const {pass} = this.state
    return (
      <div className="password_container">
        <label className="label-password" htmlFor="password">
          PASSWORD
        </label>
        <br />
        <input
          type="password"
          value={pass}
          placeholder="Password"
          className="password-input"
          id="password"
          onChange={this.onPassword}
        />
      </div>
    )
  }

  onSuccess = token => {
    const {history} = this.props
    this.setState({
      name: '',
      pass: '',
    })
    Cookies.set('jwt_token', token, {expires: 3, path: '/'})
    history.replace('/')
  }

  onFailure = errorMsg => {
    this.setState({
      errMsg: errorMsg,
      isFailed: true,
    })
  }

  onSubmitButton = async event => {
    event.preventDefault()
    const {name, pass} = this.state
    const userDetails = {
      username: name,
      password: pass,
    }
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const url = 'https://apis.ccbp.in/login'
    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data)
    console.log(response)
    if (response.ok === true) {
      this.onSuccess(data.jwt_token)
      this.setState({
        name: '',
        pass: '',
      })
    } else {
      this.onFailure(data.error_msg)
    }
  }

  render() {
    const {errMsg, isFailed} = this.state
    return (
      <div className="big-container">
        <div className="small-container">
          <div className="image-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
              alt="website logo"
              className="web-image"
            />
          </div>
          <form onSubmit={this.onSubmitButton} className="form-container">
            <div className="form-container">
              {this.renderUsername()}
              {this.renderPassword()}
            </div>

            <div>
              <button className="button_Submit" type="submit">
                Login
              </button>
              {isFailed && <p>{errMsg}</p>}
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default Login
