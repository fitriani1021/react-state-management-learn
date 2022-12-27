import {createStore, combineReducers} from 'redux';
import counterReducer from "./reducers/CounterReducer";
import userInfoReducer from "./reducers/UserInfoReducer";

const rootReducer = combineReducers(
    // to set more than one reducer
    {
        // value as object
        counter: counterReducer,
        userInfo: userInfoReducer
    }
)
const store = createStore(rootReducer);

export default store;
