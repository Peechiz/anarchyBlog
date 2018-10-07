const NextPost = (props) => {

  if (props.id){
    return (
      <span className={props.type}>
        <a href={'/post?id='  + props.id}>{props.type}</a>
      </span>
    )
  } else {
    return null
  }
}

export default NextPost;