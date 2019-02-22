import { combineReducers } from 'redux';
import game from './game';
import score from './score';
import numbers from './numbers';

export default combineReducers({
    game,
    score,
    numbers,
});
