/**
 * now when we dispatch the action, the middleware captures that, it is nothing but  a watcher
 * it will take care of it, as long as , we pass a run funciton on the sagaMiddleWare
 * so we need to create a funciton, that does that
 */
/**
 * this is not a normal  function,
 * this is a generator function
 * and if we have a generator, we need to call yield, 
 * and it needs to observe  every action, and use takeEvery("AGE_UP")
 * and once it catches, we need to call ageUpAsync
 * and ageUpAsync is also a generator function
 * and again , we want to dispatch another action, in the ageUpAsync
 * and so we use put, and this would do the same thing as dispatch
 * 
 * and for async code, we use delay, and delay is like a setTimeout
 * and again we need to write the age_up_async case
 * 
 * age up will never reach, because we are catching it , and we are not letting age_up go further,
 * so we rename age_up as age_up_async on the reducer
 * 
 * so the reason, we dispatched a new action, is , when we dispatch the same action, instead of age_up_async,
 * the ageUpAsync function would again catch it, dispatch age_up, and it would result in infinite loop
 * 
 * so once you catch one action, we shouldnt dispatch the same aciton, otherwise it would result in infinite loop
 * 
 * now about, what is generator function
 * it would first execute the dely and then the put,and we have to use * at end of the function
 */


import {takeEvery,takeLatest,put,delay} from "redux-saga/effects";

function* ageUpAsync(){
    yield delay(4000);
    yield put({type:"AGE_UP_ASYNC",value:1});
}

export function* watchAgeUp(){
    // yield takeEvery("AGE_UP",ageUpAsync);
    yield takeLatest("AGE_UP",ageUpAsync);
}