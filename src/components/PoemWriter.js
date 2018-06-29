import React from "react";

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      value: ''
    };
  }

  updateTextarea = (event) => {
    // console.log(event.target.value.split('\n').length)
    this.setState({
      value: event.target.value
    })
  }

  displayError = () => {
    // if (this.state.value.split('\n')[1]) {
    //   console.log(this.state.value.split('\n')[1].split(" ").length)
    // }
    if (this.state.value.split('\n').length !== 3 || this.state.value === '' || this.state.value.split('\n')[0].split(" ").filter((val) => val).length !== 5 || this.state.value.split('\n')[1].split(" ").filter((val) => val).length !== 3 || this.state.value.split('\n')[2].split(" ").filter((val) => val).length !== 5 ) {
      return (
        <div id="poem-validation-error" style={{ color: "red" }}>
          This poem is not written in the right structure!
        </div>
      )
    }

  }

  render() {
    return (
      <div>
        <textarea rows="3" cols="60" value={this.state.value} onChange={this.updateTextarea}/>
        {this.displayError()}
      </div>
    );
  }
}

export default PoemWriter;
