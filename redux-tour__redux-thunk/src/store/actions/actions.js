//action creators
//we are converting all the actions to action creators

// export const ageUp = (val) => {
//     // return {type:"AGE_UP",value: 1};
//     return {type:"AGE_UP",value: val};
// }

export const loading = () => {
    return {type: "LOADING"}
}
export const ageUpAsync = (val) => {
    // return {type:"AGE_UP",value: 1};
    return {type:"AGE_UP",value: val};
}
export const ageUp = (val) => {
    // return {type:"AGE_UP",value: 1};
    return dispatch => {
        dispatch(loading()); //syncrhonous
        setTimeout(() => {
            val++;
            dispatch(ageUpAsync(val));
        },5000) //asynchronous
    }
}

export const ageDown = (val) => {
    // return {type:"AGE_DOWN",value: 1};
    return {type:"AGE_DOWN",value: val};
}