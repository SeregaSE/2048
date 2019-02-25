import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import Value, { Text } from './Styled';
import pure from '../../../../hocs/pure';

class Number extends Component {
    state = {
        scale: true,
    };

    componentDidUpdate(prevProps) {
        if (prevProps.value !== this.props.value) {
            this.scale();
        }
    }

    scale() {
        this.setState({
            scale: !this.state.scale,
        });
    }

    render() {
        const {
            x,
            y,
            width,
            value,
        } = this.props;


        return (
            <CSSTransition
                appear
                mountOnEnter
                timeout={150}
                classNames="scale"
                in={this.state.scale}
            >
                <Value
                    x={x}
                    y={y}
                    width={width}
                    value={value}
                >
                    <Text width={width} value={value}>{value}</Text>
                </Value>
            </CSSTransition>
        );
    }
}

export default pure(Number);
