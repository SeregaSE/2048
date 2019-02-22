import { fork, take } from 'redux-saga/effects';
import handler from '../handlers/add';
import { ADD } from '../../actions/constants';

function* addWatcher() {
    while (true) {
        const action = yield take(ADD);
        yield fork(handler, action);
    }
}

export default addWatcher;
