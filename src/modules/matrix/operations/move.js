import stack from './stack';
import rotate from './rotate';
import {
    TOP,
    LEFT,
    RIGHT,
    BOTTOM,
} from '../constants';

const move = (matrix, direction) => matrix.map((row) => {
    if (process.env.NODE_ENV === 'test') {
        return stack(row, direction);
    }

    return stack(row, direction, n => n.value);
});

export default (matrix, direction) => {
    switch (direction) {
    case TOP: {
        const transformed = move(rotate(matrix, LEFT), LEFT);
        return rotate(sum(transformed, LEFT), RIGHT);
    }
    case LEFT:
        return sum(move(matrix, direction), direction);
    case RIGHT:
        return sum(move(matrix, direction), direction);
    case BOTTOM: {
        const transformed = move(rotate(matrix, LEFT), RIGHT);
        return rotate(sum(transformed, RIGHT), RIGHT);
    }
    default:
        throw new Error('unexpected direction');
    }
};
