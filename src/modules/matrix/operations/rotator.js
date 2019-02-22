// Поворачивает матрицу на 90 градусов в заданном направлении
import { LEFT, RIGHT } from '../constants';

const sorter = (matrix, x, y, direction) => {
    if (direction === LEFT) {
        return matrix[x][matrix.length - 1 - y];
    }

    if (direction === RIGHT) {
        return matrix[matrix.length - 1 - x][y];
    }

    throw new Error('unexpected direction');
};

export default sorter;
