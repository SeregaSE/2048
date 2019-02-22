

import React from 'react';

const mapProps = propsMapper => Component => props => <Component {...propsMapper(props)} />;

export default mapProps;
