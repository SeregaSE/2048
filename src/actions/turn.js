import {
    MOVE,
    CANCEL,
    directions,
} from './constants';
import create from './create';

const move = create(MOVE, 'direction');
const cancel = create(CANCEL);

export default {
    cancel,
    ...directions.reduce((acc, direction) => ({
        ...acc,
        [direction.toLowerCase()]: () => move(direction),
    }), {}),
};
