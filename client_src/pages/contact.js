import Layout from '../components/layout'
import MapContainer from '../components/googlemap'
import '../css/contact.css'

const Contact = () => {
  return (
    <Layout>
      <main className="contact">
        <div id="map">
          <MapContainer/>
        </div>
        <div className="content">
          <h1>Contact</h1>
        </div>
      </main>
    </Layout>
  )
}

export default Contact