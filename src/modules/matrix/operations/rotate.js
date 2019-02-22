
import rotator from './rotator';
import createMatrix from '../base/createMatrix';

const rotate = (matrix, direction) => {
    const next = createMatrix(matrix.length);

    for (let y = 0; y < matrix.length; y += 1) {
        for (let x = 0; x < matrix[y].length; x += 1) {
            next[y][x] = rotator(matrix, x, y, direction);
        }
    }

    return next;
};

export default rotate;
