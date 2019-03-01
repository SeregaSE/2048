import top from './top';
import left from './left';
import right from './right';
import bottom from './bottom';
import numbersToMatrix from '../formatters/numbersToMatrix';
import matrixToNumbers from '../formatters/matrixToNumbers';

const stack = {
    TOP: top,
    LEFT: left,
    RIGHT: right,
    BOTTOM: bottom,
};

export default (numbers, direction, size) => {
    const matrix = numbersToMatrix(numbers, direction, size);
    return matrixToNumbers(matrix.map(row => stack[direction](row)));
};
