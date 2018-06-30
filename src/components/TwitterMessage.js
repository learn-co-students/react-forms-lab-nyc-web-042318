import React from 'react'

class TwitterMessage extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      value: '',
      counter: 0
    }
  }

  handleChange (e) {
    this.setState({
      value: e.target.value,
      counter: this.state.counter + 1
    })
  }
  render () {
    return (
      <div>
        <strong>Your message:</strong>
        <input
          type='text'
          onChange={(e) => { this.handleChange(e) }}
          value={this.state.value}
          remainingChar={this.props.maxChars - this.state.value.length} />
        {this.props.maxChars - this.state.counter}
      </div>
    )
  }
}

export default TwitterMessage
