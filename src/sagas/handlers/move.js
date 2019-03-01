import { put, select } from 'redux-saga/effects';
import { numbers } from '../../actions';
import numbersSelector from '../../selectors/numbers';
import core from '../../core';

function* moveHandler(action) {
    const current = yield select(numbersSelector);
    const next = core.move(current, action.payload.direction, 4);
    yield put(numbers.set(next));
    yield put(numbers.add());
}

export default moveHandler;
