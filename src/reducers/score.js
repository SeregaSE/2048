import {
    START,
    LOAD,
} from '../actions/constants';

const initialState = 0;

const score = (state = initialState, action) => {
    switch (action.type) {
    case START:
        return initialState;
    case LOAD:
        return action.payload.score;
    default:
        return state;
    }
};

export default score;
