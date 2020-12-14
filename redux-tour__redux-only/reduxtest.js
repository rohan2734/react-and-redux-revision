const {createStore } = require("redux"); //createStore will allow us to create a store

const initialState = {
    age:21
};

const myReducer = (state = initialState,action) => { //reducer takes state, and action
    const newState = {...state};

    if(action.type === "ADD"){
        newState.age += action.val;
    }
    if(action.type === "SUBTRACT"){
        newState.age -= action.val;
    }
    return newState; // it is almost like  a setState
    //if the action cannot find a type , then it returns the same state
}/**
 * in react we dont mutate the state, directly,
 * so if we want to change the state, we create a copy of the state
 */


const store  = createStore(myReducer); //store has state, and reducer
//and pass the reducer to complete the store

store.subscribe(() => {
    console.log(store.getState());
})
//store.subscribe runs whenever there is a change in the state
//writing the action
// console.log("initialState" + JSON.stringify(store.getState()));

store.dispatch({ type: "ADD",val: 10 }); //when this line executes, this dispatches an action
// console.log("after add" + JSON.stringify(store.getState()));


store.dispatch({type:"SUBTRACT" ,val:5});
// console.log("after subtract" + JSON.stringify(store.getState()))