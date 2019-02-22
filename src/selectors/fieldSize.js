import { createSelector } from 'reselect';
import gameSelector from './game';

const selector = createSelector(
    gameSelector,
    game => game.fieldSize,
);

export default selector;
