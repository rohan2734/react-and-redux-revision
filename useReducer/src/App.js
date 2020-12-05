import React,{useReducer,useState} from "react";
import './App.css';

function reducer(state,action){ //current state, action: function that gets called, when the value is stored here 
  // switch(action.type){
  //   case "INCREMENT":
  //     return state+1;//state++ doesnt work, because we dont want to mutate, we want to create new state variable
  //   case "DECREMENT":
  //     return state-1;
  //   default:
  //     return state;
  // }
  switch(action.type){
    case "ADD-TODO":
      return {todos:[...state.todos,{text:action.payload, completed:false}]}
    case "TOGGLE-TODO":
      return {
        todos: state.todos.map((todo,index) => 
          index === action.index ? 
          {...todo,completed : !todo.completed} 
          : todo
        )
      }
      default:
      return state;
  }
}

function App() {

  // const [count,dispatch] = useReducer(reducer,0); //function, initialState
  const [{todos},dispatch] = useReducer(reducer,{
    todos:[],
    todoCoount:0
  }); 
  //state.todos or {todos}

  const [text,setText] = useState();
  return (
    // <div >
    //   <div> count: {count}</div>
    //   <button onClick={() => dispatch({type:"INCREMENT"})}>Increment</button> 
    //   {/* if we dispatch 1, the action value will be 1 */}
    //   {/* <button onClick={() => dispatch(2)}>Decrement</button> */}
    //   <button onClick={() => dispatch({type:"DECREMENT"})}>Decrement</button>
    // </div>
    <div>
      <form 
        onSubmit={e => {
        e.preventDefault();
        dispatch({type:"ADD-TODO",payload: text});
        setText("");
      }}>
     
        <input value={text} onChange={e => setText(e.target.value)} />
      </form>
      <pre>
        {/* {JSON.stringify(todos,null,2)} */}
        {todos.map( (todo,index) => {
          return (<div 
            key={todo.text} 
            onClick={
              () =>dispatch({
                type:"TOGGLE-TODO",
                index:index
                }) 
              } 
             style={{
               textDecoration: todo.completed ? "line-through" : ""
             }} >
            {todo.text}
          </div>
          )
        })}
      </pre>
    </div>
  );
}

export default App;
