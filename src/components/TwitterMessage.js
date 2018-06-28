import React from "react";
import PropTypes from "prop-types";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = { message:'' };
  }

  handleChange = event => {
    this.setState({
      message: event.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input 
          onChange={this.handleChange} 
          type="text" 
          value={this.state.message} />
        <span>{this.props.maxChars-this.state.message.length}</span>
      </div>
    );
  }
}

TwitterMessage.propTypes = {
  maxChars: PropTypes.number,
};

TwitterMessage.defaultProps = {
  maxChars: 140,
};

export default TwitterMessage;
