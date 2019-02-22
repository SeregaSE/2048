import {
    WON,
    LOST,
    START,
    LOAD,
} from '../actions/constants';

const initialState = {
    won: false,
    lost: false,
    fieldSize: 4,
};

const game = (state = initialState, action) => {
    switch (action.type) {
    case WON:
        return {
            ...state,
            won: true,
        };
    case LOST:
        return {
            ...state,
            lost: true,
        };
    case START:
        return {
            ...initialState,
        };
    case LOAD:
        return {
            ...action.payload.game,
        };
    default:
        return state;
    }
};

export default game;
