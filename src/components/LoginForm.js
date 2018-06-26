import React from "react";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userValue: '',
      passwordValue: ''
    };
  }

  updateUsername = (event) => {
    this.setState({
      userValue: event.target.value
    })

  }

  updatePassword = (event) => {
    this.setState({
      passwordValue: event.target.value
    })
  }

  whenSubmitting = (event) => {
    event.preventDefault()
    if (this.state.userValue !== '' && this.state.passwordValue !== '') {
      return this.props.onSubmit()
    }
  }

  render() {
    return (
      <form onSubmit={this.whenSubmitting}>
        <div>
          <label>
            Username
            <input id="test-username" type="text" value={this.state.userValue} onChange={this.updateUsername}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password" type="password" value={this.state.passwordValue} onChange={this.updatePassword} />
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
