import {
    SET_NUMBERS,
} from '../actions/constants';

const initialState = 0;

const score = (state = initialState, action) => {
    switch (action.type) {
    // case SET_NUMBERS:
    //     return state + action.payload.numbers.reduce((acc, number) => {
    //         if (number.stacked) {
    //             return acc + number.value * 2;
    //         }

    //         return acc;
    //     }, 0);
    default:
        return state;
    }
};

export default score;
