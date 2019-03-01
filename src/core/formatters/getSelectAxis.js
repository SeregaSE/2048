export default (direction) => {
    if (direction === 'LEFT' || direction === 'RIGHT') {
        return 'y';
    }

    // TOP || BOTTOM
    return 'x';
};
