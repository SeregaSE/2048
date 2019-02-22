const argToArr = (arg) => {
    if (Array.isArray(arg)) {
        return arg;
    }

    return [arg];
};

export default argToArr;
