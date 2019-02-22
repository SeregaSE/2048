export default (type, ...fields) => (...args) => ({
    type,
    payload: fields.reduce((acc, field, i) => ({
        ...acc,
        [field]: args[i],
    }), {}),
});
