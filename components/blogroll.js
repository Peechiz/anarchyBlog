import React, { Component } from 'react'
import PostPreview from '../components/postPreview'
import '../css/blogroll.css'

class Blogroll extends Component {

  constructor(props) {
    super(props);
    this.state = { posts: [] };
  }

  componentDidMount() {
    fetch('http://localhost:3000/api/posts').then(res => res.json())
      .then(posts => {
        this.setState({ posts })
      })
  }

  render() {
    return (
      <main>
        <div className="content">
          <div className="content-wrapper">
            {this.state.posts.reverse().map(post => 
              <PostPreview key={post.id} content={post}/>
            )}
          </div>
        </div>
        <div className="hero"></div>
      </main>
    )
  }
}

export default Blogroll