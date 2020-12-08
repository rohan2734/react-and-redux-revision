import React,{Component} from "react";
import './App.css';

class App extends Component{  
  // state = {
  //   age: 21
  // }
  // onAgeUp = () => {
  //   this.setState({
  //     ...this.state,
  //     age: ++this.state.age
  //   })
  // }
  // onAgeDown = () => {
  //   this.setState({
  //     ...this.state,
  //     age: --this.state.age
  //   })
  // }
  
  render(){
    return(
      <div className="App">
        <div>Age: <span>{this.state.age}</span></div>
        <button onClick={this.onAgeUp}>Age UP</button>
        <button onClick={this.onAgeDown}>Age Down</button>
      </div>
    )
  }

}

export default App;
