const initialState = {
    age : 20
    // history: []
}

//setting the state as default by initialState
const reducer = (state = initialState,action) => {
    // const newState = {...state};
    // if(action.type === "AGE_UP"){
    //     // return {...state,age:state.age+1};
    //     newState.age++;
    // }
    // if(action.type === "AGE_DOWN"){
    //     newState.age--;
    // }
    switch(action.type){
        // case "AGE_UP":
        //     // newState.age++;
        //     return{
        //         ...state,
        //         age: state.age + action.value
        //         // history: state.history.concat({
        //         //     id:Math.random(),
        //         //     age : state.age + action.value
        //         // })
        //     }
        //     // newState.age = state.age + action.value;
        //     // newState.history = state.history.concat({age:state.age + action.value})
        //     // break;
        case "AGE_UP_ASYNC":
        // newState.age++;
        return{
            ...state,
            age: state.age + action.value
            // history: state.history.concat({
            //     id:Math.random(),
            //     age : state.age + action.value
            // })
        }
        // newState.age = state.age + action.value;
        // newState.history = state.history.concat({age:state.age + action.value})
        // break;
        case "AGE_DOWN":
            // newState.age--;
            return{
                ...state,
                age:state.age -action.value
                // history: state.history.concat({
                //     id:Math.random(),
                //     age:state.age - action.value
                // })
            }
            // newState.age = state.age - action.value;
            // newState.history = state.history.concat({age:state.age - action.value})
            // break;

        // case "DEL_ITEM":
        //     return {
        //         ...state,
        //         history: state.history.filter((el) => el.id !== action.key )
        //     }
        default:
            return state;
    }
    // return newState;
}

export default reducer;
//we export the reducer so that we can use it in another files