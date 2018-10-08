import { Component } from 'react'
import '../css/sidebar.css'


class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false
    }
    this.toggleActive = this.toggleActive.bind(this)
  }

  toggleActive() {
    // console.log('clicked!')
    const currentState = this.state.active;
    this.setState({ active: !currentState })
  }

  render() {
    return (
      <div className={this.state.active ? 'sidebar' : 'sidebar sidebar-hide'}>
        <div className="info">
          <h1>AUSTIN ANARCHY</h1>
          <p>Anarchy is the bestest men's roller derbys in the whole wide austin texas.</p>

          <ul className="nav-links">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>

        <div className="nav">
          <a href="/">
            <div className="logo">
              <img src="/static/img/logo.png" alt="logo" height="80" />
            </div>
          </a>
          <div id="toggle" onClick={this.toggleActive}>
            <i className="fas fa-bars fa-2x"></i>
          </div>
          <div className="social">
            <a href="https://www.facebook.com/ATXAnarchy/">
              <div className="fb">
                <i className="fab fa-facebook fa-2x"></i>
              </div>
            </a>
            <a href="https://twitter.com/atxanarchy">
              <div className="twitter">
                <i className="fab fa-twitter fa-2x"></i>
              </div>
            </a>
            <a href="http://flattrackstats.com/teams/38920">
              <div>FTS</div>
            </a>
          </div>
        </div>
      </div>
    )
  }
}

export default Sidebar