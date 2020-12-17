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
        {/* <div>Age: <span>{this.state.age}</span></div>
        <button onClick={this.onAgeUp}>Age UP</button>
        <button onClick={this.onAgeDown}>Age Down</button> */}
        <div>Age: <span>{this.props.age}</span></div>
        <button onClick={this.props.onAgeUp}>Age UP</button>
        <button onClick={this.props.onAgeDown}>Age Down</button>
        <hr/>

        {/* <div>History</div>
        <div>
          <ul>
            {
              this.props.history.map((el) => (
                <li key={el.id} onClick={() => this.props.onDelItem(el.id)}>
                  {el.age}
                </li>
              ))
            }
          </ul>
        </div>
      
      </div> */}
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    age: state.age
    // history : state.history
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    onAgeUp : () => dispatch({type:"AGE_UP",value: 1}),
    onAgeDown: () => dispatch({type:"AGE_DOWN",value: 1})
    // onDelItem: (id) => dispatch({type:"DEL_ITEM",key: id})
  }
}

// export default App;
export default  connect(mapStateToProps,mapDispatchToProps)(App);
