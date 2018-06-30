import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: '',

    };
  }

  handleChange = event => {
    this.setState({
      username: event.target.value,
      password: event.target.value,
      
    });
  }

  formSubmit = event => {
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.formSubmit}>
        <div>
          <label>
            Username
            <input id="test-username" 
            type="text" 
            value={this.state.username}
            onChange={this.handleChange}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password" 
            type="password"
            value={this.state.password}
            onChange={this.handleChange}
            />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
