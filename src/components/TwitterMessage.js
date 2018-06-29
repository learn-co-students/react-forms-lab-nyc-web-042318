import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      charleft: this.props.maxChars
    };
  }

  handleChange = (event) => {
    this.setState({
      value: event.target.value,
      charleft: this.props.maxChars - event.target.value.length
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.value} onChange={this.handleChange}/>
        <p>{this.state.charleft}</p>
      </div>
    );
  }
}

export default TwitterMessage;
