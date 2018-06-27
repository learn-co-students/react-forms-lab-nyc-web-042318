import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super();

    this.state = {
      value: ""
    };
  }

  inputText = (event) =>{
    let input = event.target.value;
    this.setState({value: input})

  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" onChange = {this.inputText} value={this.state.value}/>
        {this.props.maxChars - this.state.value.length}
      </div>
    );
  }
}

export default TwitterMessage;
