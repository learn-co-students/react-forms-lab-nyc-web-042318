import React from "react";

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      value: "",
      correct: false
    };
  }

  isCorrect = (poem) => {
    let newpoem = poem.split("\n").map(word => word.trim())
    if (
      newpoem[0].split(" ").length == 5 &&
      newpoem[1].split(" ").length == 3 &&
      newpoem[2].split(" ").length == 5
    ) {
      this.setState({
        correct: true
      })
    } else {
      this.setState({
        correct: false
      })
    }
  }

  handleChange = (event) => {
    this.setState({
      value: event.target.value
    }, () => {this.isCorrect(this.state.value)})
  }

  render() {
    return (
      <div>
        <textarea rows="3" cols="60" value={this.state.value} onChange={this.handleChange}/>
          {(this.state.correct === false) ? (
            <div id="poem-validation-error" style={{ color: "red" }}>
              This poem is not written in the right structure!
            </div>
          ) : null}
      </div>
    );
  }
}

export default PoemWriter;
