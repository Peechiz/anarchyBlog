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
          <div className="contact-info">
            <div>
              <p>Amet commodo elit magna esse ullamco exercitation consequat reprehenderit elit in anim fugiat. Commodo id ea nisi proident. Non esse ipsum quis proident. Excepteur culpa ullamco labore et voluptate commodo est mollit. Culpa culpa do veniam aliquip et ullamco ullamco do est nostrud consequat velit exercitation fugiat. Est nisi est dolor id quis ex eiusmod quis dolore sit eiusmod laborum nostrud. Occaecat elit velit sit laboris veniam pariatur nostrud et dolor do voluptate eu.</p>
            </div>
            <div>
              <h3>info@austinAnarchy.com</h3>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  )
}

export default Contact