import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: ""
    };
  }

  changeUsername =(event) => {
    this.setState({...this.state, username:event.target.value})
  }

  changePwd = (event) => {
    this.setState({...this.state, password:event.target.value})

  }
  sumbitForm = event =>{

    event.preventDefault();
    // console.log(this.props)
    // debugger;
    let input = {username:this.state.username, password:this.state.password};

    if(this.state.username == "" || this.state.password == "") return;

    this.props.onSubmit(input);

  }

  render() {
    return (
      <form onSubmit = {this.sumbitForm}>
        <div>
          <label>
            Username
            <input id="test-username" type="text" onChange = {this.changeUsername} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password" type="password" onChange = {this.changePwd}/>
          </label>
        </div>
        <div>
          <button type="submit" >Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
