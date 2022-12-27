import {SET_FIRSTNAME, SET_LASTNAME} from "../types/userInfoType";

const initialState = {
    firstName: "first",
    lastName: "last",
}

const userInfoReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_FIRSTNAME:
            return {
                ...state,
                firstName: action.value
            }
        case SET_LASTNAME:
            return {
                ...state,
                lastName: action.value
            }
        default:
            return state;
    }
}

export default userInfoReducer;