import React from "react";



class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      text: "",
      isValid: true
    };
  }

  isValidPoem = text => {
    const poemLines = text.split("\n").map(line => line.trim());
    const goodNumOfLines = poemLines.length === 3;
    if (text && goodNumOfLines) {
      return (
        poemLines[0].split(" ").length === 5 &&
        poemLines[1].split(" ").length === 3 &&
        poemLines[2].split(" ").length === 5
      );
    } else {
      return false
    }
  }

  handleTextStuff = (event) => {
    this.setState({
      text: event.target.value,
      isValid: this.isValidPoem(event.target.value)
    })

  }

  render() {
    return (
      <div>
        <textarea rows="3" cols="60" value={this.state.text} onChange={this.handleTextStuff}/>
        {!this.state.isValid ? <div id="poem-validation-error" style={{ color: "red" }}>
          This poem is not written in the right structure!
        </div> : null}
      </div>
    );
  }
}

export default PoemWriter;
