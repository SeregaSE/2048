import { put, select } from 'redux-saga/effects';
import random from '../../utils/random';
import { numbers } from '../../actions';
import createNumber from '../../data/create';
import freeSlotsSelector from '../../selectors/freeSlots';

function* removeHandler() {
    // const freeSlots = yield select(freeSlotsSelector);
    // const slot = freeSlots[random(0, freeSlots.length - 1)];
    // const value = [2, 2, 2, 2, 2, 4][random(0, 5)];
    // const number = createNumber(slot.x, slot.y, value);
    // yield put(numbers.addToStore(number));
}

export default removeHandler;
