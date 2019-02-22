import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import argToArr from '../utils/argToArr';

export const makeMapDispatchToProps = options => dispatch => argToArr(options)
    .reduce((acc, item) => ({
        ...acc,
        [item.prop]: bindActionCreators(item.actions, dispatch),
    }), {});

const withActions = actions => Component => connect(
    null,
    makeMapDispatchToProps(actions),
)(Component);

export default withActions;
