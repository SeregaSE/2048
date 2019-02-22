import {
    ADD_NUMBER,
    SET_NUMBERS,
} from '../actions/constants';

const initialState = [];

const numbers = (state = initialState, action) => {
    switch (action.type) {
    case ADD_NUMBER:
        return [
            ...state,
            action.payload.number,
        ];
    case SET_NUMBERS:
        return [
            ...action.payload.numbers,
        ];
    default:
        return state;
    }
};

export default numbers;
