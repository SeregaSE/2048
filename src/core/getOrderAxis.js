export default (direction) => {
    if (direction === 'LEFT' || direction === 'RIGHT') {
        return 'x';
    }

    // TOP || BOTTOM
    return 'y';
};
