import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      value: "",
      maxChars: 140,
      remainingChars: 140,

    };
  }

  handleChange = event => {
    let charValue = event.target.value.length
    this.setState({
      value: event.target.value,
      remainingChars: this.state.maxChars - charValue,
    });
  }

  render() {
    return (
      <div>
        <strong>Your message: {this.state.remainingChars}</strong>
        <input type="text" 
        value={this.state.value} 
        onChange={this.handleChange}/>
      </div>
    );
  }
}

export default TwitterMessage;
