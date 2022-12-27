import {SET_FIRSTNAME, SET_LASTNAME} from "../types/userInfoType";

export const handleFirstName = (value) => {
    return {
        type: SET_FIRSTNAME,
        value: value
    }
}

export const handleLastName = (value) => {
    return {
        type: SET_LASTNAME,
        value: value
    }
}