import Layout from '../components/layout'
import NextPost from '../components/nextPost'
import { loadDB } from '../lib/db'
import ReactMarkdown from 'react-markdown'
import Moment from 'moment'
import '../css/post.css'

const Post = (props) => {
  const date = Moment().calendar(props.date)
  return (
    <Layout>
      <main>
        <div className="content">
          <div className="content-wrapper post">
            <h1>{props.title}</h1>
            <p className="date">posted {date}</p>
            {/* <h2>id: {props.id}</h2> */} 

            <ReactMarkdown source={props.text}/>

            <NextPost type="previous" id={props.prev}></NextPost>
            <NextPost type="next" id={props.next}></NextPost>

          </div>
        </div>
        <div className="hero"></div>
      </main>
    </Layout>
  )
}

Post.getInitialProps = async ({query}) => {
  let db = await loadDB();
  let post = await db.collection('posts').doc(query.id).get().then(post => {
    return {
      id: post.id,
      ...post.data()
    };
  })

  let next = await db.collection('posts')
    .where('date', '<', post.date)
    .orderBy('date', 'desc')
    .limit(1)
    .get()
    .then(next => {
      try {
        return next.docs[0].id
      } catch (err) {
        return null
      }
  })

  let prev = await db.collection('posts')
    .where('date', '>', post.date)
    .orderBy('date', 'asc')
    .limit(1)
    .get()
    .then(prev => {
      try {
        return prev.docs[0].id
      } catch (err) {
        return null
      }
  })

  return {
    next,
    prev,
    title: post.title,
    text: post.text,
    date: post.date,
    id: post.id,
  }
}

export default Post
