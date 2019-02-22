import {
    WON,
    LOAD,
    LOST,
    START,
} from './constants';
import create from './create';

export const won = create(WON);
export const load = create(LOAD, 'game', 'numbers', 'score');
export const lost = create(LOST);
export const start = create(START, 'fieldSize');

export default {
    won,
    load,
    lost,
    start,
};
