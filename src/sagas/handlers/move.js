import { put, select } from 'redux-saga/effects';
import { numbers } from '../../actions';
import numbersSelector from '../../selectors/numbers';
import move from '../../data/move';

function* moveHandler(action) {
    const current = yield select(numbersSelector);
    const next = move(current, action.payload.direction);
    yield put(numbers.set(next));
    yield put(numbers.add());
}

export default moveHandler;
