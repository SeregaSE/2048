import createItem from './createItem';

const createRow = (y, size) => {
    const row = [];

    for (let x = 0; x < size; x += 1) {
        row.push(createItem(x, y));
    }

    return row;
};

export default createRow;
