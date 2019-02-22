import { all, fork, take } from 'redux-saga/effects';
import {
    WON,
    LOST,
    START,
    LOAD,
} from '../actions/constants';
import moveWatcher from './watchers/move';
import startWatcher from './watchers/start';
import addWatcher from './watchers/add';
import removeWatcher from './watchers/remove';

function* rootSaga() {
    yield all([
        fork(addWatcher),
        fork(startWatcher),
    ]);

    yield take([START, LOAD]);

    yield all([
        fork(moveWatcher),
        fork(removeWatcher),
    ]);

    yield take([WON, LOST]);
}

export default rootSaga;
