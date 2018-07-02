import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: "",
    };
  }

  handleInputStuff = (event) => {
    if (event.target.name === "username"){
      this.setState({
        username: event.target.value
      })
    } else if (event.target.name === "password"){
      this.setState({
        password: event.target.value
      })
    }
  }

  handleSubmitStuff = (event) => {
    event.preventDefault()
    if (!this.state.username || !this.state.password) {
      return;
    } else {
      this.props.onSubmit(this.state.username, this.state.password)
    }
  }

  render() {
    return (
      <form name="name" onSubmit={this.handleSubmitStuff}>
        <div>
          <label>
            Username
            <input id="test-username" type="text" name="username" value={this.state.username} onChange={this.handleInputStuff}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password" type="password" name="password" value={this.state.password} onChange={this.handleInputStuff}/>
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
