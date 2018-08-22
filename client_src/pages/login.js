import { Component } from 'react'
import '../css/login.css'

const BASE_URL = process.env.BASE_URL || ''

class Login extends Component {
  constructor(){
    super();

  }

  render(){
    return (
      <div className="login">
        <form>
          <img src="static/img/logo.png"/>

          <a href={`${BASE_URL}auth/google`}>
            <button>Login with the Googs</button>
          </a>
        </form>
      </div>
    )
  }
}

export default Login