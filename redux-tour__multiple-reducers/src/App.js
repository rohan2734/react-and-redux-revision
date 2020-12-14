import './App.css';
import React, {Component} from "react";
import {connect} from "react-redux";


class App extends Component{
  render(){
    return(
      <div className="App">
        <div className="col">
          <div><span>A:</span><span>{this.props.a}</span></div>
          <button onClick={this.props.updateA}>Update A</button>
        </div>
        <div className="col">
          <div><span>B:</span><span>{this.props.a}</span></div>
          <button onClick={this.props.updateB}>Update B</button>
        </div>
      </div>
    )
  }
}

const mapStoreToProps = (store) => {
  return {
    a:store.a,
    b:store.b
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateA : () => dispatch({type:"UPDATE_A"}),
    updateB: () => dispatch({type:"UPDATE_B"})
  }
}

// export default App;
export default connect(mapStoreToProps,mapDispatchToProps)(App);
