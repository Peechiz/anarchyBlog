import ReactMarkdown from 'react-markdown'

export default (props) => {
  const html = markdown.toHTML(props.markdown)
  return <div dangerouslySetInnerHTML={{ __html: html }}></div>
}