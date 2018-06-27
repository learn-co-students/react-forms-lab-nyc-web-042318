import React from "react";

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      poem: ""
    };
  }

  mixTape(poem){
    if(poem.length !== 3) return false;
    if(poem[0].trim().split(" ").length > 5 ||poem[1].trim().split(" ").length > 3 ||poem[2].trim().split(" ").length > 5){
      return false;
    }
    return true;
  }

  changePoem = event => {
    // event.preventDefault();
    this.setState({poem: event.target.value},this.asyncHandle);

  }

  asyncHandle=()=>{
    const poem = this.state.poem.split('\n');

    console.log(poem);
  }

  goodPoem(){
    if(this.state.poem){
      let good = this.mixTape(this.state.poem.split('\n'))
      if(good) return;
    }
    return(
      <div id="poem-validation-error" style={{ color: "red" }}>
        This poem is not written in the right structure!
      </div>
    )
  }

  render() {
    return (
      <div>
        <textarea rows="3" cols="60"  onChange = {this.changePoem}/>
        {this.goodPoem()}
      </div>
    );
  }
}

export default PoemWriter;
