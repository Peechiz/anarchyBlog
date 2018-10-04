import { Component } from 'react'
import ReactMarkdown from 'react-markdown'

class Editor extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      text: ''
    }
    this.updateTitle = this.updateTitle.bind(this)
    this.updateText = this.updateText.bind(this)
    this.submit = this.submit.bind(this)
  }

  updateTitle(e) {
    this.setState({ title: e.target.value })
  }

  updateText(e) {
    this.setState({ text: e.target.value })
  }

  submit() {
    console.log('sending...')
    fetch('http://localhost:3000/api/posts', {
      body: JSON.stringify(this.state),
      headers: {
        'content-type': 'application/json'
      },
      method: 'POST'
    }).then(res => res.json())
      .then(data => {
        console.log(data)
      })
  }

  render() {
    return (
      <div>
        <div>
          <label>Title: </label>
          <input onChange={this.updateTitle} value={this.state.title} type="text" name="title" id="title" />
        </div>
        <label>Content (markdown): </label>
        <div>
          <textarea onChange={this.updateText} value={this.state.text} name="markdown" id="markdown" rows="8" cols="80"></textarea>
        </div>

        <div className="block">
          <h1>{this.state.title}</h1>
          <ReactMarkdown source={this.state.text}/>
        </div>
        <button onClick={this.submit}>Submit</button>
      </div>
    )
  }
}

export default Editor