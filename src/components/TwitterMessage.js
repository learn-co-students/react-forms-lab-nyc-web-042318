import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "",
      charactersLeft: this.props.maxChars
    };
  }

  handleChange = (event) => {
    this.setState({
      value: event.target.value,
      charactersLeft: this.props.maxChars - event.target.value.length
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" onChange={this.handleChange} value={this.state.value}/>
        <p>Characters Remaining: {this.state.charactersLeft}</p>
      </div>
    );
  }
}

export default TwitterMessage;
