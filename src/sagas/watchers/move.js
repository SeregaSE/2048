import { fork, take } from 'redux-saga/effects';
import handler from '../handlers/move';
import { MOVE } from '../../actions/constants';

function* moveWatcher() {
    while (true) {
        const action = yield take(MOVE);
        yield fork(handler, action);
    }
}

export default moveWatcher;
