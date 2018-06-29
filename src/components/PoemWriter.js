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



  // {
  //   var wholeString = this.state.value;
  //   var lines = wholeString.split("\n");
  //
  //
  //   (lines.length !== 3 || lines[0].split(' ').length !== 5 || lines[1].split(' ').length !== 3 || lines[2].split(' ').length !== 5) ? this.setState ({
  //     errorMessage: 'This poem is not written in the right structure!'
  //   }) : this.setState ({
  //     errorMessage: null
  //   })
  //
  // }

  // isCorrect = (poem) => {
  // +    let newpoem = poem.split("\n").map(word => word.trim())
  // +    if (
  // +      newpoem[0].split(" ").length == 5 &&
  // +      newpoem[1].split(" ").length == 3 &&
  // +      newpoem[2].split(" ").length == 5
  // +    ) {
  // +      this.setState({
  // +        correct: true
  // +      })
  // +    } else {
  // +      this.setState({
  // +        correct: false
  // +      })
  // +    }
  // +  }




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
