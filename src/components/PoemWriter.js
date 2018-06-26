import React from "react";

const isValidPoem = poem => {
  const poemLines = poem.split("\n").map(line => line.trim());
  const isRightAmountOfLines = poemLines.length === 3;
  if (poem && isRightAmountOfLines) {
    return (
      poemLines[0].split(" ").length === 5 &&
      poemLines[1].split(" ").length === 3 &&
      poemLines[2].split(" ").length === 5
    );
  } else {
    return false;
  }
};

class PoemWriter extends React.Component {
  constructor() {
    super();
    this.state = {
      content: "",
      isValid: true,
    };
  }

  setPoemContent = event => {
    const content = event.target.value;
    this.setState({
      content,
      isValid: isValidPoem(content),
    });
  };

  render() {
    return (
      <div>
        <textarea
          rows="3"
          cols="60"
          value={this.state.content}
          onChange={this.setPoemContent}
        />
        {!this.state.isValid ? (
          <div id="poem-validation-error" style={{ color: "red" }}>
            This poem is not written in the right structure!
          </div>
        ) : null}
      </div>
    );
  }
}

// class PoemWriter extends React.Component {
//   constructor() {
//     super();
//
//     this.state = {
//       value: ''
//     };
//   }
//
//   handleChange = (event) => {
//     this.setState({value: event.target.value})
//   }
//
//   render() {
//     let poemArray = this.state.value.split("\n")
//     let firstLine = [' ']
//     let secondLine = [' ']
//     let thirdLine = [' ']
//     if (poemArray.length === 3 ) {
//       firstLine = poemArray[0].split(' ')
//       console.log(firstLine)
//       secondLine = poemArray[1].split(' ')
//       thirdLine = poemArray[2].split(' ')
//     }
//     console.log(poemArray)
//     return (
//       <div>
//         <textarea rows="3" cols="60" value={this.state.value} onChange = {this.handleChange} />
//         {(poemArray.length === 3 && firstLine.length === 5 && secondLine.length === 3 && thirdLine.length === 5 && !firstLine.includes("") && !secondLine.includes("") && !thirdLine.includes("")) ? null: <div id="poem-validation-error" style={{ color: "red" }}>
//           This poem is not written in the right structure!
//         </div> }
//
//       </div>
//     );
//   }
// }

export default PoemWriter;
