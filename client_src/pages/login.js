import { Component } from 'react'
import '../css/login.css'

class Login extends Component {
  constructor(){
    super();
    this.state = {
      'email':'',
      'password':''
    }
    this.updateUser = this.updateUser.bind(this)
    this.updatePassword = this.updatePassword.bind(this)
    this.submit = this.submit.bind(this)
  }

  updateUser(e){
    this.setState({ email: e.target.value })
  }
  
  updatePassword(e) {
    this.setState({ password: e.target.value })
  }

  submit(e){
    e.preventDefault()
    console.log(this.state)
  }

  render(){
    return (
      <div className="login">
        <form>
          <img src="static/img/logo.png"/>
          <h1>Login</h1>
          <input 
            type="text" 
            onChange={this.updateUser}
            placeholder="Email"/>

          <input type="password" 
            onChange={this.updatePassword}
            placeholder="Password"/>

          <button onClick={this.submit}>Submit</button>
        </form>
      </div>
    )
  }
}

export default Login