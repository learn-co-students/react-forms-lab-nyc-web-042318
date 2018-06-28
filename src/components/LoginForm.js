import React from "react";
import PropTypes from "prop-types";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    };
  }

  handleUsername = (event) => {
    this.setState({
      username: event.target.value
    },()=>{console.log(event)})
  }
  
  handlePassword = (event) => {
    this.setState({
      password: event.target.value
    })
  }

  handleFormSubmit = event => {
    event.preventDefault();
    const { username, password } = this.state;

    if (!username || !password) {
      return;
    }

    this.props.onSubmit({ username, password });
  };

  render() {
    return (
      <form onSubmit={this.handleFormSubmit} >
        <div>
          <label>
            Username
            <input id="test-username" type="text" value={this.state.username} onChange={this.handleUsername} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password" value={this.state.password} onChange={this.handlePassword} type="password" />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}
LoginForm.propTypes = {
  onSubmit: PropTypes.func,
};

export default LoginForm;
