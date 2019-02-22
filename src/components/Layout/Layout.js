import React from 'react';
import StyledLayout from './Styled';
import Header from '../Header';
import Main from '../Main';
import Footer from '../Footer';

const Layout = props => (
    <StyledLayout {...props}>
        <h1> HEADER </h1>{/* <Header /> */}
        <Main />
        <Footer />
    </StyledLayout>
);

export default Layout;
