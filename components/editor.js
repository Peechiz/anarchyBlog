import { Component } from 'react'
import { loadDB } from '../lib/db'
import ReactMarkdown from 'react-markdown'

class Editor extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      text: ''
    }

    this.db = loadDB();

    const methods = [
      'updateTitle',
      'updateText',
      'submit'
    ]
    methods.forEach(method => {
      this[method] = this[method].bind(this)
    })
  }

  updateTitle(e) {
    this.setState({ title: e.target.value })
  }

  updateText(e) {
    this.setState({ text: e.target.value })
  }

  submit() {
    console.log('sending...')
    this.db.collection('posts').add({
      date: Date.now(),
      text:this.state.text,
      title: this.state.title
    })
    .then(post => {
      console.log('post created')
    })
  }

  render() {
    return (
      <div className="editor">
        <div className="form">
          <div>
            <label>Title: </label>
            <input onChange={this.updateTitle} value={this.state.title} type="text" name="title" id="title" />
          </div>
          <label>Content (markdown): </label>
          <div>
            <textarea onChange={this.updateText} value={this.state.text} name="markdown" id="markdown" rows="8" cols="80"></textarea>
          </div>
          <button onClick={this.submit}>Submit</button>
        </div>

        <div className="preview">
          <div className="block">
            <h1>{this.state.title}</h1>
            <ReactMarkdown source={this.state.text}/>
          </div>
        </div>
      </div>
    )
  }
}

export default Editor