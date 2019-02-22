let uuid = 0;

const createItem = (x, y, value) => ({
    // eslint-disable-next-line
    id: ++uuid,
    value: value || 0,
    position: { x, y },
});

export default createItem;
