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
                x: left.x,
                stacked: true,
            },
        ];
    }

    return [
        ...acc,
        {
            ...current,
            x: left ? left.x + 1 : 0,
        },
    ];
}, []);
