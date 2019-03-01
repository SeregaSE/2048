export default (fieldSize) => {
    const positions = [];

    for (let y = 0; y < fieldSize; y += 1) {
        for (let x = 0; x < fieldSize; x += 1) {
            positions.push({ y, x });
        }
    }

    return positions;
};
