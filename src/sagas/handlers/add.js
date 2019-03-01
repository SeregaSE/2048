import { put, select } from 'redux-saga/effects';
import random from '../../utils/random';
import { numbers } from '../../actions';
import core from '../../core';
import freePositionsSelector from '../../selectors/freePositions';

function* addHandler() {
    const freePositions = yield select(freePositionsSelector);
    const position = freePositions[random(0, freePositions.length - 1)];
    const value = random(1, 100) > 9 ? 2 : 4;

    const number = core.create({
        x: position.x,
        y: position.y,
        value,
    });

    yield put(numbers.addToStore(number));
}

export default addHandler;
