import {
    ADD,
    ADD_NUMBER,
    SET_NUMBERS,
} from './constants';
import create from './create';

const add = create(ADD);
const addToStore = create(ADD_NUMBER, 'number');
const set = create(SET_NUMBERS, 'numbers');

export default {
    add,
    addToStore,
    set,
};
