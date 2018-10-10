import React, { Component } from 'react'
import PostPreview from '../components/postPreview'
import '../css/blogroll.css'

const Blogroll = (props) => {
  return (
    <main>
      <div className="content">
        <div className="content-wrapper">
          {props.posts.map(post => 
            <PostPreview key={post.id} content={post}/>
          )}
        </div>
      </div>
      <div className="hero"></div>
    </main>
  )
}

export default Blogroll