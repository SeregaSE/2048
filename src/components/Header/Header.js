import React from 'react';
import StyledHeader from './Styled';

const Header = props => {
    console.log('HEADER');
    return (
    <StyledHeader {...props}>
        Header
    </StyledHeader>
)
};

export default Header;
