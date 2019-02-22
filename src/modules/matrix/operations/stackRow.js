/* eslint-disable */
import stackRowLeft from './stackRowLeft';
import stackRowRight from './stackRowRight';
import { LEFT, RIGHT } from '../constants';

export default (row, direction) => {
    if (direction === LEFT) {
        return stackRowLeft(row);
    }

    if (direction === RIGHT) {
        return stackRowRight(row);
    }

    throw new Error('unexpected direction');
};
