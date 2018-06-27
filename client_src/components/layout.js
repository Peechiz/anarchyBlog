import Sidebar from '../components/sidebar'
import '../css/layout.css'

const Layout = (props) => {
  return (
    <div className="container">
      <Sidebar/>
      {props.children}
    </div>
  )
}

export default Layout