import gameSelector from '../../selectors/game';
import scoreSelector from '../../selectors/score';
import numbersSelector from '../../selectors/numbers';
import positionsSelector from '../../selectors/positions';
import {
    game,
    turn,
} from '../../actions';
import withRedux from '../../hocs/withRedux';
import keyboardServiceProvider from '../../hocs/keyboardServiceProvider';

const withReduxEnhancer = withRedux(
    [
        {
            prop: 'game',
            selector: gameSelector,
        },
        {
            prop: 'numbers',
            selector: numbersSelector,
        },
        {
            prop: 'score',
            selector: scoreSelector,
        },
        {
            prop: 'slots',
            selector: positionsSelector,
        },
    ],
    [
        {
            prop: 'gameActions',
            actions: game,
        },
        {
            prop: 'turnActions',
            actions: turn,
        },
    ],
);

export default Component => withReduxEnhancer(keyboardServiceProvider(Component));
