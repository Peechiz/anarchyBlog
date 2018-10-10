import { Component } from 'react'
import Layout from '../components/layout'
import Blogroll from '../components/blogroll'
import { loadDB } from '../lib/db'


class Index extends Component {

  static async getInitialProps(){
    let db = await loadDB();
    let result = await new Promise( (resolve, reject) => {
      db.collection('posts')
        .orderBy('date', 'desc')
        .limit(10)
        .get()
        .then(snapshot => {
          let arr = []
          snapshot.forEach(post => {
            arr.push({
              id: post.id,
              ...post.data()
            })
          })
          resolve(arr)
        }).catch(err => {
          console.log(err)
          reject([])
      })
    })
    return {posts: result};
  }

  render(){
    return (
      <Layout>
        <Blogroll posts={this.props.posts}/>
      </Layout>
    )
  }
}

export default Index