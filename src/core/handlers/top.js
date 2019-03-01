export default row => row.reduce((acc, current) => {
    const left = acc[acc.length - 1];

    if (left && left.value === current.value && !left.stacked) {
        return [
            ...acc.slice(0, -1),
            {
                ...left,
                value: left.value * 2,
            },
            {
                ...current,
                y: left.y,
                stacked: true,
            },
        ];
    }

    return [
        ...acc,
        {
            ...current,
            y: left ? left.y + 1 : 0,
        },
    ];
}, []);
