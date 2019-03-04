export default (row, size) => row.reduceRight((acc, current) => {
    const right = acc[acc.length - 1];

    if (right && right.value === current.value && !right.stacked) {
        return [
            ...acc.slice(0, -1),
            {
                ...right,
                value: right.value * 2,
            },
            {
                ...current,
                x: right.x,
                stacked: true,
            },
        ];
    }

    return [
        ...acc,
        {
            ...current,
            x: right ? right.x - 1 : size - 1,
        },
    ];
}, []);
