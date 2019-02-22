import React, { Fragment } from 'react';
import GlobalStyle from '../GlobalStyle/GlobalStyle';
import Layout from '../Layout/Layout';

const Root = () => {
    console.log('ROOT');

    return (
    <Fragment>
        <GlobalStyle />
        <Layout />
    </Fragment>
)};

export default Root;
