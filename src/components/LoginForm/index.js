import {Component} from 'react'

import './index.css'

class LoginForm extends Component {
  state = {
    userName: '',
    password: '',
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {userName, password} = this.state
    const userDetails = {userName, password}
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const url = 'https://apis.ccbp.in/login'
    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data)
  }

  onChangeUserName = event => {
    this.setState({userName: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  render() {
    const {userName, password} = this.state
    return (
      <div className="bg-cont">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          alt="website login"
          className="login-img"
        />
        <form className="form-cont" onSubmit={this.onSubmitForm}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="website logo"
            className="logo"
          />

          <label htmlFor="txtUser" className="label">
            USERNAME
          </label>
          <input
            type="text"
            id="txtUser"
            value={userName}
            onChange={this.onChangeUserName}
            className="user-name"
          />
          <label htmlFor="txtPwd" className="label">
            PASSWORD
          </label>
          <input
            type="password"
            id="txtPwd"
            value={password}
            onChange={this.onChangePassword}
            className="password"
          />
          <button type="submit" className="btn-submit">
            Login
          </button>
        </form>
      </div>
    )
  }
}
export default LoginForm
