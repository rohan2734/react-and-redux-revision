const initialState = {
    age : 21
}

//setting the state as default by initialState
const reducer = (state = initialState,action) => {
    const newState = {...state};

    return newState;
}

export default reducer;
//we export the reducer so that we can use it in another files