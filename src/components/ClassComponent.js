import React from 'react'

class ClassComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      width: window.innerWidth
    }

    this.updateDocumentTitle = this.updateDocumentTitle.bind(this)
    this.onFirstNameUpdate = this.onFirstNameUpdate.bind(this)
    this.onLastNameUpdate = this.onLastNameUpdate.bind(this)
    this.updateWidth = this.updateWidth.bind(this)
  }

  updateDocumentTitle = () => {
    document.title = this.state.firstName
  }

  updateWidth = () => {
    this.setState({ width: window.innerWidth })
  }

  componentDidMount() {
    window.addEventListener('resize', this.updateWidth)
    this.updateDocumentTitle()
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWidth)
  }

  componentDidUpdate() {
    this.updateDocumentTitle()
  }

  onFirstNameUpdate = e => {
    this.setState({ firstName: e.target.value })
  }

  onLastNameUpdate = e => {
    this.setState({ lastName: e.target.value })
  }

  render() {
    return (
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <span>Class Component</span>
        <input value={this.state.firstName} onChange={this.onFirstNameUpdate} />
        <input value={this.state.lastName} onChange={this.onLastNameUpdate} />
        <span>{this.state.width}</span>
      </div>
    )
  }
}

export default ClassComponent
