const compose = (...fns) => (...args) => fns
    .reduce((value, fn) => fn.apply(fn, Array.isArray(value) ? value : [value]), args);

export default compose;
