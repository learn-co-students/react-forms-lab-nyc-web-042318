import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "",
      length: 0
    };
  }

  inputChange = (event) => {
    this.setState({
      value: event.target.value,
      length: event.target.value.length
    })

  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.value} onChange={this.inputChange}/>
        <p>This many characters remaining: {this.props.maxChars - this.state.length}</p>
      </div>
    );
  }
}

export default TwitterMessage;
