import { createSelector } from 'reselect';
import fieldSizeSelector from './fieldSize';
import getPositions from '../data/getPositions';

const selector = createSelector(
    fieldSizeSelector,
    fieldSize => getPositions(fieldSize),
);

export default selector;
