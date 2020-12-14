/**
 * copy the code from reducer.js 
 * and paste it in reducerA.js
 * after that we are only going to have the state of a, and actions of a
 */
const initialState = {
    a:1
}

const reducerA = (state = initialState,action) => {
    if(action.type === "UPDATE_A"){
        return {
            ...state,
            a:state.a + state.b
        }
    }
    return state;
}

export default reducerA;