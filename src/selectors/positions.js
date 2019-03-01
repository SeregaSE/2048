import { createSelector } from 'reselect';
import fieldSizeSelector from './fieldSize';
import core from '../core';

const selector = createSelector(
    fieldSizeSelector,
    fieldSize => core.positions(fieldSize),
);

export default selector;
