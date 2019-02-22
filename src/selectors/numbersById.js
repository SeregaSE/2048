import { createSelector } from 'reselect';
import numbersSelector from './numbers';

const selector = createSelector(
    numbersSelector,
    numbers => numbers.sort((a, b) => a.id - b.id),
);

export default selector;
