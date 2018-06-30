import React from 'react'

export default class LoginForm extends React.Component {
  constructor () {
    super()

    this.state = {
      name: '',
      username: '',
      password: ''
    }
  }

  handleChange (e) {
    const { name, value } = e.target
    this.setState({
      [name]: value
    })
  }

  handleSubmit (e) {
    e.preventDefault()
    const { username, password } = this.state
    if (username && password) {
      console.log('(username && password): ', (username && password))
      this.props.onSubmit({username, password})
    }
  }
  render () {
    return (
      <form
        onSubmit={(e) => this.handleSubmit(e)}>
        <div>
          <label>
            Username
            <input
              id='test-username'
              type='text'
              name={this.state.name}
              onChange={(e) => { this.handleChange(e) }}
            />
          </label>
        </div>
        <div>
          <label>
            Password
            <input
              id='test-password'
              type='password'
              value={this.state.value}
              onChange={(e) => { this.handleChange(e) }} />
          </label>
        </div>
        <div>
          <input
            type='submit'
            value='Log In'
          />
        </div>
      </form>
    )
  }
}
