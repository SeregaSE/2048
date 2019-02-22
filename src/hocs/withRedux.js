import { connect } from 'react-redux';
import { makeMapStateToProps } from './withState';
import { makeMapDispatchToProps } from './withActions';

const widthRedux = (selectors, actions, mergeProps = null) => {
    const mapStateToProps = makeMapStateToProps(selectors);
    const mapDispatchToProps = makeMapDispatchToProps(actions);
    return component => connect(mapStateToProps, mapDispatchToProps, mergeProps)(component);
};

export default widthRedux;
