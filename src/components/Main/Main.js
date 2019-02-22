import React from 'react';
import StyledMain from './Styled';
import Game from '../Game';

const Main = props => (
    <StyledMain {...props}>
        <Game />
    </StyledMain>
);

export default Main;
