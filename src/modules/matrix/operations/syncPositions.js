/* WARNING Не создает новый объект */
const syncItemPosition = (matrix) => {
    for (let y = 0; y < matrix.length; y += 1) {
        for (let x = 0; x < matrix[y].length; x += 1) {
            // eslint-disable-next-line
            matrix[y][x].position.y = y;
            // eslint-disable-next-line
            matrix[y][x].position.x = x;
        }
    }

    return matrix;
};

export default syncItemPosition;
