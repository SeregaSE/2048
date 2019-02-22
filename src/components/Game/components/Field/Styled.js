import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 100%;
    padding: ${props => props.theme.spacing.unit / 2}px;
    border-radius: 4px;
    box-shadow: 0 0 30px 10px rgba(243, 215, 116, 0), inset 0 0 0 1px rgba(255, 255, 255, 0);
    background-color: ${props => props.theme.colors.background};

    ${props => props.theme.media.sm`
        border-radius: 0;
    `}
`;

export const Content = styled.div`
    display: flex;
    flex-flow: row wrap;
    position: relative;
`;
