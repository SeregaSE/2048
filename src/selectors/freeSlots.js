import { createSelector } from 'reselect';
import numbersSelector from './numbers';
import positionsSelector from './positions';

const selector = createSelector(
    numbersSelector,
    positionsSelector,
    (numbers, positions) => positions.filter(position => !numbers
        .some(n => n.position.x === position.x && n.position.y === position.y)),
);

export default selector;
