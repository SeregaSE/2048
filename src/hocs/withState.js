import { connect } from 'react-redux';
import argToArr from '../utils/argToArr';

export const makeMapStateToProps = options => state => argToArr(options)
    .reduce((acc, item) => ({
        ...acc,
        [item.prop]: item.selector(state),
    }), {});

const withState = selectors => Component => connect(makeMapStateToProps(selectors))(Component);

export default withState;
