import { put, select } from 'redux-saga/effects';
import random from '../../utils/random';
import { numbers } from '../../actions';
import core from '../../core';
import freeSlotsSelector from '../../selectors/freeSlots';

function* addHandler() {
    const freeSlots = yield select(freeSlotsSelector);
    const slot = freeSlots[random(0, freeSlots.length - 1)];
    const value = [2, 2, 2, 2, 2, 4][random(0, 5)];
    const number = core.create({
        x: slot.x,
        y: slot.y,
        value,
    });
    yield put(numbers.addToStore(number));
}

export default addHandler;
