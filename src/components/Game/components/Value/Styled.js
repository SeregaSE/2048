import styled from 'styled-components';
import StyledSlot from '../Slot/Styled';
import colors from './colors';

const xTranslate = props => `calc(${100 * props.x}% + ${props.theme.spacing.unit * props.x}px)`;
const yTranslate = props => `calc(${100 * props.y}% + ${props.theme.spacing.unit * props.y}px`;
const fontSizeCoeff = (props) => {
    const l = props.value;

    if (l > 999) {
        return 25;
    }

    if (l > 99) {
        return 3;
    }

    return 35;
};

const Value = styled(StyledSlot)`
    position: absolute;
    top: 0;
    left: 0;
    z-index: ${props => props.theme.layers.values + props.value / 2};
    background-color: ${props => colors[props.value].background};
    transform: translate(${props => xTranslate(props)}, ${props => yTranslate(props)})) scale(1);
    transition: transform .1s ease-in-out;

    &.scale-appear {
      transform: translate(${props => xTranslate(props)}, ${props => yTranslate(props)})) scale(0);
      transition: transform .25s ease-in;
    }

    &.scale-enter, &.scale-exit {
      transform: translate(${props => xTranslate(props)}, ${props => yTranslate(props)})) scale(.9);
      transition: transform .15s ease-in;
    }

    &.scale-enter-active, &.scale-exit-active {
      transform: translate(${props => xTranslate(props)}, ${props => yTranslate(props)})) scale(1.1);
    }

    &.scale-appear-active, &.scale-enter-done, &.scale-enter-done, &.scale-exit-done {
      transform: translate(${props => xTranslate(props)}, ${props => yTranslate(props)})) scale(1);
    }
`;

export const Text = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    color: ${props => colors[props.value].color};
    font-size: calc(123.75px * .${props => fontSizeCoeff(props)});
    font-weight: 700;

    ${props => props.theme.media.sm`
        font-size: calc((${props.width}vw - ${props.theme.spacing.unit}px) * .${fontSizeCoeff(props)});
    `}
`;

export default Value;
