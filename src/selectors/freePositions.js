import { createSelector } from 'reselect';
import numbersSelector from './numbers';
import positionsSelector from './positions';

const selector = createSelector(
    numbersSelector,
    positionsSelector,
    (numbers, positions) => positions.filter(position => !numbers
        .some(number => number.x === position.x && number.y === position.y)),
);

export default selector;
