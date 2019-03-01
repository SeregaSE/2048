import getOrderAxis from './getOrderAxis';
import getSelectAxis from './getSelectAxis';

export default (numbers, direction, size) => {
    const matrix = [];
    const orderBy = getOrderAxis(direction); // x || y
    const selectBy = getSelectAxis(direction); // x || y

    for (let i = 0; i < size; i += 1) {
        /* !n.stacked removes items which were stacked at previous turn */
        matrix[i] = numbers
            .filter(n => n[selectBy] === i && !n.stacked)
            .sort((a, b) => a[orderBy] - b[orderBy]);
    }

    return matrix;
};
