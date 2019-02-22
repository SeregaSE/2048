
import createRow from './createRow';

const createMatrix = (size) => {
    const matrix = [];

    for (let y = 0; y < size; y += 1) {
        matrix.push(createRow(y, size));
    }

    return matrix;
};

export default createMatrix;
