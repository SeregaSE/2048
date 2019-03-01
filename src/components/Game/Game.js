import React, { Component } from 'react';
import PropTypes from 'prop-types';
import enhancer from './enhancer';
import Field from './components/Field';

class Game extends Component {
    componentDidMount() {
        const {
            gameActions,
            onKeyDown,
        } = this.props;

        gameActions.start(4);
        onKeyDown(this.getKeysListners());
    }

    componentWillUnmount() {
        const { removeKeyDown } = this.props;
        removeKeyDown(this.getKeysListners());
    }

    getKeysListners = () => {
        const {
            turnActions: {
                top,
                left,
                right,
                bottom,
            },
        } = this.props;

        return [
            {
                keyCode: 38,
                handler: top,
            },
            {
                keyCode: 37,
                handler: left,
            },
            {
                keyCode: 39,
                handler: right,
            },
            {
                keyCode: 40,
                handler: bottom,
            },
        ];
    };

    render() {
        const { numbers, game, positions } = this.props;
        return (
            <Field
                numbers={numbers}
                positions={positions}
                size={game.fieldSize}
            />
        );
    }
}

Game.propTypes = {
    game: PropTypes.shape({
        won: PropTypes.bool.isRequired,
        lost: PropTypes.bool.isRequired,
        fieldSize: PropTypes.number.isRequired,
    }).isRequired,
    numbers: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        value: PropTypes.number.isRequired,
        x: PropTypes.number.isRequired,
        y: PropTypes.number.isRequired,
        stacked: PropTypes.boolean,
    })).isRequired,
    positions: PropTypes.arrayOf(PropTypes.shape({
        x: PropTypes.number.isRequired,
        y: PropTypes.number.isRequired,
    })).isRequired,
    gameActions: PropTypes.shape({
        won: PropTypes.func.isRequired,
        load: PropTypes.func.isRequired,
        lost: PropTypes.func.isRequired,
        start: PropTypes.func.isRequired,
    }).isRequired,
    turnActions: PropTypes.shape({
        top: PropTypes.func.isRequired,
        left: PropTypes.func.isRequired,
        right: PropTypes.func.isRequired,
        bottom: PropTypes.func.isRequired,
    }).isRequired,
    onKeyDown: PropTypes.func.isRequired,
    removeKeyDown: PropTypes.func.isRequired,
};

export default enhancer(Game);
