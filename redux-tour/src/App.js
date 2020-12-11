import React,{Component} from "react";
import './App.css';
import { connect} from "react-redux";

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

const mapStateToProps = (state) => {
  return {
    age: state.age
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    onAgeUp : () => dispatch({type:"AGE_UP"}),
    onAgeDown: () => dispatch({type:"AGE_DOWN"}) 
  }
}

// export default App;
export default  connect(mapStateToProps,mapDispatchToProps)( App);
