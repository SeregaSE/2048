import { put, select } from 'redux-saga/effects';
import { numbers } from '../../actions';
import gameSelector from '../../selectors/game';
import numbersSelector from '../../selectors/numbers';
import core from '../../core';

function* moveHandler(action) {
    const current = yield select(numbersSelector);
    const { fieldSize } = yield select(gameSelector);
    const next = core.move(current, action.payload.direction, fieldSize);

    if (core.different(current, next)) {
        yield put(numbers.set(next));
        yield put(numbers.add());
    }
}

export default moveHandler;
