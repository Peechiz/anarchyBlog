import Layout from '../components/layout'
import fetch from 'isomorphic-unfetch'
import ReactMarkdown from 'react-markdown'
import Moment from 'moment'
import '../css/post.css'

const BASE_URL = process.env.BASE_URL || ''

const Post = (props) => {
  const date = Moment().calendar(props.date)
  return (
    <Layout>
      <main>
        <div className="content">
          <div className="content-wrapper post">
            <h1>{props.title}</h1>
            <h2>{date}</h2>
            <ReactMarkdown source={props.text}/>
          </div>
        </div>
        <div className="hero"></div>
      </main>
    </Layout>
  )
}

Post.getInitialProps = async ({query}) => {
  const res = await fetch(`${BASE_URL}api/posts?filter[where][id]=${query.id}`)
  const json = await res.json()
  return json[0] || {}
}

export default Post
