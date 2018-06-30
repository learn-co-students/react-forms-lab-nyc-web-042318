import React from 'react'

class PoemWriter extends React.Component {
  constructor () {
    super()

    this.state = {
      poem: '',
      validated: false
    }
  }

  handleChange (e) {
    console.log(e.target.value)
    this.setState({
      poem: e.target.value,
      validated: this.validatePoem(e.target.value)
    })
  }

  validatePoem (poem) {
    console.log('poem: ', poem)
    let rule1, rule2, rule3, rule4
    const lineArr = poem.split('\n').map(line => line.trim())
    rule1 = (lineArr.length === 3)

    if (rule1) {
      // README inconsistent with test. Only test for leading spaces
      rule2 = (lineArr[0].split(' ').length === 5)

      rule2 = ((lineArr[0].split(' ').length === 5) && ((lineArr[0].split(' '))[0] != ''))

      rule3 = ((lineArr[1].split(' ').length === 3) && ((lineArr[1].split(' '))[0] != ''))

      rule4 = ((lineArr[2].split(' ').length === 5) && ((lineArr[2].split(' '))[0] != ''))
    }

    if (rule1 && rule2 && rule3 && rule4) {
      return true
    } else {
      return false
    }
  }

  render () {
    return (
      <div>
        <textarea rows='3' cols='60' onChange={(e) => this.handleChange(e)} />
        {this.state.validated ? null : (
          <div
            id='poem-validation-error'
            style={{color: 'red'}}>
          This poem is not written in the right structure!
          </div>
        )
        }
      </div>
    )
  }
}

export default PoemWriter
