const getAxis = direction => {
    if (direction === 'TOP' || direction === 'BOTTOM') {
        return {
            selectBy: 'x',
            orderBy: 'y',
        }
    }

    if (direction === 'LEFT' || direction === 'RIGHT') {
        return {
            selectBy: 'y',
            orderBy: 'x',
        }
    }
}

const reposition = (number, position) => ({
    ...number,
    position: {
        ...number.position,
        ...position,
    },
});

const moveLeftOrTop = (numbers, direction) => {
    const { selectBy, orderBy } = getAxis(direction);
    const m = [];

    for (let i = 0; i < 4; i += 1) {
        let position = -1;

        m[i] = numbers
            .filter(n => n.position[selectBy] === i && !n.dead)
            .sort((a, b) => a.position[orderBy] - b.position[orderBy])
            .reduce((acc, number, j, row) => {
                if (number.dead) {
                    const leftSibling = row[j - 1];

                    return [
                        ...acc,
                        reposition(number, leftSibling.position),
                    ];
                }

                position += 1;
                const next = reposition(number, { [orderBy]: position });
                const rightSibling = row[j + 1];
    
                if (rightSibling && (number.value === rightSibling.value)) {
                    next.value += rightSibling.value;
                    rightSibling.dead = true;
                }
                                
                return [
                    ...acc,
                    next,
                ];
            }, []);
    }

    return m.reduce((a, r) => [
        ...a,
        ...r,
    ], []);
};

const moveRightOrBottom = (numbers, direction) => {
    const { selectBy, orderBy } = getAxis(direction);
    const m = [];

    for (let i = 0; i < 4; i += 1) {
        let position = 4;

        m[i] = numbers
            .filter(n => n.position[selectBy] === i && !n.dead)
            .sort((a, b) => a.position[orderBy] - b.position[orderBy])
            .reduceRight((acc, number, j, row) => {
                if (number.dead) {
                    const rightSibling = row[j + 1];
                    return [
                        ...acc,
                        reposition(number, rightSibling.position),
                    ];
                }

                position -= 1;
                const next = reposition(number, { [orderBy]: position });
                const leftSibling = row[j - 1];
    
                if (leftSibling && (number.value === leftSibling.value)) {
                    next.value += leftSibling.value;
                    leftSibling.dead = true;
                }
                                
                return [
                    ...acc,
                    next,
                ];
            }, []);
    }

    return m.reduce((a, r) => [
        ...a,
        ...r,
    ], []);
};

export default (numbers, direction) => {
    if (direction === 'LEFT' || direction === 'TOP') {
        return moveLeftOrTop(numbers, direction);
    }

    if (direction === 'RIGHT' || direction === 'BOTTOM') {
        return moveRightOrBottom(numbers, direction);
    }
};
