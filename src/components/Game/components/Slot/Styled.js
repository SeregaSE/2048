import styled from 'styled-components';

const StyledSlot = styled.div`
    width: calc(${props => props.width}% - ${props => props.theme.spacing.unit}px);
    margin: ${props => props.theme.spacing.unit / 2}px;
    padding-top: calc(${props => props.width}% - ${props => props.theme.spacing.unit}px);
    border-radius: 4px;
    box-shadow: 0 0 30px 10px rgba(243, 215, 116, 0), inset 0 0 0 1px rgba(255, 255, 255, 0);
    position: relative;
    background-color: ${props => props.theme.colors.primary};
`;

export default StyledSlot;
