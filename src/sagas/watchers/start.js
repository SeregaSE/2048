import { put, take } from 'redux-saga/effects';
import { numbers } from '../../actions';
import { START } from '../../actions/constants';

function* startWatcher() {
    while (true) {
        yield take(START);
        yield put(numbers.add());
        yield put(numbers.add());
    }
}

export default startWatcher;
