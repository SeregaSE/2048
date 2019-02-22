import { fork, take } from 'redux-saga/effects';
import handler from '../handlers/remove';
import { REMOVE } from '../../actions/constants';

function* removeWatcher() {
    while (true) {
        const action = yield take(REMOVE);
        yield fork(handler, action);
    }
}

export default removeWatcher;
