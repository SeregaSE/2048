import {
    ADD,
    REMOVE,
    ADD_NUMBER,
    SET_NUMBERS,
} from './constants';
import create from './create';

const add = create(ADD);
const remove = create(REMOVE);
const addToStore = create(ADD_NUMBER, 'number');
const set = create(SET_NUMBERS, 'numbers');

export default {
    add,
    addToStore,
    set,
    remove,
};
