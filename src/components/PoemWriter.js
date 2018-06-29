import React from "react";

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      value: '',
      valid: true
    };
  }
  // {var errorMessage = 'This poem is not written in the right structure!'}



  handleChange = (event) => {
    this.setState ({
      value: event.target.value
    }, () => {
      this.isValid(this.state.value)
    })


  }

  isValid = (essay) => {
    let newEssay = essay.split("\n").map(word => word.trim());
    var validlines = newEssay.length === 3;
    if (newEssay[0].split(" ").length == 5 &&
      newEssay[1].split(" ").length == 3 &&
      newEssay[2].split(" ").length == 5 &&
      validlines)
     {
      this.setState ({
        valid: true
      })
    } else {
      this.setState({
        valid: false
      })
    }
  }



  render() {

    return (
      <div>
        <textarea rows="3" cols="60" value={this.state.value} onChange={this.handleChange} />
        {this.state.valid == false ?
        <div id="poem-validation-error" style={{ color: "red" }}>
          'This poem is not written in the right structure!'
        </div> : null }
      </div>
    );
  }
}

export default PoemWriter;
