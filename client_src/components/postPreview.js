import Link from 'next/link'
import Moment from 'moment';

const PostPreview = (props) => {
  const post = props.content
  const date = Moment().calendar(post.date)
  return (
    <div>
      <h1>
        <Link href={{pathname:'/post', query: {id: post.id}}}>
          <a>{post.title}</a>
        </Link>
      </h1>
      <span>{date}</span>
    </div>
  ) 
}

export default PostPreview