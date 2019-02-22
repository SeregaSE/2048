import React, { Component } from 'react';

class Appear extends React {
    
    render() {
        const { children: Child } = this.props;
        return <Child {...this.props} />;
    }
}

export default Appear;
