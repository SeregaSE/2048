import React, { PureComponent } from 'react';

const pure = Component => class WithPureComonent extends PureComponent {
    render() {
        return <Component {...this.props} />;
    }
};

export default pure;
